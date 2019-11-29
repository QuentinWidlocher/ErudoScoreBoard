import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component
export default class Home extends Vue {
    achievements = [
        { label: "lettres dans un nom de fonction", power: 20 },
        { label: "TU plantés en même temps", power: 100 },
        { label: "jours passé sur une story", power: 10 },
        { label: "cafés bu en une journée", power: 5 },
        { label: "lignes dans un fichier", power: 600 },
        { label: "story points en une semaine", power: 25 },
    ]

    private mounted() {
        
    }
}