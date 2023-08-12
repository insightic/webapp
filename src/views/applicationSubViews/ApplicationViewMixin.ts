import { defineComponent } from "vue";

export default defineComponent({
    computed: {
        projectID(): number | string {
            return this.$route.params.projectID as number | string
        }
    }
})