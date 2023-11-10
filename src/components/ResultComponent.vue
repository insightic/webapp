<template>
  <div id="result-component-template" style="display: inline">
    <div class="card w-100 h-100">
      <div class="card-body">
        <div class="d-flex align-items-top">
          <i v-if="variant == 'danger'" class="bi bi-x-circle-fill me-2 text-danger"></i>
          <i
            v-if="variant == 'warning'"
            class="bi bi-exclamation-circle-fill me-2 text-warning"
          ></i>
          <i v-if="variant == 'success'" class="bi bi-check-circle-fill me-2 text-success"></i>
          <i v-if="variant == 'secondary'" class="bi bi-dash-circle-fill me-2 text-secondary"></i>
          <div v-if="variant == 'danger'" class="card-status-top bg-danger"></div>
          <div v-if="variant == 'warning'" class="card-status-top bg-warning"></div>
          <div v-if="variant == 'success'" class="card-status-top bg-success"></div>
          <div v-if="variant == 'secondary'" class="card-status-top bg-secondary"></div>
          <div class="text-break">
            <div style="font-size: 1.05rem">
              <b>#{{ result.id }} - {{ toTitleCase(result.title) }}</b>
            </div>
            <div
              class="small mb-2"
              style="
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1; /* number of lines to show */
                line-clamp: 1;
                -webkit-box-orient: vertical;
              "
            >
              {{ result.description }}
            </div>
            <div class="small">
              <b><u>Whitepaper</u></b>
            </div>
            <div
              class="small"
              style="
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1; /* number of lines to show */
                line-clamp: 1;
                -webkit-box-orient: vertical;
              "
            >
              {{ result.whitepaper }}
            </div>
            <div class="small">
              <b><u>Code</u></b>
            </div>
            <div
              class="small"
              style="
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1; /* number of lines to show */
                line-clamp: 1;
                -webkit-box-orient: vertical;
              "
            >
              {{ result.code }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    variant: { type: String, default: 'success' },
    result: { type: Object, default: null }
  },
  methods: {
    toTitleCase(str: string) {
      if (!str) return ''
      return str.replace(/\w\S*/g, function (txt: string) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    }
  }
}
</script>

<style scoped></style>
