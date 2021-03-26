<template>
    <ion-app>
    <ion-router-outlet />
        <ion-page>
            <ion-header>
                <ion-title>hihihi
                </ion-title>
            </ion-header>
            <ion-content>memories</ion-content>
        </ion-page>
  </ion-app>
</template>
<script>
import {IonPage, IonHeader, IonTitle, IonContent } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent ({
  name: 'Memories',
  components: {
      IonPage,
      IonHeader,
      IonTitle,
      IonContent,
  }
});
</script>
