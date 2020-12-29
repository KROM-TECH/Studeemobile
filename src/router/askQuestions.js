export default [
  {
    path: "/questions",
    name: "Question hub",
    component: () => import("@/views/askQuestions/index.vue"),
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: "/questions/ask",
    name: "Ask Question",
    component: () => import("@/views/askQuestions/Ask.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/questions/answer",
    name: "Answer Question",
    component: () => import("@/views/askQuestions/Answer.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/questions/answer/:id",
    name: "Answer",
    component: () => import("@/views/askQuestions/Details.vue"),
    meta: {
      requiresAuth: true
    }
  }
];
