<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>
            {{ $store.getters.scoreButPretty }}
        </h1>

        <p>
            <button @click="$store.dispatch('increment')">+ plus</button>
            <button @click="$store.commit('DECREMENT', 100)">- minus</button>
        </p>
    </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue' // eslint-disable-line

export default {
    name: 'Home',
    components: {
        HelloWorld // eslint-disable-line
    }
}
</script>
