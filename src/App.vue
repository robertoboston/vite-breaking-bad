<script>
import AppHeader from './components/AppHeader.vue'



export default {
    data(){
        return{
            store
        }
    },
    created(){
        this.getCardlist()
    },
    methods:{
        getCardlist(){
            axios.get(store.url).then((response) => {
                console.log(response.data)
                this.store.cardlist = response.data.data
                this.store.loading = false
            })
        }
    }
    
}


</script>
<template lang="">
    <div>
        
    </div>
</template>

<style lang="">
    
</style>
