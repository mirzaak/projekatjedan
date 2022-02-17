<template>
<Navbar />
<div class="nav" v-if="podaci">
<a href="#">Overview</a>
<router-link :to="{name:'People'}"><a href="#">Casts</a></router-link>
<router-link :to="{name:'Reviews'}"><a href="#">Reviews</a></router-link>
</div>
<div class="top" v-if="podaci">
<div class="iza" v-if="podaci">
<img :src=" slikaurl + podaci.backdrop_path" alt="">
</div>
<div class="ispred">
<img :src=" slikaurl + podaci.poster_path" alt="">
<div class="info" v-if="podaci">
<h1>{{ podaci.original_title }}</h1>
<div class="drugired">
<p>{{ podaci.release_date }}</p>
<div v-for="zanr in podaci.genres" :key="zanr">
<p>{{ zanr.name }}</p>
</div>
<p>{{ podaci.runtime }}min</p>
</div>


<div class="icons">
<div class="vicons">
<img src="../assets/Rectangle.svg" alt="">
<h3>{{ podaci.vote_average }}</h3>
<p>User score</p>
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
<p>Overview</p>
<p>{{podaci.overview}}</p>
<div class="bitniglumci">
<a href="#">{{ podaci.credits.cast[0].name }}</a>
<p>{{ podaci.credits.cast[2].known_for_department }}</p>
<a href="#">{{ podaci.credits.cast[1].name }}</a>
<p>{{ podaci.credits.cast[1].known_for_department }}</p>
<a href="#">{{ podaci.credits.cast[2].name }}</a>
<p>{{ podaci.credits.cast[3].known_for_department }}</p>
</div>

</div>
</div>        
</div>


<div class="ostalo" v-if="podaci">
<div class="left" v-if="podaci">
<div class="viewmore" v-if="podaci">
<router-link :to="{ name: 'People' }"><a href="#">View more</a></router-link>
</div>
<div class="naslov" v-if="podaci">
<h1>Top Billed Cast</h1>
</div>
<div class="glumci" v-if="podaci">
<div class="glumac" v-for="glumac in podaci.credits.cast" :key="glumac" @click="toActor(glumac.id)">
<img :src=" slikaurl + glumac.profile_path" alt="">
<div class="infoglumci">
<h1>{{ glumac.original_name }}</h1>
<p>{{ glumac.known_for_department }}</p>
</div>
</div>
</div>

<div class="drugidio" v-if="podaci.reviews.results[0]">
<a href="#">Full Cast and Crew</a>
<img src="../assets/Rectangle.svg" alt="">
<router-link :to="{name:'Reviews'}"><a href="#">Reviews</a></router-link>
<div class="reviews" v-if="podaci">
<div class="prvired" v-if="podaci">
<h1>A review by {{ podaci.reviews.results[0].author_details.username}}</h1>
<div class="rating" v-if="podaci"><img src="../assets/goldenstar.svg" alt=""><p>{{ podaci.reviews.results[0].author_details.rating }}</p></div>
</div>
<p>Written by {{ podaci.reviews.results[0].author }} {{ podaci.reviews.results[0].created_at }}</p>
<p>{{ podaci.reviews.results[0].content }}</p>
</div>
<router-link :to="{name:'Reviews'}"><a href="#">Read all Reviews</a></router-link>
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
<h1>Budget</h1>
<p>${{ podaci.budget}}</p>
<h1>Revenue</h1>
<p>${{ podaci.revenue }}</p>
<h1>Keywords</h1>
<div class="keywords" v-if="podaci">
    <div  v-for="podatak in podaci.keywords.keywords" :key="podatak">
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
        setRating(id,rating){
            console.log(rating)
            console.log(id)
            axios.post('https://api.themoviedb.org/3/movie/' + id + '/rating?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija,{
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
        "media_type": "movie",
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
  "media_type": "movie",
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
    fetch('https://api.themoviedb.org/3/movie/' + this.id + '?api_key=0b5e8ce7494ae54d6c643adf4db40da7&append_to_response=credits,keywords,reviews')
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
.top{
    display: flex;
    width: 100%;
    height: 500px;
    overflow: hidden;
}
.iza img{
    width: 100%;
    filter: brightness(15%);
    z-index: 1;
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
    width: 1400px;
    height: 500px;
    margin: auto;
    margin-left: 50px;
    z-index: 2;
}
.info{
    color: white;
    margin-left: 20px;
}
.drugired{
    display: flex;
}
.drugired p{
    margin-right: 20px;
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
.vicons p{
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
}
.bitniglumci a{
    text-decoration: none;
    color: white;
}
.top p{
    margin-bottom: 10px;
}
.ostalo{
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 1500px;

    margin-top: 20px;
    height: 1000px;
}
.left{
    display: flex;
    flex-direction: column;
    width: 1010px;

    margin:0;
    overflow: hidden;
}
.glumci img{
    width: 150px;
    margin-right: 20px;
    border: 1px solid lightgray;
    border-radius: 5px;
    
}
.glumci{
    display: flex;
}
.infoglumci{
    display: flex;
    flex-direction: column;
    width: 150px;

    border: 1px solid lightgray;
    border-end-end-radius: 5px;
    border-end-start-radius: 5px;

}
.infoglumci h1{
    font-size: 20px;
}
.infoglumci p{
    margin-bottom: 20px;
}
.naslov h1{
    margin: 10px;
    font-size: 25px;
}
.viewmore{
    display: flex;
    align-items: center;
    margin-top: 52px;
    margin-left: 860px;
    width: 150px;
    height: 300px;
    background: white;
    position: absolute;
}
.viewmore a{
    color: black;
    text-decoration: none;
    margin: auto;
    font-size: 20px;

}
.right{
    display: flex;
    align-items: flex-start;
    width: 300px;
    margin: 0;
    margin-left: 20px;

}
.dodatniinfo{
    margin:0;
    margin-top: 10px;
    height: 700px;
    width:400px;

}
.dodatniinfo h1{
    font-size: 20px;
}
.dodatniinfo p{
    margin-bottom: 15px;
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
    width: 1010px;
    height: 400px;
}
.drugidio img{
    object-fit: cover;
    height: 1px;
    width: 1010px;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
}
.reviews{
    display: flex;
    flex-direction: column;
    width: 1005px;
    height: 300px;
    background: white;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 10px;
    margin-bottom: 10px;
    overflow: hidden;
}
.drugidio a{
    text-decoration: none;
    color: black;
    font-size: 30px;
}
.reviews p{
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 10px;
}
.reviews h1{
    padding: 10px;
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


</style>