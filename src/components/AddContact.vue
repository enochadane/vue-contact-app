<template>
  <v-app>
    <v-btn
      bottom
      color="pink"
      dark
      fab
      fixed
      right
      @click="dialog = !dialog"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="800px"
    >
      <v-card>
        <v-card-title class="grey darken-2">
          Create contact
        </v-card-title>
        <v-container>
          <v-row class="mx-2">
            <v-col>
              <v-col
                class=""
              >
                <v-avatar
                  size="100px"
                  class="mx-3"
                >
                  <img
                    :src="imageUrl"
                    @click="onImagePick"
                  >
                </v-avatar>
              </v-col>
            </v-col>
            <input
              type="file" 
              ref="profilePicture" 
              style="display: none"
              accept="image/*"
              @change="onImagePicked">
            <v-col
              class="align-center justify-space-between"
              cols="12"
            >
              <v-row
                align="center"
                class="mr-0"
              >
                <v-avatar
                  size="40px"
                  class="mx-3"
                >
                  <img
                    src="//ssl.gstatic.com/s2/oz/images/sge/grey_silhouette.png"
                    alt=""
                  >
                </v-avatar>
                <v-text-field
                  v-model="fullName"
                  placeholder="Full Name"
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="company"
                prepend-icon="mdi-account-card-details-outline"
                placeholder="Company"
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="jobTitle"
                placeholder="Job title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                prepend-icon="mdi-mail"
                placeholder="Email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="phone"
                type="tel"
                prepend-icon="mdi-phone"
                placeholder="(000) 000 - 0000"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="notes"
                prepend-icon="mdi-text"
                placeholder="Notes"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions>
          <v-btn
            text
            color="primary"
          >More</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="dialog = false"
          >Cancel</v-btn>
          <v-btn
            text
            @click="addContact"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>   
</template>

<script>
export default {
  name: 'AddContact',
  data() {
    return {
      dialog: false,
      imageUrl: '',
      profilePicture: '',
      fullName: '',
      company: '',
      jobTitle: '',
      email: '',
      phone: '',
      notes: ''
    }
  },
  methods: {
    addContact(e) {
      e.preventDefault();
      this.dialog = false;
      const newContact = {
        profilePicture: this.profilePicture,
        fullName: this.fullName,
        company: this.company,
        jobTitle: this.jobTitle,
        email: this.email,
        phone: this.phone,
        notes: this.notes
      }
      this.$emit('add-contact', newContact);

      // this.fullName = '';
      // this.email = '';
    },
    onImagePick() {
      this.$refs.profilePicture.click()
    },
    onImagePicked(event) {
      console.log(event);
      const files = event.target.files
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.profilePicture = files[0]
      // console.log(this.profilePicture)
    }
  }
}
</script>

<style scoped>
  
</style>