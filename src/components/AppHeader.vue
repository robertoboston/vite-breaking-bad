<script>
export default {
    props: {
        message: String
    }
    
}
</script>
<template>
    <header class="container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/11/Yu-Gi-Oh%21_%28Logo%29.jpg" alt="">
        <h1 class="app-title">{{ message }}</h1>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
header {
    @include center;
    margin-top: 2rem;
    align-items: center;
    img {
        width: 200px;
    }
    .app-title {
        text-align: center;
        text-transform: uppercase;
        margin-left: 1em;
    }
}
</style>