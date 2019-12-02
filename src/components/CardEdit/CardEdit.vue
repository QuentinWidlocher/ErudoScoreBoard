<template>
    <article class="card mb-3">
        <div class="card-content">
            <div class="field is-grouped is-grouped-multiline" style="align-items: flex-end">
                <!-- Value Field -->
                <div class="control">
                    <label for="scoreValue" class="label">Value</label>
                    <input 
                        id="scoreValue" 
                        name="Score Value" 
                        v-model="score.value" 
                        type="number"
                        class="input is-large is-primary has-font-secondary" 
                        :class="{'is-danger': !score.isFieldValid('value')}"
                    />
                </div>

                <!-- Name Field -->
                <div class="control is-expanded has-icons-left">
                <label for="scoreName" class="label">Name</label>
                    <input 
                        id="scoreName" 
                        name="Score Name" 
                        v-model="score.name" 
                        type="text" 
                        class="input" 
                        :class="{'is-danger': !score.isFieldValid('name')}"
                    />
                    <span class="icon is-left">
                        <edit-3-icon></edit-3-icon>
                    </span>
                    <div class="help is-pulled-right">{{ score.name ? score.name.length : 0}}/{{ getConstants().CARD_MAX_CHARS['name'] }}</div>
                </div>
            </div>

            <div class="field is-grouped is-grouped-multiline">

                <!-- Date Field -->
                <div class="control has-icons-left">
                    <label for="scoreDate" class="label">Date</label>
                    <input 
                        id="scoreDate" 
                        name="Score Date" 
                        :value="getDate()"
                        @input="setDate($event.target.value)" 
                        type="date" 
                        class="input" 
                        :class="{'is-danger': !score.isFieldValid('value')}"
                    />
                    <span class="icon is-left">
                        <calendar-icon></calendar-icon>
                    </span>
                </div>

                <!-- Description Field -->
                <div class="control is-expanded has-icons-left">
                    <label for="scoreDescription" class="label">Description</label>
                    <input 
                        id="scoreDescription" 
                        name="Score Description" 
                        v-model="score.description" 
                        type="text"
                        class="input" 
                        :class="{'is-danger': !score.isFieldValid('description')}"
                    />
                    <span class="icon is-left">
                        <info-icon></info-icon>
                    </span>
                    <div class="help is-pulled-right">{{ score.description ? score.description.length : 0}}/{{ getConstants().CARD_MAX_CHARS['description'] }}</div>
                </div>

            </div>
        </div>
    </article>
</template>
<script lang="ts" src="./CardEdit.ts"></script>
<style lang="scss" scoped src="./CardEdit.scss"></style>