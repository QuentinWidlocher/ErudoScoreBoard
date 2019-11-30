import { Component, Vue, Prop } from "vue-property-decorator";
import CardEdit from "@/components/CardEdit/CardEdit.vue";
import router from "@/router/index";
import Score from '@/models/Score';
import toScore from "@/mappers/ScoreMapper";
import { firebaseService } from "@/services/firebase";

@Component({
    components: {
        CardEdit,
    }
})
export default class CreateEdit extends Vue {
    @Prop({default : 'create'}) createOrEdit!: string;
    @Prop() scoreId!: string;

    score: Score = new Score();
    loading: boolean = true;

    mounted() {
        if (this.createOrEdit !== 'create' && this.createOrEdit !== 'edit') {
            router.go(-1);
        }

        this.load();
    }

    async load() {
        this.loading = true;
        if (this.createOrEdit === 'edit') {
            this.score = await this.loadScore(this.scoreId);
        }
        this.loading = false;
    }

    async loadScore(id: string): Promise<Score> {
        return firebaseService.db.collection('scores').doc(id).get().then((scoreDoc: firebase.firestore.DocumentSnapshot) => {
            if (scoreDoc.data() !== undefined) {
                return toScore(scoreDoc);
            } else {
                return new Score();
            }
        });
    }

    cancel() {
        router.push({name: 'home'});
    }
}