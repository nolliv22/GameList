<script>
export default {
  name: 'NavBarComponent',
  props: {
    user: Object
  }
};
</script>

<template>
  <nav class="nav-bar">
    <RouterLink to="/">
      <img class="nav-bar-logo" src="/src/assets/logo.svg">
    </RouterLink>
    
    <div class="nav-bar-buttons">
      <RouterLink class="nav-bar-button" to="/profile">Profile</RouterLink>
      <RouterLink class="nav-bar-button" to="/browse">Browse</RouterLink>
    </div>

    <RouterLink to="/profile" v-if="user" class="nav-bar-user">
      <span class="nav-bar-user-name">{{ user.name }}</span>
      <img class="nav-bar-avatar" :src="'data:image/png;base64,'+user.avatar">
    </RouterLink>
    <div v-else>
      <RouterLink class="login-button" to="/login">Login</RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.nav-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(4, 4, 45, 0.873);
  padding: 5  px;
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
  justify-content: space-around;
  
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

.login-button {
  padding: 10px;
  color: white;
  background-color: rgba(4, 4, 45, 0.873);
}

.login-button:hover {
  background-color: rgba(0, 0, 155, 0.808);
}

.nav-bar-user {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border: solid black 2px;
  border-radius: 10px;
  padding: 1px 5px 1px 10px;
}

.nav-bar-user-name {
  font-weight: bold;
}

.nav-bar-avatar {
  width: 50px;
  height: 50px;
}
</style>