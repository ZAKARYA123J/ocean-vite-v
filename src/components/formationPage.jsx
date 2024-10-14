import React from "react";
import Navbar from "./navbar";
import Formation from "./formation";
import Footer from "./foooter";
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import Switcher from "./switcher";
import { Helmet } from "react-helmet-async";


export default function IndexSix(){
    return(
        <>
           <Helmet>
        <title>Formation | Ocean Connecting</title>
        <meta name="description" content="Explore our formation services to prepare for international career opportunities." />
        <meta name="keywords" content="career formation, global career, preparation, training" />
      </Helmet>
        <Navbar/>
        <WhatsAppFloatingButton/>
            <section >
                 <Formation/>
            </section>
            <Footer />
            <Switcher/>
        </>
    )
}