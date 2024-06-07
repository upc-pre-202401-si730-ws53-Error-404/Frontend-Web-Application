<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Registro</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="username">Nombre de Usuario:</label>
          <input
              type="text"
              id="username"
              v-model="username"
              required
          />
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input
              type="email"
              id="email"
              v-model="email"
              required
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input
              type="password"
              id="password"
              v-model="password"
              required
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmar Contraseña:</label>
          <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              required
          />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterCard',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }

      // Aquí puedes agregar la lógica para manejar el registro
      console.log('Nombre de Usuario:', this.username);
      console.log('Correo Electrónico:', this.email);
      console.log('Contraseña:', this.password);
      console.log('Confirmar Contraseña:', this.confirmPassword);

      // Reiniciar los campos después de enviar
      this.username = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
    }
  }
};
</script>

<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.register-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

form label {
  display: block;
  margin-bottom: 0.5rem;
}

form input {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>