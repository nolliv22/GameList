<script>
import users from '../data/users.json'
import sha256 from 'crypto-js/sha256';

export default {
  data(){
    return {
      username: "",
      password: "",
      successfulText: "Redirecting automatically to your profile page",
      failed: false
    }
  },
  methods: {
    check: function(){
      for (const user of users){
        if (this.username == user.name){
          if (sha256(this.password).toString() == user.password){
            this.USER.value = user;
            this.failed = false
            console.log("Log in successfully as", this.USER.value)
            for (let i=1; i<=3; i++){
              setTimeout(()=>{
                this.successfulText = `Redirecting automatically to your profile page${'.'.repeat(i)}`
              }, 500*i)
            }
            setTimeout(()=>{
              this.$router.push('/profile')
            }, 500*4)
            return
          }
        }
      }
      this.failed = true
    }
  },
  mounted() {
    document.title = 'GameList - Login';
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
        <input v-model="username" type="text" required>
      </span>

      <span>
        Password:
        <input v-model="password" type="password" required>
      </span>

      <button type="submit">Login</button>
    </form>

    <div class="logged-in" v-if="USER.value">
      <span>Logged in successfully!</span>
      <span>Welcome {{ USER.value.name }}.</span>
      <span>{{ successfulText }}</span>
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
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  gap: 10px;
}

input[type="text"]{
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 5px;
}

input[type="password"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 5px;
}

button[type="submit"] {
  padding: 10px 20px;
  background-color: #0f1563bb;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0f1463;
}

input[type="text"]:focus,
input[type="password"]:focus {
  outline: none;
  border-color: #0f1463;
}

.logged-in {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
