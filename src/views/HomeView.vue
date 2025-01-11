<script>
import NavBar from '@/components/NavBar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    NavBar,
  },
})
</script>

<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-grey">Bonjour,</h1>
              <h1 class="text-white">Je suis Siham</h1>
              <span class="text-grey"> Developpeuse Web</span>
              <br />
              <v-btn tile dark yellow class="text-yellow mt-2" variant="outlined"
                >Contactez-moi</v-btn
              >
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="
                position: absolute;
                z-index: 9999;
                left: 0;
                right: 0;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
              "
            >
              <font-awesome-icon icon="angle-double-down" class="text-white" size="2x" />
            </div>
          </v-col>
          <v-col cols="5">
            <v-img
              class="position-relative"
              src="https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 870w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=1170&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1170w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=1470&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1470w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=1740&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1740w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=1770&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 1770w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2070w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=2340&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2340w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=2370&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2370w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2670w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=2940&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2940w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=2970&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 2970w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=3270&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3270w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=3540&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3540w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=3570&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3570w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=3870&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 3870w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=4140&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4140w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=4170&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4170w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=4470&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4470w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=4740&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4740w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=4770&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 4770w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=5070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5070w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=5340&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5340w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=5370&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5370w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=5670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5670w, https://images.unsplash.com/photo-1484981138541-3d074aa97716?q=80&amp;w=5760&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D 5760w"
              width="100%"
              height="100%"
            ></v-img>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-app>
</template>
<style scoped>
.v-container {
  padding: 16px 0px;
}
.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}
.head::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: black;
  transform: skew(0deg, 6deg);
}
.head::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: black;
  transform: skew(0deg, -6deg);
}
</style>
