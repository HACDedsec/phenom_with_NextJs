import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavbarComponent from "@/component/Navbar";
import SectionComponent from "@/component/Section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <SectionComponent />
    </>
  );
}
