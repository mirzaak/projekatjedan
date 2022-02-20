<template>
<Navbar />
<div class="nav">
<a href="#">Overview</a>
<a href="#">Casts</a>
<router-link :to="{name:'Reviewstv'}"><a href="#">Reviews</a></router-link>
</div>
<div class="back">
<div class="main" v-if="podaci">
<img  @click="goBack" :src=" slikaurl + podaci.poster_path" alt="">
<div class="infomain">
<h1  @click="goBack">{{ podaci.original_name }}</h1>
<a href="#" @click="goBack">Back to Main Menu</a>
</div>
</div>
</div>
<div class="sezone" v-if="podaci">
<div class="pojedinacno">
<div class="sezona" v-for="sezona in podaci.seasons" :key="sezona" @click="toSeason(sezona.season_number)">
<img :src=" slikaurl + sezona.poster_path" alt=""  @click="toSeason(sezona.season_number)">
<div class="info">
<div class="prvired">
<h1>{{ sezona.name}}</h1>
<p>{{ sezona.air_date }}</p>
<p>| {{ sezona.episode_count }} Episodes</p>
</div>
<p>{{ sezona.overview}}</p>
</div>

</div>
</div>
</div>


</template>

<script>
import Navbar from './Navbar.vue'
export default {
    components:{Navbar},
    methods:{
        goBack(){
            this.$router.go(-1)
        },
        toSeason(number){
            this.$router.push({ name: 'Episodes', params: { sn: number }}) 
        },
    },
    data(){
        return{
            podaci:null,
            id:this.$route.params.id,
            slikaurl: 'https://image.tmdb.org/t/p/original/',

        }
    },
mounted(){
    fetch('https://api.themoviedb.org/3/tv/' + this.id + '?api_key=0b5e8ce7494ae54d6c643adf4db40da7')
    .then(res => res.json())
    .then(data => this.podaci = data)
    .then(data => console.log(this.podaci))
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
}
.main img{
    height: 87px;
    border-radius: 10px;
    cursor: pointer;
}
.sezone img {
    width: 100px;
    height: 150px;
    border-radius: 10px;
    margin-bottom: 10px;
    margin-top: 10px;
}
.sezone{
    display: flex;
    width:1400px;
    margin: auto;
    align-items: center;

}
.pojedinacno{
    display: flex;
    flex-direction: column;
}
.sezona{
    display: flex;
    border-bottom: 1px solid lightgray;
    cursor: pointer;
    align-items: center;
    width: 1400px;
    margin: auto;
}
.infomain{
    margin-left: 20px;
}
.main{
    display: flex;
    margin: auto;
    width: 1500px;
    align-items: center;
    height: 100px;
}
.infomain a{
    font-family: sans-serif;
    font-weight: bold;
    text-decoration: none;
    color: gray;
    font-size: 15px;
}
.infomain h1{
    font-family: sans-serif;
    color: white;
    cursor: pointer;
}
.infomain h1:hover{
    color: gray;
}
.info{
    margin-left: 20px;
}
.info h1{
    font-family: sans-serif;
    font-size: 25px;
    margin-right: 10px;
}
.info p{
    font-weight: bold;
    margin-left: 3px;
}
.prvired p{
    margin-top: 3px;
    font-family: sans-serif;
}
.prvired{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.back{
    width: 100%;
    background: lightgray;
}
.linija{
    border-bottom: 1px solid lightgray;
    width: 100%;
}

</style>