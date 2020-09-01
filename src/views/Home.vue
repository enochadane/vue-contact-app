<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <v-list-item-title>
          {{ user.name }}
        </v-list-item-title>
      </v-list>
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
        v-model="search"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn 
        text
        @click="logOut">
          <v-icon> mdi-logout </v-icon>
          <span>Log Out</span>
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
          <contacts :filteredContacts="filteredContacts"/>
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
      user: {},
      search: ''
    }),
    computed: {
      filteredContacts: function() {
        return this.contacts.filter((contact) => {
          return contact.fullName.match(this.search);
        });
      }
    },
    methods: {
      getUserDetails() {
        this.token = localStorage.getItem('jwt');
        let decoded = VueJwtDecode.decode(this.token);
        this.user = decoded;
      },
      addContact(newContact) {
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
        formData.append('creatorId', this.user._id);

        this.$http.post('/contacts', 
          formData, {
          headers: {
            'Authorization': `Bearer ${this.token}`
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
      .then(res => {
          for(var contact in res.data.data) {
            if (res.data.data[contact].creatorId === this.user._id) {
              this.contacts = [...this.contacts, res.data.data[contact]]
            }
          }
      })
      .catch(err => console.log(err));

    }
  }
</script>