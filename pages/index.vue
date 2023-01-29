<script setup>
const count = ref(1);
const { data: jobs } = await useFetch(
  "https://remotive.com/api/remote-jobs?limit=100",
  {
    pick: ["jobs"],
  }
);
</script>

<template>
  <SectionsHero />
  <section id="MainContent">
    <h1 class="text-5xl font-bold text-center mt-2">Latest listings</h1>
    <div
      class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
    >
      <div v-for="(job, index) in jobs.jobs.slice(0, 9 * count)">
        <JobListingCard
          :job-index="index"
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
  </section>

  <div class="flex justify-center m-12">
    <button
      class="inline-flex items-center px-7 py-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="count++"
    >
      Load more
    </button>
  </div>
</template>
