<script>
import games from '../data/games.json'

export default {
  methods: {
    getGame: function (targetGame) {
      for (const game of games){
        if (game.name == targetGame.name){
          return game
        }
      }
      return undefined
    }
  },
  computed: {
    genres() {
      const G = new Set();
      const userGameNames = this.USER.value.games.map(game => game.name)
      for (const game of games){
        if (userGameNames.includes(game.name)){
          for (const genre of game.genres){
            G.add(genre)
          }
        }
      }
      return G
    },
    favs() {
      const F = new Set();
      for (const game of this.USER.value.games){
        if (game.fav){
          F.add(game)
        }
      }
      return F
    }
  },
  mounted() {
    console.log("Current user: ", this.USER.value)
    console.log("Profile view mounted!")
    if (this.USER.value){
      document.title = `GameList - ${this.USER.value.name}`;
    } else {
      console.log("Not logged in, redirecting...")
      this.$router.push("login")
    }
  }
}
</script>

<template>
  <main v-if="USER.value">
    <div class="banner">
      <img :src="'data:image/png;base64,'+USER.value.avatar" :alt="USER.value.name.toLowerCase()+'-avatar'">
      <h2 class="username">{{ USER.value.name }}</h2>
    </div>

    <div class="gameinfo">
      <div class="gamestat">
        <h3>Game Stat</h3>
          
        <h4>Most played genres</h4>
        <div class="genres">
          <span class="genre" v-for="(genre, key) in genres" :key="key">{{ genre }}</span> 
        </div>
        
        <h4>Favorite games</h4>
        <div class="favs">
          <RouterLink :to="{ path: '/game', query: getGame(game) }" class="fav" v-for="(game, key) in favs" :key="key">
            <img class="game-icon" :src="getGame(game).icon" :alt="game.name+' icon'">
          </RouterLink>
        </div>
      </div>
      
      <div class="split"></div>
      
      <div class="gamelist">
        <h3>Game List</h3>
        <RouterLink :to="{ path: '/game', query: getGame(game) }" class="game" v-for="(game, key) in USER.value.games" :key="key">
          <img class="game-icon" :src="getGame(game).icon" :alt="game.name+' icon'">
          <span>Score: {{ game.score }}/10</span>
          <span>Playtime: {{ game.playtime || 'NaN' }} hour(s)</span>
        </RouterLink> 
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 0px;
}

.username{
  display: flex;
  flex-direction: row;
  margin-left: -2%;
}

.banner {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  color: white;
  width: 100%;
  height: 200px;
  background: rgb(22, 22, 47);
}

.banner img {
  position: relative;
  left: 10%;
  width: 100px;
  height: 100px;
}

.banner h2 {
  position: relative;
  left: 15%;
}

.gameinfo {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5vw;
}

.gamestat {
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.genres {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  border: solid black 1px;
  border-radius: 10px;
  padding: 10px;
}

.genre {
  border: solid transparent 1px;
  background-color: rgba(255, 123, 0, 0.623);
  padding: 5px;
  border-radius: 8px;
}

.favs {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  border: solid black 1px;
  border-radius: 10px;
  padding: 10px;
}

.gamelist {
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.game {
  width: 100%;
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

@media screen and (max-width: 900px) {
  .banner h2 {
    position: relative;
    left: 20%;
  }

  .gameinfo {
    flex-direction: column;
    gap: 20px;
  }

  .split {
    margin-top: 30px;
    width: 80vw;
    border: solid black 1px;
  }

  .gamestat {
    width: 100%;
  }

  .gamelist {
    width: 100%;
  }
}
</style>