import { Component, Vue, Prop } from "vue-property-decorator";
import Score from "@/models/Score";
import { Edit3Icon, CalendarIcon, InfoIcon } from "vue-feather-icons";

@Component({
    components: {
        Edit3Icon, CalendarIcon, InfoIcon
    }
})
export default class CardEdit extends Vue {
    @Prop({default: new Score()}) score!: Score;

    beforeMount() {
        // Initialize the date to today 
        this.score.date = new Date();
    }
}
