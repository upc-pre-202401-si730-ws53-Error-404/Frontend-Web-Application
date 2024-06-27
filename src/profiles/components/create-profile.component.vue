<script>
import { ProfileApiService } from "../service/profile-api.service.js";
import { Profile2 } from "../model/profile.entity.js";

const profileApiService = new ProfileApiService();

export default {
  data() {
    return {
      newName: '',
      newSubscription: '',
      newEmail: '',
      newCountry: null,
      newCity:null,
      countries: [
        { id: 1, name: 'Argentina' },
        { id: 2, name: 'Bolivia' },
        { id: 3, name: 'Brasil' },
        { id: 4, name: 'Chile' },
        { id: 5, name: 'Colombia' },
        { id: 6, name: 'Ecuador' },
        { id: 7, name: 'Guayana Francesa' },
        { id: 8, name: 'Guyana' },
        { id: 9, name: 'Paraguay' },
        { id: 10, name: 'Perú' },
        { id: 11, name: 'Surinam' },
        { id: 12, name: 'Uruguay' },
        { id: 13, name: 'Venezuela' }
      ],
      cities: [
        { id: 1, name: 'Buenos Aires' },
        { id: 2, name: 'São Paulo' },
        { id: 3, name: 'Río de Janeiro' },
        { id: 4, name: 'Lima' },
        { id: 5, name: 'Bogotá' },
        { id: 6, name: 'Santiago' },
        { id: 7, name: 'Caracas' },
        { id: 8, name: 'Quito' },
        { id: 9, name: 'Montevideo' },
        { id: 10, name: 'Asunción' },
        { id: 11, name: 'La Paz' },
        { id: 12, name: 'San José' },
        { id: 13, name: 'Panamá' }
      ]
    };
  },
  mounted() {
    
  },
  watch: {
    
  },
  methods: {
    saveEmailChange(newEmail) {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (emailRegex.test(newEmail)) {
        this.boolEmail = true;
      } else {
        alert('Please enter a valid email address');
      }
    },
    confirmApply() {      
      const profile = new Profile2(this.newName, '',  this.newEmail, this.newCity, this.newCountry, this.newCountry);

      console.log(profile);

      profileApiService.create(profile).then(response => {
        console.log(response);
        alert('Creacion exitosa!');
        this.$router.push('/control-panel');
      }).catch(error => {
        console.error('Error getting prof:', error);
        alert('Error al actualizar.');
      });
    },
    signOut() {
    },

    updateCities(event) {
      const selectedCountry = this.countries.find(country => country.name === event.value);
      this.cities = selectedCountry.cities;
    },
  },
};
</script>

<template>
  <div class="smaller-div">
    <pv-card class="highlighted-border">
      <template #title>
        <div class="profile-header">
          <br>
          <h2 class="black">Create Profile</h2>
        </div>
      </template>
      <template #content>
        <div class="profile-content">
          <div class="profile-image">
            <img class="rounded-full large-image" alt="avatar" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg">
          </div>
          <div class="profile-details">
            <h3>Name:</h3>
            <pv-input-text v-model="newName" />
            <pv-divider/>
            <h3>Email:</h3>
            <pv-input-text v-model="newEmail" />
            <pv-divider/>
            <h3>Country:</h3>
            <pv-dropdown v-model="newCountry" :options="countries" optionLabel="name" optionValue="id"  />
            <pv-divider/>
            <h3>City:</h3>
            <pv-dropdown v-model="newCity" :options="cities" optionLabel="name" optionValue="id"  />
            <pv-divider/>
            <pv-button class="green-button" @click="confirmApply">Apply</pv-button>
          </div>
        </div>
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.highlighted-border {
  border: 2px solid #000;
}
.red-button {
  background-color: #FF3439;
}
.green-button {
  background-color: #005f40;
}
.smaller-div {
  width: 55rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  display: block;
}

.large-image {
  height: 250px;
  width: 250px;
  border-radius: 50%;
}

.black{
  color: black;
}

.profile-content {
  display: flex;
  justify-content: space-between;
}

.profile-image {
  flex: 1;
}

.profile-details {
  flex: 2;
}
</style>