<template>
    <v-dialog
      v-model="editDialog"
      width="800px"
    >
      <template v-slot:activator="{ on }">
        <v-btn @click="editDialog = true" v-on="on">
          <span>Edit</span>
          <v-icon color="blue darken-3">mdi-pencil</v-icon>
        </v-btn>
      </template>
      
      <v-card>
        <v-card-title class="grey darken-2">
          Edit contact
        </v-card-title>
        <v-container>
          <v-row class="mx-2 text-center">
            <v-col v-if="imageSelected">
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
            <v-col v-else>
              <v-col
                class=""
              >
                <v-avatar
                  size="100px"
                  class="mx-3"
                >
                  <v-btn
                    icon
                    @click="onImagePick"
                  >
                    <v-icon size="100px">
                      mdi-camera
                    </v-icon>
                  </v-btn>
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
                  v-model="contact.fullName"
                  hey
                ></v-text-field>
              </v-row>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="contact.company"
                prepend-icon="mdi-account-card-details-outline"
                contact.company
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                v-model="contact.jobTitle"
                placeholder="Job title"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="contact.email"
                prepend-icon="mdi-mail"
                placeholder="Email"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="contact.phone"
                type="tel"
                prepend-icon="mdi-phone"
                placeholder="(000) 000 - 0000"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="contact.notes"
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
            @click="editDialog = false"
          >Cancel</v-btn>
          <v-btn
            text
            @click="editContact"
          >Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
  props: ['contact', 'imageUrl'],
  data() {
      return {
          editDialog: false,
          imageSelected: false
      }
  },
  methods: {
    editContact(e) {
      e.preventDefault();
      this.editDialog = false;
      const editedContact = {
        _id: this.contact._id,
        profilePicture: this.contact.profilePicture,
        fullName: this.contact.fullName,
        company: this.contact.company,
        jobTitle: this.contact.jobTitle,
        email: this.contact.email,
        phone: this.contact.phone,
        notes: this.contact.notes
      }

      this.$emit('edit-contact', editedContact);
    },
    onImagePick() {
      this.$refs.profilePicture.click()
    },
    onImagePicked() { 
      const files = event.target.files
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.contact.profilePicture = files[0]
      console.log(this.profilePicture)

      this.imageSelected = true
    }
  }
}
</script>