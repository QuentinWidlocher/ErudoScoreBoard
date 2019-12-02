<template>
    <article class="card content">
        <div class="card-content">
            <div class="is-flex mb-3" style="align-items: center">
                <h2 class="has-text-primary is-size-1 has-font-secondary mb-0 mr-3" style="word-break: keep-all">{{ score.value }}</h2>
                <h3 class="my-0" style="word-break: break-word">{{ score.name }}</h3>
            </div>
            <p style="word-break: break-word">{{ score.description }}</p>
            <span class="date">{{ score.date | date }}</span>
        </div>
    </article>
</template>
<script lang="ts" src="./Card.ts"></script>
<style lang="scss" scoped src="./Card.scss"></style>