<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Calculator></Calculator>
  </div>
</template>

<script>
import Vue from 'vue'
import Calculator from '@/components/Calculator/Calculator.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Calculator
  }
})
</script>
