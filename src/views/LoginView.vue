<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'
import { useLoginStore } from '../stores/loginStore'
import { useRouter } from 'vue-router'
import SocialButton from '../components/socialbutton.vue'

// ログイン用
const username = ref('')
const password = ref('')             
const loginmessage = ref('')     
const loginstore = useLoginStore()
const router = useRouter()

// ログイン処理
const login = async () => {
  loginmessage.value = ''

  try {
    const response = await axios.post('https://m3h-kenkusano-java-training-app.whitesky-b969afec.japaneast.azurecontainerapps.io/api/accounts/login',
      {
        email: username.value,
        password: password.value,
      })
    console.log(response.data)

    const account = response.data

    loginstore.login(account.name)
    router.push('/tasks') 
    }
  catch(error) {
    console.error(error)
    loginmessage.value='ログイン失敗'
  }
}

// 新規登録用
const registerName = ref('')
const registerEmail = ref('')
const registerPassword = ref('')
const registerMessage = ref('')

// 新規登録処理
const newRegister = async () => {
  registerMessage.value = ''

  try {
    const response = await axios.post('https://m3h-kenkusano-java-training-app.whitesky-b969afec.japaneast.azurecontainerapps.io/api/accounts/register',
      {
        name: registerName.value,
        email: registerEmail.value,
        password: registerPassword.value,
      })
    
    registerMessage.value = response.data
    }
  catch(error) {
    console.error(error)
    registerMessage.value='登録失敗'
  }
}
</script>

<template>
  <v-container fluid class="fill-height d-flex align-center justify-center">

    <v-card
      max-width="900"
      width="100%"
      class="pa-8"
    >
     <v-row align="center">
      <v-col cols="12" md="5" class="d-flex align-center">
        <div class="w-100">
          <SocialButton />
        </div>
      </v-col>

      <v-col cols="12" md="7" class="d-flex align-center">
      <div class="w-100">  
      <div class="text-h4 text-center mb-6 mt-0">
        ログイン
      </div>

      <div class="mb-6">
        <v-text-field
          v-model="username"
          label="Email"
          prepend-inner-icon="mdi-email"
          variant="outlined"
          class="mb-4"
        />

        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          prepend-inner-icon="mdi-lock"
          variant="outlined"
        />
      </div>

      <v-btn
        block
        size="large"
        color="primary"
        @click="login"
      >
        ログイン
      </v-btn>
       <p class="text-center mt-4">
            {{ loginmessage }}
          </p>
      </div>
     </v-col>
     </v-row>

     <v-divider class="mt-16 mb-8" />

    <div  class="text-h4 text-center mb-6 mt-0">新規登録</div>

      <v-row justify="center">
        <v-col cols="12" md="5">
          <v-text-field
            v-model="registerName"
            label="Username"
            prepend-inner-icon="mdi-account"
            variant="outlined"
            class="mb-4"
            density="compact"
            hide-details
          />

          <v-text-field
            v-model="registerEmail"
            label="Email"
            prepend-inner-icon="mdi-email"
            variant="outlined"
            class="mb-4"
            density="compact"
            hide-details
          />

          <v-text-field
            v-model="registerPassword"
            label="Password"
            type="password"
            prepend-inner-icon="mdi-lock"
            variant="outlined"
            class="mb-4"
            density="compact"
            hide-details
          />

          <v-btn
            block
            size="large"
            color="primary"
            @click="newRegister"
          >
            新規登録
          </v-btn>

          <p class="text-center mt-4">
            {{ registerMessage }}
          </p>
        </v-col>
      </v-row>

    </v-card>
  </v-container>
</template>