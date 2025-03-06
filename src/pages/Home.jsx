import DynamicSlider from '../components/BannerSlider'
import WhatWeDo from '../components/WhatWeDo'
import OurProducts from '../components/OurProducts'
import Exporting from '../components/Exporting'
import WhyHeba from '../components/WhyHeba'
import QualitySection from '../components/Quality'
import { useEffect } from 'react'
 
const Home = () => {
  // Link when user click footer link
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, []);

  //
  return (
    <div id='home'>
      <DynamicSlider />
      <WhatWeDo />
      <OurProducts />
      <Exporting />
      <WhyHeba />
      <QualitySection />
    </div>
  );
}

export default Home