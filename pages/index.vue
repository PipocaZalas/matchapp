<template>
  <div class="absolute top-0 bottom-0 left-0 right-0">
    <div class="container mx-auto">
      <h1 class="text-center text-blue-400 text-4xl font-bold mt-6">
        Los animales y sus hábitats
      </h1>
      <p class="text-center text-gray-500 mt-2">
        El alumno debe relacionar cada animal con su hábitat, puedes arrastrar haciendo click sin soltar.
      </p>

      <div class="text-center">
        <First v-if="lvl === 1" />
        <Second v-if="lvl === 2" />

        <button class="block mx-auto mt-4 rounded bg-blue-400 px-4 py-3 text-white font-bold shadow-lg focus:outline-none">CONFIRMAR</button>
      </div>
      <!-- <Win v-if="lvl === 2" /> -->

    </div>
    <!-- <h2>Habi</h2>
    <p>Drag the image back and forth between the two div elements.</p>

    <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
      <img src="~/assets/camello.png" draggable="true" ondragstart="drag(event)" id="drag1" width="88" height="31">
    </div>
    <div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)">
      <img src="~/assets/habitat-puna.jpg" draggable="true" ondragstart="drag(event)" id="drag2" width="88" height="31">
    </div>

    <div id="divx" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
    <div id="divy" ondrop="drop(event)" ondragover="allowDrop(event)"></div> -->
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

  created() {
    window.allowDrop = function(ev) {
      ev.preventDefault();
    }

    window.drag = function(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }

    window.drop = function(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
  },

  methods: {
  }
}
</script>

<style scoped>
#divx, #divy, #div1, #div2 {
  float: left;
  width: 100px;
  height: 35px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
}
</style>
