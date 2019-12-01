<template>
    <article class="card mb-3">
     <div class="card-content">
      <div class="is-flex mb-3" style="align-items: flex-end">
       <!-- Value Field -->
       <div class="field mb-0 mr-3">
        <label for="scoreValue" class="label">Value</label>
        <div class="control">
         <input id="scoreValue" name="Score Value" v-model="score.value" type="number" class="input is-large is-primary has-font-secondary"/>
        </div>
       </div>

       <!-- Name Field -->
       <div class="field" style="width: 100%;">
        <label for="scoreName" class="label">Name</label>
        <div class="control is-expanded has-icons-left">
         <input id="scoreName" name="Score Name" v-model="score.name" type="text" class="input" />
         <span class="icon is-left">
          <i data-feather="edit-3"></i>
         </span>
        </div>
       </div>
      </div>

      <div class="field has-addons">
       <!-- Date Field -->
       <div class="control has-icons-left">
        <label for="scoreDate" class="label">Date</label>
        <input id="scoreDate" name="Score Date" 
            v-bind:value="score.date.toISOString().split('T')[0]" 
            v-on:input="score.date = new Date($event.target.value)" 
            type="date" class="input" />
        <span class="icon is-left">
         <i data-feather="calendar"></i>
        </span>
       </div>

       <!-- Description Field -->
       <div class="control is-expanded has-icons-left">
        <label for="scoreDescription" class="label">Description</label>
        <input id="scoreDescription" name="Score Description" v-model="score.description" type="text" class="input" />
        <span class="icon is-left">
         <i data-feather="info"></i>
        </span>
       </div>
      </div>
     </div>
    </article>
</template>
<script lang="ts" src="./CardEdit.ts"></script>
<style lang="scss" scoped src="./CardEdit.scss"></style>