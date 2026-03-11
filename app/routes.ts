import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("callback", "components/Profile.tsx"),
    route("login", "components/LogInPage.tsx"),

] satisfies RouteConfig;
