<script setup lang="ts">
const count = ref(1);
const { data: jobs } = await useFetch("https://remotive.com/api/remote-jobs", {
  pick: ["jobs"],
});
</script>

<template>
  <section id="hero">
    <div class="container">
      <h1>Find Your Dream Job In Tech</h1>
      <p>
        We help you find exciting opportunities around the world.
        <br />
        Have the latest listings opening at your fingertips in your inbox.
      </p>
      <form @submit.prevent class="d-flex justify-content-center">
        <div class="row gy-2 gx-3 align-items-center">
          <div class="col-sm-9">
            <input type="text" class="form-control" placeholder="Your email" />
          </div>
          <div class="col-sm-1">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
  <section id="jobs">
    <div class="container">
      <h2 class="text-center mt-3" id="latest-jobs">Latest jobs</h2>
      <div class="accordion" id="accordionParent">
        <div v-for="job in jobs.jobs.slice(0, 10 * count)">
          <JobListingCard
            :job-position="job.title"
            :job-location="job.candidate_required_location"
            :job-type="job.job_type"
            :job-id="job.id"
            :job-info="job.description"
            :company-logo="job.company_logo"
            :company-name="job.company_name"
            :job-listing-url="job.url"
          />
        </div>
      </div>

      <div class="d-flex justify-content-center m-4">
        <button class="btn btn-primary" @click="count++">Load more</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
#hero {
  background: url("~/assets/images/lorenzo-herrera-p0j-mE6mGo4-unsplash.jpg")
    no-repeat fixed center;
  color: white;
  text-align: center;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
