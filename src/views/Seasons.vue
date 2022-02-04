<template>
<Navbar />
<div class="nav">
<a href="#">Overview</a>
<a href="#">Casts</a>
<a href="#">Reviews</a>
</div>
<div class="main" v-if="podaci">
<img :src=" slikaurl + podaci.poster_path" alt="">
<div class="info">
<h1>{{ podaci.original_name }}</h1>
<a href="#" @click="goBack">-Back to Main Menu</a>
</div>
</div>

<div class="sezone" v-if="podaci">
<div class="pojedinacno">
<div class="sezona" v-for="sezona in podaci.seasons" :key="sezona" @click="toSeason(sezona.season_number)">
<img :src=" slikaurl + sezona.poster_path" alt="">
<div class="info">
<div class="prvired">
<h1>{{ sezona.name}}</h1>
<p>{{ sezona.air_date }}</p>
<p>{{ sezona.episode_count }}</p>
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
    width: 120px;
}
.sezone img {
    width: 100px;
    height: 150px;
}
.sezone{
    display: flex;
    flex-direction: column;
    width:1500px;
    margin: auto;

}
.pojedinacno{
    display: flex;
    flex-direction: column;
}
.sezona{
    display: flex;
    margin-bottom: 10px;
    margin-top: 10px;
    border-bottom: 1px solid gray;
    cursor: pointer;
    align-items: center;
}
.info{
    margin-left: 20px;
}
.main{
    display: flex;
    margin: auto;
    width: 1500px;
    border-top: 1px solid black;
}
.info a{
    text-decoration: none;
    color: black;
}

</style>