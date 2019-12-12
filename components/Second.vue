<template>
  <div>
    <section
      class="mx-auto mt-8 w-64 h-64"
      :style="`background-image: url('${Puna}'); background-repeat: no-repeat; background-position: bottom;`"
    >
    </section>
  </div>
</template>

<script>
import Puna from '~/assets/camello.png'

export default {
  data() {
    return {
      Puna
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
