<template>
  <div class="project">
    <div class="project-content">
      <div>
        <p class="project-title link-2 font-roboto text-secondary">
          <a href="">5nkap</a>
        </p>
        <h3 class="text-primary mb-5">Building an accounting web app</h3>
      </div>
      <div class="project-description">
        <p class="copy-2">
          Laboris commodo nulla commodo mollit officia id dolor exercitation veniam. Qui
          irure do aute consequat nulla.
        </p>
      </div>
      <ul class="project-tech-list flex flex-wrap relative mt-6 mb-3 font-roboto note">
        <li>Vue JS</li>
        <li>Typescript</li>
        <li>Prime Vue</li>
        <li>Vue Use</li>
        <li>Vue Router</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
    <div class="project-image">
      <a href="">
        <img src="/src/assets/images/5nkap-app.png" alt="" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "/src/assets/scss/_mixin.scss";

.project {
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:nth-of-type(2n + 1) &-image {
    grid-column: 1/8;
  }

  &:nth-of-type(2n + 1) &-content {
    grid-column: 5/-1;
    text-align: right;
  }

  &-content {
    grid-area: 1 / 1 / -1 / 7;
    position: relative;
    z-index: 2;

    .project-title {
      @include link-primary;
      color: var(--color-red);
      margin: 10px 0px;
    }

    h3 {
      font-size: clamp(24px, 5vw, 28px);
      font-weight: 600;
    }

    .project-description {
      padding: 25px;
      border-radius: 4px;
      background-color: var(--color-blue);
      color: var(--color-lightest-blue);
      box-shadow: 0 10px 30px -15px var(--blue-shadow);
      transition: var(--transition-default);

      &:hover,
      &:focus {
        box-shadow: 0 20px 30px -15px var(--blue-shadow);
      }
    }

    .project-tech-list {
      list-style: none;
      li {
        margin: 0 0 5px 20px;

        &::before {
          content: "#";
        }
      }
    }
  }

  &-image {
    grid-area: 1 / 6 / -1 / -1;
    position: relative;
    z-index: 1;
  }
}

@media (max-width: 768px) {
  .project {
    display: flex;
    flex-direction: column;
    box-shadow: none !important;

    &:nth-of-type(2n + 1) &-content {
      text-align: left;
    }
    &-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      z-index: 5;
      text-align: left;
    }

    &-description {
      padding: 20px 0px;
      background-color: transparent;
      box-shadow: none;
    }
  }
}

@media (max-width: 768px) {
  .project {
    transition: var(--transition-default);
    box-shadow: 0 10px 30px -15px var(--blue-shadow);

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--blue-shadow);
    }
  }
  .project:not(:last-of-type) {
    margin-bottom: 70px;
  }
}

@media (max-width: 1080px) {
  .project:nth-of-type(2n + 1) .project-content {
    grid-column: 5/-1;
  }
}
</style>
