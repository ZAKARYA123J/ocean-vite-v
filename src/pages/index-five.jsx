import React from "react";
import Navbar from "../components/navbar";
import BlogDetail from "../components/BlogDetail";
import Footer from "../components/foooter";
import { Helmet } from "react-helmet-async";
export default function IndexFive() {

    return (
        <>
        <Helmet>
        <title>Formation | Ocean Connecting</title>
        <meta name="description" content="Explore specialized language training programs at Ocean connecting in Agadir. Learn English, Spanish, German, French, and Italian with expert instructors. Flexible options available!" />
        <meta name="keywords" content="Language Training, Language Courses, Language Classes, English Training, French Training, Spanish Training, German Training, Italian Training, Learn Languages, Language School, Agadir Language School, Business Language Training, Professional Language Learning, Online Language Courses, Foreign Language Training, Corporate Language Training, Intensive Language Courses, Private Language Lessons, Group Language Classes, Agadir Language Courses, Agadir Language Training" />
        <meta name="keywords" content="Formation en Langues, Cours de Langues, Classes de Langues, Formation en Anglais, Formation en Français, Formation en Espagnol, Formation en Allemand, Formation en Italien, Apprentissage des Langues, École de Langues, École de Langues Agadir, Formation en Langues pour les Affaires, Apprentissage des Langues Professionnel, Cours de Langues en Ligne, Formation en Langues Étrangères, Formation en Langues pour Entreprises, Cours Intensifs de Langues, Leçons Privées de Langues, Cours de Langues en Groupe, Cours de Langues à Agadir, Formation en Langues à Agadir" />
        <meta name="keywords" content="تدريب اللغات، دورات اللغة، فصول اللغة، تدريب اللغة الإنجليزية، تدريب اللغة الفرنسية، تدريب اللغة الإسبانية، تدريب اللغة الألمانية، تدريب اللغة الإيطالية، تعلم اللغات، مدرسة اللغات، مدرسة اللغات في أكادير، تدريب اللغة للأعمال، تعلم اللغات المهني، دورات اللغة عبر الإنترنت، تدريب اللغات الأجنبية، تدريب اللغة للشركات، دورات اللغة المكثفة، دروس لغة خاصة، فصول لغة جماعية، دورات اللغة في أكادير، تدريب اللغات في أكادير" />
      </Helmet>
            <Navbar />
            <section className="">
                <div className=" mt-40 container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 mt-12 items-center gap-[200px]">
                        <div className="lg:col-span-7">
                            <BlogDetail />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}