<template>
    <v-dialog
        v-model="deleteDialog"
        max-width="400px"
    >
        <template v-slot:activator="{ on }">
            <v-btn @click="deleteDialog = true" v-on="on">
                <span>Delete</span>
                <v-icon color="red">mdi-delete</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="headline">Are you sure you want to delete '{{ contact.fullName }}'?</v-card-title>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="deleteDialog = false"
                >
                    Cancel
                </v-btn>

                <v-btn
                    color="red darken-1"
                    text
                    @click="deleteContact"
                >
                    Delete
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['contact', 'token'],
    data() {
        return {
            deleteDialog: false
        }
    },
    methods: {
        deleteContact() {
            this.deleteDialog = false;
            this.$http.delete(`/contacts/${this.contact._id}`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            })
            .then(res => {
                console.log(res)
                this.$router.push('/contacts')
            })
            .catch(err => console.log(err));
        }
    }
}
</script>