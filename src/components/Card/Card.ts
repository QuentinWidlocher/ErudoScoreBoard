import { Component, Vue, Prop } from "vue-property-decorator";
import Score from '@/models/Score';
import { date } from "@/filters/DateFilter";

@Component({
    filters: {
        date,
    }
})
export default class Card extends Vue {
    @Prop() score?: Score;
}