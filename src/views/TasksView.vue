<script setup>
import { onMounted } from 'vue'
import { useTasksStore } from '../stores/tasksStore'

const tasksStore = useTasksStore()

onMounted(async () => {
  await tasksStore.fetchTasks()
  console.log('tasks length:', tasksStore.tasks.length)
})

</script>

<template>
  <v-container>

    <!-- ヘッダ -->
    <v-row class="mb-4" align="center">
      <v-col>
        <div class="text-h5">マイページ</div>
        <div class="text-body-2">
          完了タスク数：{{ tasksStore.completedCount }}
        </div>
      </v-col>

      <!-- フィルタ -->
      <v-col cols="auto">
        <v-btn-toggle
          v-model="tasksStore.filter"
          mandatory
          divided
        >
          <v-btn value="all">すべて</v-btn>
          <v-btn value="active">未完了</v-btn>
          <v-btn value="completed">完了</v-btn>
        </v-btn-toggle>
      </v-col>
    </v-row>

    <!-- TODOリスト -->
    <v-list>
      <v-list-item
        v-for="task in tasksStore.filteredTasks"
        @click="tasksStore.toggleTask(task.id)"
      >
        <template #prepend>
          <v-icon
            :color="task.completed ? 'green' : 'grey'"
          >
            {{ task.completed ? 'mdi-check-circle' : 'mdi-circle-outline' }}
          </v-icon>
        </template> 
        
        <template #title>
          <span :class="{ 'text-decoration-line-through': task.completed }">
          {{ task.title }}
          </span>
        </template>

      </v-list-item>
    </v-list>
  </v-container>
</template>