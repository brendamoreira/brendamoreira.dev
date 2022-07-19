<template>
<div class="skills-container">
  <h2 class="highlight-text">Tech skills:</h2>
  <div class="tech-skills">
    <Skill :skills="skills" />
  </div>
  <h2 class="highlight-text soft">Soft skills:</h2>
  <p class="answer">
    I'm a very <span class="highlight-text">hard-working</span>,
    <span class="highlight-text">dedicated</span> and
    <span class="highlight-text">disciplinated</span> self-taught developer.
    I've been doing some courses since I've moved to the Netherlands. I'm very
    good in <span class="highlight-text">communicating</span> and expressing
    myself. I consider myself a
    <span class="highlight-text">good learner</span> but also know my
    limitations. I'll do my best to make each second count on every task I work
    on, also knowing
    <span class="highlight-text">when it's time to ask for help</span>. Im very
    passionate about development in general. I can also
    <span class="highlight-text">set priorities</span> on what to learn next and
    I'm willing to learn different tech stacks.
  </p>
  <h2 class="highlight-text next">What I plan to do next?</h2>
  <p class="answer">
    My personal roadmap includes brushing up my
    <span class="highlight-text">responsive css development techniques</span>,
    make some projects using <span class="highlight-text">SASS</span>, improve
    my <span class="highlight-text">Javascript</span> skills and then head
    further on <span class="highlight-text">Vue</span> and then do some projects
    with <span class="highlight-text">React</span>. Improve my
    <span class="highlight-text">Dutch</span> and do some more
    <span class="highlight-text">open source contributions</span>!
  </p>
  </div>
</template>
<script>
import skills from "../skills.json";
import Skill from "../components/Skill.vue";
export default {
  components: { Skill },
  data() {
    return {
      skills: skills,
    };
  },
};
</script>
<style scoped>
.tech-skills {
  display: flex;
  gap: 30px;
  margin: 30px;
  align-items: center;
}
.answer{
  margin: 10px;
}
.next{
  margin-top: 30px;
}
</style>
