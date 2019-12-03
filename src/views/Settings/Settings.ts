import { Component, Vue, Watch } from "vue-property-decorator";
import { globalVariables, GlobalVariables } from "@/services/globalVariables";
import Score from '@/models/Score';
import Card from "@/components/Card/Card.vue";

@Component({
    components: {
        Card,
    }
})
export default class Settings extends Vue {
    private globalVariables: GlobalVariables = globalVariables;
    private defaultScore: Score = new Score();
    private listFormat: number = this.globalVariables.listFormat;

    private currentTab: string = 'list-layout';

    beforeMount() {
        this.defaultScore.name = 'Test Card with a long long long long looooong name';
        this.defaultScore.date = new Date();
        this.defaultScore.description = 'Super Ultra Description Arcade RMX Hyper Edition EX + Alpha'
        this.defaultScore.value = 23;

        // this._listFormat = this.globalVariables.listFormat;
    }

    getListFormatClass() {
        return `is-${+this.listFormat + 1}-tablet is-${this.listFormat}-desktop`;
    }

    @Watch('listFormat')
    onListFormat(val: number, oldVal: number) {
        this.globalVariables.listFormat = this.listFormat;
    }
}