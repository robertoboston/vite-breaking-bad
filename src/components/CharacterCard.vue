<script>
export default {
    props: {
        character: Object
    }
}
</script>
<template lang="">
    <div class="character text-center ">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="character.card_images[0].image_url" :alt="character.name" class="img-fluid">
            </div>
            <div class="flip-card-back">
                <div class="h2">
                    <h4> Rarity: {{character.card_sets[0].set_rarity}}</h4>
                    <div class="h4">Amazon Price: 
                        <h4>{{character.card_prices[0].amazon_price}}</h4> 
                    </div> 
                </div> 
            </div>
        </div>
        <div class="card-description">
            <h6 class="text-white">{{character.name}}</h6>
            <span>{{character.archetype}}</span>
        </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
.h2 {
    background-color: #ffffff53;
    padding: .2em;
}
h4 {
    text-transform: capitalize;
    margin-top: 10px;
    color: white;
}
</style>