<template>
  <section role="about" class="about">
    <h1 class="text-primary heading">About me</h1>
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
        <ul class="techno-list" role="list">
          <li>{{ "Javascript (ES6)" }}</li>
          <li>{{ "Vue JS" }}</li>
          <li>{{ "Node JS" }}</li>
          <li>{{ "Typescript" }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
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
  p {
    margin-bottom: 12px;
  }
}

ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;

  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    color: var(--color-blue);
    &::before {
      content: "▹";
      position: absolute;
      left: 0px;
      color: var(--color-red);
      //   font-size: var(--fz-sm);
      line-height: 26px;
    }
  }
}
</style>
