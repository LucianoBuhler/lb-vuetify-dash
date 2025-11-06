<template>
  <v-layout class="rounded rounded-md border">
    <v-app-bar 
      title="Application bar"
      absolute
    ></v-app-bar>

    <v-navigation-drawer absolute>
      <v-list nav>
        <v-list-item title="Navigation drawer" link></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center" height="300">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts" setup>
  //
</script>
