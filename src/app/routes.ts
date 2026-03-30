import { type RouteConfig, index, route } from "@react-router/dev/routes";


export default [
  index("routes/home.tsx"),
  route("callback", "routes/callback.tsx"),
  route("home", "routes/StartPage.tsx"),
  route("profile", "../features/profile/Profile.tsx"),
  route("about", "../features/about/About.tsx"),
  route("contact", "../features/contact/Contact.tsx"),

  route("cases", "./routes/cases.tsx"),
  route("cases/create", "./routes/cases.create.tsx"),
  route("cases/:id", "./routes/cases.$id.tsx"),

  //route("login", "components/LogInPage.tsx"),
] satisfies RouteConfig;
