<template>
  <section v-scroll-reveal role="contactSection" class="contact" id="contact_section">
    <h2 class="text-primary heading text-center">Get In Touch</h2>
    <div class="w-full flex flex-col justify-center items-center md:space-x-8">
      <p class="text-center">
        My inbox is always open. Whether you want a collaboration or have a quetion, I’ll
        try my best to get back to you!
      </p>
      <a class="contact-CTA font-roboto" href="mailto:nzima.ivan.franck@gmail.com"
        >Contact me</a
      >
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.contact-CTA {
  color: var(--color-red);
  background-color: transparent;
  border: 1px solid var(--color-red);
  border-radius: var(--border-radius);
  padding: 1.25rem 1.75rem;
  font-size: var(--fz-xs);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: var(--transition-default);
  margin-top: 50px;

  &:focus,
  &:active,
  &:hover {
    background-color: var(--color-lightest-red);
    outline: none;
  }
}
</style>
