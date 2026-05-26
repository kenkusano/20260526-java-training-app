<script setup>
import { RouterView, useRoute } from 'vue-router'
import HeaderBar from '@/components/HeaderBar.vue'

const route = useRoute()
</script>

<template>
  <v-app>
    <!-- ログイン画面以外でヘッダー表示 -->
    <HeaderBar v-if="route.path !== '/login'" />

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
