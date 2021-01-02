<template>
  <div class="max-h bg-white form-pad max-w-600">
    <form>
        <div class="fw-bold my-fw my-fs-26">Sign up</div>
        <div class="mb-4 my-fs-13">or
          <span class="text-primary">sign in to your account</span></div>
      <div class="my-mb-20">
        <input type="text" class="form-control rounded-0 p-21" placeholder="First name"
        aria-describedby="emailHelp">
      </div>
      <div class="my-mb-20">
        <input type="text" class="form-control rounded-0 p-21" placeholder="Last name"
        aria-describedby="emailHelp">
      </div>
      <div class="my-mb-20">
        <input type="email" class="form-control rounded-0 p-21" id="exampleInputEmail1"
        placeholder="Email"
        aria-describedby="emailHelp">
      </div>
      <div class="my-mb-20">
        <input type="password" class="form-control rounded-0 p-21" placeholder="Password">
      </div>
      <div class="mb-4 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">
            I agree to the <span class="text-primary">Dropbox Terms</span></label>
      </div>
      <button type="submit" class="btn btn-primary col rounded-0 my-mb-20 p-10 text-white">
        Sign up</button>
      <button type="submit" class="btn col rounded-0 btn-outline-secondary p-10 my-text-black">
        Sign up With Google</button>
    </form>
  </div>
</template>
