import { Component, Vue, Prop } from "vue-property-decorator";
import CardEdit from "@/components/CardEdit/CardEdit.vue";
import router from "@/router/index";
import Score from '@/models/Score';
import ScoreMapper from "@/mappers/ScoreMapper";
import { firebaseService } from "@/services/firebase";
import { SaveIcon, XIcon, TrashIcon, AlertCircleIcon } from "vue-feather-icons";
import Constants from '@/services/constants';

@Component({
    components: {
        CardEdit,
        SaveIcon, XIcon, TrashIcon, AlertCircleIcon,
    }
})
export default class CreateEdit extends Vue {
    @Prop({default : 'create'}) createOrEdit!: string;
    @Prop() scoreId!: string;

    score: Score = new Score();
    loading: boolean = true;
    showDeleteModal: boolean = false;
    constants: Constants = new Constants();

    valid = {
        value: false,
        name: true,
    }


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
        } else {
            this.score = new Score();
        }
        this.loading = false;
    }

    async loadScore(id: string): Promise<Score> {
        return firebaseService.db.collection('scores').doc(id).get().then((scoreDoc: firebase.firestore.DocumentSnapshot) => {
            if (scoreDoc.data() !== undefined) {
                return ScoreMapper.toScore(scoreDoc);
            } else {
                return new Score();
            }
        });
    }

    saveEdition() {
        if (!this.score.isObjectValid()) return;

        let savePromise: Promise<any>;
        if (this.createOrEdit === 'edit') {
            savePromise = firebaseService.db.collection('scores').doc(this.score.id).update(ScoreMapper.toDocument(this.score))
        } else {
            savePromise = firebaseService.db.collection('scores').add(ScoreMapper.toDocument(this.score));
        }

        savePromise.then(() => {
            router.push({ name: 'home' });
        });
    }

    cancelEdition() {
        router.push({name: 'home'});
    }

    confirmDelete() {
        firebaseService.db.collection('scores').doc(this.score.id).delete().then(() => {
            router.push({ name: 'home' });
        });
    }
}