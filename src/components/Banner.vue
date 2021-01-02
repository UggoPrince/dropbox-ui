<template>
    <div id="banner" class="container-fluid relative">
        <div>
          <router-view/>
        </div>
        <div class="container my-mt-94">
          <div class="row">
            <div class="col">
              <br />
              <br />
              <div class="my-text-wheat my-fs-26 fw-bolder my-fw my-mb-20">Dropbox</div>
              <span class="my-text-wheat my-fs-85 my-fw lh-80">
                Focus on the<br/>
                work that<br/>
                matters<br/>
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="text-white mt-5 my-fs-18">
                Dropbox is the world’s first smart workspace. We bring all
                your team’s content together while letting you use the tools you love.
                And we help cut through the clutter, surfacing what matters most.
              </div>
            </div>
          </div>
        </div>
        <div id="sForm" class="float-right col-4 z-index-10 fixed bg-white">
          <div class="navbar navbar-expand-lg float-end p-3 my-mb-80">
            <div class="col">
              <ul class="navbar-nav mt-2">
                <li class="nav-item my-ml-200">
                  <a class="nav-link my-text-black" href="/">
                    Sign in
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link my-text-black" href="/">
                    Download
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <SignupForm></SignupForm>
        </div>
    </div>
</template>

<script>
import SignupForm from '@/components/SignupForm';

export default {
  name: 'Banner',
  components: {
    SignupForm,
  },
};
</script>
