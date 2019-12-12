<template>
  <div class="absolute top-0 bottom-0 left-0 right-0">
    <div class="container mx-auto">
      <h1 class="text-center text-blue-400 text-4xl font-bold mt-6">
        Los animales y sus hábitats
      </h1>
      <p class="text-center text-gray-500 mt-2">
        El alumno debe relacionar cada animal con su hábitat, puedes arrastrar haciendo click sin soltar.
      </p>

      <div class="mt-10">
        <First ref="lvl" v-if="lvl === 1" />
        <Second ref="lvl" v-if="lvl === 2" />

        <button
          class="block w-64 tracking-wider mx-auto mt-10 rounded bg-blue-400 px-4 py-3 text-white font-bold shadow-lg focus:outline-none hover:bg-blue-500"
          @click="match"
        >
          CONFIRMAR
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import First from '@/components/First'
import Second from '@/components/Second'

export default {
  components: {
    First,
    Second
  },

  data() {
    return {
      lvl: 1
    }
  },

  methods: {
    match() {
      if (this.$refs.lvl.isValid()) {
        alert('¡Ganaste!')
      } else {
        alert(':( Necesitas mover a la oveja')
      }
    }
  }
}
</script>

<style scoped>
</style>
