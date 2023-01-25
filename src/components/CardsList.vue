<script>
import {store} from '../store.js'
import CharacterCard from './CharacterCard.vue'

export default {
    components:{
        CharacterCard,
    },
    data(){
        return{
            store

        }
        
    }
    
}
</script>

<template lang="">
   <main class="container my-3 p-2">
    <div class="row">
        <h1>Carte trovate {{ store.cardsList.length}}</h1> 
    </div>
        <div class="row">
            <CharacterCard v-for="(item , index) in store.cardsList" :key="index" :card="item"></CharacterCard>
        </div>
   </main>
</template>

<style lang="scss" scoped>
main{
    background-color: white;
    margin-top: 3rem;
}
    
</style>