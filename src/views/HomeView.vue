<script>
export default {
  mounted() {
    console.log("Current user: ", this.USER.value)
    console.log("Home view mounted!")
  }
}
</script>

<template>
  <main>
    <h1>GameList</h1>
  </main>>
</template>
  
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
