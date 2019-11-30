import { Component, Vue, Prop } from "vue-property-decorator";
import Score from "@/models/Score";

@Component
export default class CreateEdit extends Vue {
    @Prop({default: new Score()}) score!: Score;
}