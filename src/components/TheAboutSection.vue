<template>
  <section v-scroll-reveal role="aboutSection" class="about">
    <h2 class="text-primary heading">About Me</h2>
    <div class="about_content w-full flex md:flex-row md:items-start md:space-x-8">
      <div class="image_wrapper md:mt-0">
        <img src="/src/assets/images/about-me-cover.JPG" alt="image of nzima" />
      </div>

      <div class="description">
        <div class="paragraph_container">
          <p>
            Ea eu id officia nisi eu incididunt adipisicing duis aliquip. Deserunt officia
            quis laboris sunt nostrud in elit elit consectetur mollit labore. Sit pariatur
            reprehenderit amet enim duis occaecat in reprehenderit cillum excepteur ex
            anim ipsum et. Eiusmod velit sit voluptate laborum nostrud velit dolor dolore
            non.
          </p>

          <p>
            Pariatur qui eiusmod ex amet. Sit exercitation sit magna ipsum cupidatat
            veniam et do. Adipisicing ipsum labore pariatur incididunt veniam incididunt
            ex dolor Lorem dolore eu. Laboris ea ut cupidatat nisi sit ut.
          </p>

          <p>Sunt est non est duis ea velit elit minim occaecat.</p>
        </div>
        <ul class="techno-list font-roboto" role="list">
          <li>{{ "Javascript (ES6)" }}</li>
          <li>{{ "Vue JS" }}</li>
          <li>{{ "Node JS" }}</li>
          <li>{{ "Typescript" }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
@media (max-width: 480px) {
  li {
    font-size: var(--fz-normal) !important;
  }
}
@media (max-width: 768px) {
  .about_content {
    flex-direction: column-reverse;
  }

  .image_wrapper {
    margin-top: 62px;
    align-self: center;
  }
}
.about_content {
  .image_wrapper {
    box-shadow: var(--image-shadow);
    max-width: 300px;
    border-radius: var(--border-radius);
    display: inline-block;
  }
}

.paragraph_container {
  margin: 0;
  p {
    margin-bottom: 12px;
  }
}

ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 300px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  li {
    font-size: var(--fz-md);
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    color: var(--color-blue);
    &::before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: var(--color-red);
      line-height: 26px;
    }
  }
}
</style>
