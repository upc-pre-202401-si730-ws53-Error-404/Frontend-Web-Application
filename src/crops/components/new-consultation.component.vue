<template>
  <pv-dialog class="pv-dialog" :visible="visible" @hide="onHide">
    <template #header>
      <h2>New Consultation</h2>
    </template>
    <pv-input-text class="pv-input-text" v-model="newQuery.userName" placeholder="User Name" />
    <pv-input-text class="pv-input-text" v-model="newQuery.ask" placeholder="Question" />
    <pv-input-text class="pv-input-text" v-model="newQuery.category" placeholder="Category" />
    <pv-calendar v-model="newQuery.date" :showIcon="true" />
    <template #footer>
      <pv-button class="pv-button" label="Submit" @click="submitQuery" />
    </template>
  </pv-dialog>
</template>

<script>
import { ref } from 'vue';
import { ForumApiService } from '../services/forum-api.service.js';

export default {
  name: 'new-consultation',
  props: ['visible'],
  setup(props, { emit }) {
    const newQuery = ref({
      userName: '',
      ask: '',
      category: '',
      date: new Date(),
    });

    const forumApiService = new ForumApiService();

    const submitQuery = () => {
      forumApiService.addQuestion(newQuery.value).then(() => {
        emit('new-query', newQuery.value);
        newQuery.value = {
          userName: '',
          ask: '',
          category: '',
          date: new Date(),
        };
      });
    };

    const onHide = () => {
      emit('close');
    };

    return {
      newQuery,
      submitQuery,
      onHide,
    };
  },
};
</script>


<style scoped>

::v-deep .pv-dialog {
  background-color: #343a40; /* Color de fondo oscuro */
  color: #f8f9fa; /* Color de texto claro */
  margin-top: 20px; /* Margen superior */
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave alrededor del diálogo */
  z-index: 1000; /* Asegura que el diálogo se muestre por encima de otros elementos */
  border: 2px solid #007bff; /* Borde azul */
  opacity: 1; /* Asegura que el diálogo no sea transparente */
}

.pv-dialog .pv-input-text {
  background-color: #495057; /* Color de fondo oscuro para los campos de entrada */
  color: #f8f9fa; /* Color de texto claro para los campos de entrada */
  border: none; /* Sin bordes */
}

.pv-dialog .pv-button {
  background-color: #007bff; /* Color de fondo del botón */
  color: #ffffff; /* Color de texto del botón */
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}

.pv-dialog .pv-button:hover {
  background-color: #0069d9; /* Color de fondo del botón al pasar el mouse */
  color: white;
}
</style>