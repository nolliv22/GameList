<script>
import games from '../data/games.json'
export default {
  data() {
    return {
      games: games.sort((g1, g2) => {
        return g2.score - g1.score
      })
    }
  },
  mounted() {
    document.title = 'GameList - Home';
    console.log("Current user: ", this.USER.value)
    console.log("Home view mounted!")
  }
}
</script>

<template>
  <main>
    <img class="logo" src="/logo_black.png" alt="GameList logo">

    <h1>GameList</h1>

    <pre>
Welcome to GameList, the ultimate destination for gamers!
Here, you can keep track of all the video games you have ever played, whether on PC, console, or mobile.
Whether you're a casual gamer or a hardcore enthusiast, GameList has something for you.
So what are you waiting for?
Start exploring and discovering new games today!
    </pre>

    <div class="split"></div>

    <span class="section">Trending games</span>

    <div class="games">
      <RouterLink :to="{ path: '/game', query: game }" class="game" v-for="(game, key) in games.slice(0, 5)" :key="key">
        <img class="game-icon" :src="game.icon" :alt="game.name+' icon'">
        <span>{{ key+1 }}. {{ game.name }}</span>
        <span style="width: 50px;">{{ game.score }}</span>
      </RouterLink>
    </div>
  </main>
    
</template>
  
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

pre {
  font-size: large;
  text-align: center;
  width: 80%;
  white-space: pre-wrap;
}

.logo {
  width: 150px;
  height: 150px;
}

.split {
  width: 80%;
  border: solid black 1px;
}

.games {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
}

.game {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: solid black 1px;
  padding: 0px 10px 0px 10px;
  border-radius: 10px;
}

.game-icon {
  width: 50px;
  height: 50px;
}

.section {
  font-size: larger;
  margin-top: 25px;
  margin-bottom: 25px;
}
</style>
