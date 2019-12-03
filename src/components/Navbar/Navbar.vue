<template>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <h1 class="navbar-item is-size-4">
                <router-link :to="{name:'home'}">Erudo Score Board</router-link>
            </h1>

            <a role="button" class="navbar-burger" :class="{ 'is-active': menuActive }"
                @click="menuActive = !menuActive" aria-label="menu">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" :class="{ 'is-active': menuActive }">
            <div class="navbar-end" @click="menuActive = false">
                <router-link :to="{name:'create'}" class="navbar-item">
                    <span class="icon mr-2" style="vertical-align:bottom;">
                        <plus-icon></plus-icon>
                    </span>
                    Add a new High Score
                </router-link>
                <router-link :to="{name:'settings'}" class="navbar-item">
                    <span class="icon mr-2" style="vertical-align:bottom;">
                        <settings-icon></settings-icon>
                    </span>
                    Settings
                </router-link>
            </div>
        </div>
    </nav>
</template>
<script lang="ts" src="./Navbar.ts"></script>
<style lang="scss" scoped src="./Navbar.scss"></style>