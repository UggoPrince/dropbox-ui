<template>
    <nav class="navbar navbar-expand-lg fixed-top my-bg-blue p-3">
      <div class="container-fluid">
        <div href="/" class="text-white fw-bolder fs-1 my-icon navbar-brand">
          <span class="my-text-wheat my-fs-35 my-ml-70">
            <font-awesome-icon :icon="['fab', 'dropbox']" />
          </span> Dropbox
        </div>
        <!--<h1>{{ msg }}</h1>-->
        <div class="col-8 fw-bold">
          <div class="navbar-nav">
            <div class="nav-item ml-4">
              <a class="my-text-white" href="/">
                For Teams
              </a>
            </div>
            <div class="nav-item ml-4">
              <a class="my-text-white" href="/">
                For Individuals
              </a>
            </div>
          </div>
        </div>
        <div class="col-4">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link my-text-white" href="/">
                Sign in
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link my-text-white" href="/">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>-->
