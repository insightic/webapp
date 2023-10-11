<template>
  <div class="text-secondary mb-4">Project Source Code</div>

  <div class="d-flex flex-wrap text-center">
    <div class="source-code-card mx-2">
      <div class="my-5">
        <i class="bi bi-plus-lg" style="font-size: 6rem"></i>
      </div>
      <h6>Create a Repo on Insightic</h6>
      <div class="text-secondary small w-100">
        <div class="mx-auto" style="width: 80%">
          Create a repository and privately hosted on Insightic.
        </div>
      </div>
    </div>

    <div class="source-code-card mx-2">
      <div class="my-5">
        <i class="bi bi-github" style="font-size: 6rem"></i>
      </div>
      <h6>Import from GitHub</h6>
      <div class="text-secondary small w-100">
        <div class="mx-auto" style="width: 80%">
          If your code is publicly available on GitHub, we may import from there.
        </div>
      </div>
    </div>

    <div class="source-code-card mx-2">
      <div class="my-5">
        <i class="bi bi-file-earmark-zip-fill" style="font-size: 6rem"></i>
      </div>
      <h6>Upload a Zip</h6>
      <div class="text-secondary small w-100">
        <div class="mx-auto" style="width: 80%">Upload your source codes with a zip file.</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.source-code-card {
  cursor: pointer;
  width: 296px;
  height: 330px;
  border: 1px solid #00000022;
  border-radius: 5px;
}

.source-code-card:hover {
  background-color: #00000005;
}
</style>
