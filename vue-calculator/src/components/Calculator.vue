<template>
    <section>
        <h1>Calculator</h1>
        <div class="calculator">
            <div class="display">{{current || '0'}}</div>

            <div @click="clear" class="btn">C</div>
            <div @click="sign" class="btn">+/-</div>
            <div class="btn">%</div>
            <div class="btn operator">÷</div>

            <div class="btn">7</div>
            <div class="btn">8</div>
            <div class="btn">9</div>
            <div class="btn operator">x</div>

            <div class="btn">4</div>
            <div class="btn">5</div>
            <div class="btn">6</div>
            <div class="btn operator">-</div>

            <div class="btn">1</div>
            <div class="btn">2</div>
            <div class="btn">3</div>
            <div class="btn operator">+</div>

            <div class="btn zero">0</div>
            <div class="btn">.</div>
            <div class="btn operator">=</div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Calculator',

  data() {
      return {
          current: ''
      }
  },
  methods: {
    clear() {
        this.current = '';
    },
    sign() {
        this.current = this.current.charAt(0) === '-' ?
            this.current.slice(1) : `-${this.current}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .calculator {
        font-size: 40px;
        display: grid;
        max-width: 500px;
        margin: 0 auto;
        border-radius: 5px;
        overflow: hidden;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(50px, auto);
    }
    .display {
        grid-column: 1 / 5;
        background-color: #333;
        color: #fff;
    }
    .zero {
        cursor: pointer;
        grid-column: 1 / 3;
    }
    .btn {
        background-color: #f2f2f2;
        border: 1px solid #ccc;
    }
    .operator {
        background-color: orange;
        color: #fff;
    }
</style>
