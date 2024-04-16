<script>
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
        console.log(g1.score, g2.score)
        return g2.score - g1.score
      })
      console.log(this.games)
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

    <div class="sorting">
      <span class="sort-button" @click="sortByName">By Name</span>
      <span class="sort-button" @click="sortByScore">By Score</span>
    </div>

    <div class="search">
      <span>Search: </span>
      <input v-model="filterText">
    </div>

    <div class="games">
      <div class="game" v-for="(game, key) in filteredGames" :key="key">
        <div class="game-info">
          <img class="game-icon" :src="game.icon">
          <span>{{ game.name }}</span>
          <span>{{ game.score }}</span>
        </div>
        <div v-if="USER.value" class="commands">
          <button class="material-symbols-outlined" v-if="!isAdded(game)" @click="addGame(game)">add</button>
          <button class="material-symbols-outlined" v-else @click="removeGame(game)">remove</button>

          <select v-if="isAdded(game)" v-model="getUserGame(game).score">
            <option v-for="num in 10" :value="num">{{ num }}</option>
          </select>

          <input class="game-playtime" v-if="isAdded(game)" v-model="getUserGame(game).playtime">

          <button class="material-symbols-outlined" v-if="!isFav(game) && isAdded(game)" @click="favGame(game)">heart_plus</button>
          <button class="material-symbols-outlined" v-if="isFav(game) && isAdded(game)" @click="unfavGame(game)">heart_minus</button>
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
  justify-content: space-evenly;
  gap: 10px;
}

.game {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-evenly;
  gap: 30px;
}

.commands {
  width: 20%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: solid black 1px;
  padding: 0px 10px 0px 10px;
  border-radius: 10px;
}

.game-playtime {
  width: 30px;
}

.game-info {
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