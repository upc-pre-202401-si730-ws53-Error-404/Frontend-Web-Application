<script>
import { ProfileApiService } from "../service/profile-api.service.js";
import { Profile } from "../model/profile.entity.js";

const profileApiService = new ProfileApiService();

export default {
  data() {
    return {
      newName: '',
      boolName: true,
      newSubscription: '',
      boolSubscription: true,
      newEmail: '',
      boolEmail: true,
      newCountry: null,
      boolCountry: true,
      newCity:null,
      boolCity: true,
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
    profileApiService.getProfileById(localStorage.getItem('userId')).then(response => {
      const prof = response.data;
      this.newName = prof.fullName;
      this.newEmail = prof.email;
      this.newCountry = prof.countryId;
      this.newCity = prof.cityId;
      this.newSubscription = prof.subscriptionId;
    }).catch(error => {
      console.error('Error getting prof:', error);
    });
  },
  watch: {
    
  },
  methods: {
    saveNameChange(newName) {
      this.boolName = true;
    },
    changeName() {
      this.boolName = false;
    },
    saveEmailChange(newEmail) {
      const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      if (emailRegex.test(newEmail)) {
        this.boolEmail = true;
      } else {
        alert('Please enter a valid email address');
      }
    },
    changeEmail() {
      this.boolEmail = false;
    },
    saveCountryChange(newCountry) {
      this.boolCountry = true;
    },
    changeCountry() {
      this.boolCountry = false;
    },
    saveCityChange(newCity) {
      this.boolCity = true;
    },
    changeCity() {
      this.boolCity = false;
    },
    savePasswordChange(newPassword) {
      this.boolPassword = true;
    },
    changePassword() {
      this.boolPassword = false;
    },
    confirmApply() {      
      const profile = new Profile(localStorage.getItem('userId'), this.newName, this.newEmail, this.newCountry, this.newSubscription, this.newCity);

      console.log(profile);

      profileApiService.update(profile.id, profile).then(response => {
        console.log(response);
        this.$router.push('/control-panel');
        alert('¡Actualización exitosa!');
      }).catch(error => {
        console.error('Error getting prof:', error);
        alert('Error al actualizar.');
      });
    },
    signOut() {
      this.$router.push('/sign-in');
    },

    updateCities(event) {
      const selectedCountry = this.countries.find(country => country.name === event.value);
      this.cities = selectedCountry.cities;
    },
  },
};
</script>

<template>
  <div class="smaller-div" v-if="true">
    <pv-card class="highlighted-border">
      <template #title>
        <div class="profile-header">
          <br>
          <h2 class="black">My Profile</h2>
        </div>
      </template>
      <template #content>
        <div class="profile-content">
          <div class="profile-image">
            <img class="rounded-full large-image" alt="avatar" src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg">
          </div>
          <div class="profile-details">
            <h3>Name:</h3>
            <pv-input-text v-model="newName" :disabled="boolName" />
            <pv-button class="green-button" v-if="!boolName" @click="saveNameChange(newName)">Check</pv-button>
            <a @click="changeName()">Change Name</a>
            <pv-divider/>
            <h3>Email:</h3>
            <pv-input-text v-model="newEmail" :disabled="boolEmail" />
            <pv-button class="green-button" v-if="!boolEmail" @click="saveEmailChange(newEmail)">Check</pv-button>
            <a @click="changeEmail()">Change Email</a>
            <pv-divider/>
            <h3>Country:</h3>
            <pv-dropdown v-model="newCountry" :options="countries" optionLabel="name" optionValue="id" :disabled="boolCountry" />
            <pv-button class="green-button" v-if="!boolCountry" @click="saveCountryChange(newCountry)">Check</pv-button>
            <a @click="changeCountry()">Change Country</a>
            <pv-divider/>
            <h3>City:</h3>
            <pv-dropdown v-model="newCity" :options="cities" optionLabel="name" optionValue="id" :disabled="boolCity" />
            <pv-button class="green-button" v-if="!boolCity" @click="saveCityChange(newCity)">Check</pv-button>
            <a @click="changeCity()">Change City</a>
            <pv-divider/>
            <pv-button class="green-button" @click="confirmApply">Apply</pv-button>
            <pv-button class="red-button" @click="signOut()">Sign Out</pv-button>
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