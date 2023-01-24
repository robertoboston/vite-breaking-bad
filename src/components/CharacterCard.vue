<script>
export default {
    props:{
        card: Object
    }
    
}
</script>

<template lang="">
    <div class="col-12 col-md-3 mt-3" >
        <div class="cards-card">
            <div class="card-image">
                <img class="img-fluid" :src="card.card_images[0].image_url" alt="#">
            </div>
            <div class="card-info">
                <h4>{{ card.name }}</h4>
                <p>{{card.type}}</p>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
.cards-card{
    background-color: orange;
    margin: 0 10px;
    width: 100%;
    height: 100%;
    text-align: center;

    h4{
        text-transform: uppercase;
        color: white;
    }

    .card-info{
        padding: 10px;
    }
}
    
</style>