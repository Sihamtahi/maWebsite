<template>
  <v-app-bar app color="black" dark flat class="px-12">
    <v-btn color="yellow">
      <font-awesome-icon icon="signature" />
      Siham</v-btn
    >
    <v-spacer></v-spacer>
    <v-btn @click="scroll('home')" class="text-yellow">Home</v-btn>
    <v-btn @click="scroll('about')">About</v-btn>
    <v-btn @click="scroll('portfolio')">Porfolio</v-btn>
    <v-btn @click="scroll('services')">Services</v-btn>
    <v-btn @click="scroll('page')">Page</v-btn>
    <v-btn @click="scroll('blog')">Blog</v-btn>
    <v-btn @click="scroll('contact')">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName)
      element.scrollIntoView({ behavior: 'smooth' })
    },
  },
}
</script>
