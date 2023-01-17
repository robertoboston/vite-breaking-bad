<script>
import CharacterCard from './CharacterCard.vue';
import { store } from '../store.js';
export default {
    components: {
        CharacterCard,
    },
    data() {
        return {
            store,
            activeItem: 0,
        }
    },
}
</script>
<template lang="">
    <div class="container_select">
        <div class="found">
            <h2>found 39 card</h2>
        </div>
        <div class="loading" v-if="store.loading">
            <h2>Loading</h2>
            <svg viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="20" />
            </svg>
        </div>
        <div v-else>
            <div class="container_card flex-wrap">
                <CharacterCard v-for="(item, index) in store.charactersList" :key="index" :character="item"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
.container_select {
    background-color: white;
    .container_card {
        @include between;
    }
    .found {
        padding: 1em 2em;
        background-color: rgb(62, 62, 62);
        @include upbold;
        color: white;
    }
    .loading {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2em;
        svg {
            width: 4em;
            height: 4em;
            animation: spin 1s linear infinite;
            @keyframes spin {
                100% {
                    rotate: 360deg;
                }
            }
            @keyframes dash {
                0% {
                    stroke-dasharray: 1, 150;
                    stroke-dasharray: 0;
                }
                50% {
                    stroke-dasharray: 90, 150;
                    stroke-dasharray: -35;
                }
                100% {
                    stroke-dasharray: 90, 150;
                    stroke-dasharray: -124;
                }
            }
        }
        circle {
            fill: none;
            stroke: #000000;
            stroke-width: 3px;
            stroke-linecap: round;
            animation: dash 3s ease-in-out infinite
        }
    }
}
</style>