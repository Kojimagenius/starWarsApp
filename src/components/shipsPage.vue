<template>
  <div id="ships-list">
    <h1>Star wars ships app</h1>
    <SearchPannel
    v-on:search="search"
    v-bind:searchText="this.$route.query.searchText"/>
    <hr>
    <ShipsList
    v-bind:ships="foundShips"/>
    <button v-on:click='previous'> previous page</button>
    <button v-on:click='next'>next page</button>
  
  </div>
  
</template>

<script>
import ShipsList from '@/components/ShipsList.vue'
import SearchPannel from '@/components/SearchPannel.vue'


export default {
  name: 'shipsPage',
  data(){
    return{
      currentPage: 1,
      foundShips:[],
      ships:[
        
      ]
    }
  },
  components: {
    ShipsList,
    SearchPannel
  },
  mounted(){
        fetch('https://swapi.dev/api/starships/?page=1')
        .then(response => response.json())
        .then(json => this.ships = json.results)
        .then(() => this.foundShips = this.ships)
        .then(() => this.search(this.$route.query.searchText))
        
        
    },
   methods: {
     previous(){
      
      if(this.currentPage - 1 >=1) this.currentPage--
      fetch(`https://swapi.dev/api/starships/?page=${this.currentPage}`)
        .then(response => response.json())
        .then(json => this.ships = json.results)
        .then(() => this.foundShips = this.ships) 
        .then(() => this.search(this.$route.query.searchText))    
     },
     next(){
      if(this.currentPage + 1 <= 4) this.currentPage++
      fetch(`https://swapi.dev/api/starships/?page=${this.currentPage}`)
        .then(response => response.json())
        .then(json => this.ships = json.results)
        .then(() => this.foundShips = this.ships)
        .then(() => this.search(this.$route.query.searchText))
     },
        
        search(text){
        this.$router.push({path: '/', query: {searchText: text}})
        this.foundShips = this.ships.filter(item => item.name.toUpperCase().includes(this.$route.query.searchText.toUpperCase()))
          
        }
    },
}
</script>

<style>
#ships-list {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
