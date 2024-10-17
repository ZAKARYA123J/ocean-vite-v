import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Formation from "./formation";
import Footer from "./foooter";
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import Switcher from "./switcher";
import { Helmet } from "react-helmet-async";
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const IndexSix = React.memo(function IndexSix() {
  const { i18n } = useTranslation(); 
  const [metaData, setMetaData] = useState({
    title: 'Ocean Connecting',
    description: '',
    keywords: '',
  });

  useEffect(() => {
    const fetchMetaData = async () => {
      try {
        const response = await axios.get(`https://hono-on-vercel123-54cp.vercel.app/api/meta`, {
          params: {
            page: 'formation',
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
  return (
    <>
      <Helmet>
        <title>{metaData.title || 'Ocean Connecting'}</title> 
        <meta name="description" content={metaData.description} /> 
        <meta name="keywords" content={metaData.keywords }/>
      </Helmet>
      <Navbar />
      <WhatsAppFloatingButton />
      <section>
        <Formation />
      </section>
      <Footer />
      <Switcher />
    </>
  );
});

export default IndexSix;
