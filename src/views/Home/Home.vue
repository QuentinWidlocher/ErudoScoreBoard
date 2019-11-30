<template>
    <div id="home">
        <div v-if="!loading" class="columns is-multiline is-centered">
            <div class="column is-5" v-for="(score,i) in scores" :key="i">
                <Card :score="score"></Card>
            </div>
        </div>
        <p v-for="(i,j) in Array(1000).keys()" :key="j">
            prout {{i}} <br>
        </p>
        <progress v-if="loading" class="progress is-small is-primary" max="100"></progress>
    </div>
</template>
<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss" scoped></style>