import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase/app";
import "firebase/auth";
import tutorRoutes from "./tutor";
import askQuestionsRoutes from "./askQuestions";
import tte from "./tte";
import general from "./general";
import auth from "./auth";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  ...tutorRoutes,
  ...askQuestionsRoutes,
  ...tte,
  ...general,
  ...auth,

  {
    path: "/chat",
    name: "Chat",
    component: () => import("@/views/chat/index.vue"),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/note",
    name: "Note",
    component: () => import("@/views/note/index.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/market",
    name: "Market",
    component: () => import("@/views/market/index.vue"),
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !(await firebase.getCurrentUser())) {
    next({ name: "Login" });
  } 
  else if (
    to.matched.some(record => record.meta.requiresGuest) &&
    (await firebase.getCurrentUser())
  ) {
    next({
      name: "Home"
    });
  }
  else if (requiresAuth && !(await firebase.getCurrentUser().emailVerified)) {
 
      next({
        name: "Verify"
      });
  }  
  else{
    next(); 
  }
});

export default router
