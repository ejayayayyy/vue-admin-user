<!-- src/views/Login.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-96">
      <h2 class="text-2xl mb-6 text-center font-bold">Login</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input v-model="email" type="email" class="w-full px-4 py-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input v-model="password" type="password" class="w-full px-4 py-2 border rounded" required />
        </div>
        <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded my-4">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.email === 'admin@example.com' && this.password === 'password') {
        this.$router.push('/admin/dashboard');
      } else {
        alert('Invalid credentials');
      }
    }
  }
};
</script>
