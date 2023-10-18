<template>
  <div class="mb-4">
    <label class="form-label">
      {{ label }}
    </label>

    <div class="card w-100">
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="(p, idx) in people" :key="idx">
          <div class="d-flex my-3 flex-row align-items-center">
            <div class="me-2">
              <i class="text-primary bi bi-person" style="font-size: 1.6rem"></i>
            </div>
            <div class="flex-grow-1">
              <table style="width: 80%; text-align: left">
                <tr class="text-secondary small">
                  <td>Name</td>
                  <td>Date of Birth</td>
                  <td>Social Medias</td>
                  <td>CV</td>
                </tr>
                <tr>
                  <td>{{ p.name }}</td>
                  <td>{{ p.birthday }}</td>
                  <td class="d-flex">
                    <a v-if="p.github" :href="p.github" target="_blank"
                      ><i class="bi bi-github me-2"></i
                    ></a>
                    <a v-if="p.twitter" :href="p.twitter" target="_blank"
                      ><i class="bi bi-twitter me-2"></i
                    ></a>
                    <a v-if="p.linkedin" :href="p.linkedin" target="_blank"
                      ><i class="bi bi-linkedin me-2"></i
                    ></a>
                  </td>
                  <td>
                    <button class="btn btn-sm btn-outline-primary px-2">
                      <i class="bi bi-cloud-download"></i>
                    </button>
                  </td>
                </tr>
              </table>
            </div>
            <div class="ms-auto">
              <button type="button" class="btn btn-sm btn-outline-primary mx-2" @edit="edit(idx)">Edit</button>
              <button type="button" class="btn btn-sm btn-outline-danger mx-2" @click="remove(idx)">
                Remove
              </button>
            </div>
          </div>
        </li>
        <li class="list-group-item d-flex">
          <button class="btn btn-sm btn-primary">{{ addButtonName }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    label: { type: String, required: true },
    addButtonName: { type: String, default: 'Add' }
  },
  data() {
    return {
      people: [
        {
          name: 'Gong Yiwei',
          birthday: '1994/02/02',
          github: 'https://github.com/imwithye',
          twitter: 'https://twitter.com/imwithye',
          linkedin: 'https://www.linkedin.com/in/imwithye/'
        },
        {
          name: 'Gong Yiwei',
          birthday: '1994/02/02',
          github: 'https://github.com/imwithye',
          twitter: 'https://twitter.com/imwithye',
          linkedin: 'https://www.linkedin.com/in/imwithye/'
        }
      ]
    }
  },
  methods: {
    remove(idx: number) {
      this.people.splice(idx, 1)
    },
    edit(idx: number) {
      console.log(123);
    },
    
  }
}
</script>

<style scoped>
td {
  padding: 0px;
  text-align: left;
  padding-left: 10px;
}
</style>
