<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Contact app</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-email"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-btn
                text
                @click="goToRegister"
              >
                register
              </v-btn>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                  color="primary"
                  @click="Login">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

  export default {
    props: {
      source: String,
    },
    data: () => ({
      email: '',
      password: ''
    }),
    methods: {
      Login(e) {
        e.preventDefault();
        this.$http.post('/user/login', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          let token = res.data.token;
          // console.log(token);
          localStorage.setItem('jwt', token);
          if(token) {
            this.$router.push("/contacts");
          }
          else {
            this.$router.push('/');
          }
        })
        .catch(err => console.log(err));
      },
      goToRegister() {
        this.$router.push('/register');
      }
    }

  }
</script>