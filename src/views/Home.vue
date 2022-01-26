<template>
<div class="frame" v-if="popular">
<div class="top">
    <h1>Popular</h1>
    <div class="pill">
        <div class="jedan"><router-link to="/popular"><a href="#">Movies</a></router-link></div>
        <div class="dva"><router-link to="/populartv"><a href="#">TV Shows</a></router-link></div>
    </div>
</div>
<div class="main">
<div v-for="film in popular.results" :key="film">
        <img :src=" slikaurl + film.poster_path" alt="" @click="toMovie(film.id)">
        <div class="info">
        <h3>{{ film.original_title}}</h3>
        <p>{{ film.release_date}}</p>
        </div>
</div>
</div>
</div>


<div class="frame" v-if="now_playing">
<div class="top">
    <h1>Now Playing</h1>
    <div class="pill">
        <div class="jedan"><router-link to="/nowplaying"><a href="#">Movies</a></router-link></div>
        <div class="dva"><router-link to="/nowplayingtv"><a href="#">TV Shows</a></router-link></div>
    </div>
</div>
<div class="main">
<div v-for="film in now_playing.results" :key="film">
        <img :src=" slikaurl + film.poster_path" alt="" @click="toMovie(film.id)">
        <div class="info">
        <h3>{{ film.original_title}}</h3>
        <p>{{ film.release_date}}</p>
        </div>
</div>
</div>
</div>


<div class="frame" v-if="upcoming">
<div class="top">
    <h1>Upcoming</h1>
    <div class="pill">
        <div class="jedan"><router-link to="/upcoming"><a href="#">Movies</a></router-link></div>
        <div class="dva"><router-link to="/ontheairtv"><a href="#">TV Shows</a></router-link></div>
    </div>
</div>
<div class="main">
<div v-for="film in upcoming.results" :key="film">
        <img :src=" slikaurl + film.poster_path" alt="" @click="toMovie(film.id)">
        <div class="info">
        <h3>{{ film.original_title}}</h3>
        <p>{{ film.release_date}}</p>
        </div>
</div>
</div>
</div>


<div class="frame" v-if="top_rated">
<div class="top">
    <h1>Top Rated</h1>
    <div class="pill">
        <div class="jedan"><router-link to="/toprated"><a href="#">Movies</a></router-link></div>
        <div class="dva"><router-link to="/topratedtv"><a href="#">TV Shows</a></router-link></div>
    </div>
</div>
<div class="main">
<div v-for="film in top_rated.results" :key="film">
        <img :src=" slikaurl + film.poster_path" alt="" @click="toMovie(film.id)">
        <div class="info">
        <h3>{{ film.original_title}}</h3>
        <p>{{ film.release_date}}</p>
        </div>
</div>
</div>
</div>
</template>

<script>
export default {
    methods:{
        toMovie(id){
            window.location.href = 'http://localhost:8080/movie/' + id 
        }
    },
    data(){
        return{
            movieid:[],
            popular:null,
            nowplaying:null,
            upcoming:null,
            toprated:null,
            slikaurl: 'https://image.tmdb.org/t/p/original/',
        }
    },
mounted(){

fetch('https://api.themoviedb.org/3/movie/popular?api_key=0b5e8ce7494ae54d6c643adf4db40da7')
.then(response => response.json())
.then(data => this.popular = data)
.then(data => console.log(this.popular))


fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0b5e8ce7494ae54d6c643adf4db40da7')
.then(response => response.json())
.then(data => this.now_playing = data)
.then(data => console.log(this.now_playing))


fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=0b5e8ce7494ae54d6c643adf4db40da7')
.then(response => response.json())
.then(data => this.upcoming = data)
.then(data => console.log(this.upcoming))


fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=0b5e8ce7494ae54d6c643adf4db40da7')
.then(response => response.json())
.then(data => this.top_rated = data)
.then(data => console.log(this.top_rated))


}
}
</script>

<style scoped>
.frame{
    display: flex;
    flex-direction: column;
    width: 1340px;
    margin: auto;
    margin-top: 50px;
}
.main{
    display: flex;
    align-self: flex-end;
    flex-direction: row;
    width:100%;
    height: 300px;
    overflow: hidden;
}
.main img{
   width: 150px;
   margin-right: 19px;
   cursor: pointer;
}
.info{
    width: 150px;
    text-align: center;
    
}
.info p,h3{
    font-size: 16px;
}
.top{
    display: flex;
    height: 50px;
    align-items: center;
}
.pill{
    display: flex;
    align-items: center;
    background: white;
    border-radius: 20px;
    border: 1px solid #0d253f;
}
.pill a{
    text-decoration: none;
    margin: 10px;
    margin-right: 10px;
}
.jedan{
    background: #0d253f;
    border-radius: 20px;
    padding: 5px;
    margin-right: 10px;
}
.jedan a{
        color: white;
}
.top h1{
    font-size: 20px;
    margin-right: 20px;
}
.dva a{
    padding: 10px;
    margin-right: 20px;
    margin-left: 5px;
}




</style>