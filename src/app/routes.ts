import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("callback", "routes/callback.tsx"),
  route("home", "routes/StartPage.tsx"),
  route("profile", "../features/profile/Profile.tsx"),
  route("about", "../features/about/About.tsx"),
  route("contact", "../features/contact/Contact.tsx"),
  route("cases", "../features/cases/cases.tsx"),
  //route("cases/:id", "../features/cases/CaseDetails.tsx"),
  route("cases/create", "../features/cases/CreateCase.tsx"),
  
  //route("login", "components/LogInPage.tsx"),
] satisfies RouteConfig;
