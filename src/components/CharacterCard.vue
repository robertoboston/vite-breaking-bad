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
.flip-card {
    height: 400px;
    width: 200px;
    margin: 1em;
    padding: 1em;
    background-color: orange;
    border: 1px solid black;
    @include between;
    flex-direction: column;
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }
    .card-description {
        margin-top: 4em;
    }
}
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-image: url(https://upload.wikimedia.org/wikipedia/en/2/2b/Yugioh_Card_Back.jpg);
    background-size: contain;
    background-repeat: no-repeat;
}
.flip-card-back {
    color: white;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: .8em;
}
</style>