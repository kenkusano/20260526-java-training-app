<script setup>
// SNSアカウントのログインは未実装
 const  loginDummy = () =>{
  alert ('この機能は未実装です。。')
 }
</script>

<template>
  <div>
    <div class="text-h6 mb-6">
      外部アカウントでログイン
    </div>

    <v-btn
      block
      variant="outlined"
      rounded="0"
      class="mb-4"
      @click="loginDummy"
    >
      <v-icon start color="#DB4437">mdi-google</v-icon>
      Googleでログイン
    </v-btn>

    <v-btn
      block
      color="black"
      variant="flat"
      rounded="0"
      class="mb-4"
      @click="loginDummy"
    >
      <v-icon start>mdi-github</v-icon>
      GitHubでログイン
    </v-btn>

    <v-btn
      block
      color="blue-darken-2"
      variant="flat"
      rounded="0"
      class="mb-4"
      @click="loginDummy"
    >
      <v-icon start>mdi-twitter</v-icon>
      Xでログイン
    </v-btn>
  </div>
</template>