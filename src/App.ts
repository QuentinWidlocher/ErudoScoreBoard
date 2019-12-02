import { Component, Vue } from "vue-property-decorator";
import { PlusIcon } from "vue-feather-icons";

@Component({
    components: {
        PlusIcon
    }
})
export default class App extends Vue { 
    menuActive = false;
}