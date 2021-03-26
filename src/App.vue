<template>
  <ion-app>
    <ion-router-outlet />
    <h2>hey</h2>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,

  }
});
</script>