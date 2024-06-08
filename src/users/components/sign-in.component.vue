<script>
export default {
  name: "sign-in"
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
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <input
                type="email"
                id="email"
                v-model="Email"
                placeholder="E-mail"
                required
            />
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
            <button type="button" class="auth-button">Sign up</button>
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