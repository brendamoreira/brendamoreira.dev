<template>
  <header class="header" id="header">
    <ul>
      <li v-for="section in sections" :key="section.name">
        <router-link active-class="active-section" class="section" :to="section.to">{{ section.name }}</router-link>
      </li>
    </ul>
  </header>
</template>
<script>
export default {
  data() {
    return {
      sections: [
        { name: "Home", to: "/" },
        { name: "Projects", to: "/projects" },
        { name: "Skills", to: "/skills" },
        { name: "Open Source", to: "/opensource" }
      ],
    };
  },
};
</script>
<style scoped>
header {
  text-align: right;
}
ul {
  list-style: none;
  position: relative;
  padding-left: 0;
  margin: 0;
  display: inline;
}
li {
  display: inline;
  cursor: pointer;
  margin: 10px;
  font-size: 24px;
  color: black;
}
.section{
  text-decoration: none;
}
.active-section{
  color: var(--primary-color);
}
</style>
