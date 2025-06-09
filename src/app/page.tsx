import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Us from "@/components/Us";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    
    <div>
       <Header />
      <Hero />
      <Us />
      <Services />
      <Blog />
    </div>
  );
}
