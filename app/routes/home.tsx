import type { Route } from "./+types/home";
import { StartPage } from "~/components/StartPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Case System" },
    { name: "description", content: "Case System for all your case management needs" },
  ];
}

export default function Home() {
  return <StartPage />;
}
