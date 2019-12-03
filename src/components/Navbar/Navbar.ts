import { Component, Vue } from "vue-property-decorator";
import { PlusIcon, SettingsIcon } from "vue-feather-icons";

@Component({
    components: {
        PlusIcon, SettingsIcon
    }
})
export default class Navbar extends Vue {
    menuActive = false;
}