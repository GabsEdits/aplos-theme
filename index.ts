import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
import "./styles/index.scss";
import "inter-ui/inter.css";
import "inter-ui/inter-variable.css";
import "inter-ui/inter-display.css";
import "@fontsource/source-code-pro/500.css";

export default {
  Layout: Layout,
} satisfies Theme;
