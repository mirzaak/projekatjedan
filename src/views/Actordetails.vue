<template>
<Navbar />
<div class="nav">
<a href="#">Overview</a>
<a href="#">Media</a>
<a href="#">Fandom</a>
<a href="#">Share</a>
</div>
<div class="up" v-if="podaci">
<div class="main">
    <img :src=" slikaurl + podaci.profile_path " alt="">
<div class="right">
    <div class="info" v-if="podaci">
    <h1>{{ podaci.name }}</h1>
    <a>Biography</a>
    <p>{{ podaci.biography }}</p>
    </div>
    <div class="knownfor">
        <div class="top">
            <p>Known for</p>
        </div>
        <div class="bot" v-if="knownfor"> 
            <div class="kartica" @click="toMovie(this.knownfor.cast[0].id)">
                <img :src=" slikaurl + this.knownfor.cast[0].poster_path" alt="">
                <h1>{{ this.knownfor.cast[0].original_title }}</h1>
            </div>
            <div class="kartica" @click="toMovie(this.knownfor.cast[1].id)">
                <img :src=" slikaurl + this.knownfor.cast[1].poster_path" alt="">
                <h1>{{ this.knownfor.cast[1].original_title }}</h1>
            </div>
            <div class="kartica" @click="toMovie(this.knownfor.cast[2].id)">
                <img :src=" slikaurl + this.knownfor.cast[2].poster_path" alt="">
                <h1>{{ this.knownfor.cast[2].original_title }}</h1>
            </div>
            <div class="kartica" @click="toMovie(this.knownfor.cast[3].id)">
                <img :src=" slikaurl + this.knownfor.cast[3].poster_path" alt="">
                <h1>{{ this.knownfor.cast[3].original_title }}</h1>
            </div>
            <div class="kartica" @click="toMovie(this.knownfor.cast[4].id)">
                <img :src=" slikaurl + this.knownfor.cast[4].poster_path" alt="">
                <h1>{{ this.knownfor.cast[4].original_title }}</h1>
            </div>
            <div class="kartica" @click="toMovie(this.knownfor.cast[5].id)">
                <img :src=" slikaurl + this.knownfor.cast[5].poster_path" alt="">
                <h1>{{ this.knownfor.cast[5].original_title }}</h1>
            </div>
            <div class="kartica" @click="toMovie(this.knownfor.cast[6].id)">
                <img :src=" slikaurl + this.knownfor.cast[6].poster_path" alt="">
                <h1>{{ this.knownfor.cast[6].original_title }}</h1>
            </div>
            <div class="kartica" @click="toMovie(this.knownfor.cast[7].id)">
                <img :src=" slikaurl + this.knownfor.cast[7].poster_path" alt="">
                <h1>{{ this.knownfor.cast[7].original_title }}</h1>
            </div>
        </div>
    </div>

</div>

</div>
</div>
<div class="down">
<div class="lijevo" v-if="podaci">
<h1>Personal Info</h1>
<h2>Known for</h2>
<p>{{ podaci.known_for_department}}</p>
<h2>Known Credits</h2>
<p>{{ podaci.popularity }}</p>
<h2>Gender</h2>
<p>{{podaci.gender}}</p>
<h2>Birthdate</h2>
<p>{{ podaci.birthday }}</p>
<h2>Place of Birth</h2>
<p>{{ podaci.place_of_birth }}</p>
<h2>Also Known as</h2>
<p>{{ podaci.also_known_as[0]}}</p>
</div>
<div class="desno" v-if="knownfor">
<h1>Acting</h1>
<div class="moviess">
<div class="movie" v-for=" movie in knownfor.cast " :key="movie">
    <p>{{ movie.release_date }}</p>
    <p @click="toMovie(movie.id)">{{ movie.original_title }}</p>
    <a>as {{ movie.character}}</a>

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
        toMovie(id){
            this.$router.push({ name: 'Moviedetails', params: { id: id }})            
        },
    },
    data(){
        return{
            podaci:null,
            knownfor:null,
            person:this.$route.params.person,
            slikaurl: 'https://image.tmdb.org/t/p/original/',
        }
    },
    mounted(){
        fetch('https://api.themoviedb.org/3/person/' + this.person + '?api_key=0b5e8ce7494ae54d6c643adf4db40da7')
        .then(res => res.json())
        .then(data => this.podaci = data)
        .then(data => console.log(this.podaci))

        fetch('https://api.themoviedb.org/3/person/' + this.person + '/movie_credits?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
        .then(res => res.json())
        .then(data => this.knownfor = data)
        .then(data => console.log(this.knownfor))
    }

}
</script>

<style scoped>
.nav{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid lightgray;
}
.nav a{
    color: black;
    text-decoration: none;
    font-weight: bold;
    margin-left: 20px;
    margin-right: 20px;
}
.main img{
    width: 300px;
    border-radius: 20px;
}
.main{
    align-items: center;
    display: flex ;
    width: 1350px;
    height: 500px;
    margin: auto;
}
.info{
    height: 210px;
    width: 950px;
    overflow: hidden;
    flex-direction: column;
}
.knownfor{
    width: 1130px;
    height: 200px;
    margin-top: 5px;
}
.right{
    display: flex;
    flex-direction: column;
    margin-left: 20px;
}
.info h1{
    margin-bottom:25px;
    font-family: sans-serif;
    font-weight: bold;
}
.info a{
    font-weight: bold;
    font-family: sans-serif;
    margin-bottom: 10px;
}
.info p{
    margin-top: 10px;
    font-weight: 600;
}
.knownfor img{
    width: 105px;
    border-radius: 5px;
}
.knownfor p{
    font-family: sans-serif;
    font-weight: bold;
    font-size: 15px;
}
.bot{
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    overflow: hidden;
}
.bot h1{
    font-size: 15px;
    width: 105px;
    text-align: center;
}
.down{
    width: 1350px;
    margin: auto;
    display: flex;
    margin-bottom: 100px;
}
.lijevo{
    display: flex;
    width: 300px;
    height: 400px;
    flex-direction: column;
}
.lijevo h1{
    font-size: 25px;
    font-family: sans-serif;
}
.lijevo h2{
    font-size: 15px;
    margin-top: 10px;
    font-family: sans-serif;
}
.lijevo p{
    font-weight: bold;
    margin-bottom: 10px;
}
.desno{
    display: flex;
    flex-direction: column;
}
.desno h1{
    margin-left: 20px;
    font-size: 25px;
    font-family: sans-serif;
    margin-bottom: 10px;
}
.movie{
    width: 890px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-bottom: 5px;
}
.movie p{
    margin-right: 20px;
    font-weight: bold;
}
.kartica{
    cursor: pointer;
    width: 105px;
    margin-right: 10px;
}
.moviess{
    margin-left: 20px;
    border: 1px solid lightgray;
    border-radius: 10px;
}
</style>