import React from "react";
import Button from "@/components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="here bg"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      {/* Green dots */}
      <div className="absolute inset-0 ovetflow-hidden pointer-events-none">
        {[...Array(50)].map((_, index) => (
          <div
            style={{
              backgroundColor: "#20B2A6",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              amimationDelay: `${Math.random() * 5}s`,
            }}
            key={index}
            className=" absolute h-1.5 w-1.5 rounded-full opacity-60"
          />
        ))}
      </div>
      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Software Developer • MERN Stack Developer
              </span>
            </div>
            {/* heading */}
            <div className="space-y-4 ">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-100">
                Building
                <span className="text-primary glow-text"> full-stack</span>
                <br />
                web applications with
                <br />
                <span className="font-serif italic font-normal text-white">
                  modern solutions.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animate-delay-200">
                Full Stack Web Developer skilled in MERN stack, building
                responsive applications, REST APIs, authentication systems, and
                AI-integrated solutions with modern web technologies.
              </p>
            </div>
            {/* CTA Buttons */}
            <div className=" flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton
                onClick={() => {
                  window.open(
                    "https://docs.google.com/document/d/1IO9fxLPjHkrqekO6Bz5t1Nio4RYJkjPRQhQ398tr9GE/export?format=pdf",
                    "_blank",
                  );
                }}
              >
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
              <span className="text-sm text-muted-foreground">Follow :</span>
              {[
                {
                  icon: FaGithub,
                  title: "Github",
                  href: "https://github.com/parmanand-ray",
                },
                {
                  icon: FaLinkedin,
                  title: "Linkedin",
                  href: "https://www.linkedin.com/in/parmanand-ray/",
                },
                {
                  icon: SiLeetcode,
                  title: "Leetcode",
                  href: "https://leetcode.com/u/parmanand_ray/",
                },
                {
                  icon: FaInstagram,
                  title: "Instagram",
                  href: "https://www.instagram.com/parmanand_ray_01",
                },
              ].map((social, index) => {
                const SocialIcon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    title={social.title}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <SocialIcon className="w-5 h-5 " />
                  </a>
                );
              })}
            </div>
          </div>
          {/* Right golumn - Profile Image */}
          <div className="relative animate-fade-in animate-delay-300">
            {/* profile Image */}
            <div className="relative  max-w-md mx-auto ">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile.png"
                  alt="Parmanand Ray"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
