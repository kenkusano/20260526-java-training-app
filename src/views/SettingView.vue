<script setup>
import { ref } from 'vue'
import { useLoginStore } from '../stores/loginStore'
import { useRouter } from 'vue-router'

const loginstore = useLoginStore()
const router = useRouter()

const newName = ref (loginstore.userName)

const save = () =>{
  loginstore.updateName(newName.value)
  router.push('/tasks')
}
</script>


<template>
  <div>
    設定画面
     <div>ユーザー名変更
       <input v-model = "newName" />
       <button @click="save">保存</button>
     </div>
  </div>
</template>