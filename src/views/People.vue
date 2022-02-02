<template>
<Navbar />
<div class="all" v-if="podaci">
<div class="glumac" v-for=" glumac in podaci.results" :key="glumac" @click="toDetails(glumac.id)">
    <img :src=" slikaurl + glumac.profile_path" alt="">
    <h1>{{ glumac.name }}</h1>

</div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    methods:{
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
    mounted(){
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
.glumac img{
    width: 200px;
}
.glumac{
    width: 200px;
    margin:auto;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
}
</style>