<script>
import games from '../data/games.json'
export default {
  data() {
    return {
      games: games.sort((g1, g2) => {
        console.log(g1.score, g2.score)
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
    <img src="../assets/logo_black.png" style="width: 150px; height: 150px;">

    <h1>GameList</h1>

    <pre>
Welcome to GameList, the ultimate destination for gamers!
Here, you can keep track of all the video games you have ever played, whether on PC, console, or mobile.
Whether you're a casual gamer or a hardcore enthusiast, GameList has something for you.
So what are you waiting for?
Start exploring and discovering new games today!
    </pre>

    <div class="split"></div>

    <h3>Trending games</h3>

    <div class="games">
      <RouterLink :to="{ path: '/game', query: game }" class="game" v-for="(game, key) in games" :key="key">
        <img class="game-icon" :src="game.icon">
        <span>{{ game.name }}</span>
        <span>{{ game.score }}</span>
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
  width: 70%;
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
</style>
