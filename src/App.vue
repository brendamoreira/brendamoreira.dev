<script setup>
import NavBar from "./components/NavBar.vue";
import Icons from "./components/Icons.vue";
import Logo from "./components/Logo.vue";
</script>

<template>
  <header class="header">
    <Logo />
    <NavBar />
  </header>
  <Icons />
  <main class="content">
    <router-view />
  </main>
</template>

<style>
@import "./assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

#app {
  width: 100vw;
  height: 100vh;
  position: relative;
  margin: 0;
  padding: 2rem;
  font-family: "Open Sans", sans-serif;
}
.content {
  margin-left: 124px;
  padding-top: 150px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
