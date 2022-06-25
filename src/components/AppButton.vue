<template>
  <button
    class="btn-calc"
    v-if="type === 'calc'"
    :class="{ 'horizontally-center': align === 'center' }"
    :style="{'color': color, 'border-color': btnColor}"
    @mouseover="changeColor" @mouseleave="changeColor" @click.prevent="eventButton(event)"
  >
    <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.4818 0.0833435H1.51825C0.67975 0.0833435 0 0.733539 0 1.53558V20.6311C0 21.4331 0.67975 22.0833 1.51825 22.0833H15.4818C16.3203 22.0833 17 21.4331 17 20.6311V1.53558C17 0.733539 16.3203 0.0833435 15.4818 0.0833435ZM2.4102 16.5169V14.451C2.4102 14.2859 2.55005 14.1522 2.7226 14.1522H4.8824C5.05495 14.1522 5.1948 14.2859 5.1948 14.451V16.5169C5.1948 16.6819 5.05495 16.8157 4.8824 16.8157H2.7226C2.55005 16.8157 2.4102 16.6819 2.4102 16.5169ZM2.4102 12.356V10.2901C2.4102 10.1251 2.55005 9.99128 2.7226 9.99128H4.8824C5.05495 9.99128 5.1948 10.1251 5.1948 10.2901V12.356C5.1948 12.521 5.05495 12.6548 4.8824 12.6548H2.7226C2.55005 12.6548 2.4102 12.521 2.4102 12.356ZM12.4445 20.2181H4.55545C4.00315 20.2181 3.55545 19.7899 3.55545 19.2616C3.55545 18.7333 4.00315 18.3051 4.55545 18.3051H12.4445C12.9969 18.3051 13.4445 18.7333 13.4445 19.2616C13.4445 19.7899 12.9969 20.2181 12.4445 20.2181ZM7.4201 14.1521H9.5799C9.75245 14.1521 9.8923 14.2859 9.8923 14.4509V16.5168C9.8923 16.6819 9.75245 16.8156 9.5799 16.8156H7.4201C7.24755 16.8156 7.1077 16.6819 7.1077 16.5168V14.4509C7.1077 14.2859 7.24755 14.1521 7.4201 14.1521ZM7.1077 12.356V10.2901C7.1077 10.1251 7.24755 9.99128 7.4201 9.99128H9.5799C9.75245 9.99128 9.8923 10.1251 9.8923 10.2901V12.356C9.8923 12.521 9.75245 12.6548 9.5799 12.6548H7.4201C7.24755 12.6548 7.1077 12.521 7.1077 12.356ZM14.2774 16.8157H12.1176C11.945 16.8157 11.8052 16.6819 11.8052 16.5169V14.451C11.8052 14.2859 11.945 14.1522 12.1176 14.1522H14.2774C14.45 14.1522 14.5898 14.2859 14.5898 14.451V16.5169C14.5898 16.6819 14.45 16.8157 14.2774 16.8157ZM14.2774 12.6548H12.1176C11.945 12.6548 11.8052 12.521 11.8052 12.356V10.2901C11.8052 10.1251 11.945 9.99128 12.1176 9.99128H14.2774C14.45 9.99128 14.5898 10.1251 14.5898 10.2901V12.356C14.5898 12.521 14.45 12.6548 14.2774 12.6548ZM14.7 7.2399C14.7 7.80419 14.2218 8.2616 13.6319 8.2616H3.3682C2.77825 8.2616 2.3 7.80415 2.3 7.2399V3.06592C2.3 2.50167 2.77825 2.04421 3.3682 2.04421H13.6319C14.2218 2.04421 14.7 2.50167 14.7 3.06592V7.2399Z" :fill="color"/>
    </svg>
    {{ text }}
  </button>

  <button class="btn-estimate" v-if="type === 'estimate'" @click.prevent="eventButton(event)">
    {{ text }}<br>
    <span>{{ subtext }}</span>
    <svg width="97" height="136" viewBox="0 0 97 136" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28.6952 5.19157C31.3296 10.3186 34.2932 15.9634 43.5134 33.5194C45.4421 37.1964 48.6409 43.2555 50.5697 46.9842C52.5454 50.6612 56.1206 57.5489 58.5668 62.2616C61.06 66.9743 64.5411 73.7067 66.4227 77.1765C68.2574 80.698 69.7627 83.7017 69.7627 83.8053C69.7627 83.9089 64.5881 84.0125 58.2845 84.0125H46.8063L42.9019 76.6068C40.785 72.5674 36.0338 63.5563 32.3645 56.565C28.7423 49.5736 23.1443 38.9054 19.9455 32.8462C14.865 23.2137 14.2064 21.6083 14.6298 20.5725C15.2413 19.1225 25.026 0.530685 25.4494 0.0128098C25.6375 -0.194344 27.0958 2.1361 28.6952 5.19157Z" :fill="color ? color : 'white'"/>
      <path d="M17.6877 36.0053C20.6984 41.7537 27.9899 55.6846 33.9171 66.9225L44.6427 87.3787L58.2848 87.534L71.9269 87.6376L77.9012 99.0309C81.1941 105.245 83.8755 110.528 83.8755 110.683C83.8755 110.839 77.9482 110.942 70.7038 110.942C61.5777 110.942 57.5321 111.097 57.5321 111.512C57.5321 111.822 59.0845 115.033 61.0132 118.607C67.6931 131.295 69.763 135.334 69.763 135.541C69.763 135.697 64.3061 135.8 57.6262 135.8H45.5365L40.0326 125.287C37.0219 119.539 31.9414 109.803 28.7426 103.692C25.4967 97.5809 18.7697 84.7375 13.7833 75.2086C8.79685 65.6796 3.62226 55.8918 2.35213 53.4577C1.08201 51.0237 4.57764e-05 48.7968 4.57764e-05 48.5379C4.57764e-05 48.02 11.1489 26.6835 11.8546 25.9067C11.9957 25.6995 14.63 30.2051 17.6877 36.0053Z" fill="black"/>
      <path d="M86.5567 115.707C86.7449 116.069 89.1911 120.678 91.9665 125.96L97 135.541L85.8511 135.697C79.7357 135.748 74.514 135.697 74.2318 135.593C73.9495 135.489 71.8327 131.812 69.5276 127.462C67.2696 123.06 64.8705 118.503 64.2589 117.26L63.0829 115.085H74.6081C83.3579 115.085 86.2745 115.24 86.5567 115.707Z" :fill="color ? color : 'white'"/>
    </svg>
  </button>

  <button class="btn-order" v-if="type === 'order'" :class="{ 'btn-order__bg-none': bgNone }" @click.prevent="eventButton(event)">
    {{ text }}
  </button>
</template>

<script>

export default {
  name: 'AppButton',
  props: ['type', 'align', 'text', 'subtext', 'color', 'bgNone', 'event'],
  data () {
    return {
      btnColor: this.color
    }
  },
  methods: {
    changeColor () {
      if (window.innerWidth > 575) {
        if (this.btnColor !== '#FF0000') {
          this.btnColor = '#FF0000'
        } else {
          this.btnColor = this.color
        }
      }
    },
    eventButton (event) {
      if (event === 'scroll') {
        const el = document.querySelector('[data-ref="calc"]')
        window.scrollTo(0, el.offsetTop)
      } else if (event === 'modal') {
        this.$store.state.modalIsOpen = true
      }
    }
  }
}
</script>

<style scoped lang="sass">
button
  cursor: pointer

.btn-calc
  position: relative
  background: none
  height: 42px
  border: 1px solid
  border-radius: 2px
  color: #ffffff
  font-size: 12px
  padding: 10px 15px 10px 47px
  text-transform: uppercase
  transition: all .3s
  svg
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: 20px
  &:hover
    background-color: #FF0000
.btn-estimate
  position: relative
  background: url("@/assets/images/backgrounds/button-bg.svg")
  background-size: cover
  height: 50px
  width: 250px
  margin-top: 75px
  padding: 8px 0
  border: unset
  font-family: "Muller Regular"
  font-size: 18px
  color: #ffffff
  line-height: normal
  span
    font-size: 14px
  svg
    position: absolute
    bottom: -7px
    right: -48px
    height: 90px
    transition: all .5s
  &:hover
    svg
      right: 197px

.btn-order
  width: fit-content
  padding: 16px 30px
  border: none
  border-radius: 4px
  background-color: #FF0000
  font-family: "Muller Medium"
  font-size: 12px
  text-transform: uppercase
  color: #ffffff
  line-height: 1
  transition: all .3s
  &__bg-none
    background: none
    border: 1px solid #ffffff
  &:hover
    background: #ffffff
    color: #000000

@media (max-width: 991.98px)
  .btn-calc
    font-size: 10px
    padding: 10px 10px 10px 32px
    svg
      position: absolute
      top: 50%
      transform: translateY(-50%)
      left: 10px

@media (max-width: 767.98px)
  .btn-estimate
    svg
      right: -50px
@media (max-width: 575.98px)
  .btn-calc
    font-size: 10px
    padding: 10px 20px 10px 45px
    svg
      left: 20px
    &:hover
      background-color: inherit
  .btn-estimate
    height: 45px
    width: 230px
    padding: 4px 0
    font-size: 16px
    span
      font-size: 12px
    svg
      bottom: -5px
      right: -45px
      height: 79px
    &:hover
      svg
        right: -45px
</style>
