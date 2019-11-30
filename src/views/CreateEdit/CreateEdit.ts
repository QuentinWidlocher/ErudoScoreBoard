import { Component, Vue, Prop } from "vue-property-decorator";
import CardEdit from "@/components/CardEdit/CardEdit.vue";
import router from "@/router/index";

@Component({
    components: {
        CardEdit,
    }
})
export default class CreateEdit extends Vue {
    @Prop({default : 'create'}) createOrEdit!: string;
    @Prop() scoreId!: string;

    mounted() {
        if (this.createOrEdit !== 'create' && this.createOrEdit !== 'edit') {
            router.go(-1);
        }
    }
}