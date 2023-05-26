import { ref } from 'vue'
import { defineStore } from 'pinia'

export const organizationsStore = defineStore('organizations', () => {
    const organizations = ref([
        {
            name: "Team 1",
            guid: "e262d5c2-16f8-47a0-8c70-4019514b137c",
        },
        {
            name: "Team 2",
            guid: "e262d5c2-16f8-47a0-8c70-4019514b137d",
        },
        {
            name: "Team 3",
            guid: "e262d5c2-16f8-47a0-8c70-4019514b137e",
        },
    ])

    return { organizations }
})