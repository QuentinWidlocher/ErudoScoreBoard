import { Component, Vue, Prop } from "vue-property-decorator";
import Score from "@/models/Score";
import { Edit3Icon, CalendarIcon, InfoIcon } from "vue-feather-icons";
import Constants from '@/services/constants';

@Component({
    components: {
        Edit3Icon, CalendarIcon, InfoIcon,
    }
})
export default class CardEdit extends Vue {
    @Prop({default: new Score()}) score!: Score;

    constants: Constants = new Constants();

    beforeMount() {
        if (!this.score) {
            this.score = new Score();
        }

        // Initialize the date to today 
        this.score.date = new Date();
    }

    getConstants(): Constants {
        return Constants;
    }
}
