import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
import Projects from "@/pages/Projects.vue"
import OpenSource from "@/pages/OpenSource.vue"
import Skills from "@/pages/Skills.vue"

const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/projects", name: "Projects", component: Projects},
    {path: "/skills", name: "Skills", component: Skills},
    {path: "/opensource", name: "opensource", component: OpenSource}
];
export default createRouter({
    history: createWebHistory(), 
    routes
})