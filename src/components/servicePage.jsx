import React from "react";
import Navbar from "./navbar";
import GetInTouch from "./getInTuoch";
import Footer from "./footer";
import Switcher from "./switcher";
import Detailservice from "./Detaileservice";
import '../../node_modules/react-modal-video/scss/modal-video.scss';
import WhatsAppFloatingButton from './WhatsAppFloatingButton';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Service(){
    const {id}=useParams()

    return(
        <>
         <Helmet>
        <title>Services | Ocean Connecting</title>
        <meta name="description" content="Learn more about the services we offer for international career and document assistance." />
        <meta name="keywords" content="international services, career support, document assistance" />
      </Helmet>
        <Navbar/>
        <Detailservice id={id}/>
        <WhatsAppFloatingButton/>
        <GetInTouch/>
        <Footer/>
        <Switcher/>
        </>
    )
}
