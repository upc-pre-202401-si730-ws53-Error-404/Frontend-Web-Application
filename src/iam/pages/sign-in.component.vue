<script>
import {useAuthenticationStore} from "../services/authentication.store.js";
import {SignInRequest} from "../model/sign-in.request.js";

export default {
  name: "sign-in",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    onSignIn() {
      let authenticationStore = useAuthenticationStore();
      let signInRequest = new SignInRequest(this.username, this.password);
      authenticationStore.signIn(signInRequest, this.$router);
    }
  }
}
</script>

<template>
  <div class="login-container">
    <pv-card class="login-card">
      <template #title>
        <h3>Sign-in</h3>
        <i class="pi pi-user" style="font-size: 32px;"></i>
      </template>
      <template #content>
        <form @submit.prevent="onSignIn">
          <div class="form-group">
            <pv-float-label>
              <label for="username">Username</label>
              <pv-input-text id="username" v-model="username" :class="{'p-invalid': !username}"/>
              <small v-if="!username" class="p-invalid">Username is required</small>
            </pv-float-label>
          </div>
          <div class="form-group">
            <input
                type="password"
                id="password"
                v-model="password"
                placeholder="Password"
                required
            />
          </div>
          <div class="button-container">
            <button type="submit" class="auth-button">Sign in</button>
            <button type="button" class="auth-button" @click="handleSignUp">Sign up</button>
          </div>
        </form>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.button-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.auth-button {
  background-color: #005f40;
  padding: 10px 20px;
  color: white;
}
</style>