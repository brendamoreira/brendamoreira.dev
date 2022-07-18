<template>
  <div class="home">
    <div class="triangle">
      <svg
        width="410"
        height="414"
        viewBox="0 0 410 414"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.3304 269.129C-2.34313 256.673 -8.56308 218.753 14.6287 197.79L220.878 11.3592C243.588 -9.16886 279.867 -0.0634885 290.193 28.7557L407.313 355.659C420.014 391.11 384.239 424.605 349.7 409.601L26.3304 269.129Z"
          fill="#6F03F9"
          fill-opacity="0.14"
        />
      </svg>
    </div>
    <h2>
      Hi! <br />
      <br />
      My name is <span class="highlight-text">Brenda</span>, I'm a Frontend
      Developer!<br />
      Welcome to my portifolio! Feel free to look around, <br />
      here you can find my
      <span class="highlight-text">projects</span> and a bit more
      <span class="highlight-text">about me</span>.
    </h2>
  </div>
</template>
<style scoped>
.home h2 {
  margin: auto;
  width: max-content;
  font-size: 2rem;
  z-index: 2;
}
.triangle{
  position: absolute;
  right: 25%;
  top: -30%;
  z-index: 1;
}
</style>
