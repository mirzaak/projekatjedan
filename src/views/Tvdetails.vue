<template>
<div class="nav" v-if="podaci">
<a href="#">Overview</a>
<a href="#">Casts</a>
<a href="#">Reviews</a>
</div>
<div class="main" v-if="podaci">
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
<p>{{ podaci.episode_run_time[0]}}min</p>
</div>


<div class="icons">
<div class="vicons">
<img src="../assets/Rectangle.svg" alt="">
<h3>{{ podaci.vote_average }}</h3>
<p>User score</p>
<div class="micons">
<img src="../assets/Rectangle.svg" alt="">
<img src="../assets/Rectangle.svg" alt="">
<img src="../assets/Rectangle.svg" alt="">
<div class="mslike">
<img src="../assets/heart.svg" alt="">
<img src="../assets/bookmark.svg" alt="">
<img src="../assets/star.svg" alt="">
</div>
</div>
</div>
</div>
<p>Overview</p>
<p>{{podaci.overview}}</p>
<div class="bitniglumci">
<div v-if="podaci.credits.cast.known_for_department">
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
</div>
</div>

<div class="ostalo" v-if="podaci">
<div class="left" v-if="podaci">
<div class="viewmore" v-if="podaci">
    <a href="#">View more</a>
</div>
<div class="naslov" v-if="podaci">
<h1>Top Billed Cast</h1>
</div>
<div class="glumci" v-if="podaci">
<div v-for="glumac in podaci.credits.cast" :key="glumac">
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

<div class="seasons">
<h1>Last Season</h1>
<div class="sezona">
<img :src=" slikaurl + podaci.seasons[0].poster_path" alt="" @click="toSeason(podaci.id)">
<div class="detalji">
    <h1  @click="toSeason(podaci.id)">{{podaci.seasons[0].name}}</h1>
    <p  @click="toSeason(podaci.id)">{{ podaci.seasons[0].first_air_date}}</p>
    <p  @click="toSeason(podaci.id)">{{ podaci.seasons[0].episode_count }} Episodes</p>
    <p  @click="toSeason(podaci.id)">{{ podaci.seasons[0].overview }}</p>
</div>
</div>
<a href="#"  @click="toSeason(podaci.id)">View All Seasons</a>
</div>

<a href="#">Reviews</a>
<div class="reviews">
<div class="prvired">
<h1>A review by {{ podaci.reviews.results[0].author_details.username}}</h1>
<div class="rating" v-if="podaci.reviews.results[0].author_details.rating"><img src="../assets/goldenstar.svg" alt=""><p>{{ podaci.reviews.results[0].author_details.rating }}</p></div>
</div>
<p>Written by {{ podaci.reviews.results[0].author }} {{ podaci.reviews.results[0].created_at }}</p>
<p>{{ podaci.reviews.results[0].content }}</p>
</div>
<a href="#">Read all Reviews</a>
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
export default {
    methods:{
        toSeason(id){
            this.$router.push({ name: 'Seasons', params: { id: id }}) 
        }
    },
    data(){
        return{
            podaci:null,
            id:this.$route.params.id,
            slikaurl: 'https://image.tmdb.org/t/p/original/',
        }
    },
mounted(){
    fetch('https://api.themoviedb.org/3/tv/' + this.id + '?api_key=0b5e8ce7494ae54d6c643adf4db40da7&append_to_response=credits,keywords,reviews')
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
    background: lightgray;
    overflow: hidden;
}
.iza img{
    width: 100%;
    filter: brightness(15%);
}
.iza{
    position: relative;
    width: 100%;
}
.ispred img{
    height: 400px;
}
.ispred{
    display: flex;
    align-items: center;
    position: absolute;
    width: 1000px;
    height: 500px;
    margin-left: 200px;
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
.mslike{
    display: flex;
    position: absolute;
    width: 130px;
    margin-left: 11px;
    justify-content: space-between;
}
.mslike img{
    height: 10px;
    width: 10px;
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
    height: 1300px;
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
    width: 50px;
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
.seasons{
    height: 300px;

    height: 330px;
}
.sezona{

    display: flex;
    align-items: center;
}
.sezona img{
    height: 225px;
    width: 150px;
    cursor: pointer;
}
.detalji{
    cursor: pointer;
    color:black;
    margin-left: 20px;
}

</style>