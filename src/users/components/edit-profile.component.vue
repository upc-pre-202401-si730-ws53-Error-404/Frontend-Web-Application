<script>
import { useRouter } from 'vue-router'; // Importa useRouter

export default {
  name: "edit-profile",
  setup() {
    const router = useRouter();
    const goToHome = () => {
      router.push('/control-panel');
    };
    return {
      goToHome
    };
  }
}
</script>

<template>
  <div>
    <h1>holaaaaaaaaaaaaaaaaaaaaaaa</h1>
    <button @click="goToHome">Go to Home</button>
  </div>
</template>

<style scoped>

</style>