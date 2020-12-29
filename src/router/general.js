export default [
  {
    path: "/",
    name: "Landing",
    component: () => import("@/views/general/Landing.vue"),
    meta: {
      requiresGuest: true
    }
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/general/Home.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/submit",
    name: "Submit",
    component: () => import("@/views/general/Submit.vue")
    // meta: {
    //   requiresAuth: true,
    // },
  },
  {
    path: "/courses",
    name: "Course Outline",
    component: () => import("@/views/general/Courses.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/Pastquestions",
    name: "Past Question",
    component: () => import("@/views/general/PastQuestions.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Your Profile",
    component: () => import("@/views/general/Profile.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/payment",
    name: "Payment",
    component: () => import("@/views/general/Payment.vue"),
    meta: {
      requiresAuth: true
    }
  }
];
