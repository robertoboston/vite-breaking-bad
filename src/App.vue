<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppLoader from './components/AppLoader.vue'
import AppFilter from './components/AppFilter.vue'


import {store} from './store.js'
import axios from 'axios'


export default {
    components: {
        AppHeader,
        AppMain,
        AppLoader,
        AppFilter,
    },
    data(){
        return{
            store

        }
        
    },
    created(){
        this.getCardsList()

    },
    methods : {
        getCardsList (){
            let myUrl = `${store.url}${store.selectedGenere}`
            console.log(myUrl)
            axios.get(myUrl).then((response) => {
                store.cardsList = response.data.data
                setTimeout(()=>{
                    store.isLoaded = true;
                },1000)
            })
        }

    }
    
}
</script>

<template lang="">
    <div v-if="store.isLoaded"> 
        <AppHeader></AppHeader>
        <AppFilter @filter="getCardsList" ></AppFilter>
        <AppMain></AppMain>
    </div>
    <div v-else>
        <AppLoader></AppLoader>
    </div>
  
</template>

<style lang="scss">
@use './styles/generals.scss';
    
</style>