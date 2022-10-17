<template>
  <div
    id="left"
    aria-orientation="left"
    class="fixed bottom-0 right-auto w-10 lg:left-12 md:left-8 left-4"
  >
    <ul class="flex flex-col w-full items-center">
      <li>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <title>GitHub</title>
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
      </li>

      <li>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-linkedin"
          >
            <title>LinkedIn</title>
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </li>

      <li>
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-twitter"
          >
            <title>Twitter</title>
            <path
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    color: var(--color-lightest-blue);
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

      svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
}

#left::after {
  content: "";
  display: block;
  width: 0.1rem;
  height: 13.5rem;
  margin: 0px auto;
  background-color: var(--color-lightest-blue);
}
</style>
