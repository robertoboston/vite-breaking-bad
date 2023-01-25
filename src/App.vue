<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppLoader from './components/AppLoader.vue'
import {store} from './store.js'
import axios from 'axios'


export default {
    components: {
        AppHeader,
        AppMain,
        AppLoader,
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
            axios.get(store.url).then((response) => {
                store.cardsList = response.data.data
                setTimeout(()=>{
                    store.isLoaded = true;
                },3000)
                
            })
        }

    }
    
}
</script>

<template lang="">
    <div v-if="store.isLoaded"> 
        <AppHeader></AppHeader>
        <AppMain></AppMain>
    </div>
    <div v-else>
        <AppLoader></AppLoader>
    </div>
  
</template>

<style lang="scss">
@use './styles/generals.scss';
    
</style>