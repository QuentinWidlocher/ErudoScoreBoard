<template>
    <div id="settings">
        <div class="tabs">
            <ul>
                <li :class="{'is-active':(currentTab === 'list-layout')}"><a>List Layout</a></li>
            </ul>
        </div>
        <div id="settings-main" class="mx-1">
            <div v-if="currentTab === 'list-layout'">
                <div class="field mb-4">
                    <label for="listLayoutSlider" class="label">List layout size :</label>
                    <input id="listLayoutSlider" class="slider is-fullwidth is-primary is-circle my-0"
                        v-model="listFormat" step="1" min="3" max="12" type="range">
                    <p class="help">Useless on mobile</p>
                </div>
                <div class="columns mx-1 is-multiline is-centered is-vcentered">
                    <div class="column" :class="getListFormatClass()" v-for="i in Array(5).keys()" :key="i">
                        <Card :score="defaultScore"></Card>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./Settings.ts"></script>
<style lang="scss" scoped src="./Settings.scss"></style>