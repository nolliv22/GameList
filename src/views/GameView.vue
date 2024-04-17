<script>
export default {
  data() {
    return {
      game: this.$route.query
    }
  },
  mounted(){
    document.title = `GameList - ${this.game.name}`;
    console.log("Current user: ", this.USER.value)
    console.log("Game view mounted!")
  }
}
</script>

<template>
  <main>
    <h1>{{ game.name }}</h1>
    <span>Score: {{ game.score }}</span>
    <img class="game-img" :src="game.icon" :alt="game.name+' icon'">

    <div class="split"></div>

    <span>Genres</span>
    <div class="genres">
      <span class="genre" v-for="(genre, key) in game.genres" :key="key">{{ genre }}</span> 
    </div>

    <div class="split"></div>

    <span>Studio: {{ game.studio }}</span>
    <span>Release date: {{ game.releaseDate }}</span>

    <div class="split"></div>

    <span>Description</span>
    <pre>{{ game.description }}</pre>
    
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.game-img {
  width: 200px;
  height: 200px;
}

.split {
  width: 80%;
  border: solid black 1px;
}

.genres {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

.genre {
  border: solid transparent 1px;
  background-color: rgba(255, 123, 0, 0.623);
  padding: 5px;
  border-radius: 8px;
}

pre {
  margin-top: -10px;
  text-align: center;
  width: 70%;
  white-space: pre-wrap;
}
</style>