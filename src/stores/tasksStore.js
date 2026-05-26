import { defineStore } from 'pinia'
import axios from 'axios'



export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: [],
        filter: 'all'
    }),

    getters: {
        // 完了タスクカウント
        completedCount: (state) => {
            return state.tasks.filter(tasks => tasks.completed).length
        },
        // フィルター表示
        filteredTasks() {
          if (this.filter === 'active') {
            return this.tasks.filter(t => !t.completed)
          }
          if (this.filter === 'completed') {
            return this.tasks.filter(t => t.completed)
          }
          return this.tasks
        }
    },

    actions: {
        // JSONPlaceholder Todo API より　Todoリストを取得
        async fetchTasks() {
          const res = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1'
          ) 
          this.tasks = res.data
        },

        // タスク完了/未完了処理
        toggleTask(id) {
          const task = this.tasks.find(t => t.id === id)
          if (task) task.completed = !task.completed
         },
         
        // タスク初期化
        resetTasks() {
            this.tasks = []
        }

    }
})