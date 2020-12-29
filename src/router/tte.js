export default [
  {
    path: "/tte",
    name: "Tte",
    component: () => import("@/views/tte/index.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tte/timetable",
    name: "Timetable",
    component: () => import("@/views/tte/Timetable.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tte/timetable/:id",
    name: "ViewTimetable",
    component: () => import("@/views/tte/ViewTimetable.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tte/todo",
    name: "Todo",
    component: () => import("@/views/tte/Todo.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tte/event",
    name: "Event",
    component: () => import("@/views/tte/Event.vue"),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/tte/goal",
    name: "Goal",
    component: () => import("@/views/tte/Goal.vue"),
    meta: {
      requiresAuth: true
    }
  },
];
