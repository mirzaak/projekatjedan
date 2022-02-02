<template>
<Navbar />
<div class="up" v-if="podaci">
<div class="main">
    <img :src=" slikaurl + podaci.profile_path " alt="">
<div class="right">
    <div class="info" v-if="podaci">
    <h1>{{ podaci.name }}</h1>
    <p>Biography</p>
    <p>{{ podaci.biography }}</p>
    </div>
    <div class="knownfor">
        <div class="top">
            Known for:
        </div>
        <div class="bot" v-if="knownfor">
            <div v-for=" film in knownfor.cast" :key="film">
                <img :src=" slikaurl + film.poster_path" alt="">
                <h1>{{ film.original_title }}</h1>
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
<p></p>
<h2>Birthdate</h2>
<p>{{ podaci.birthday }}</p>
<h2>Place of Birth</h2>
<p>{{ podaci.place_of_birth }}</p>
<h2>Also Known as</h2>
<p>{{ podaci.also_known_as[0]}}</p>
</div>
<div class="desno" v-if="knownfor">
<h1>Acting</h1>
<div class="movie" v-for=" movie in knownfor.cast " :key="movie">
    <p>{{ movie.release_date }}</p>
    <p>{{ movie.original_title }}</p>
    <a>as {{ movie.character}}</a>

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
.main img{
    width: 250px;
}
.main{
    align-items: center;
    display: flex ;
    width: 1400px;
    height: 400px;
    margin: auto;
}
.info{
    height: 170px;
    width: 1130px;

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
    margin-bottom:15px;
}
.info p{
    margin-bottom: 10px;
}
.knownfor img{
    width: 90px;
    margin-right: 13px;
    border-radius: 5px;
}
.bot{
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    overflow: hidden;
}
.bot h1{
    font-size: 10px;
    width: 90px;
    text-align: center;
}
.down{
    width: 1400px;
    margin: auto;
    display: flex;
    margin-bottom: 100px;
}
.lijevo{
    display: flex;
    width: 250px;
    height: 400px;

    flex-direction: column;
}
.lijevo h2{
    font-size: 15px;
    margin-top: 10px;
}
.desno{
    display: flex;
    width: 1150px;

    flex-direction: column;
}
.movie{
    width: 1150px;
    border: 1px solid lightgray;
    border-radius: 5px;
    height: 30px;
    display: flex;
    align-items: center;
}
.movie p{
    margin-right: 20px;
    font-weight: bold;
}
</style>