<template>
<Navbar />
<div class="up">
<div class="content" v-if="account">
<img :src=" slika + account.avatar.gravatar.hash" alt="">
<div class="info" v-if="rated">
<div class="firstrow">
<h1>{{ account.username }}</h1>
</div>
<div class="secondrow">
<div class="blockjedan" v-if="this.suma">
<p>{{this.suma.toFixed(0)}}%</p>
</div>
<p>Avarage Movie Score</p>
<div class="linija">
</div>
<div class="blockdva" v-if="this.sumatv">
<p>{{this.sumatv.toFixed(0)}}%</p>
</div>
<p>Avarage TV Score</p>
</div>
</div>

</div>
</div>
<div class="nav">
<router-link :to="{ name: 'Ratings' }"><a href="#">Ratings</a></router-link>
<router-link :to="{ name: 'Watchlist' }"><a href="#">Watchlist</a></router-link>
</div>
<div class="down">


<div class="okvir">
    <div class="top" v-if="ratedtv">
        <div class="left">
            <h1>My Watchlist</h1>
            <div class="tritacke"></div>
            <div>
                <router-link :to="{ name: 'Watchlist' }"><a href="#">Movies</a><a v-if="watchlist" href="#">{{watchlistlength.results.length}}</a></router-link>
                <router-link :to="{ name: 'Watchlisttv' }"><a href="#">TV</a><a v-if=" watchlisttv" href="#">{{watchlisttvlength.results.length}}</a></router-link>
            </div>
        </div>
        <div class="right" v-if="!search">
            <p>Filtered by:</p>
                <div class="aaa">
                    <a href="#" @click="ascending">Popularity Ascending</a>
                    <a href="#" @click="descending">Popularity Descending</a>
                </div>
            <img src="../assets/search.svg" alt="" @click="searchF">
        </div>
        <div class="search" v-if="search"><img @click="searchF" src="../assets/search.svg" alt="" ><input type="text" v-model="searchText" @keyup.enter="searchBar"></div>
    </div>
    <div class="glavno" v-if="watchlisttv">
        <div class="pojedinacno" v-for=" podatak in watchlist" :key="podatak"> 
            <img :src=" slikaurl + podatak.poster_path" alt="" @click="toMovie(podatak.id)">
            <div class="main">
            <div class="prvired">
                <img src="../assets/Rectangle.svg" alt="">
                <div class="tekst">
                    <h1 @click="toMovie(podatak.id)">{{ podatak.original_title}}</h1>
                    <p>{{ podatak.release_date }}</p>
                </div>
            </div>
            <div class="opis">
                    <p>{{ podatak.overview }}</p>
            </div>
            <div class="navigacija" v-if="rated">
            <div class="jedan" @click="favorite(podatak.id)"><a>F</a></div><p @click="favorite(podatak.id)">Favorite</p>
            <div class="jedan" @click="removeWatchlist(podatak.id)"><a>X</a></div><p @click="removeWatchlist(podatak.id)">Remove</p>
        </div>
        </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
    components:{Navbar},
    methods:{
        toMovie(id){
            this.$router.push({name:'Moviedetails',params:{id:id}})
        },
      ascending(){
        this.watchlist.sort((a,b)=>{
          return a.popularity - b.popularity
        })
      },
      descending(){
        this.watchlist.sort((a,b)=>{
          return b.popularity - a.popularity
        })
      },
                searchBar(){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=0b5e8ce7494ae54d6c643adf4db40da7&query='+this.searchText)
    .then((response) => {
    this.watchlist = response.data.results
    this.watchlistlength = response.data
    console.log(response)
    }) 
        },
        searchF(){
            this.search = !this.search
        },
        favorite(id){
            axios.post('https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija,{
                "media_type": "movie",
                "media_id": id,
                "favorite": true
            })
        },
        async removeWatchlist(id){
        const deleteWatchlist = await axios.post('https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija,{
                "media_type": "movie",
                "media_id": id,
                "watchlist": false
            })
        this.$router.go()
        },
    },
    computed:{
        ...mapGetters(['sesija']),

    },
    data(){
        return{
            searchText:null,
            search:false,
            account:null,
            podaci:null,
            watchlist:null,
            watchlisttv:null,
            rated:null,
            ratedtv:null,
            watchlistlength:null,
            watchlisttvlength:null,
            suma:null,
            sumatv:null,
            slika:'https://www.gravatar.com/avatar/',
            slikaurl: 'https://image.tmdb.org/t/p/original/',
        }
    },
mounted(){
    axios.get('https://api.themoviedb.org/3/account?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija)
    .then((response) => {
    this.account = response.data
    })

    axios.get('https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija)
    .then((response) => {
    this.watchlist = response.data.results
    this.watchlistlength = response.data
    console.log(response)
    })

    axios.get('https://api.themoviedb.org/3/account/{account_id}/watchlist/tv?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija)
    .then((response) => {
    this.watchlisttv = response.data.results
    this.watchlisttvlength = response.data
    })

    axios.get('https://api.themoviedb.org/3/account/{account_id}/rated/movies?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija)
    .then((response) => {
    this.rated = response.data.results
    this.ratedlength = response.data
    for(let i = 0; i < this.ratedlength.results.length; i ++){
    this.suma += this.ratedlength.results[i].rating / this.ratedlength.results.length *10
    }
 

    console.log(this.suma)
    })
    axios.get('https://api.themoviedb.org/3/account/{account_id}/rated/tv?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija)
    .then((response) => {
    this.ratedtv = response.data.results
    this.ratedtvlength = response.data
    for(let i = 0; i < this.ratedtvlength.results.length; i++){
    this.sumatv += this.ratedtvlength.results[i].rating / this.ratedtvlength.results.length *10 
    }
    })



    
}
}
</script>

<style scoped>
.up{
    display: flex;
    background: #0d253f;
    height: 300px;
    width: 100%;
    margin: auto;
}
.content{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 150px;
}
.content h1{
    font-size: 40px;
    margin-left: 20px;
    color: white;
}
.up img{
    width: 150px;
    height: 150px;
}
.down{
    width: 1600px;
    margin: auto;
    display: flex;
    flex-direction: column;
}
.nav{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid lightgray;
}
.nav a{
    color: black;
    text-decoration: none;
    margin-left: 60px;
    margin-right: 60px;
}
.glavno{
    display: flex;
    flex-direction: column;

    width: 1400px;
    margin: auto;
}
.top{
    width: 1400px;
    height: 50px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: auto;
}
.left {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;
}
.left h1{
    font-size: 25px;
}
.left a{
    margin-left: 10px;
    color: black;
    text-decoration: none;
    font-size: 18px;
}
.up{
    display: flex;
    align-items: center;
}
.pojedinacno img{
    cursor: pointer;
    width: 150px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.prvired img{
    width: 50px;
    height: 50px;
    margin-right: 10px;
    margin-left: 20px;
}
.pojedinacno{
    display: flex;
    border: 1px solid lightgray;
    width: 1400px;
    margin: auto;
    border-radius: 10px;
    margin-bottom: 10px;
}
.tekst h1{
    cursor: pointer;
}
.main{
    display: flex;
    flex-direction: column;
}
.prvired img{
    border-radius: 0;
}
.prvired{
    height: 50px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
}
.prvired h1{
    font-size: 20px;
    font-family: sans-serif;
}
.prvired p{
    font-size: 20px;
    font-weight: bold;
    color: lightgray;
}
.opis{
    display: flex;
    margin-top: 10px;
    height: 90px;
    align-items: center;
    padding: 20px;
    padding-bottom: 0;
    padding-top: 0;
}
.opis p{
    font-weight: bold;
}
.navigacija{
    height: 50px;

    display: flex;
    align-items: center;
}
.navigacija p{
    cursor: pointer;
}
.navigacija img{
    height: 30px;
    width: 30px;
    margin-left: 20px;
    margin-right: 5px;
}
.jedan{
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 20px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    background: rgb(17, 162, 39);
    color: white;
    border-radius: 20px;
}
.jedan a{
    font-family: sans-serif;
    margin: auto;
}
.dva a{
    font-family: sans-serif;
    margin: auto;
    color: gray;

}
.tri a{
    font-family: sans-serif;
    margin: auto;
    color: gray;

}
.dva{
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 20px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    border: 1px solid gray;
    border-radius: 20px;
}
.tri{
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin-left: 20px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    border: 1px solid gray;
    border-radius: 20px;
}
.blockjedan{
    width: 60px;
    height: 60px;
    background: black;
    display: flex;
    align-items: center;
}
.blockdva{
    width: 60px;
    height: 60px;
    background: black;
    margin-left: 10px;
    display: flex;
    align-items: center;
}
.secondrow{
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.secondrow p{
    margin-left: 10px;
    font-size: 20px;
    color: white;
    width: 100px;
}
.linija{
    margin-left: 20px;
    margin-right: 10px;
    width: 2px;
    height: 40px;
    background: white;
}
.tritacke{
    display: flex;
    background: white;
    height: 20px;
    width: 20px;
    margin-left: 10px;
}
.malinaslov a{
    font-weight: bold;
}
.left h1{
    font-family: sans-serif;
}
.right img{
    height: 20px;
    width: 20px;
    margin-left: 10px;
}
.right{
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin: 0;
}
.search{
    display: flex;
    margin-left: 1150px;
    position: absolute;
}
.search img{
    cursor: pointer;
}
.search input{
    width: 220px;
}
.aaa{
    display: none;
    background: white;
    border-radius: 10px;
    flex-direction: column;
    position: absolute;
    margin-top: 20px;
    border: 1px solid lightgray;
}
.aaa a{

    padding: 5px;
    text-decoration: none;
    color: black;
    position: static;
}
.right:hover .aaa{
    display: flex;
}
.firstrow h1{
    font-family: sans-serif;
}
</style>