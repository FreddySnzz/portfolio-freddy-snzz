'use client';

import AboutContainer from "@/components/layout/AboutContainer";
import ApresentationContainer from "@/components/layout/ApresentationContainer";
import BackgroundContainer from "@/components/layout/BackgroundContainer";
import ContactContainer from "@/components/layout/ContactContainer";
import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";
import ProjectsContainer from "@/components/layout/ProjectsContainer";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <BackgroundContainer>
      <Toaster />
      <Navbar />
      <ApresentationContainer />
      <AboutContainer />
      <ProjectsContainer />
      <Layout className="p-6">
        <ContactContainer />
      </Layout>
      <Footer />
    </BackgroundContainer>
  );
}
