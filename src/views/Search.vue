<template>
<Navbar />
<div class="searchbar">
<div class="zajedno"> 
<img src="../assets/search.svg" alt="">
<input type="text" placeholder="Search..." name="" id="" @keyup.enter="submit" v-model="query">
</div>
</div>
<div class="all">
    <div class="left">
    <div class="naslov">
        <h1>Search Results</h1>
    </div>
    <div class="kategorija"><a href="#">Movies</a></div>
    </div>
    <div class="right">
        <p>There are no movies that matched your query.</p>


    </div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
    components:{Navbar},
data(){
    return{
        query:null,
        podaci:null,
        slikaurl: 'https://image.tmdb.org/t/p/original/',
    }
},
methods:{
    submit(){
        console.log('Radi')
    fetch('https://api.themoviedb.org/3/search/movie?api_key=0b5e8ce7494ae54d6c643adf4db40da7&query=' + this.query)
    .then(res => res.json())
    .then(data=>this.podaci = data)
    .then(data=>{console.log(this.podaci)})
    .then(this.$router.push({ name: 'Searched', params:{query:this.query}}))
    }
}
}
</script>

<style scoped>
.searchbar{
    display: flex;
    width: 100%;
    height: 40px;
    border: 1px solid lightgray;
}
.searchbar input{
    display: flex;
    width: 1300px;
    height: 38px;
    border: none;
    font-size: 15px;
    font-weight: bold;

}
.zajedno{
    margin: auto;
    display: flex;
}
.searchbar img{
    margin: auto;
    margin-right: 0;
    height: 15px;
    align-self: center;
}
.all{
    display: flex;
    flex-direction: row;
    width: 1400px;
    margin:auto;
    margin-top: 20px;
}
.naslov{
    display: flex;
    height: 60px;
    background: #01b4e4;
    align-items: center;
    color: white;
    font-size: 10px;
    margin-bottom: 5px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.naslov h1{
    margin-left: 20px;
    font-family: sans-serif;
    font-size: 18px;
}
.left{
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 0;
    border: 1px solid lightgray;
    border-radius: 10px;
    overflow: hidden;
}
.left a{
    margin-left: 20px;
    color: black;
    text-decoration: none;
    font-weight: bold;
}
.kategorija:hover{
    background: lightgrey;
}
.kategorija:hover p{
    background: white;
}
.kategorija{
    display: flex;
    flex-direction: row;
    width: 250px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
}
    .kategorija p{
    margin-right: 20px;
    background: lightgrey;
    border-radius: 7px;
    min-width: 10px;
    padding: 5px;
    padding-top: 0;
    padding-bottom: 0;
    }
    
.right{
    display: flex;
    width: 1250px;

}
.right p{
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 20px;
    font-weight: bold;
}
</style>