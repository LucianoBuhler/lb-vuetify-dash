
<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        />
        <v-toolbar-title>
          <router-link class="text-decoration-none" to="/">
            LB Dashboard
          </router-link>
        </v-toolbar-title>
      </template>
      <template #append>
        <v-menu>
          <template #activator="{ props }">
            <v-avatar v-bind="props" color="blue" size="45">
              <span>LB</span>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in ['Profile', 'Settings', 'Logout']"
              :key="index"
              :value="index"
            >
              <v-list-item-title>{{ item }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      expand-on-hover
      permanent
      rail
    >
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-note-outline" title="Posts" :to="`/posts`" />
        <v-list-item prepend-icon="mdi-comment-outline" title="Comments" :to="`comments`" />
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" height="300">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'

  const drawer = ref(false)
</script>
