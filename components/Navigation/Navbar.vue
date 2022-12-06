<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <nuxt-link to="/" class="navbar-brand">JobFinder</nuxt-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Find Talent</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#latest-jobs">Find a Job</a>
        </li>
      </ul>
      <form class="d-flex">
        <nuxt-link class="btn btn-success" type="submit">Add a job</nuxt-link>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
.navbar_center{
  display:flex;
  justify-content: center;
}
</style>