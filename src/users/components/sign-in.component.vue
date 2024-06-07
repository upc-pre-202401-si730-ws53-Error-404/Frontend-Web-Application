<script>
export default {
  name: "sign-in"
}
</script>

<template>
  <div class="login-container">
    <pv-card class="login-card">
      <template #title>
        <h2>Inicio de Sesión</h2>
      </template>
      <template #content>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input
                type="email"
                id="email"
                v-model="email"
                required
            />
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input
                type="password"
                id="password"
                v-model="password"
                required
            />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>

</style>