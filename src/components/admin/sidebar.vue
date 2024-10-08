<template>
    <nav class=" h-svh w-96 border-e bg-gray-950">
        <ul class="flex flex-col space-y-4 p-8 text-white">
            <li>
                <router-link to='/admin/dashboard' class="">
                    Dashboard
                </router-link>
            </li>
            <li>
                <router-link to='/admin/reports' class="">
                    Reports
                </router-link>
            </li>
            <li>
                <router-link to='/admin/settings' class="">
                    Settings
                </router-link>
            </li>
            <li>
                <router-link to="/admin/login" class="">
                    Logout
                </router-link>
            </li>

        </ul>
    </nav>
</template>

<script>
export default {
    name: 'admin_sidebar'
}
</script>