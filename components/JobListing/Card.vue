<script setup lang="ts">
defineProps<{
  jobPosition: string;
  jobLocation: string;
  jobType: string;
  jobId: number;
  jobInfo: string;
  jobListingUrl: string;
  companyLogo: string;
  companyName: string;
}>();
</script>

<template>
  <div class="accordion">
    <div class="accordion-item">
      <h2 class="accordion-header">
        <div
          class="row accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse-${jobId}`"
          aria-expanded="false"
          :aria-controls="`collapse-${jobId}`"
        >
          <div class="row">
            <p class="col-4">{{ jobPosition }}</p>
            <p class="col-4">
              {{ jobType.split("_").join(" ").toUpperCase() }}
            </p>
            <p class="col-4">{{ jobLocation }}</p>
          </div>
        </div>
      </h2>
      <div
        :id="`collapse-${jobId}`"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionParent"
      >
        <div class="row">
          <div class="col mx-5 my-2">
            <img :src="companyLogo" :alt="companyName" />
            <strong class="mx-2">{{ companyName.toLocaleUpperCase() }}</strong>
          </div>
          <div class="col">
            <a class="btn btn-primary my-5" :href="jobListingUrl">
              Go to listing
              <span>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                >
                  <path
                    d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <hr />
        <div class="accordion-body" v-html="jobInfo"></div>
      </div>
    </div>
  </div>
</template>
