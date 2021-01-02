<template>
    <div id="app">
      <!--<img src="./assets/logo.png">-->
      <Banner></Banner>
      <Body></Body>
      <Footer></Footer>
    </div>
</template>

<script>
import Banner from '@/components/Banner';
import Body from '@/components/Body';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Banner,
    Body,
    Footer,
  },
};
</script>

<!--<style lang="scss">
  // @import "";
</style>-->

<!--<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 100%;
}
</style>-->
