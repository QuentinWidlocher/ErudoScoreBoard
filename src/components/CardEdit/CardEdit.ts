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
    localDate: string = new Date().toISOString().split('T')[0];

    getConstants(): Constants {
        return Constants;
    }

    setDate(dateString: string) {
        this.localDate = dateString;

        if (!dateString) {
            this.score.date = new Date();
        } else {
            this.score.date = new Date(dateString);
        }
        
        console.log('set', this.localDate, this.score.date ? this.score.date.toISOString().split('T')[0] : undefined);
    }

    getDate(): string {
        console.log('get', this.localDate, this.score.date ? this.score.date.toISOString().split('T')[0] : undefined);
        return this.localDate;

        // if (this.score.date) {
        //     date = this.score.date.toISOString().split('T')[0]
        // } else {
        //     date =  new Date().toISOString().split('T')[0];
        // }
        // return date;
    }
}
