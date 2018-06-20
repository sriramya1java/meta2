<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <router-link :to="{ name: 'Page2', params: { id: 1234 }, query: { debug: true }}">Navigate to Page2</router-link>
    </div>
</template>