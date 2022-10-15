<template>
  <div
    id="right"
    aria-orientation="left"
    class="fixed bottom-0 left-auto w-10 lg:right-12 md:right-8 right-4"
  >
    <div class="w-full flex justify-center items-center">
      <p class="text-primary-lightest font-roboto">
        <a href=""> nzima.ivan.franck@gmail.com </a>
      </p>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
#right {
  p {
    writing-mode: vertical-rl;
    cursor: pointer;

    a {
      transition: var(--transition-default);
      padding: 10px;
      text-decoration: none;
      display: inline-block;

      &:hover,
      &:focus {
        transform: translateY(-3px);
        color: var(--color-red);
      }
    }
  }
  &::after {
    content: "";
    display: block;
    width: 0.1rem;
    height: 6rem;
    margin: 0px auto;
    background-color: var(--color-lightest-blue);
  }
}
</style>
