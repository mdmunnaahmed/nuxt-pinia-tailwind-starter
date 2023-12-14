export default defineNuxtRouteMiddleware(() => {
  const user = useSupabaseUser();
  console.log(user);
  if (!user.value && to.path !== "/login" && to.path !== "/register") {
    return navigateTo("/register");
  } else if (isLoggedIn && (to.path === "/login" || to.path === "/register")) {
    return navigateTo("/");
  }
});
