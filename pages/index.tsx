import Head from "next/head";

import Hero from "../components/Hero";
import FounderSection from "../components/Foundersection";
import AcademiesSection from "../components/Acadamicsection";
import WhyChooseSection from "../components/Whychoosesection";
import AdmissionSection from "../components/Admissionsection";
import ScrollToTop from "../components/ScrollToTop";
import ProgrammeStructure from "../components/Programmestructure";
import CareerPathway from "../components/Careerpathway";
import Admissions from "../components/AdmissionComponent";
import AboutSection from "../components/AboutComponent";
import WhatWeDo from "../components/Aboutdatascience";
import YouTubeEmbed from "../components/Youtubeembed";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          MS in Data Science | Sona SCALE, Bengaluru & University of West Alabama (UWA)
        </title>

        <meta
          name="description"
          content="Study MS in Data Science through the Sona SCALE international pathway program. Complete Year 1 at Sona SCALE and continue at the University of West Alabama (UWA), USA."
        />

        <meta
          name="keywords"
          content="Sona SCALE, MS Data Science, University of West Alabama, UWA, Data Science USA, Machine Learning, Artificial Intelligence, Data Analytics, STEM Careers, Study in USA"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="MS in Data Science | Sona SCALE ,Bengaluru & University of West Alabama (UWA)"
        />
        <meta
          property="og:description"
          content="Launch your global career in Data Science. Study at Sona SCALE ,Bengaluru and progress to UWA, USA."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-domain.com" />
        <meta
          property="og:image"
          content="https://your-domain.com/homeimages/og-image.jpg"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="MS in Data Science | Sona SCALE ,Bengaluru & University of West Alabama"
        />
        <meta
          name="twitter:description"
          content="Complete Year 1 at Sona SCALE, Bengaluru and continue at UWA, USA."
        />
        <meta
          name="twitter:image"
          content="https://your-domain.com/homeimages/og-image.jpg"
        />

        <link
          rel="canonical"
          href="https://your-domain.com"
        />
      </Head>

      <Hero />
      <AboutSection />
      <WhatWeDo />
      <YouTubeEmbed/>
      <FounderSection />
      <ProgrammeStructure />
      <WhyChooseSection />
      <CareerPathway />
      <Admissions />
      {/* <AcademiesSection /> */}
      <ScrollToTop />

      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://www.uwa.edu/app/uploads/2023/04/UWA-campus-building.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10">
          <AdmissionSection />
        </div>
      </div>
    </>
  );
}