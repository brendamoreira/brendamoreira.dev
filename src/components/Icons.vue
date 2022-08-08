<template>
  <div class="container">
    <a href="https://github.com/brendamoreira" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-github" /></a>
    <a href="https://gitlab.com/brendamoreira" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-gitlab" /></a>
    <a href="https://www.linkedin.com/in/brenda-moreiralima/" target="_blank"><font-awesome-icon class="icon" icon="fa-brands fa-linkedin" /></a>
  </div>
</template>
<script>
export default {
  name: "Icons",
};
</script>
<style scoped>
.container{
  position: absolute;
  left: 2rem;
  top: 50%;
  transform:translateY(-50%);
  background-color: var(--primary-color);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 28px 12px;
}
.icon{
  font-size: 2.5rem;
  color: white;
}
</style>
