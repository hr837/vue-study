import "vite-plugin-svg-icons/register";
import SvgIcon from "./SvgIcon.vue";
import { App } from "vue";

export default function useSvgIcon(app: App) {
  app.component("svg-icon", SvgIcon);
}
