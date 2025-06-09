import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Us from "@/components/Us";

export default function Home() {
  return (
    
    <div>
       <Header />
      <Hero />
      <Us />
    </div>
  );
}
