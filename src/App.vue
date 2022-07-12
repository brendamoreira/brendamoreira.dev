<script setup>
import NavBar from "./components/NavBar.vue";
import Icons from "./components/Icons.vue";
import Logo from "./components/Logo.vue";
</script>

<template>
  <Logo />
  <Icons />
  <div class="main">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
@import "./assets/base.css";
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');

#app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 2rem;
  font-family: 'Open Sans', sans-serif;
}
.main {
  margin: 0 auto;
}
</style>
