<template>
<Navbar />
<div class="up" v-if="rated">
<div class="content" v-if="account">
<img :src=" slika + account.avatar.gravatar.hash" alt="">
<div class="info">
<div class="firstrow">
<h1>{{ account.username }}</h1>
</div>
<div class="secondrow">
<div class="blockjedan">
</div>
<p>Avarage Movie Score</p>
<div class="linija">
</div>
<div class="blockdva">
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
    <div class="top" v-if="watchlisttv">
        <div class="left" v-if=" watchlist">
            <h1>My Watchlist</h1>
            <div class="tritacke"></div>
            <div>
                <router-link :to="{ name: 'Watchlist' }"><a href="#">Movies {{ watchlist.total_results}}</a></router-link>
                <router-link :to="{ name: 'Watchlisttv' }"><a href="#">TV {{ watchlisttv.total_results}}</a></router-link>
            </div>
        </div>
        <div class="right">
            <p>Filtered by:</p>
            <ul>Date Added</ul>
            <ul>Order</ul>
            <img src="../assets/search.svg" alt="">
        </div>
    </div>
    <div class="glavno" v-if="watchlist">
        <div class="pojedinacno" v-for=" podatak in watchlist.results" :key="podatak"> 
            <img :src=" slikaurl + podatak.poster_path" alt="">
            <div class="main">
            <div class="prvired">
                <img src="../assets/Rectangle.svg" alt="">
                <div class="tekst">
                    <h1>{{ podatak.original_title}}</h1>
                    <p>{{ podatak.release_date }}</p>
                </div>
            </div>
            <div class="opis">
                <p>{{ podatak.overview }}</p>
            </div>
            <div class="navigacija" v-if="rated">
            <div class="jedan"><a></a></div><p>Your Rating</p>
            <div class="jedan"><a>F</a></div><p>Favorite</p>
            <div class="jedan"><a>+</a></div><p>Add To List</p>
            <div class="jedan"><a>X</a></div><p>Remove</p>




        </div>
        </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    components:{Navbar},
    data(){
        return{
            podaci:null,
            watchlist:null,
            favorites:null,
            account:null,
            rated:null,
            watchlisttv:null,
            slika:'https://www.gravatar.com/avatar/',
            slikaurl: 'https://image.tmdb.org/t/p/original/',
        }
    },
mounted(){
fetch('https://api.themoviedb.org/3/account?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=f95caa0f4752ba79268ad7a023c023a70514310b')
.then(response => response.json())
.then(data => this.account = data)
.then(data => console.log(this.account))


    fetch('https://api.themoviedb.org/3/account/{account_id}/watchlist/movies?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=a0deb052197e4fdeb5376b90d63adabcfffd21d9')
    .then(response => response.json())
    .then(data => this.watchlist = data)
    .then(data => console.log(data))

    fetch('https://api.themoviedb.org/3/account/{account_id}/rated/movies?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=f95caa0f4752ba79268ad7a023c023a70514310b')
    .then(response => response.json())
    .then(data => this.rated = data)
    .then(data => console.log(data,'rated'))

    fetch('https://api.themoviedb.org/3/account/{account_id}/watchlist/tv?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=f95caa0f4752ba79268ad7a023c023a70514310b')
    .then(response => response.json())
    .then(data => this.watchlisttv = data)
    .then(data => console.log(data))

    
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
    margin-left: 50px;
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
    width: 150px;
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
    border-end-end-radius: 20px;
    border-top-right-radius: 20px;
    margin-bottom: 10px;
}
.main{
    display: flex;
    flex-direction: column;
}
.prvired{
    height: 50px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
}
.prvired h1{
    font-size: 20px;
}
.prvired p{
    font-size: 20px;
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
.navigacija{
    height: 50px;

    display: flex;
    align-items: center;
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

    margin-left: 20px;
    display: flex;
    align-items: center;
    margin-right: 5px;
    border: 1px solid lightgray;
}
.jedan a{
    margin: auto;
}
.blockjedan{
    width: 60px;
    height: 60px;
    background: black;
}
.blockdva{
    width: 60px;
    height: 60px;
    background: black;
    margin-left: 10px;
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
.right img{
    height: 20px;
    width: 20px;
    margin-left: 10px;
}
.right{
    margin: 0;
}
</style>