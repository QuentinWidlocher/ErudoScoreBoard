<template>
    <article class="card content">
        <div class="card-content">
            <div class="is-flex" style="align-items: baseline">
                <h2 class="has-text-primary is-size-1 has-font-secondary">{{ score.value }}</h2>
                <h3>{{ score.name }}</h3>
            </div>
            <p><em>{{ score.date | date }}</em> - {{ score.description }}</p>
        </div>
    </article>
</template>
<script lang="ts" src="./Card.ts"></script>
<style lang="scss" scoped src="./Card.scss"></style>