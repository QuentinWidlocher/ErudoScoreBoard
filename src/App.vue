<template>
  <div id="app">
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <h1 class="navbar-item is-size-4">
          <router-link :to="{name:'home'}">Erudo Score Board</router-link>
        </h1>

        <a role="button" class="navbar-burger" :class="{ 'is-active': menuActive }" @click="menuActive = !menuActive" aria-label="menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': menuActive }">
        <div class="navbar-end">
        </div>
      </div>
    </nav>
    <div id="main">
      <section class="container is-mobile">
        <router-view></router-view>
      </section>
    </div>
  </div>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
