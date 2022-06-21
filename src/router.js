import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
import Projects from "@/pages/Projects.vue"
import OpenSource from "@/pages/OpenSource.vue"
import Skills from "@/pages/Skills.vue"

const routes = [
    {path: "/", name: "Home", component: Home},
    {path: "/projects", name: "Projects", component: Projects}
];
export default createRouter({
    history: createWebHistory(), 
    routes
})