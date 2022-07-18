<template>
  <div class="container">
    <font-awesome-icon class="icon" icon="fa-brands fa-github" />
    <font-awesome-icon class="icon" icon="fa-brands fa-gitlab" />
    <font-awesome-icon class="icon" icon="fa-brands fa-linkedin" />
  </div>
</template>
<script>
export default {
  name: "Icons",
};
</script>
<style>
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
