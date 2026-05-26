<script setup>
import { useLoginStore } from '@/stores/loginStore'
import { useTasksStore } from '@/stores/tasksStore'
import { useRouter } from 'vue-router'

const loginStore = useLoginStore()
const tasksStore = useTasksStore()
const router = useRouter()

const logout = () => {
  loginStore.logout()
  tasksStore.resetTasks()
  router.push('/login')
}
</script>

<template>
  <v-app-bar elevation="1">
    <v-spacer />

    <!-- ログイン後のみ表示 -->
    <v-menu
      v-if="loginStore.isLogin"
      location="bottom end"
      open-on-hover
    >
      <template #activator="{ props }">
        <v-btn
          v-bind="props"
          variant="text"
          class="d-flex align-center"
        >
          <v-avatar size="32" class="mr-2">
            <v-icon>mdi-account-circle</v-icon>
          </v-avatar>

          <span class="mr-1">{{ loginStore.userName }}</span>
          <v-icon size="18">mdi-menu-down</v-icon>
        </v-btn>
      </template>

      <!-- メニュー -->
      <v-list>
        <v-list-item @click="router.push('/tasks')">
          <v-list-item-title>マイページ</v-list-item-title>
        </v-list-item>

        <v-list-item @click="router.push('/setting')">
          <v-list-item-title>設定</v-list-item-title>
        </v-list-item>

        <v-list-item @click="router.push('/login')">
          <v-list-item-title>ログイン画面</v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list-item @click="logout">
          <v-list-item-title class="text-error">
            ログアウト
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>