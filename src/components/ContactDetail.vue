<template>
    <v-app>
        <v-main>
        <v-container
            class="grey lighten-5"
            fluid
        >
            <v-row class="text-center">
                <v-col
                    cols="12"
                >
                    <v-btn 
                        icon
                        left
                        fixed
                        @click="$router.push('/contacts')"
                    >
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </v-col>
                <v-col
                    cols="12"
                >
                    <v-avatar
                        height="250"
                        width="250"
                    >
                        <v-img
                            :src="imageUrl"
                        ></v-img>
                    </v-avatar>
                </v-col>
                <v-col
                    class="mb-4"
                >
                    <h1 class="display-2 font-weight-bold mb-3">
                        {{ contact.fullName }}
                    </h1>
                </v-col>
                <v-col
                    cols="12"
                    class="mb-5"
                >
                    <h2 class="headline font-weight-bold mb-3">
                        {{ contact.company }}
                    </h2>
                    <v-row justify="center">
                        {{ contact.jobTitle }}
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    class="mb-5"
                >
                    <h2 class="headline font-weight-bold mb-3">
                        {{ contact.email }}
                    </h2>
                </v-col>
                <v-col
                    cols="12"
                    class="mb-5"
                >
                    <h2 class="headline font-weight-bold mb-3">
                        {{ contact.phone }}
                    </h2>
                </v-col>
                <v-col
                    cols="12"
                    class="mb-5"
                >
                    <h2 class="headline font-weight-bold mb-3">
                        {{ contact.notes }}
                    </h2>
                </v-col>
            </v-row>
        </v-container>
        </v-main> 
        <v-bottom-navigation
            grow
            color="teal"
        >
            <v-btn>
                <span>Share</span>
                <v-icon color="black">mdi-share</v-icon>
            </v-btn>

            <edit-dialog :contact="contact" :imageUrl="imageUrl" @edit-contact="editContact"></edit-dialog>

            <delete-dialog :contact="contact" :token="token"></delete-dialog>
        </v-bottom-navigation>
    </v-app>
</template>

<script>
import VueJwtDecode from 'vue-jwt-decode'

export default {
    name: 'Details',
    data() {
        return {
            id: this.$route.params.id,
            token: '',
            imageUrl: '',
            contact: {},
            user: {}
        }
    },
    watch: {
        '$route'(to) {
            this.id = to.params.id
        }
    },
    methods: {
        editContact(editedContact) {
            const {
                _id,
                profilePicture,
                fullName,
                company,
                jobTitle,
                email,
                phone,
                notes
            } = editedContact;

            const formData = new FormData();
            formData.append('_id', _id);
            formData.append('profilePicture', profilePicture);
            formData.append('fullName', fullName);
            formData.append('company', company);
            formData.append('jobTitle', jobTitle);
            formData.append('email', email);
            formData.append('phone', phone);
            formData.append('notes', notes);

            this.$http.patch(`/contacts/${this.id}`,
              formData, {
              headers: {
                'Authorization': `Bearer ${this.token}`
              }
            })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            console.log(_id);

        },
        getToken() {
            this.token = localStorage.getItem('jwt');
            let decoded = VueJwtDecode.decode(this.token);
            this.user = decoded;
        },
        fetchImage() {
            this.$http.get(`/${this.contact.profilePicture}`, {
                responseType: 'arraybuffer'
            })
            .then(res => {
                this.imageUrl = 'data:image/png;base64, ' + Buffer.from(res.data).toString('base64');
            })
            .catch(err => console.log(err));

            console.log(this.imageUrl);
        }
    },
    components: {
    },
    created() {
        this.getToken();

        this.$http.get(`/contacts/${this.id}` ,{
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        })
        .then(res => {
            this.contact = res.data.data
            this.fetchImage()
        })
        .catch(err => console.log(err));

        console.log(this.imageUrl);
        console.log(this.contact);
    }
}
</script>