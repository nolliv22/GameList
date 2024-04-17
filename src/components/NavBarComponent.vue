<script>
export default {
  name: 'NavBarComponent',
  methods: {
    logout: function(){
      this.USER.value = undefined
      this.$router.push('/login')
    }
  }
};
</script>

<template>
  <header>
    <nav class="nav-bar">
      <RouterLink to="/">
        <img class="nav-bar-logo" src="/logo.png" alt="GameList logo">
      </RouterLink>
      
      <div class="nav-bar-buttons">
        <RouterLink class="nav-bar-button" to="/browse">Browse</RouterLink>
        <RouterLink v-if="USER.value" class="nav-bar-button" to="/profile">My Profile</RouterLink>

        <RouterLink to="/login" v-if="!USER.value" class="nav-bar-log-button">
          <span>Login</span>
          <span class="material-symbols-outlined">login</span>
        </RouterLink>
        <RouterLink to="/login" v-else v-on:click="logout()" class="nav-bar-log-button">
          <span>Logout</span>
          <span class="material-symbols-outlined">logout</span>
        </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(4, 4, 45, 0.873);
  padding: 5px;
  gap: 10%;
}

.nav-bar-logo {
  width: 50px;
  height: 50px;
}

.nav-bar-buttons {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

@media only screen and (max-width: 600px) {
  .nav-bar {
    flex-direction: column;
    gap: 20px;
  }

  .nav-bar-buttons {
    width: 100%;
  }
}

.nav-bar-button {
  padding: 10px;
  border-radius: 10px;
  color: white;
  background-color: rgba(4, 4, 45, 0.873);
}

.nav-bar-button:hover {
  background-color: rgba(0, 0, 155, 0.808);
}

.nav-bar-log-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px;
  color: white;
  background-color: rgba(4, 4, 45, 0.873);
}

.nav-bar-log-button:hover {
  background-color: rgba(0, 0, 155, 0.808);
}
</style>