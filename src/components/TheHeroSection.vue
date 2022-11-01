<template>
  <section
    v-scroll-reveal
    role="hero"
    class="flex flex-col min-h-screen justify-center items-start p-0"
  >
    <h1 class="font-roboto ml-1 mb-5 font-normal text-secondary">Hello, my name is</h1>
    <div>
      <h2 class="text-primary heading--xl">Nzima Ivan.</h2>
      <h3 class="text-primary-light heading--xl mt-3">
        I solve problems by building useful web and mobile apps.
      </h3>
      <div class="ml-1 mt-7">
        <p class="text-primary-light">
          Mollit adipisicing non eiusmod anim duis ad dolor. Mollit tempor fugiat do esse.
          Lorem do officia et do dolor adipisicing exercitation ad mollit proident do
          commodo. Nulla officia dolore mollit labore id aute tempor aliqua laboris
          laborum.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@media (max-width: 480px) {
  h1 {
    margin: 0 0 20px 2px;
  }
}
h1 {
  line-height: 1.1;
}
h3 {
  line-height: 0.9;
}

p {
  max-width: 540px;
}
</style>
