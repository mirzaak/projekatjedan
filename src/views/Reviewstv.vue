<template>
<Navbar />
<div class="nav">
<a href="#" @click="toMovie(podaci.id)">Overview</a>
<a  @click="toMovie(podaci.id)" href="#">Casts</a>
<a href="#">Reviews</a>
</div>
<div class="back">
<div class="main" v-if="podaci">
<img :src=" slikaurl + podaci.poster_path" alt="">
<div class="infomain">
<h1>{{ podaci.original_name }}</h1>
<a href="#" @click="toMovie(podaci.id)">Back to Main Menu</a>
</div>
</div>
</div>
<div class="down" v-if="podaci">
    <div class="left">
        <a  v-if="!sesija" href="#">Login to write review</a>
        <a v-if="sesija" href="#">Write review</a>
    </div>
    <div class="right">
    <div class="revju" v-for="revju in podaci.reviews.results" :key="revju">
        <div class="nasloviopis">
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
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['sesija'])
    },
    methods:{
        toMovie(id){
            this.$router.push({ name: 'Tvdetails', params: { id: id }})            
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
    font-weight: bold;
}
.down{
    width: 1400px;
    margin: auto;
    display: flex;
    margin-top: 20px;
}
.revju{
    display: flex;
    flex-direction: column;
    width: 1000px;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
}
.revju p{
    font-weight: bold;
}
.right{
    display: flex;
    flex-direction: column;
}
.left{
    display: flex;
    width: 200px;
    margin-right: 50px;
}
.left a{
    width: 200px;
    height: 20px;
    padding: 5px;
    text-decoration: none;
    margin: 0;
    margin-left: 30px;
    color: black;
    border-radius: 20px;
}
.nasloviopis{
    margin-bottom:20px;
}
.nasloviopis h1{
    font-family: sans-serif;
    font-size: 20px;
    font-weight: bold;
}

.main{
    display: flex;
    margin: auto;
    width: 1500px;
    align-items: center;
    height: 100px;
}
.main img{
    cursor: pointer;
}
.infomain{
    margin-left: 20px;
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
    cursor: pointer;
    color: white;
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
.main img{
    width: 60px;
    border-radius: 10px;
}
</style>