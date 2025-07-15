import Image from "next/image";
import styles from "@app/layout/page.module.css";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Us from "@/components/sections/Us";
import Services from "@/components/sections/Services";
import Blog from "@/components/blog/Blog";
import Clients from "@/components/sections/Clients";
import Form from "@/components/forms/FormContact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Us />
      <Services />
      <Blog />
      <Clients />
      <Form />
      <Footer />
    </div>
  );
}
