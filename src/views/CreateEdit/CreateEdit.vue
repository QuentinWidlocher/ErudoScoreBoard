<template>
    <div id="create-edit" v-if="!loading">
        <div class="columns mx-1 is-mobile is-centered">
            <div class="column is-10-desktop is-7-widescreen">
                <CardEdit :score="score" />
                <div class="buttons is-right">
                    <button class="button is-danger mr-auto" v-if="createOrEdit === 'edit'" @click="showDeleteModal = true">
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

        <div class="modal is-danger" :class="{ 'is-active' : showDeleteModal}">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title is-flex has-text-danger" style="align-items: center;">
                        <span class="icon mr-2"><alert-circle-icon></alert-circle-icon></span>
                        Warning !
                    </p>
                    <button class="delete" aria-label="close" @click="showDeleteModal = false"></button>
                </header>
                <section class="modal-card-body">
                    <p>
                        You are about to delete a score.
                        Are you sure you want to delete it ? <br>
                        This action is <em>irreversible</em>.
                    </p>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-danger is-outline mr-auto" @click="confirmDelete()">Delete the score</button>
                    <button class="button" aria-label="close" @click="showDeleteModal = false">Cancel and go back</button>
                </footer>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./CreateEdit.ts"></script>
<style lang="scss" src="./CreateEdit.scss" scoped></style>