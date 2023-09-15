import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { BgGradient } from "@/components/BgGradient";

export default function Home() {
  return (
    <>
      <Header />
      <BgGradient />
    </>
  );
}
