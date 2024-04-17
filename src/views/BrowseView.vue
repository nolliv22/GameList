<script>
import { RouterLink } from 'vue-router'
import games from '../data/games.json'
export default {
  data() {
    return {
      games: games,
      filterText: '',
      sortedBy: ''
    }
  },
  methods: {
    isAdded: function(game){
      if (this.USER.value){
        return this.USER.value.games.map(game => game.name).includes(game.name)
      }
    },
    isFav: function(game){
      if (this.USER.value){
        return this.USER.value.games.filter(game => game.fav).map(game => game.name).includes(game.name)
      }
    },
    getUserGame: function(targetGame){
      for (const game of this.USER.value.games){
        if (game.name == targetGame.name){
          return game
        }
      }
    },
    sortByName: function(){
      this.games.sort((g1, g2) => {
        return g1.name.localeCompare(g2.name)
      })
    },
    sortByScore: function(){
      this.games.sort((g1, g2) => {
        return g2.score - g1.score
      })
    },
    addGame: function(targetGame){
      this.USER.value.games.push(targetGame)
    },
    removeGame: function(targetGame){
      this.USER.value.games = this.USER.value.games.filter(game => game.name != targetGame.name)
    },
    favGame: function(targetGame){
      this.getUserGame(targetGame).fav = true
    },
    unfavGame: function(targetGame){
      this.getUserGame(targetGame).fav = false
    },
  },
  computed: {
    filteredGames: function(){
      return this.games.filter(game => game.name.toLowerCase().includes(this.filterText.toLowerCase()))
    }
  },
  mounted(){
    document.title = 'GameList - Browse';
    this.sortByScore()
    this.sortedBy = 'score'
    console.log("Current user: ", this.USER.value)
    console.log("Browse view mounted!")
  }
}
</script>

<template>
  <main>
    <h1>Browse Games</h1>
    
    <div v-if="USER.value" class="tips">
      <span><u>Tips</u></span>
      <div class="tip">
        <div class="tip-illu">
          <span class="button material-symbols-outlined">add</span>
          <span class="button material-symbols-outlined">remove</span>
       </div>
       <span class="tip-text">Add/Remove the given game to/from the list</span>
      </div>

      <div class="tip">
        <div class="tip-illu">
          <span class="button material-symbols-outlined">heart_plus</span>
          <span class="button material-symbols-outlined">heart_minus</span>
        </div>
        <span class="tip-text">Add/Remove the given game to/from favorite games</span>
      </div>

      <div class="tip">
        <select class="tip-illu">
          <option v-for="num in 11" :value="num-1">{{ num }}</option>
        </select>
        <span class="tip-text">your score for a given game</span>
      </div>


      <div class="tip">
        <input class="tip-illu game-playtime">
        <span class="tip-text">your playtime for a given game</span>
      </div>
      
    </div>

    <div class="filters">
      <div class="sorting">
        <span>Sort by:</span>
        <span class="sort-button" @click="sortByName">By Name</span>
        <span class="sort-button" @click="sortByScore">By Score</span>
      </div>

      <div class="search">
        <span>Search: </span>
        <input v-model="filterText">
      </div>
    </div>

    <div class="split"></div>

    <div class="games">
      <div class="game" v-for="(game, key) in filteredGames" :key="key">
        <RouterLink :to="{ path: '/game', query: game }" class="game-info" :class="{ 'game-info-shorter': USER.value }">
          <img class="game-icon" :src="game.icon">
          <span>{{ game.name }}</span>
          <span>{{ game.score }}</span>
        </RouterLink>

        <div v-if="USER.value" class="commands">
          <span class="button material-symbols-outlined" v-if="!isAdded(game)" @click="addGame(game)">add</span>
          <span class="button material-symbols-outlined" v-else @click="removeGame(game)">remove</span>

          <span class="button material-symbols-outlined" v-if="!isFav(game) && isAdded(game)" @click="favGame(game)">heart_plus</span>
          <span class="button material-symbols-outlined" v-if="isFav(game) && isAdded(game)" @click="unfavGame(game)">heart_minus</span>

          <select v-if="isAdded(game)" v-model="getUserGame(game).score">
            <option v-for="num in 10" :value="num">{{ num }}</option>
          </select>

          <input class="game-playtime" v-if="isAdded(game)" v-model="getUserGame(game).playtime">
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.tips {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid black 1px;
  border-radius: 10px;
  padding: 10px;
  gap: 10px;
}

.tip {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

.filters {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: solid black 1px;
  border-radius: 10px;
  padding: 10px;
  gap: 50px;
}

.sorting {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
}

.sort-button {
  padding: 10px;
  border-radius: 10px;
  color: white;
  background-color: rgba(0, 100, 155, 0.651);
}

.sort-button:hover {
  background-color: rgba(0, 0, 155, 0.808);
}

.search {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.games {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.game {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
}

.commands {
  width: 175px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid black 1px;
  padding: 0px 10px 0px 10px;
  border-radius: 10px;
}

.button {
  border: solid transparent 2px;
  border-radius: 25%;
  background-color: aquamarine;
  padding: 3px;
}

.button:hover {
  background-color: rgb(127, 255, 170);
  border: solid black 2px;
}

.game-playtime {
  width: 30px;
}

.game-info {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: solid black 1px;
  padding: 0px 10px 0px 10px;
  border-radius: 10px;
}

.game-info-shorter {
  width: 70%;
}

.game-icon {
  width: 50px;
  height: 50px;
}

@media screen and (max-width: 650px) {
  .filters {
    flex-direction: column;
    gap: 20px;
  }

  .split {
    width: 80vw;
    border: solid black 1px;
  }

  .game {
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .game:after {
    content: '';
    margin-top: 10px;
    margin-bottom: 10px;
    width: 80vw;
    border: solid black 1px;
  }

  .tip {
    flex-direction: column;
  }

  .tip-text {
    order: 1;
  }

  .tip-illu {
    order: 2;
  }
}
</style>