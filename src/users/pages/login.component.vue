

<script>
export default {
  data() {
    return {
      user: User,
      email: '',
      password: '',

    };
  },
  methods: {
    handleLogin() {
      // Aquí puedes agregar la lógica para manejar el inicio de sesión
      console.log('Correo:', this.email);
      console.log('Contraseña:', this.password);
      // Ejemplo: Redirigir al usuario a la página de inicio después de iniciar sesión
      // this.$router.push('/home');
    },
  },
};
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <h2>Inicio de Sesión</h2>
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
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.login-card {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

h2 {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: calc(100% - 10px);
  padding: 8px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>