<template>
<Navbar />
<div class="nav" v-if="podaci">
<a href="#">Overview</a>
<a @click="toCast(id)" href="#">Casts</a>
<router-link :to="{name:'Reviewstv'}"><a href="#">Reviews</a></router-link>
</div>
<div class="top" v-if="podaci">
<div class="iza" v-if="podaci">
<img :src=" slikaurl + podaci.backdrop_path" alt="">
</div>
<div class="ispred">
<img :src=" slikaurl + podaci.poster_path" alt="">
<div class="info" v-if="podaci">
<h1>{{ podaci.original_name }}</h1>
<div class="drugired">
<p>{{ podaci.first_air_date }}</p>
<div v-for="zanr in podaci.genres" :key="zanr">
<p>{{ zanr.name }}</p>
</div>
<p> Seasons: {{ podaci.number_of_seasons }}</p>
</div>


<div class="icons">
<div class="vicons">
<img src="../assets/Rectangle.svg" alt="">
<h3>{{ podaci.vote_average }}</h3>
<a>User score</a>
<div class="micons" v-if="sesija">
<div class="rate" @click="favorite(podaci.id)"><img src="../assets/Rectangle.svg" alt=""><img class="mslike" src="../assets/heart.svg" alt="">
</div>
<div class="rate" @click="watchlist(podaci.id)"><img src="../assets/Rectangle.svg" alt=""><img class="mslike" src="../assets/bookmark.svg" alt=""></div>
<div class="rate"><img src="../assets/Rectangle.svg" alt=""><img class="mslike" src="../assets/star.svg" alt="">
<div class="ratecontent">
<star-rating v-bind:increment="0.5" v-bind:star-size="30" v-bind:max-rating="5" v-model:rating="rating" @update:rating="setRating(podaci.id,rating)"></star-rating>
</div>
</div>
</div>
</div>
</div>
<a>Overview</a>
<p>{{podaci.overview}}</p>
<div class="bitniglumci" v-if="podaci">
<a href="#" v-if="podaci.credits.cast[0]">{{ podaci.credits.cast[0].name }}</a>
<p v-if="podaci.credits.cast[0]">{{ podaci.credits.cast[0].known_for_department }}</p>
<a href="#" v-if="podaci.credits.cast[1]">{{ podaci.credits.cast[1].name }}</a>
<p v-if="podaci.credits.cast[1]">{{ podaci.credits.cast[1].known_for_department }}</p>
<a href="#" v-if="podaci.credits.cast[2]">{{ podaci.credits.cast[2].name }}</a>
<p v-if="podaci.credits.cast[2]">{{ podaci.credits.cast[2].known_for_department }}</p>
</div>

</div>
</div>        
</div>


<div class="ostalo" v-if="podaci">
<div class="left" v-if="podaci">
<div class="naslov" v-if="podaci">
<h1>Top Billed Cast</h1>
</div>
<div class="glumci" v-if="podaci">

<div class="card" @click="toActor(this.podaci.credits.cast[0].id)" v-if="this.podaci.credits.cast[0]">
<img :src=" slikaurl + this.podaci.credits.cast[0].profile_path" alt="">
<h2>{{this.podaci.credits.cast[0].original_name}}</h2>
<p>{{this.podaci.credits.cast[0].character}}</p>
</div>
<div class="card" @click="toActor(this.podaci.credits.cast[1].id)" v-if="podaci.credits.cast[1]">
<img :src=" slikaurl + this.podaci.credits.cast[1].profile_path" alt="">
<h2>{{this.podaci.credits.cast[1].original_name}}</h2>
<p>{{this.podaci.credits.cast[1].character}}</p>
</div>
<div class="card" @click="toActor(this.podaci.credits.cast[2].id)" v-if="podaci.credits.cast[2]">
<img :src=" slikaurl + this.podaci.credits.cast[2].profile_path" alt="">
<h2>{{this.podaci.credits.cast[2].original_name}}</h2>
<p>{{this.podaci.credits.cast[2].character}}</p>
</div>
<div class="card" @click="toActor(this.podaci.credits.cast[3].id)" v-if="podaci.credits.cast[3]">
<img :src=" slikaurl + this.podaci.credits.cast[3].profile_path" alt="">
<h2>{{this.podaci.credits.cast[3].original_name}}</h2>
<p>{{this.podaci.credits.cast[3].character}}</p>
</div>
<div class="card" @click="toActor(this.podaci.credits.cast[4].id)" v-if="podaci.credits.cast[4]">
<img :src=" slikaurl + this.podaci.credits.cast[4].profile_path" alt="">
<h2>{{this.podaci.credits.cast[4].original_name}}</h2>
<p>{{this.podaci.credits.cast[4].character}}</p>
</div>
<div class="card" @click="toActor(this.podaci.credits.cast[5].id)" v-if="podaci.credits.cast[5]">
<img :src=" slikaurl + this.podaci.credits.cast[5].profile_path" alt="">
<h2>{{this.podaci.credits.cast[5].original_name}}</h2>
<p>{{this.podaci.credits.cast[5].character}}</p>
</div>
<div class="card" @click="toActor(this.podaci.credits.cast[6].id)" v-if="podaci.credits.cast[6]">
<img :src=" slikaurl + this.podaci.credits.cast[6].profile_path" alt="">
<h2>{{this.podaci.credits.cast[6].original_name}}</h2>
<p>{{this.podaci.credits.cast[6].character}}</p>
</div>
<div class="card" @click="toActor(this.podaci.credits.cast[7].id)" v-if="podaci.credits.cast[7]">
<img :src=" slikaurl + this.podaci.credits.cast[7].profile_path" alt="">
<h2>{{this.podaci.credits.cast[7].original_name}}</h2>
<p>{{this.podaci.credits.cast[7].character}}</p>
</div>
<div class="card" @click="toActor(this.podaci.credits.cast[8].id)" v-if="podaci.credits.cast[8]">
<img :src=" slikaurl + this.podaci.credits.cast[8].profile_path" alt="">
<h2>{{this.podaci.credits.cast[8].original_name}}</h2>
<p>{{this.podaci.credits.cast[8].character}}</p>
</div>
<div class="viewmore">
<a href="#" @click="toCast(id)">Viewmore</a>
</div>

</div>

<div class="drugidio" v-if="podaci.reviews.results[0]">
<a href="#" @click="toCast(id)" >Full Cast and Crew</a>
<img class="linija" src="../assets/Rectangle.svg" alt="">

<div class="sezone" @click="toTv(this.podaci.id)">
<img :src=" slikaurl + this.podaci.seasons[0].poster_path" alt="">
<div class="opis">
<h1>{{this.podaci.seasons[0].name}}</h1>
<div class="prvired">
<a>{{this.podaci.seasons[0].air_date}}</a>
<a>| {{this.podaci.seasons[0].episode_count}} Episodes</a>
</div>
<p>{{this.podaci.seasons[0].overview}}</p>
</div>
</div>

<router-link :to="{name:'Reviewstv'}"><a href="#">Reviews</a></router-link>
<div class="reviews" v-if="podaci">
<div class="prvired" v-if="podaci">
<h1>A review by {{ podaci.reviews.results[0].author_details.username}}</h1>
<div class="rating" v-if="podaci"><img src="../assets/goldenstar.svg" alt=""><p>{{ podaci.reviews.results[0].author_details.rating }}</p></div>
</div>
<p>Written by {{ podaci.reviews.results[0].author }} {{ podaci.reviews.results[0].created_at }}</p>
<p>{{ podaci.reviews.results[0].content }}</p>
</div>
<router-link :to="{name:'Reviewstv'}"><a href="#">Read all Reviews</a></router-link>
</div>

</div>

<div class="right">
    
<div class="dodatniinfo" v-if="podaci">
<div class="mreze">
<img src="../assets/facebook.svg" alt="">
<img src="../assets/twitter.svg" alt="">
</div>
<h1>Status</h1>
<p>{{ podaci.status}}</p>
<h1>Original Language</h1>
<p>{{ podaci.original_language }}</p>
<h1>Keywords</h1>
<div class="keywords" v-if="podaci">
    <div  v-for="podatak in this.podaci.keywords.results" :key="podatak">
    <button>{{podatak.name}}</button>
</div>
</div>

</div>
</div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
import {mapGetters} from 'vuex'
import StarRating from 'vue-star-rating'
import axios from 'axios'
export default {
    computed:{
        ...mapGetters(['sesija'])
    },
    methods:{
        toTv(id){
            this.$router.push({name:'Seasons',params:{id:id}})
        },
        toCast(id){
            this.$router.push({name:'Casttv',params:{id:id}})
        },
        setRating(id,rating){
            console.log(rating)
            console.log(id)
            axios.post('https://api.themoviedb.org/3/tv/' + id + '/rating?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija,{
                value: rating
            })
        },
        toActor(id){
            this.$router.push({ name: 'Actordetails', params: { person: id }}) 
        },
        toReview(id){
            this.$router.push({ name: 'Reviews', params: { id: id }}) 
        },
watchlist(id){
   fetch('https://api.themoviedb.org/3/account/{account_id}/watchlist?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        "media_type": "tv",
        "media_id": id,
        "watchlist": true
        }),
        })
        .then(response => response.json())
  },
  favorite(id){
   fetch('https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija, {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
  "media_type": "tv",
  "media_id": id,
  "favorite": true
}),
})
.then(response => response.json())
  },
    },
    components:{Navbar,StarRating},
    data(){
        return{
            rate:null,
            rating:null,
            podaci:null,
            id:this.$route.params.id,
            slikaurl: 'https://image.tmdb.org/t/p/original/',
        }
    },
mounted(){
    axios.get('https://api.themoviedb.org/3/tv/' + this.id + '?api_key=0b5e8ce7494ae54d6c643adf4db40da7&append_to_response=credits,keywords,reviews')
    .then((response)=>{
    this.podaci = response.data
    console.log(response.data)
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
.top{
    display: flex;
    width: 100%;
    height: 500px;
    overflow: hidden;
    justify-content: center;
}
.iza img{
    width: 100%;
    filter: brightness(15%);
    z-index: 1;
    position: relative;
}
.iza{
    width: 100%;
    z-index: 1;
}
.ispred img{
    height: 400px;
}
.ispred{
    display: flex;
    align-items: center;
    position: absolute;
    width: 1350px;
    height: 500px;
    position: absolute;
    z-index: 2;
}
.info{
    color: white;
    margin-left: 20px;
}
.info h1{
    font-family: sans-serif;
}
.info a{
    font-weight: bold;
}
.info p{
    font-weight: 500;
}
.drugired{
    display: flex;
}
.drugired p{
    margin-right: 20px;
    font-weight: bold;
}

.icons img{
    display: flex;
    flex-direction: row;

}
.icons{
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
    width: 600px;
}
.micons{
    align-items: center;
    display: flex;
    flex-direction: row;

}
.vicons{
    display: flex;
    flex-direction: row;

}
.vicons img{
    height: 50px;
    margin-right: 5px;
    cursor: pointer;

}
.micons img{
    height: 30px;
    margin-right: 20px;
    cursor: pointer;
}
.vicons a{
    display: flex;
    margin-right: 20px;
    margin-top: 5px;
    width: 40px;
}
.vicons h3{
    margin-top: 15px;
    margin-left: 15px;
    position: absolute;
    cursor: pointer;
}
.bitniglumci p{
    margin-bottom: 10px;
    font-size: lighter;
}
.bitniglumci a{
    text-decoration: none;
    color: white;
    font-weight: bold;
}
.top p{
    margin-bottom: 10px;
}
.ostalo{
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 1350px;
    margin-top: 20px;
    margin-bottom: 50px;
}
.left{
    display: flex;
    flex-direction: column;
    width: 1010px;

    margin:0;
    overflow: hidden;
}
.glumci img{
    object-fit: cover;
    object-position: 100% 15%;
    height: 175px;
    width: 140px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.glumci{
    display: flex;
    overflow:auto;
    
}
.infoglumci p{
    margin-bottom: 20px;
}
.naslov h1{
    margin-bottom: 10px;
    font-size: 20px;
    font-family: sans-serif;

}

.right{
    display: flex;
    align-items: flex-start;
    width: 300px;
    margin: 0;
    margin-left: 50px;

}
.dodatniinfo{
    margin:0;
    margin-top: 10px;
    height: 700px;
    width:400px;

}
.dodatniinfo h1{
    font-size: 16px;
    font-family:sans-serif;
    font-weight: 600;
}
.dodatniinfo p{
    margin-bottom: 15px;
    font-weight: bold;
}
.mreze img{
    width: 30px;
    margin-bottom: 10px;
    margin-right: 10px;
}
.keywords{

    display: flex;
    flex-wrap: wrap;
}
.keywords button{
    border: none;
    cursor: pointer;
    margin: 5px;
    margin-left: 0;
    padding: 3px;
    border-radius: 2px;
}
.drugidio{
    width: 1000px;
    margin-top: 20px;
}
.linija{
    object-fit: cover;
    height: 0px;
    width: 1010px;
    margin: 0;
    margin-top: 30px;
    margin-bottom: 20px;
    border: 1px solid lightgray;
}
.reviews{
    display: flex;
    flex-direction: column;
    width: 995px;
    background: white;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: hidden;
    width: 997px;
    border: 1px solid lightgray;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.drugidio a{
    text-decoration: none;
    color: black;
    font-size: 18px;
    font-family: sans-serif;
    font-weight: bold;
}
.reviews p{
    padding: 40px;
    padding-top: 0;
    font-weight: bold;
}
.reviews h1{
    padding-top: 40px;
    padding-left: 40px;
    font-family: sans-serif;
    font-size: 25px;
}
.prvired img{
    height:20px;
    width: 20px;
}
.rating{
    align-items: center;
    height: 30px;
    width: 60px;
    display: flex;
    background: black;
    position: relative;
    border-radius: 20px;
    margin-left: 10px;
    margin-top: 37px;
}
.prvired{
    display: flex;
    align-items: center;
}
.rating img{
    display: flex;
    margin-left: 8px;
    height: 15px;
    width: 15px;
}
.rating p{
    color: white;
    margin-left: 0px;
}
.glumac{
    cursor: pointer;
}
.rate img{
    position: absolute;
}
.rate{
    width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.rate:hover .ratecontent{
    display: flex;
}
.mslike{
    height: 10px;
    width: 10px;
}
.ratecontent{
    position: absolute;
    display: none;
    background: white;
    margin-bottom: 60px;
    width: 150px;
    border-radius: 10px;
}
.viewmore{
    width: 200px;
    height: 300px;
    display: flex;
    align-items: center;
}
.viewmore a{
    padding: 36px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 20px;
}
.card{
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    cursor: pointer;
    border-radius: 10px;
    width: 140px;
    margin-left: 5px;
    margin-right: 5px;
    border: 1px solid lightgray;
    margin-bottom: 20px;
}
.card h2{
    margin-top: 10px;
    font-family:sans-serif;
    font-size: 15px;
    padding-left: 10px;
    padding-right: 10px;
}
.card p{
    font-size: 15px;
    font-weight: bold;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
}
::-webkit-scrollbar {
  width: 5px;
  height: 8px;
  border-radius: 20px;
}
::-webkit-scrollbar-thumb {
  background: lightgray;
  border-radius: 10px;
}
.sezone img{
    width: 130px;
    height: 195px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.sezone{
    width: 997px;
    border: 1px solid lightgray;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    display: flex;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-bottom: 20px;
    align-items: center;
    cursor: pointer;
}
.opis{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding-right: 20px;
}
.sezone h1{
    font-family: sans-serif;
    font-size: 25px;
}
.sezone a{
    font-family: sans-serif;
    text-decoration: none;
    color: black;
    font-size: 15px;
    margin-right: 5px;
}
.opis p{
    font-weight: bold;
}
</style>