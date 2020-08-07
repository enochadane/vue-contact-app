<template>
    <div>
        <v-card
            style="margin: 10px"
            width="1000"
            height="100"
            :to="{ name: 'Details', params: { id } }"
            color="silver"
        >
            <v-list>
                <v-list-item
                >
                    <v-list-item-avatar>
                        <v-img 
                            :src="imageUrl"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>
                            {{ contact.fullName }}
                        </v-list-item-title>
                    </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-card>
    
    </div>
</template>

<script>
// import ContactDetail from './ContactDetail'

export default {
    name: 'Contact',
    props: ['contact'],
    data() {
        return {
            id: this.contact._id,
            imageUrl: ''
        }
    },
    methods: {
        
    },
    components: {
        // ContactDetail
    },
    created() {
        this.$http.get(`/${this.contact.profilePicture}`, {
            responseType: 'arraybuffer'
        })
        .then ((res) => {

            this.imageUrl = 'data:image/png;base64, ' + Buffer.from(res.data).toString('base64');

            // console.log(this.imageUrl)
        })
        .catch(err => console.log(err));
    }
}
</script>