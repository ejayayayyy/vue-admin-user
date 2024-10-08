import { createRouter, createWebHistory } from "vue-router";
import login from "@/views/admin/admin_login.vue";
import register from "@/views/admin/admin_register.vue";
import dashboard from "@/views/admin/admin_dashboard.vue";

// child components
import dashboard_cont from "@/components/admin/dashboard_content.vue";
import reports_cont from "@/components/admin/reports_content.vue";
import settings_cont from "@/components/admin/settings_content.vue";

const routes = [
  {
    path: "/admin/login",
    component: login,
  },

  {
    path: "/admin/register",
    component: register,
  },
  
  {
    path: "/admin/dashboard",
    component: dashboard,
    children: [
      {
        path: '',
        component: dashboard_cont,
      },
      {
        path: '/admin/reports',
        component: reports_cont,
      },
      {
        path: '/admin/settings',
        component: settings_cont,
      }
    ],
    redirect: '/admin/dashboard'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
