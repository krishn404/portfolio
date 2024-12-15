"use client";

import { Header } from "@/components/header"
import { Intro } from "@/components/intro"
import { Projects } from "@/components/projects"
import { useEffect } from "react"
import { gsap } from "gsap"

export default function Home() {
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    timeline
      .set(".animate", { opacity: 0, y: 20, scale: 0.98 })
      .to(".animate", {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: {
          amount: 0.6,
          ease: "power2.inOut"
        },
        clearProps: "all"
      });
  }, []);

  return (
    <div className="relative">
      <main className="min-h-screen pb-16">
        <Header className="animate" />
        <Intro className="animate" />
        <Projects className="animate" />
      </main>
    </div>
  )
}

