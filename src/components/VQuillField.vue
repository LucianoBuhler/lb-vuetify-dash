<template>
  <div class="v-quill-field">
    <label v-if="label" class="mb-1 block font-medium text-gray-700">
      {{ label }}
    </label>

    <quill-editor
      v-model:content="internalValue"
      class="border rounded-lg"
      theme="snow"
      @blur="validate"
      @focus="onFocus"
    />

    <v-alert
      v-if="errorMessage"
      class="mt-1"
      density="compact"
      type="error"
      variant="text"
    >
      {{ errorMessage }}
    </v-alert>
  </div>
</template>

<script setup lang="ts">
  import { QuillEditor } from '@vueup/vue-quill'
  import { ref, watch } from 'vue'
  import '@vueup/vue-quill/dist/vue-quill.snow.css'

  interface Props {
    modelValue: string
    label?: string
    rules?: ((value: string) => boolean | string | Promise<boolean | string>)[]
  }

  const props = defineProps<Props>()
  const emit = defineEmits(['update:modelValue', 'valid'])

  // Internal state of editor
  const internalValue = ref(props.modelValue)
  const errorMessage = ref<string | null>(null)
  const validating = ref(false)

  function onFocus () {
    errorMessage.value = null
  }

  async function validate () {
    if (!props.rules || props.rules.length === 0) {
      emit('valid', true)
      return true
    }

    validating.value = true
    errorMessage.value = null

    for (const rule of props.rules) {
      const result = await Promise.resolve(rule(internalValue.value))
      if (result !== true) {
        errorMessage.value = typeof result === 'string' ? result : 'Invalid content'
        emit('valid', false)
        validating.value = false
        return false
      }
    }

    validating.value = false
    emit('valid', true)
    return true
  }

  // Atualiza o modelValue do pai
  watch(internalValue, val => emit('update:modelValue', val))

  // Atualiza o valor interno se o pai mudar
  watch(
    () => props.modelValue,
    val => {
      if (val !== internalValue.value) internalValue.value = val
    }
  )
</script>

<style scoped>
.v-quill-field .ql-editor {
  min-height: 150px;
}
</style>
