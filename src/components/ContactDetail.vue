<template>
    <div>
        <v-container 
            class="grey lighten-5"
            fluid
        >
            <v-row>
                <v-col
                    cols="12"
                >
                    <v-card
                        color="grey lighten-4"
                        flat
                        max-height="200px"
                        tile
                    >
                        <v-toolbar
                            flat
                            collapse
                        >
                            <v-btn icon>
                                <v-icon>mdi-arrow-left</v-icon>
                            </v-btn>
                        </v-toolbar>
                    </v-card>
                </v-col>
                <v-col
                    cols="12"
                >
                    <v-row
                        align="center"
                    >
                        <v-col cols="4"></v-col>
                        <v-col
                            cols="4"
                        >
                            <v-avatar
                                height="300"
                                width="300"
                            >
                                <v-img
                                :src="imageUrl"
                            ></v-img>
                            </v-avatar>
                            
                        </v-col>
                        <v-col cols="4"></v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                >
                    <v-row
                        align="center"
                    >
                        <v-col cols="4"></v-col>
                        <v-col
                            cols="4"
                        >
                            <v-card
                                flat
                            >
                                <h1>
                                    {{ contact.fullName }}
                                </h1>
                            </v-card>
                        </v-col>
                        <v-col cols="4"></v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                >
                    <v-row
                        align="center"
                    >
                        <v-col cols="4"></v-col>
                        <v-col
                            cols="4"
                        >
                            <v-card
                                flat
                            >
                                <v-card-title>
                                    {{ contact.phone }}
                                </v-card-title>
                            </v-card>
                        </v-col>
                        <v-col cols="4"></v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                >
                    <v-row
                        align="center"
                    >
                        <v-col cols="4"></v-col>
                        <v-col
                            cols="4"
                        >
                            <v-card
                                flat
                            >
                                <v-card-title>
                                    {{ contact.email }}
                                </v-card-title>
                            </v-card>
                        </v-col>
                        <v-col cols="4"></v-col>
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                >
                    <v-row
                        align="center"
                    >
                        <v-col cols="4"></v-col>
                        <v-col
                            cols="4"
                        >
                            <v-card
                                flat
                            >
                                <v-card-title>
                                    {{ contact.notes }}
                                </v-card-title>
                            </v-card>
                        </v-col>
                        <v-col cols="4"></v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <v-bottom-navigation
            grow
            color="teal"
        >
            <v-btn>
                <span>Share</span>
                <v-icon>mdi-share</v-icon>
            </v-btn>

            <v-btn>
                <span>Edit</span>
                <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn>
                <span>Delete</span>
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-bottom-navigation>
    </div>
</template>

<script>
export default {
    name: 'Details',
    data() {
        return {
            id: this.$route.params.id,
            token: '',
            imageUrl: '',
            contact: {}
        }
    },
    watch: {
        '$route'(to) {
            this.id = to.params.id
        }
    },
    methods: {
        getToken() {
            this.token = localStorage.getItem('jwt');
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