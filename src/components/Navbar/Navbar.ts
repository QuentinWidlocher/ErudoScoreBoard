import { Component, Vue, Watch } from "vue-property-decorator";
import { PlusIcon, SettingsIcon } from "vue-feather-icons";
import router from "@/router/index";

@Component({
    components: {
        PlusIcon, SettingsIcon
    }
})
export default class Navbar extends Vue {
    menuActive = false;
}