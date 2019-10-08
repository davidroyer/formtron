const routes = [
  {
    path: "/",
    component: () => import("layouts/MyLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "/programs", component: () => import("pages/Programs.vue") },
      { path: "/github", component: () => import("pages/Github.vue") },
      { path: "/forms", component: () => import("pages/Forms.vue") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
