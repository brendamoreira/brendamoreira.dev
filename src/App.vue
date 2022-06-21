<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main>
    <router-view />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
