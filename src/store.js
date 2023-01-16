import { reactive } from 'vue'

export const store = reactive({
    ulr: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien',
    cardList : [],
    loading : true

})