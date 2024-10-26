import { createRouter, createWebHistory } from "vue-router";
import login from "@/views/admin/admin_login.vue";
import register from "@/views/admin/admin_register.vue";
import dashboard from "@/views/admin/admin_dashboard.vue";
// import admin_user from "@/views/admin/admin_user.vue";

// dashboard child components
import dashboard_cont from "@/components/admin/overview/dashboard_content.vue";
import reports_cont from "@/components/admin/reports/reports_content.vue";
import settings_cont from "@/components/admin/settings/settings_content.vue";
import forecast_cont from "@/components/admin/weather/forecast_content.vue";
import post_cont from "@/components/admin/post/post_content.vue";

// account child components
import my_profile_cont from "@/components/admin/profile/my_profile_content.vue";
import account_settings_con from "@/components/admin/profile/account_settings_content.vue";

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
        path:'/admin/posts',
        component: post_cont,
      },
      {
        path: '/admin/reports',
        component: reports_cont,
      },
      {
        path: '/admin/settings',
        component: settings_cont,
      },
      {
        path: '/admin/forecast',
        component: forecast_cont
      },
      {
        path: '/admin/profile',
        component: my_profile_cont,
      },
      {
        path: '/admin/settings',
        component: account_settings_con,
      }
    ],
    redirect: '/admin/dashboard'
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
