
import Hero from '../components/Hero'
import FounderSection from '../components/Foundersection'
import AcademiesSection from '../components/Acadamicsection'
import WhyChooseSection from '../components/Whychoosesection'
import AdmissionSection from '../components/Admissionsection'
import ScrollToTop from '../components/ScrollToTop'
import ProgrammeStructure from '../components/Programmestructure'
import CareerPathway from '../components/Careerpathway'
import Admissions from '../components/AdmissionComponent'
export default function Home() {
  return (
    <>

      <Hero />
      <FounderSection />
      <ProgrammeStructure />
      <WhyChooseSection />
  
      <CareerPathway />
      <Admissions/>
      <AcademiesSection />
      <ScrollToTop/>

      <div
        className="relative bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('https://img.magnific.com/free-photo/architecture-independence-palace-ho-chi-minh-city_181624-21243.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="relative z-10">
          <AdmissionSection />
        </div>
      </div>
    </>
  )
}
