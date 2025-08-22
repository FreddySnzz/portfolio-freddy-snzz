'use client';

import ContactContainer from "@/components/layout/ContactContainer";
import Footer from "@/components/layout/Footer";
import Layout from "@/components/layout/Layout";
import Navbar from "@/components/layout/Navbar";
import useAppData from "@/data/hook/useAppData";

export default function Home() {
  const { theme } = useAppData();

  return (
    <div className={`${theme} flex flex-col min-h-screen
    bg-gradient-to-br from-gray-800 to-gray-950 dark:from-gray-200 dark:to-gray-300 text-gray-200 dark:text-gray-800 animated-background`}
    >
      <div className="flex mt-4 w-full justify-center">
        <Navbar 
          className="text-gray-200 bg-gradient-to-l from-gray-800 to-gray-900 dark:from-gray-200 dark:to-gray-100 dark:text-gray-900"
          linkClassName="hover:text-blue-400 transition-colors duration-300 dark:hover:text-gray-400"
        />
      </div>
      <Layout>
        <ContactContainer />
      </Layout>
      <Footer />
    </div>
  );
}
