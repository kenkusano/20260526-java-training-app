import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
    state: () => ({
        isLogin: false,
        userName: ''
    }),

    getters: {
        // ログイン状態の表示
        loginStatus: (state) => {
            return state.isLogin ? 'ログイン中' : '未ログイン'
        }
    },

    actions: {
        // ログイン処理
        login(userName) {
             this.isLogin = true
             this.userName = userName
        },
        // ログアウト処理
        logout() {
            this.isLogin = false 
            this.userName = ''
        },
        // ユーザー名変更
        updateName(newName) {
            this.userName = newName
        }
    }
})