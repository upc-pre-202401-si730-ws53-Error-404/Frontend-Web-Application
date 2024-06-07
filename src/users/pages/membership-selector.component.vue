<script>
export default {
  data() {
    return {
      memberships: [
        { id: 1, name: "Básica", description: "Acceso limitado a las características básicas.", price: "$5/mes" },
        { id: 2, name: "Estándar", description: "Acceso a todas las características estándar.", price: "$10/mes" },
        { id: 3, name: "Premium", description: "Acceso ilimitado a todas las características.", price: "$20/mes" },
      ],
      selectedMembership: null,
    };
  },
  computed: {
    selectedMembershipDetails() {
      return this.memberships.find(membership => membership.id === this.selectedMembership);
    }
  },
  methods: {
    selectMembership(id) {
      this.selectedMembership = id;
    }
  }
};
</script>

<template>
  <div class="membership-selector">
    <h1>Selecciona tu Membresía</h1>
    <div class="memberships">
      <div
          v-for="membership in memberships"
          :key="membership.id"
          class="membership-option"
          :class="{ selected: selectedMembership === membership.id }"
          @click="selectMembership(membership.id)"
      >
        <h2>{{ membership.name }}</h2>
        <p>{{ membership.description }}</p>
        <p><strong>{{ membership.price }}</strong></p>
      </div>
    </div>
    <div>selectdMembershipDetails.type</div>
    <div v-if="selectedMembership" class="selected-details">
      <h2>Membresía Seleccionada</h2>
      <p><strong>{{ selectedMembershipDetails.name }}</strong></p>
      <p>{{ selectedMembershipDetails.description }}</p>
      <p><strong>{{ selectedMembershipDetails.price }}</strong></p>
    </div>
  </div>
</template>

<style scoped>
.membership-selector {
  text-align: center;
}
.memberships {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.membership-option {
  border: 1px solid #ccc;
  padding: 20px;
  width: 200px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.membership-option.selected {
  background-color: #f0f0f0;
  border-color: #000;
}
.membership-option:hover {
  background-color: #f9f9f9;
}
.selected-details {
  margin-top: 20px;
}
</style>