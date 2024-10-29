<!-- src/views/Register.vue -->
<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md w-96">
      <h2 class="text-2xl mb-6 text-center">Register</h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input v-model="email" type="email" class="w-full px-4 py-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input v-model="password" type="password" class="w-full px-4 py-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Confirm Password</label>
          <input v-model="confirmPassword" type="password" class="w-full px-4 py-2 border rounded" required />
        </div>
        <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700  font-medium rounded text-sm px-4 py-2 text-center">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    register() {
      if (this.password === this.confirmPassword) {
        // Static registration logic (can be expanded later)
        alert('Registration successful');
        this.$router.push('/admin/login');
      } else {
        alert('Passwords do not match');
      }
    }
  }
};
</script>
