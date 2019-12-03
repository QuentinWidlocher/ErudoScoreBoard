<template>
  <div id="app">
    <div id="navbar">
      <Navbar></Navbar>
    </div>
    <div id="main">
      <section class="container is-mobile">
        <router-view :key="$route.fullPath"></router-view>
      </section>
    </div>
  </div>
</template>
<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
