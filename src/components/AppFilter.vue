<script>
import {store} from '../store.js'
export default {
    data(){
        return{
            store,
            archetypes:[
                'Dark Magician',
                'Alien',
                'Laval',
                'Cipher'
            ],
            
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="mt-5">
                    <select v-model="store.selectedGenere">
                        <option v-for="item in archetypes" :value="item">{{item}}</option>
                    </select> 
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
select{
    background-color: white;
    width: 200px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}
    
</style>