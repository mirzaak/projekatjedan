<template>
<Navbar />
<div class="nav">
<a href="#" @click="toMovie(podaci.id)">Overview</a>
<router-link :to="{name:'People'}"><a href="#">Casts</a></router-link>
<a href="#">Reviews</a>
</div>
<div class="top" v-if="podaci" @click="toMovie(podaci.id)">
<img :src=" slikaurl + podaci.poster_path" alt="">
<div class="info">
<h1>{{ podaci.original_title }}</h1>
<a href="#">Back to Main</a>
</div>
</div>
<div class="down" v-if="podaci">
    <div class="left">
        <a href="#">Write review</a>
    </div>
    <div class="right">
    <div class="revju" v-for="revju in podaci.reviews.results" :key="revju">
        <div class="prvired">
        <h1> A review by: {{revju.author}}</h1>
        <p>Written by: {{ revju.author_details.username }} on {{ revju.created_at }}</p>
        </div>
        <p>{{ revju.content }}</p>
    </div>
    </div>

</div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    methods:{
        toMovie(id){
            this.$router.push({ name: 'Moviedetails', params: { id: id }})            
        },
        
    },
    data(){
        return{
            podaci:null,
            id:this.$route.params.id,
            slikaurl: 'https://image.tmdb.org/t/p/original/',
        }
    },
components:{Navbar},
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
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    margin: auto;
    border-bottom: 1px solid lightgray;
}
.nav a{
    color: black;
    text-decoration: none;
    margin-left: 40px;
    margin-right: 40px;
}
.top{
    display: flex;
    width: 1400px;
    margin: auto;
    align-items: center;
    cursor: pointer;
}
.info a{
    display: flex;
    color: black;
    margin-top: 10px;
    text-decoration: none;
}
.info{
    margin-left: 20px;
}
.top img{
    width: 80px;
}
.down{
    width: 1400px;
    margin: auto;
    display: flex;
    margin-top: 50px;
}
.revju{
    width: 1010px;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 50px;
    box-shadow: 21px 20px 27px 7px rgba(0,0,0,0.51);
    -webkit-box-shadow: 21px 20px 27px 7px rgba(0,0,0,0.51);
    -moz-box-shadow: 21px 20px 27px 7px rgba(0,0,0,0.51);
}
.right{
    width: 1150px;
    display: flex;
    flex-direction: column;
}
.left{
    display: flex;
    width: 200px;
    margin-right: 50px;
}
.left a{
    width: 100px;
    height: 20px;
    padding: 5px;
    text-decoration: none;
    margin: 0;
    color: white;
    background: black;
    border-radius: 20px;
}
.prvired{
    margin-bottom:20px;
}
</style>