<template>
  <div>
    <section
      id="puna-bg"
      class="mx-auto w-64 h-64 flex items-center justify-center"
      :style="`background-image: url('${Puna}'); background-repeat: no-repeat; background-position: bottom;`"
      ondrop="drop(event)"
      ondragover="allowDrop(event)"
    >
    </section>

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
    </section>
  </div>
</template>

<script>
import Puna from '~/assets/habitat-puna.jpg'

export default {
  data() {
    return {
      Puna,
      answer: {
        'oveja-img': 'puna-bg'
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
      return this.$refs.ovejaImg.dataset.target === this.answer['oveja-img']
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
#puna-bg #oveja-img {
  @apply w-40 h-40;
}
</style>
