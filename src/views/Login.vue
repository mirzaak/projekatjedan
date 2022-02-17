<template>
<Navbar />
<div class="all">
    <h1>Login to your account</h1>
    <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple.</p>
    <p>If you signed up but didn't get your verification email, click here to have it resent.</p>
    <div class="login">
    <label for="username">Username</label>
    <input type="text"  v-model="username">

    <label for="password">Password</label>
    <input type="password"  v-model="password" @keyup.enter="submit">

    <div class="loginn">
    <button @click="submit">Login</button>
    <a @click="resetPassword">Reset password</a>
    </div>
    </div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
components:{Navbar},
    computed:{
        ...mapGetters(['sesija'])
    },
    data(){
        return{
            username:null,
            password:null,
            reqToken:null,
            approvedToken:null,
            sessionid: null,
        }
    },
methods:{
    async submit(){
         console.log('submit')

         const requestToken = await axios.get('https://api.themoviedb.org/3/authentication/token/new?api_key=0b5e8ce7494ae54d6c643adf4db40da7')
         .then((response) => {
             this.reqToken = response.data.request_token
         })

         const approveToken = await axios.post('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=0b5e8ce7494ae54d6c643adf4db40da7',{
             username: this.username,
             password: this.password,
             request_token: this.reqToken
         })
         .then((response) => {
             this.approvedToken = response.data.request_token
         })

        const sessionId = await axios.post('https://api.themoviedb.org/3/authentication/session/new?api_key=0b5e8ce7494ae54d6c643adf4db40da7',{
            request_token: this.approvedToken
        })
        .then((response) => {
        this.$store.dispatch('sesija', response.data.session_id)
        })
        axios.get('https://api.themoviedb.org/3/account?api_key=0b5e8ce7494ae54d6c643adf4db40da7&session_id=' + this.sesija)
        .then((response)=>{
        this.$store.dispatch('username', response.data.username)
        })
        this.$router.push({name:'Home'})
},
    resetPassword(){
        window.location.href = "https://www.themoviedb.org/reset-password"
}
}
}
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: column;
    height: 350px;
    width: 1200px;
    margin: auto;
    margin-top: 100px;
}
.login{
    display: flex;
    flex-direction: column;
    height: 200px;
}
.login input{
    width: 1180px;
}
.all p{
    margin-bottom: 10px;
    margin-top: 10px;
}
.login input{
    height: 30px;
}
.login button{
    width: 70px;
    color: white;
    background:  #01b4e4;
    border: none;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    font-size: 20px;
}
.login a{
    margin-left: 10px;
    color:#01b4e4;
    font-size: 15px;
    cursor: pointer;
}
.loginn{
    margin-top: 20px;
    display: flex;
    align-items: center;
}
</style>