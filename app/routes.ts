import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("callback", "routes/callback.tsx"),
  route("home", "components/StartPage.tsx"),
  route("profile", "components/profile/Profile.tsx"),
  route("about", "components/other/About.tsx"),
  route("contact", "components/other/Contact.tsx"),
  route("cases", "components/cases/cases.tsx"),
  
  //route("login", "components/LogInPage.tsx"),
] satisfies RouteConfig;
