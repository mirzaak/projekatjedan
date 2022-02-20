<template>
<Navbar />
<div class="nav">
<a @click="toMovie(this.movie.id)" href="#">Overview</a>
<a href="#">Casts</a>
<router-link :to="{name:'Reviewstv'}"><a href="#">Reviews</a></router-link>
</div>
<div class="back">
<div class="uvod" v-if="movie">
<img :src=" slikaurl + this.movie.poster_path" alt="" @click="toMovie(this.movie.id)">
<div class="infouvod" v-if="movie">
<h1 @click="toMovie(this.movie.id)">{{this.movie.name}}</h1>
<a href="#" @click="toMovie(this.movie.id)">Back to Main Menu</a>
</div>
</div>
</div>

<div class="all">
<div class="left" v-if="podaci">
<div class="mnaslov"><h2>Cast</h2><p>{{this.podaci.cast.length}}</p></div>
<div class="osoba" v-for="podatak in this.podaci.cast" :key="podatak">
<img :src="slikaurl + podatak.profile_path" alt="" @click="toActor(podatak.id)">
<div class="info">
    <h1 @click="toActor(podatak.id)">{{podatak.name}}</h1>
    <p>{{podatak.character}}</p>
</div>
</div>
</div>
<div class="right" v-if="podaci">
<div class="mnaslov"><h2>Crew</h2><p>{{this.podaci.crew.length}}</p></div>
<div class="osoba" v-for="podatak in this.podaci.crew" :key="podatak">
<img :src="slikaurl + podatak.profile_path" @click="toActor(podatak.id)">
<div class="info">
    <h1 @click="toActor(podatak.id)">{{podatak.name}}</h1>
    <p>{{podatak.character}}</p>
</div>
</div>
</div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
import axios from 'axios'
export default {
components:{Navbar},
methods:{
    toMovie(id){
        this.$router.push({ name: 'Tvdetails', params: { id: id }}) 
    },
    toActor(id){
        this.$router.push({ name: 'Actordetails', params: { person: id }}) 
    },
},
data(){
    return{
            movie:null,
            podaci:null,
            id:this.$route.params.id,
            slikaurl: 'https://image.tmdb.org/t/p/original/',
    }
},
mounted(){
axios.get('https://api.themoviedb.org/3/tv/'+this.id+'/credits?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
.then((response)=>{
    this.podaci = response.data
    console.log(this.podaci)
})
axios.get('https://api.themoviedb.org/3/tv/'+this.id+'?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
.then((response)=>{
    this.movie = response.data
    console.log(this.movie)
})
}
}

</script>

<style scoped>
.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 300px;
    margin: auto;
}
.nav a{
    color: black;
    text-decoration: none;
    font-weight: bold;
}
.infouvod{
    margin-left: 20px;
}
.uvod{
    display: flex;
    margin: auto;
    width: 1300px;
    align-items: center;
    height: 100px;
    margin-bottom: 20px;
}
.infouvod a{
    font-family: sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: gray;
    font-size: 15px;
}
.infouvod h1{
    font-family: sans-serif;
    color: white;
    cursor: pointer;
}
.infouvod h1:hover{
    color: gray;
}
.uvod img{
    cursor: pointer;
    height: 87px;
    border-radius: 10px;
}
.back{
  background: lightgray;
  width: 100%;
}
.all{
    flex-direction: row;
    width: 1300px;
    display: flex;
    margin: auto;
}
.right{
    width: 650px;
    display: flex;
    flex-direction: column;
}
.left{
    width: 560px;
    display: flex;
    flex-direction: column;
}
.all img{
    width: 66px;
    height: 66px;
    object-fit: cover;
    object-position: 100% 15%;
    border-radius: 10px;
    cursor: pointer;
}
.osoba{
    display: flex;
    margin-bottom: 10px;
    align-items: center;
}
.info{
    margin-left: 20px;
}
.info h1{
    font-family: sans-serif;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
}
.info p{
    font-weight: bold;
    font-size: 13px;
}
.left h2{
    font-family: sans-serif;
    font-size: 20px;
    margin-bottom: 10px;
}
.mnaslov{
    display: flex;
    flex-direction: row;
}
.mnaslov p{
    margin-left: 10px;
    font-weight: bold;
    font-size: 20px;
}
</style>