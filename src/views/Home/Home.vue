<template>
    <div id="home">
        <div class="columns is-multiline is-centered">
            <div class="column is-5" v-for="(achievement,i) in achievements" :key="i">
                <article class="card content">
                    <div class="card-content">
                        <div class="is-flex" style="align-items: baseline">
                            <h2 class="has-text-primary is-size-1">{{Math.floor((Math.random()+1)*achievement.power)}}</h2>
                            <h3>{{achievement.label}}</h3>
                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione non mollitia quaerat, nam commodi repudiandae repellendus, impedit enim nulla dolorum ut cum qui expedita architecto? Enim facilis pariatur illum autem?
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Home.ts"></script>
<style lang="scss" src="./Home.scss" scoped></style>