'use client';

import AboutContainer from "@/components/layout/AboutContainer";
import ApresentationContainer from "@/components/layout/ApresentationContainer";
import BackgroundContainer from "@/components/layout/Background";
import ContactContainer from "@/components/layout/ContactContainer";
import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";
import ProjectsContainer from "@/components/layout/ProjectsContainer";

export default function Home() {
  return (
    <BackgroundContainer>
      <Navbar />
      <Layout className="p-6">
        <ApresentationContainer />
        <AboutContainer />
        <ProjectsContainer />
        <ContactContainer />
      </Layout>
      <Footer />
    </BackgroundContainer>
  );
}
