<script>
import users from '../data/users.json'
import sha256 from 'crypto-js/sha256';

export default {
  data(){
    return {
      username: "",
      password: "",
      failed: false
    }
  },
  methods: {
    check: function(){
      for (const user of users){
        if (this.username == user.name){
          if (sha256(this.password).toString() == user.password){
            this.USER.value = user;
            console.log("Log in successfully as", this.USER.value)
            return
          }
        }
      }
      this.failed = true
    }
  },
  mounted() {
    console.log("Current user: ", this.USER.value)
    console.log("Login view mounted!")
  }
}
</script>

<template>
  <main>
    <h2>LOGIN</h2>

    <form v-show="!USER.value" @submit.prevent="check">
      <span>
        Username:
        <input v-model="username" required>
      </span>

      <span>
        Password:
        <input v-model="password" type="password" required>
      </span>

      <button>Login</button>
    </form>

    <div v-if="USER.value">
      <span>Logged in successfully! Welcome {{ USER.value.name }}.</span>
    </div>

    <div v-if="failed">
      <span>Username or password is incorrect.</span>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
