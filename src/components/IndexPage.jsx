import React, { useEffect, useState , lazy, Suspense,useMemo } from "react";
import { Link as ScrollLink } from "react-scroll";
import Footer from './foooter';
const About = lazy(() => import("./about"));
const Services = lazy(() => import("./services"));
const AgencyTab = lazy(() => import("./agencyTab"));
const Blogs = lazy(() => import("./blog"));
const GetInTouch = lazy(() => import("./getInTuoch"));
import Navbar from './navbar';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import LazyLoad from 'react-lazyload';

// Import images directly
// import heroImage1 from '../assets/images/done/TeamDev/service.png';
// import heroImage2 from '../assets/images/done/TeamDev/service1.png';
// import heroImage4 from '../assets/images/done/TeamDev/service2.png';
const heroImage1 = 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice.png?alt=media&token=b54504fc-6722-431f-8787-d75218233c1b';
const heroImage2 = 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice1.png?alt=media&token=0d65089b-9802-41ec-800d-ab41f867dab0';
const heroImage4 = 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice2.png?alt=media&token=0a170203-2f38-4d56-8309-030c8b87e0d3';

// Styled Components

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  background: linear-gradient(to right, #e0f7fa, #e3f2fd);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 2rem;
  color: #0f172a; // Change this color as per your design
`;
const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    color: #0f172a;
  }

  p {
    font-size: 1.125rem;
    color: #475569;
    max-width: 480px;
    margin: 0 auto;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    width: 600px;
    height: 400px;
    object-fit: cover;
    transition: opacity 2s ease-in-out;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  }
`;

// Define the loadClientData function
const loadClientData =async (lang) => {
  switch (lang) {
    case 'fr':
      return await import('./locales/fr/translation').then(module => module.Titlefr);
    case 'ar':
      return await import('./locales/ar/translation').then(module => module.TitleAR);
    case 'en':
    default:
      return await import('./locales/en/translation').then(module => module.TitleEN);
  }
};

 const Index=React.memo(  function Index() {
  const { i18n } = useTranslation();
  const [clientData, setClientData] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  // List of images for automatic switching
  const images = useMemo(() => [heroImage1, heroImage2, heroImage4], []);

  useEffect(() => {
    loadClientData(i18n.language).then(data => setClientData(data));
    
    // Initialize AOS animations
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, [i18n.language]);

  // Automatically switch images every 3 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    
    return () => clearTimeout(timeout);
  }, [currentImage, images.length]);
  
  return (
    <Suspense fallback={<Loader>Loading Ocean connecting...</Loader>}>
      <Helmet>
        <title>Home | Ocean Connecting</title>
        <meta name="description" content="We specialize in global job placement and document assistance, offering tailored support in multiple languages." />
        <meta name="keywords" content="Agadir Training, Professional Training Agadir, Language Learning Agadir, Airport Agent Training, Check-in Agent Training, DJ Training Agadir, Nursing Care Training, Agadir Job Placement, International Recruitment, Recruitment Agadir, Document Assistance, Job Support Services, Company Domiciliation Agadir, Corporate Domiciliation, Web Development Training, App Development Agadir, Facade Cleaning Agadir, Window Cleaning Agadir, Exterior Coating Agadir, Cladding Services Agadir, Solar Panel Cleaning, Agadir Solar Maintenance, Exterior Services Agadir, Custom Development Solutions, Language Courses Agadir, Nurse Training Agadir, Customer Service Training, Security Procedures Training, Event Management Training, Professional Growth Agadir, Global Career Support, Customized Job Training, Agadir Career Opportunities, Online Promotion Training, Business Establishment Agadir, Comprehensive Training Solutions, Skill Development ,Formation Agadir, Formation Professionnelle Agadir, Apprentissage des Langues Agadir, Formation Agent Aéroport, Formation Agent d’Enregistrement, Formation DJ Agadir, Formation Soins Infirmiers, Placement Professionnel Agadir, Recrutement International, Recrutement Agadir, Assistance aux Documents, Services de Soutien à l’Emploi, Domiciliation Entreprise Agadir, Domiciliation d’Entreprise, Formation Développement Web, Développement d’Applications Agadir, Nettoyage de Façade Agadir, Nettoyage de Fenêtres Agadir, Revêtement Extérieur Agadir, Services de Bardage Agadir, Nettoyage de Panneaux Solaires, Entretien des Panneaux Solaires Agadir, Services Extérieurs Agadir, Solutions de Développement Personnalisées, Cours de Langues Agadir, Formation Infirmière Agadir, Formation Service Client, Formation aux Procédures de Sécurité, Formation en Gestion d'Événements, Croissance Professionnelle Agadir, Soutien aux Carrières Internationales, Formation Professionnelle Personnalisée, Opportunités de Carrière Agadir, Formation à la Promotion en Ligne, Création d'Entreprise Agadir, Solutions de Formation Complètes, Développement de Compétences Agadir, Meilleure Formation à Agadir, Cours Professionnels Avancés, Soutien Professionnel Expert," />
        <meta name="keywords" content="تدريب أكادير، التدريب المهني أكادير، تعلم اللغات أكادير، تدريب موظفي المطار، تدريب موظف تسجيل الوصول، تدريب دي جي أكادير، تدريب رعاية التمريض، توظيف أكادير، التوظيف الدولي، توظيف أكادير، مساعدة الوثائق، خدمات دعم التوظيف، استئجار الشركة أكادير، تسجيل الشركات، تدريب تطوير الويب، تطوير التطبيقات أكادير، تنظيف الواجهات أكادير، تنظيف النوافذ أكادير، الطلاء الخارجي أكادير، خدمات الكسوة أكادير، تنظيف الألواح الشمسية، صيانة الألواح الشمسية أكادير، خدمات خارجية أكادير، حلول تطوير مخصصة، دورات اللغات أكادير، تدريب التمريض أكادير، تدريب خدمة العملاء، تدريب إجراءات الأمن، تدريب إدارة الفعاليات، النمو المهني أكادير، دعم الوظائف الدولية، تدريب وظائف مخصص، فرص العمل في أكادير، تدريب الترويج عبر الإنترنت، إنشاء الأعمال أكادير، حلول تدريب شاملة، تطوير المهارات أكادير، أفضل تدريب في أكادير، دورات مهنية متقدمة، دعم مهني خبير" />
      </Helmet>

      <Navbar/>
      <Section id="home" className="bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300">
        <ContentWrapper>
          <TextBlock data-aos="fade-right" className="pt-24" >
            <h1 className="sm:ml-20 sm:mb-20">
              {clientData.map((item, index) => (
                <span key={index}>{i18n.t(item.Title)}</span>
              ))}
            </h1>
          
            <div className="flex justify-center md:justify-start space-x-4">
  {clientData.map((item, index) => (
    <div key={index} className="sm:ml-20 sm:mb-20">
      <ScrollLink
        to="contact"
        smooth
        duration={500}
        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-dynamic cursor-pointer mr-2"
      >
        {i18n.t(item.button)}
      </ScrollLink>
      <ScrollLink
        to="services"
        smooth
        duration={500}
        className="inline-block bg-white border border-blue-600 text-blue-600 py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 hover:shadow-dynamic cursor-pointer"
      >
        {i18n.t(item.Learn)}
      </ScrollLink>
    </div>
  ))}
</div>

          
          </TextBlock>
          <ImageWrapper data-aos="fade-left" className="" isVisible>
  <LazyLoad height={400} offset={100} once>
    <img src={images[currentImage]} alt="Design Team" />
  </LazyLoad>
</ImageWrapper>

        </ContentWrapper>
      </Section>

      <Services />
      <Blogs />
      <AgencyTab />
      <About />
      <GetInTouch />
      <WhatsAppFloatingButton />
      <Footer />
      </Suspense>
  );
})
export default Index