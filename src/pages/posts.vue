<template>
  <div>
    <h1>Posts</h1>
    <v-table
      :height="300"
      :fixed-header="true"
      density="comfortable"
      :hover="true"
    >
      <thead>
        <tr>
          <th class="text-left">
            Title
          </th>
          <th class="text-left">
            Author
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in posts"
          :key="item.title"
        >
          <td>{{ item.title }}</td>
          <td>{{ item.author }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

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
</script>
