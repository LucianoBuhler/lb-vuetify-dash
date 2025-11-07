<template>
  <v-card
    flat
    title="Posts"
  >
    <template #text>
      <v-text-field
        v-model="search"
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="outlined"
      />
    </template>

    <v-data-table
      v-model="selected"
      :headers="headers"
      item-value="title"
      :items="posts"
      :search="search"
      show-select
    >
      <!-- <template #item.title="{item}"> -->
      <template #[`item.title`]="{ item }">
        <v-dialog fullscreen>
          <template #activator="{ props: activatorProps }">
            <button v-bind="activatorProps">{{ item.title }}</button>
          </template>

          <template #default="{ isActive }">
            <v-card title="Edit Posts">
              <v-card-text>
                <PostForm
                  ref="postForm"
                  :post="item"
                  @submit="isActive.value = false"
                />
              </v-card-text>

              <v-card-actions>
                <v-spacer />

                <v-btn
                  text="Cancel"
                  @click="isActive.value = false"
                />

                <v-btn
                  color="blue"
                  text="Save Post"
                  variant="flat"
                  @click="postForm.submit()"
                />
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import PostForm from '@/components/PostForm.vue'

  const posts = ref([
    { title: 'Post 1', author: 'John' },
    { title: 'Post 2', author: 'Fred' },
    { title: 'Post 3', author: 'Peter' },
    { title: 'Post 4', author: 'Mark' },
    { title: 'Post 5', author: 'Barney' },
    { title: 'Post 6', author: 'Will' },
    { title: 'Post 7', author: 'Bill' },
    { title: 'Post 8', author: 'Zill' },
  ])

  const selected = ref([])
  const search = ref('')
  const postForm = ref<any>(null)

  const headers = ref([
    {
      title: 'Post Title',
      align: 'start',
      sortable: true,
      key: 'title',
    },
    {
      title: 'Author',
      align: 'end',
      key: 'author',
    },
  ] as const)
</script>
