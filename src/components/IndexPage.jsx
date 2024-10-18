import React, {  Suspense } from "react";
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
import { Helmet } from "react-helmet-async";
import LazyLoad from 'react-lazyload';
const heroImage1 = 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice.png?alt=media&token=b54504fc-6722-431f-8787-d75218233c1b';
const heroImage2 = 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice1.png?alt=media&token=0d65089b-9802-41ec-800d-ab41f867dab0';
const heroImage4 = 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice2.png?alt=media&token=0a170203-2f38-4d56-8309-030c8b87e0d3';
import axios from 'axios'
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
  const [metaData, setMetaData] = useState({
    title: 'Ocean Connecting',
    description: '',
    keywords: '',
  });

  // List of images for automatic switching
  const images = useMemo(() => [heroImage1, heroImage2, heroImage4], []);

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const response = await axios.get(`https://hono-on-vercel123-54cp.vercel.app/api/meta`, {
          params: {
            page: 'home',
            lang: i18n.language,
          },
        });
        setMetaData(response.data);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    fetchMetaData();
  }, [i18n.language]);

  useEffect(() => {
    loadClientData(i18n.language).then(data => setClientData(data));

    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, [i18n.language]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentImage, images.length]);

  return (
    <Suspense fallback={<Loader>Loading Ocean connecting...</Loader>}>
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta name="keywords" content={metaData.keywords} />
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