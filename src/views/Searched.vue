<template>
<Navbar />
<div class="searchbar">
<input type="text" placeholder="Search..." name="" id="" @keyup.enter="submit" v-model="query" onchange='saveValue(this)'>
</div>
<div class="all" v-if="podaci">
    <div class="left">
    <div class="naslov">
        <h1>Search Results</h1>
    </div>
    <div >
    <div class="kategorija"><a href="#">Movies</a><p>{{ podaci.results.length}}</p></div>
    </div>
    </div>
    <div class="right" v-if="podaci">
        <div class="rezultat" v-for="podatak in podaci.results" :key="podatak" >
            <div class="main">
                <img :src=" slikaurl + podatak.poster_path" alt="" @click="toMovie(podatak.id)">
                <div class="info">
                    <div class="prvired">
                    <h1 @click="toMovie(podatak.id)">{{ podatak.original_title }}{{ podatak.original_name }}</h1>
                    <button @click="wlist(podatak.id)" v-if="sesija">Watchlist</button>
                    <button @click="favorite(podatak.id)" v-if="sesija">Favorite</button>
                    </div>
                    <p>{{ podatak.release_date }}{{ podatak.first_air_date }}</p>
                    <div class="overview">
                    <p>{{ podatak.overview }}</p>
                </div>
                </div>

            </div>
        </div>


    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import Navbar from './Navbar.vue'
export default {
    components:{Navbar},
    computed:{
        ...mapGetters(['sesija'])
    },
mounted(){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=0b5e8ce7494ae54d6c643adf4db40da7&query=' + this.query)
    .then(res => res.json())
    .then(data=>this.podaci = data)
    .then(data=>console.log(this.podaci))
    .then(this.$router.push({ name: 'Searched', params:{query:this.query}}))
},
data(){
    return{
        query:this.$route.params.query,
        podaci:null,
        slikaurl: 'https://image.tmdb.org/t/p/original/',
    }
},
methods:{
        toMovie(id){
            this.$router.push({ name: 'Moviedetails', params: { id: id }}) 
        },
    submit(){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=0b5e8ce7494ae54d6c643adf4db40da7&query=' + this.query)
    .then(res => res.json())
    .then(data=>this.podaci = data)
    .then(data=>console.log(this.podaci))
    .then(this.$router.push({ name: 'Searched', params:{query:this.query}}))
        
    },
wlist(id){
   fetch('https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  "media_type": "movie",
  "media_id": id,
  "watchlist": true
}),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
  },
  favorite(id){
   fetch('https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  "media_type": "movie",
  "media_id": id,
  "favorite": true
}),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
  },
}

}
</script>

<style scoped>
.searchbar{
    display: flex;
    width: 100%;
    height: 40px;
    border: 1px solid lightgray;
    margin: auto;
}
.searchbar input{
    display: flex;
    width: 1400px;
    height: 25px;
    margin: auto;
    border: 1px solid lightgray;
    border-radius: 2px;
}
.all{
    display: flex;
    flex-direction: row;
    width: 1400px;
    margin:auto;
    margin-top: 20px;
}
.naslov{
    display: flex;
    height: 60px;
    background: #01b4e4;
    align-items: center;
    color: white;
    font-size: 10px;
    margin-bottom: 5px;
}
.naslov h1{
    margin-left: 20px;
}
.left{
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 340px;
    margin: 0;
    border: 1px solid lightgrey;
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;
}
.left a{
    margin-left: 20px;
    color: black;
    text-decoration: none;
}
.kategorija:hover{
    background: lightgrey;
}
.kategorija:hover p{
    background: white;
}
.kategorija{
    display: flex;
    flex-direction: row;
    width: 250px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}
.kategorija p{
    margin-right: 20px;
    background: lightgrey;
    border-radius: 7px;
    min-width: 10px;
    padding: 5px;
    padding-top: 0;
    padding-bottom: 0;
    }
.right{
    display: flex;
    flex-direction: column;
    width: 1150px;
}
.rezultat img{
    width: 100px;
    cursor: pointer;
}
.main{
    display: flex;
    flex-direction: row;
    height: 150px;
}
.rezultat{
    display: flex;
    border: 1px solid lightgrey;
    width: 1100px;
    margin-left: 50px;
    margin-bottom: 20px;
    border-end-end-radius: 10px;
    border-top-right-radius: 10px;
    box-shadow: 5px 5px 10px 0.1px;
}
.info{
    margin-left: 20px;
    overflow: hidden;
    align-self: center;
}
.overview{
    width: 950px;
    height: 80px;
    overflow: hidden;
}
.prvired{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.prvired h1{
    cursor: pointer;
}
.prvired button{
    height: 30px;
    padding: 4px;
    margin-left: 10px;
    cursor: pointer;
}
</style>