import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
import "./styles/index.scss";
import "inter-ui/inter.css";
import "inter-ui/inter-variable.css";
import "non.geist/mono"

export default {
  Layout: Layout,
} satisfies Theme;
