import React, { useEffect, useRef,useState } from 'react';
import Navbar from './navbar';
import Footer from './foooter';
import nurseVideo from '../assets/images/done/TeamNurse/nurse2.mp4';
import CardNurse from './CardNurse';
import ContactForm from './ContactForm';
import TestimonialsSection from './TestimonialsSection';
import ServicesSection from './ServicesSection';
import './i18n';
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
const loadClientData = async (lang) => {
  try {
    switch (lang) {
      case 'fr':
        return (await import('./locales/fr/translation')).NurseFR;
      case 'ar':
        return (await import('./locales/ar/translation')).NurseAR;
      case 'en':
      default:
        return (await import('./locales/en/translation')).NurseEN;
    }
  } catch (error) {
    console.error(`Failed to load client data for language ${lang}`, error);
    return [];
  }
};
const NursingServicesPage = () => {
  const videoRef = useRef(null);
  const [nursedata, setNurseData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { i18n, t } = useTranslation();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await loadClientData(i18n.language);
        setNurseData(data);
      } catch (error) {
        console.error("Error fetching service data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [i18n.language]);
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error('Error attempting to autoplay video:', error);
      });
    }
  }, []);
  if (loading) {
    return <p>Loading services...</p>;
  }

  return (
    <>
    <Helmet>
        <title>Nurse | Ocean Connecting</title>
        <meta name="description" content="Discover compassionate nursing care you can trust. Our dedicated team provides quality healthcare with empathy and respect, prioritizing your health and comfort." />
        <meta name="keywords" content="Nursing Care, Compassionate Nursing Care, Professional Nursing Services, In-Home Nursing Care, Elderly Care Services, Patient Care Services, Skilled Nursing Care, Home Health Care, Nursing Support, Medical Assistance, Healthcare Services, Home Nursing, Personal Care Services, Caregiver Services, Nursing for Seniors, Specialized Nursing Care, Palliative Care Services, Long-Term Care, Agadir Nursing Care, Nursing Care for the Elderly, Healthcare Support Services" />
        <meta name="keywords" content="Soins Infirmiers, Soins Infirmiers Compatissants, Services de Soins Infirmiers Professionnels, Soins Infirmiers à Domicile, Services de Soins aux Personnes Âgées, Services de Soins aux Patients, Soins Infirmiers Qualifiés, Soins de Santé à Domicile, Soutien Infirmier, Assistance Médicale, Services de Santé, Infirmière à Domicile, Services de Soins Personnels, Services d’Aide Soignante, Soins Infirmiers pour Seniors, Soins Infirmiers Spécialisés, Services de Soins Palliatifs, Soins de Long Terme, Soins Infirmiers Agadir, Soins Infirmiers pour Personnes Âgées, Services de Soutien à la Santé" />
        <meta name="keywords" content="رعاية التمريض، رعاية تمريضية متعاطفة، خدمات تمريض احترافية، رعاية تمريضية منزلية، خدمات رعاية كبار السن، خدمات رعاية المرضى، رعاية تمريضية مهارية، رعاية صحية منزلية، دعم تمريض، مساعدة طبية، خدمات الرعاية الصحية، تمريض منزلي، خدمات الرعاية الشخصية، خدمات مقدمي الرعاية، تمريض لكبار السن، رعاية تمريضية متخصصة، خدمات الرعاية التلطيفية، رعاية طويلة الأمد، رعاية تمريضية أكادير، رعاية تمريضية لكبار السن، خدمات دعم الرعاية الصحية" />
      </Helmet>
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Navbar />
      {nursedata.map((item,key)=>(
        <div key={key}>  
      <section className="relative flex items-center justify-center h-screen text-white text-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover video-background"
          src={nurseVideo}
          onLoadedData={() => console.log('Video loaded successfully.')}
          onError={(e) => console.error('Error loading video:', e)}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-50 z-[1]"></div>
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
         

       
          <h1 className="text-5xl font-extrabold mb-4">{t(item.title)}</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
          {t(item.desc)}
          </p>
          <a href="#contact" className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
          {t(item.contact)}
          </a>
        </div>
      </section>
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-white mb-12 animate-fade-in">
          {t(item.about)}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t(item.descab)}

          </p>
        </div>
      </section>
      </div>
))}
      <CardNurse />
      <ServicesSection/>
      <ContactForm />
      {/* <TestimonialsSection /> */}
      
      <Footer />
    </div></>
  );
};

export default NursingServicesPage;
