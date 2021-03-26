<template>
        <ion-header>
            <ion-toolbar color="dark">
                <ion-title>PortFolio</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            
        </ion-content>
</template>

<script>
import {IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Home',
  components: {
      IonHeader,
      IonTitle,
      IonContent,
      IonToolbar
  }
});
</script>
