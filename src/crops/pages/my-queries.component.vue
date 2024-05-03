<template>
  <div class="main-container p-mt-md-5 p-mt-sm-2">
    <h1>Consultation Forum</h1>
    <pv-button class="pv-button" label="Ask your colleagues!" @click="openNewQuery" />
    <new-consultation-component :visible="showNewQuery" @close="showNewQuery = false" @new-query="addNewQuery" />
    <pv-data-table class="pv-data-table" :value="questions">
      <pv-column v-for="col in columns" :key="col.field" :field="col.field" :header="col.header"></pv-column>
    </pv-data-table>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ForumApiService } from '../services/forum-api.service.js';
import NewConsultationComponent from "../components/new-consultation.component.vue";

export default {
  name: 'my-queries',
  components: {
    NewConsultationComponent,
  },
  setup() {
    const showNewQuery = ref(false);
    const questions = ref([]);

    const forumApiService = new ForumApiService();

    forumApiService.getQuestions().then((response) => {
      questions.value = response.data;
      console.log(questions.value);
    });

    const openNewQuery = () => {
      showNewQuery.value = true;
    };

    const columns = [
      { field: 'userName', header: 'User Name' },
      { field: 'ask', header: 'Question' },
      { field: 'category', header: 'Category' },
      { field: 'date', header: 'Date' },
    ];


    const addNewQuery = (newQuery) => {
      questions.value.push(newQuery);
    };

    return {
      showNewQuery,
      questions,
      openNewQuery,
      columns,
      addNewQuery,
    };
  },
};
</script>

<style scoped>
.main-container {
  margin-top: 70px; /* Ajusta este valor según el tamaño de tu toolbar */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa; /* Color de fondo claro */
  color: #343a40; /* Color de texto oscuro */
  padding: 80px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra suave alrededor del contenedor */
  margin: 0 auto; /* Centra el contenedor en la página */
  width: 90%; /* Ajusta según tus necesidades */
}

h1 {
  font-size: 1.5em; /* Ajusta el tamaño del título */
  color: #6c757d; /* Color de texto oscuro */
}

.pv-button {
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

.pv-button:hover {
  background-color: #0069d9; /* Color de fondo del botón al pasar el mouse */
  color: white;
}

.pv-data-table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
}

.pv-data-table th, .pv-data-table td {
  border: 1px solid #dee2e6; /* Borde de las celdas de la tabla */
  padding: 8px;
}

.pv-data-table th {
  background-color: #f8bd00; /* Color de fondo de los encabezados de la tabla */
  color: #495057; /* Color de texto de los encabezados de la tabla */
}

.pv-data-table tr:nth-child(even) {
  background-color: #f2f2f2; /* Color de fondo para las filas pares */
}

.pv-data-table tr:nth-child(odd) {
  background-color: #f8bd00; /* Color de fondo para las filas impares */
}

.pv-data-table tr:hover {
  background-color: #d1e8ff; /* Color de fondo para las filas al pasar el mouse */
}
</style>