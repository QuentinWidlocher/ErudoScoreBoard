<template>
 <div id="create-edit" v-if="!loading">
  <div class="columns is-centered">
   <div class="column is-7">
    <CardEdit :score="score"/>
    <div class="buttons is-right">
        <button class="button is-danger mr-auto">Delete</button>
        <button class="button is-danger is-outlined" @click="cancel()">Cancel</button>
        <button class="button is-success">Save</button>
    </div>
   </div>
  </div>
 </div>
</template>
<script lang="ts" src="./CreateEdit.ts"></script>
<style lang="scss" src="./CreateEdit.scss" scoped></style>