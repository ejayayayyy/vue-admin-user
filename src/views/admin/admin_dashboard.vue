<template>
  <div class="flex">
    <aside>
      <sidebar />
    </aside>

    <main class="lg:ml-64 mt-16 lg:mt-20 w-full ">
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
    sidebar,
  }
};
</script>   