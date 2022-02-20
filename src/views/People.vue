<template>
<Navbar />
<h2>Popular People</h2>
<div class="all" v-if="podaci">
<div class="glumac" v-for=" glumac in podaci.results" :key="glumac" @click="toDetails(glumac.id)">
    <img :src=" slikaurl + glumac.profile_path" alt="">
    <h1>{{ glumac.name }}</h1>
</div>
</div>
<div class="buttons" v-if="podaci">
<button @click="next(podaci.page)">Next</button>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    methods:{
        next(){
            this.$router.push({name: 'Peoplepage', params:{page:2}})
        },
        toDetails(id){
            this.$router.push({ name: 'Actordetails', params: { person: id }})            
        }
    },
    components:{Navbar},
    data(){
        return{
            podaci:null,
            slikaurl: 'https://image.tmdb.org/t/p/original/',
        }
    },
    created(){
        fetch('https://api.themoviedb.org/3/person/popular?api_key=0b5e8ce7494ae54d6c643adf4db40da7&language=en-US')
        .then(res => res.json())
        .then(data => this.podaci = data)
        .then(data => console.log(this.podaci))
    }

}

</script>

<style scoped>
.all{
    width: 1400px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: auto;
}
h2{
    margin-left: 150px;
    margin-top: 20px;
}
.glumac img{
    width: 200px;
    height: 200px;
    object-fit: cover;
    object-position: 100% 15%;
}
.glumac{
    width: 200px;
    object-fit: cover;
    margin:auto;
    margin-top: 20px;
    margin-bottom: 0;
    display: flex;
    border: 1px solid lightgray;
    border-end-end-radius: 10px;
    border-end-start-radius: 10px;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);    
}
.glumac h1{
    font-size: 20px;
    padding: 10px;
}
.buttons{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin: auto;
    margin-bottom: 50px;
}
.buttons button{
    height: 40px;
    width: 60px;
    justify-content: center;
}

</style>