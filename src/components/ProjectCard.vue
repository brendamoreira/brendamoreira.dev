<template>
  <div class="cards-holder">
    <div class="card" v-for="project in projects" :key="projects.name">
      <div class="title">{{project.name}}</div>
      <div class="subtitle">{{project.subtitle}}</div>
      <div class="description">
        {{project.description}}<br/>
      </div>
      <a class="repo" :href="project.repo" target="_blank">Repository</a>
    </div>
  </div>
</template>
<script>
import data from "../data.json";
export default {
  name: "Cards",
  data() {
    return {
      projects: data,
    };
  },
};
</script>
<style scoped>
.cards-holder{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: auto;
}
.card {
  background-color: #f0e7fb;
  width: 400px;
  height: 200px;
  border-radius: 5px;
  padding: 8px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.25);
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
}
.subtitle{
  font-size: 0.8rem;
  font-style: italic;
}
.description{
 padding: 5px;
}
.repo{
  color: var(--primary-color);
  text-decoration: none;
  position: absolute;
  right: 8px;
  bottom: 8px;
}
.a, a:visited{
  color: var(--primary-color);
}
</style>
