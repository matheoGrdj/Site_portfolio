<template>
  <div class="app-shell min-h-screen font-sans">
    <Navbar />
    <router-view />
    <Footer />
    <div class="theme-reveal" aria-hidden="true"></div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar,
    Footer
  }
};
</script>
