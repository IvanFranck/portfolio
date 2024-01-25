<template>
  <section
    v-scroll-reveal
    role="hero"
    class="outer_container p-0"
    id="hero_section"
  > 
    <div class="center_section">
      <h1 class="font-roboto ml-1 mb-5 font-normal text-right">Hello, my name is</h1>
      <div>
        <h2 class="text-primary heading--xl">NZIMA Ivan.</h2>
        <h2 class="text-primary heading--xl">I'm a sofware engineer.</h2>
        <h3 class="text-primary-light heading--xl mt-3">
          I solve problems by building useful web and mobile apps.
        </h3>
        <div class="mt-8">
          <a class="contact-CTA font-roboto" href="mailto:nzima.ivan.franck@gmail.com">
            Contact me
          </a>
        </div>
      </div>
    </div>
    <TheFooter class="footer_section" />
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

.contact-CTA {
  display: inline-block;
  color: var(--bg);
  background-color: var(--color-red);
  border: 1px solid var(--color-red);
  border-radius: var(--border-radius);
  padding: 1rem .6rem;
  font-size: var(--fz-sm);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition-default);

  &:focus,
  &:active,
  &:hover {
    // background-color: var(--color-lightest-red);
    box-shadow: 23px 28px 50px 1px rgba(239,114,127,0.6);
    -webkit-box-shadow: 23px 28px 50px 1px rgba(239,114,127,0.6);
    -moz-box-shadow: 23px 28px 50px 1px rgba(239,114,127,0.6);
    outline: none;
  }

}

.outer_container{
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}

.center_section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.footer-section {
  margin-top: auto;
}

</style>
