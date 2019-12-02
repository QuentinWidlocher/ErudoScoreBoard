<template>
 <div id="create-edit" v-if="!loading">
  <div class="columns is-centered">
   <div class="column is-7">
    <CardEdit :score="score"/>
    <div class="buttons is-right">
        <button class="button is-danger mr-auto" @click="deleteScore()">
            <span class="icon">
                <trash-icon></trash-icon>
            </span>
            <span>Delete</span>
        </button>
        <button class="button is-danger is-outlined" @click="cancelEdition()">
            <span class="icon">
                <x-icon></x-icon>
            </span>
            <span>Cancel</span>
        </button>
        <button class="button is-success" :disabled="!score.isObjectValid()" @click="saveEdition()">
            <span class="icon">
                <save-icon></save-icon> 
            </span>
            <span>Save</span>
        </button>
    </div>
   </div>
  </div>
 </div>
</template>
<script lang="ts" src="./CreateEdit.ts"></script>
<style lang="scss" src="./CreateEdit.scss" scoped></style>