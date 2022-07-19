<template>
  <h3 class="t-skills" v-for="skill in skills" :key="skill.name">
    <span :style="`color:${skill.color};`"><font-awesome-icon class="icon" :icon="`fa-brands ${skill.code}`" /></span>{{
      skill.name
    }}
  </h3>
</template>
<script>
export default {
  props:{
    skills:{
      required: true,
      type: Array
    }
  },
};
</script>
<style scoped>
.t-skills{
  font-weight: bold;
  display: flex;
  gap:7px;
  align-items: baseline;
}

.icon{
  font-size: 1.7rem;
}
</style>
