<template>
    <div id="home">
        <div v-if="!loading" class="columns is-multiline is-centered">
            <div class="column is-5" v-for="(score,i) in scores" :key="i">
                <Card :score="score"></Card>
            </div>
        </div>
        <progress v-if="loading" class="progress is-small is-primary" max="100"></progress>
    </div>
</template>
<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss" scoped></style>