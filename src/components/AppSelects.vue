<script  lang="ts">
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
            value: '',
        }
    }
}
</script>
<template>
    <div class="select-cont">
        <select v-model="value" class="form-select" aria-label="Default select example">
            <option value="" selected>Scegli il genere</option>
            <option value="{{character.archetype}}">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
        </select>
        <div v-if="value === '{{character.archetype}}'">
            <span>A</span>
        </div>
        <div v-if="value === '2'">
            <span>B</span>
        </div>
        <div v-if="value === '3'">
            <span>C</span>
        </div>
        <div v-if="value !== '{{character.archetype}}' && value !== '2' && value !== '3'">
            <span>Genere non selezionato</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.select-cont {
    width: 20%;
    margin: 2em 0em;
}
span {
    color: white;
    font-weight: bold;
}
</style>