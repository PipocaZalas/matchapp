<template>
  <div>
    <div class="backgrounds flex justify-center">
      <div
        id="bg1"
        class="w-48 h-48"
        :style="`background-image: url('${Antartida}'); background-repeat: no-repeat; background-position: bottom;`"
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
      >
      </div>
      <div
        id="bg2"
        class="w-48 h-48"
        :style="`background-image: url('${Selva}'); background-repeat: no-repeat; background-position: bottom;`"
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
      >
      </div>
      <div
        id="bg3"
        class="w-48 h-48"
        :style="`background-image: url('${Mar}'); background-repeat: no-repeat; background-position: bottom;`"
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
      >
      </div>
      <div
        id="bg4"
        class="w-48 h-48"
        :style="`background-image: url('${Puna}'); background-repeat: no-repeat; background-position: bottom;`"
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
      >
      </div>
    </div>

    <div class="mt-8 flex justify-center">
      <div
        class="border-l border-t border-b border-dashed border-blue-300 w-48 h-48 p-2"
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
      >
        <img
          ref="img1"
          class="cursor-move"
          src="~/assets/delfin.png"
          draggable="true"
          ondragstart="drag(event)"
          id="img1"
        >
      </div>
      <div
        class="border-l border-t border-b border-dashed border-blue-300 w-48 h-48 p-2"
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
      >
        <img
          ref="img2"
          class="cursor-move"
          src="~/assets/loro.png"
          draggable="true"
          ondragstart="drag(event)"
          id="img2"
        >
      </div>
      <div
        class="border-l border-t border-b border-dashed border-blue-300 w-48 h-48 p-2"
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
      >
        <img
          ref="img3"
          class="cursor-move"
          src="~/assets/alpaca.png"
          draggable="true"
          ondragstart="drag(event)"
          id="img3"
        >
      </div>
      <div
        class="border-l border-t border-b border-r border-dashed border-blue-300 w-48 h-48 p-2"
        ondrop="drop(event)"
        ondragover="allowDrop(event)"
      >
        <img
          ref="img4"
          class="cursor-move"
          src="~/assets/pinguino.png"
          draggable="true"
          ondragstart="drag(event)"
          id="img4"
        >
      </div>
    </div>
<!-- 
    <section
      class="border border-dashed border-blue-300 mx-auto mt-8 w-48 h-48 p-2"
      ondrop="drop(event)"
      ondragover="allowDrop(event)"
    >
      <img
        ref="ovejaImg"
        class="cursor-move"
        src="~/assets/oveja.png"
        draggable="true"
        ondragstart="drag(event)"
        id="oveja-img"
      >
    </section> -->

    <!-- <section
      class="mx-auto mt-8 w-64 h-64"
      :style="`background-image: url('${Puna}'); background-repeat: no-repeat; background-position: bottom;`"
    >
    </section> -->
  </div>
</template>

<script>
import Puna from '~/assets/habitat-puna.jpg'
import Antartida from '~/assets/antartida.png'
import Selva from '~/assets/selva.png'
import Mar from '~/assets/mar.png'
// import Puna from '~/assets/p.jpg'

export default {
  data() {
    return {
      Puna,
      Antartida,
      Selva,
      Mar,
      answer: {
        'img1': 'bg3',
        'img2': 'bg2',
        'img3': 'bg4',
        'img4': 'bg1',
      }
    }
  },

  created() {
    window.allowDrop = function(ev) {
      ev.preventDefault();
    }
    window.drag = function(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }
    window.drop = this.drop
  },

  methods: {
    isValid() {
      const refs = ['img1', 'img2', 'img3', 'img4']
      for (let ref of refs) {
        if (this.$refs[ref].dataset.target !== this.answer[ref]) {
          console.log('this.$refs[ref].dataset.target', this.$refs[ref].dataset.target)
          return false
        }
      }
      return true
    },
    drop(ev) {
      ev.preventDefault()
      const imgId = ev.dataTransfer.getData("text")
      const targetId = ev.target.id
      const img = document.getElementById(imgId)
      img.setAttribute('data-target', targetId)
      ev.target.appendChild(img)
    }
  }
}
</script>

<style scoped>
.backgrounds img {
  @apply w-32 h-32;
}
.backgrounds > div {
  @apply flex items-center justify-center;
}
</style>
