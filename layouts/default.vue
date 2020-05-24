<template>
  <div>
    <nav class="bg-gray-800 shadow-lg">
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-baseline">
            <div class="flex-shrink-0">
              <nuxt-link class="w-8 h-8 text-white" to="/" active-class="">
                <span class="text-teal-300">{</span> CONSPIR.IO <span class="text-teal-300">}</span>
              </nuxt-link>
            </div>
            <div class="hidden md:block">
              <div class="flex items-baseline ml-2">
                <nuxt-link
                  v-for="(name,value,index) in routes"
                  :key="index"
                  :to="name"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                  active-class="px-3 py-2 rounded-md text-sm font-medium text-teal-300 bg-gray-900 focus:outline-none focus:text-teal-500 focus:bg-gray-700"
                >
                  {{ value }}
                </nuxt-link>
              </div>
            </div>
          </div>

          <!-- MENU BUTTON -->
          <div class="flex -mr-2 md:hidden">
            <button
              class="inline-flex items-center justify-center p-2 text-gray-400 rounded-md border border-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              @click="toggleMenu"
            >
              <svg
                :class="{'block':!openMenu,'hidden':openMenu}"
                class="w-5 h-5"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                :class="{'block':openMenu,'hidden':!openMenu}"
                class="w-5 h-5"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!--MOBILE MENU-->
      <div :class="{'block':openMenu,'hidden':!openMenu}" class="md:hidden shadow-lg">
        <div class="px-2 pt-2 pb-3 sm:px-3">
          <nuxt-link
            v-for="(name,value,index) in routes"
            :key="index"
            :to="name"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
            active-class="block px-3 py-2 rounded-md text-base font-medium text-teal-300 bg-gray-900 focus:outline-none focus:text-teal-500 focus:bg-gray-700"
          >
            {{ value }}
          </nuxt-link>
        </div>
      </div>
    </nav>

    <main>
      <div class="py-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-2 sm:px-0">
          <!--          <div class="border-4 border-gray-200 border-dashed rounded-lg h-96">-->
          <nuxt />
          <!--          </div>-->
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      openMenu: false,
      routes: {
        Articles: '/articles',
        Projets: '/projets',
        'Qui suis-je ?': '/cv'
      }
    };
  },
  methods: {
    toggleMenu () {
      this.openMenu = !this.openMenu;
    }
  }
};
</script>
