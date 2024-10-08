<!-- src/views/Dashboard.vue -->
<template>
  <div class="flex">
    <aside class="fixed left-0">
      <sidebar />
    </aside>

    <main class="ps-96 w-full">
      <section>
        <router-view />
      </section>
    </main>
  </div>
</template>


<script>
import sidebar from '@/components/admin/sidebar.vue';

export default {
  components: {
    sidebar
  }
};
</script>