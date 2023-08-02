<template>
  <header class="w-full">
    <div
      :id="style"
      class="lg:px-12 fixed md:px-8 w-full flex justify-between items-center"
    >
      <div class="logo">
        <h1 class="logo-text">Nzima Ivan</h1>
      </div>

      <!-- <div role="navigation" class="font-roboto navigation-lg-screen">
        <ul class="flex">
          <li>
            <a class="mx-4 cursor-pointer" href="/#about_section">About</a>
          </li>
          <li>
            <a class="mx-4 cursor-pointer" href="/#experience_section">Experience</a>
          </li>
          <li>
            <a class="mx-4 cursor-pointer" href="/#work_section">Works</a>
          </li>
          <li>
            <a class="mx-4 cursor-pointer" href="/#contact_section">Contact</a>
          </li>
        </ul>
      </div> -->

      <!-- Mobile navigation -->
      <!-- <div :class="{ 'navigation-sm-screen': true, 'aside-menu__active': hamCliked }">
        <button
          @click="handleHamClick"
          :class="{ 'ham relative': !hamCliked, ham__active: hamCliked }"
        >
          <div class="ham-box">
            <div class="ham-box-inner"></div>
          </div>
        </button>
        <aside class="aside-menu flex flex-col justify-center items-center">
          <ol class="w-full flex flex-col items-center py-20">
            <li @click="handleClickWhenMobileNavIsOpen">
              <a class="mx-4 cursor-pointer" href="/#about_section">About</a>
            </li>
            <li @click="handleClickWhenMobileNavIsOpen">
              <a class="mx-4 cursor-pointer" href="/#experience_section">Experience</a>
            </li>
            <li @click="handleClickWhenMobileNavIsOpen">
              <a class="mx-4 cursor-pointer" href="/#work_section">Works</a>
            </li>
            <li @click="handleClickWhenMobileNavIsOpen">
              <a class="mx-4 cursor-pointer" href="/#contact_section">Contact</a>
            </li>
          </ol>
        </aside>
      </div> -->
    </div>
  </header>
</template>

<script setup lang="ts">
import { inject, ref, watch, watchEffect } from "vue";
import useScrollDirection from "../composables/useScrollDirection";

const scrollDirection = ref(useScrollDirection("down"));
const style = ref();
const scrolledToTop = ref<boolean>(true);
const hamCliked = ref<boolean>(inject("hamCliked"));

const handleScroll = () => {
  scrolledToTop.value = window.pageYOffset < 50;
};

const handleHamClick = inject("handleHamClick");
const handleClickWhenMobileNavIsOpen = inject("handleClickWhenMobileNavIsOpen");

watchEffect(() => {
  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});

watch([scrollDirection, scrolledToTop], () => {
  if (scrolledToTop.value) {
    style.value = " ";
  } else {
    if (scrollDirection.value === "up") {
      style.value = "scrollUp";
    } else if (scrollDirection.value === "down") {
      style.value = "scrollDown";
    }
  }

  // console.log("scrollStyle: ", scrollStyle);
});
</script>

<style scoped lang="scss">
@import "/src/assets/scss/_mixin.scss";

.navigation-sm-screen {
  display: none;

  .aside-menu {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: fixed;
    background-color: var(--bg);
    height: 100vh;
    transform: translateX(100vw);
    visibility: hidden;
    transition: var(--transition-default);
  }
}
.aside-menu__active {
  .aside-menu {
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 9;
    background-color: var(--bg);
    height: 100vh;
    width: min(75vw, 400px);
    transform: translateX(0vw);
    visibility: visible;
    transition: var(--transition-default);

    ol {
      li {
        text-align: center;
        width: 100%;
        margin-bottom: 32px;
        font-size: 18px;
        font-weight: 500;

        a {
          display: inline-block;
          width: 100%;
          padding: 3px 20px 20px;
        }
      }
    }
  }
}

.aside-menu {
  &--box {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 50px 10px;
    position: fixed;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0px;
    background-color: var(--bg);
    box-shadow: -10px 0px 30px -15px var(--blue-shadow);
  }
}

@mixin scrolled-nav-link {
  &:hover,
  &:active,
  &:focus {
    color: var(--color-light-red) !important;
    outline: 0;
  }
}

#scrollUp {
  transform: translateY(0px);
  background-color: var(--bg);
  box-shadow: 0 10px 30px -10px var(--blue-shadow);

  ul {
    li {
      @include scrolled-nav-link;
    }
  }
}

#scrollDown {
  transform: translateY(-120px);
  box-shadow: 0 20px 30px -10px var(--blue-shadow);
  ul {
    li {
      @include scrolled-nav-link;
    }
  }
}

ul,
ol {
  li {
    @include link;
    font-size: var(--fz-md);
  }
}

header > div {
  transition: var(--transition-default);
  height: var(--nav-height);
  top: 0px;
  z-index: 100;
}
@media (max-width: 768px) {
  header > div {
    height: var(--nav-height-sm);
    padding: var(--padding-xs);
  }

  #scrollDown {
    transform: translateY(-75px);
  }

  .nav {
    display: none;
  }
}

@media (max-width: 768px) {
  .navigation-lg-screen {
    display: none;
  }

  .navigation-sm-screen {
    display: block;
  }
}
</style>
