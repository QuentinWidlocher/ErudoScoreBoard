<template>
    <article class="card">
     <div class="card-content">
      <div class="is-flex" style="align-items: flex-end">
       <!-- Value Field -->
       <div class="field">
        <label for="scoreValue" class="label">Value</label>
        <div class="control">
         <input id="scoreValue" name="Score Value" type="number" class="input is-large is-primary has-font-secondary"/>
        </div>
       </div>

       <!-- Name Field -->
       <div class="field" style="width: 100%;">
        <label for="scoreName" class="label">Name</label>
        <div class="control is-expanded has-icons-left">
         <input id="scoreName" name="Score Name" type="text" class="input" />
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
        <input id="scoreDate" name="Score Date" type="date" class="input" />
        <span class="icon is-left">
         <i data-feather="calendar"></i>
        </span>
       </div>

       <!-- Description Field -->
       <div class="control is-expanded has-icons-left">
        <label for="scoreDescription" class="label">Description</label>
        <input id="scoreDescription" name="Score Description" type="text" class="input" />
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