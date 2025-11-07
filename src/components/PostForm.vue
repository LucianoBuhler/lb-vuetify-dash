<template>
  <v-form ref="formEl" v-model="valid" @submit.prevent="handleSubmit">
    <v-row>
      <v-col cols="3">
        <v-switch v-model="form.published" label="Published" />
      </v-col>
      <v-col cols="3">
        <v-checkbox
          v-model="form.published"
          indeterminate
          label="Published"
        />
      </v-col>
    </v-row>

    <v-text-field
      v-model="form.title"
      label="Title"
      :rules="[rules.isRequired, rules.asyncValidation]"
    />
    <v-combobox
      v-model="form.tags"
      chips
      :items="['News', 'Tutorial', 'Event']"
      label="Tags"
      multiple
      :rules="[rules.isNotEmpty]"
    />
    <v-file-input
      v-model="form.image"
      accept="image/png, image/jpeg, image/bmp"
      label="Feature Image"
      placeholder="Upload a Feature Image"
      prepend-icon="mdi-camera"
    />
    <!-- <quill-editor v-model:content="form.body" /> -->
    <v-quill-field
      v-model="form.body"
      label="Post Body"
      :rules="[rules.isRequired, rules.minLength(10), rules.asyncValidation]"
      @valid="(isValid) => (bodyValid = isValid)"
    />

    <button
      ref="submitBtn"
      class="d-none"
      type="submit"
    >Submit</button>
  </v-form>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import VQuillField from '@/components/VQuillField.vue'
  import { useValidationRules } from '@/composables/useValidationRules'

  const emit = defineEmits(['submit'])
  const props = defineProps<{
    post?: Record<string, any>
  }>()

  const form = ref({
    title: '',
    tags: [],
    published: null,
    body: '',
    image: [],
    ...props.post,
  })

  const bodyValid = ref(true)

  // Validation
  const baseRules = useValidationRules()

  async function asyncValidation (value: string) {
    if (!value) return true
    const res = await fetch(`https://httpbin.org/status/${value}`)
    return res.ok || 'Server validation failed'
  }

  const rules = {
    ...baseRules,
    asyncValidation,
  }

  function handleSubmit () {
    if (!valid.value) return
    console.log('submitting', form.value)
    emit('submit')
  }

  const valid = ref(true)
  const submitBtn = ref()
  const submit = () => submitBtn.value.click()

  defineExpose({ submit })
</script>
