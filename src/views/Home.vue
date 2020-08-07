<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <v-list-item-title>
          {{ user.email }}
        </v-list-item-title>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn 
        @click="logOut"
        color="blue darken-3">
          <span>Log Out</span>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn
        icon
        large
      >
        <v-avatar
          size="32px"
          item
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          ></v-img></v-avatar>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container
        class=""
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <add-contact @add-contact="addContact"/>
          <contacts :contacts="contacts"/>
        </v-row>
      </v-container>
    </v-main>  
  </v-app>
</template>

<script>
import AddContact from '../components/AddContact'
import Contacts from '../components/Contacts'
import VueJwtDecode from 'vue-jwt-decode'

  export default {
    props: {
      source: String,
    },
    components: {
      AddContact,
      Contacts
    },
    data: () => ({
      drawer: null,
      items: [],
      contacts: [],
      token: '',
      user: {}
    }),
    methods: {
      getUserDetails() {
        this.token = localStorage.getItem('jwt');
        let decoded = VueJwtDecode.decode(this.token);
        this.user = decoded;
      },
      addContact(newContact) {
        console.log(newContact);
        const {
          profilePicture, 
          fullName,
          company,
          jobTitle,
          email,
          phone,
          notes
        } = newContact;

        const formData = new FormData();
        formData.append('profilePicture', profilePicture);
        formData.append('fullName', fullName);
        formData.append('company', company);
        formData.append('jobTitle', jobTitle);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('notes', notes);
        
        this.$http.post('/contacts', 
          formData, {
          headers: {
            'Authorization': `Basic ${this.token}`
          }
        })
        .then(res => this.contacts = [...this.contacts, res.data.data])
        .catch(err => console.log(err));
        
      },
      logOut() {
        localStorage.removeItem('jwt');
        this.$router.push('/');
      }
    },
    created() {
      this.getUserDetails();

      this.$http.get('/contacts', {
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      })
      .then(res => this.contacts = res.data.data)
      .catch(err => console.log(err));

      // console.log(this.token);
    }
  }
</script>