<script>
export default {
    props: {
        message: String
    }
    
}
</script>
<template>
    <header class="container">
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
    .app-title {
        text-align: center;
        text-transform: uppercase;
        margin-left: 1em;
    }
}
</style>