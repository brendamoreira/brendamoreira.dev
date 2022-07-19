<template>
  <div class="cards-holder">
    <div class="card" v-for="project in projects" :key="projects.name">
      <div class="title">{{project.name}}</div>
      <div class="description">
        {{project.description}}
      </div>
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
<style>
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
  padding: 5px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.25);
}
.title {
  font-size: 20px;
  font-weight: bold;
  margin: 5px;
}
.description{
 padding: 5px;
}
</style>
