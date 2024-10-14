import { CgWebsite } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineCleaningServices } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";
import { Link as Link1 } from "react-scroll";
import client1 from '../../../assets/images/team/01.jpg'
import client2 from '../../../assets/images/team/02.jpg'
import client3 from '../../../assets/images/team/03.jpg'
import client4 from '../../../assets/images/team/04.jpg'
import client5 from '../../../assets/images/team/05.jpg'
// import formation4 from '../assets/images/formation/formation4.jpg'
import formation5 from '../../../assets/images/formation/formation05.jpg'
import formation6 from '../../../assets/images/formation/formation6.jpg'
import formation17 from '../../../assets/images/formation/formation17.jpg'
import formation8 from '../../../assets/images/formation/formation8.jpg'
import formation9 from '../../../assets/images/formation/formation9.jpg'
import formation10 from '../../../assets/images/formation/formation10.jpg'
import formation11 from '../../../assets/images/formation/formation11.jpg'
import formation12 from '../../../assets/images/formation/formation12.jpg'
import formation13 from '../../../assets/images/formation/formation13.jpg'
import formation14 from '../../../assets/images/formation/formation14.jpg'
import formation15 from '../../../assets/images/formation/15.jpg'
import formation16 from '../../../assets/images/formation/16.jpg'
import formation18 from '../../../assets/images/formation/formation18.jpg'
import formation19 from '../../../assets/images/formation/formation19.jpg'
import { FaGithub, FaLinkedin, FaLock, FaComments, FaCode } from "react-icons/fa";
import service1 from '../../../assets/images/service/service1.png'
import service2 from '../../../assets/images/service/service2.png'
import service3 from '../../../assets/images/service/service3.png'
import service4 from '../../../assets/images/service/service4.png'
import service5 from '../../../assets/images/service/service5.png'
import belgium from '../../../assets/images/job/belgium.png'
import allemagne from '../../../assets/images/job/germany.png'
import croatie from '../../../assets/images/job/croatie.png'
import italy from '../../../assets/images/job/italy.png'
import spain from '../../../assets/images/job/spain.png'
import facade from '../../../assets//images/job/facade.png'
import resume from '../../../assets/images/job/resume.png'
import recrutocean from '../../../assets/images/service/recrutocean.png'
import recrutinter from '../../../assets/images/service/recrutinter2.png'
import form from '../../../assets/images/form.pdf'
// export const teamTitle = "تعرف على فريق التطوير لدينا";
// export const teamDescription = "نحن فريق شغوف من الخبراء مكرس لتطوير حلول مبتكرة. استكشف المزيد عن كل عضو في الفريق أدناه واكتشف التقنيات التي يتقنها.";
// export const membersTitle = "أعضاء فريقنا";
// export const viewDetails = "عرض التفاصيل";

// export const teamMembers = [
//     {
//       id: 1,
//       name: "ENNACHOUM زكريا",
//       role: "مطور كامل",
//       photo: "path/to/photo1.jpg",
//       github: "https://github.com/Umbrator",
//       linkedin: "https://linkedin.com/in/ennachoum-zakaria-264134231/",
//     },
//     // Add other members...
//   ];
const heroImage1 = "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice.png?alt=media&token=b54504fc-6722-431f-8787-d75218233c1b"
  export const servicesAR = [
    {
      title: "الأمان",
      description: "تأكد من أن تطبيقاتك آمنة بأحدث البروتوكولات.",
      icon: "FaLock",
    },
    {
      title: "استشارة",
      description: "نصيحة خبير في هندسة الأنظمة واستراتيجية التكنولوجيا.",
      icon: "FaComments",
    },
    {
      title: "التطوير",
      description: "تطوير الواجهة الأمامية والخلفية حسب احتياجاتك.",
      icon: "FaCode",
    },
  ];
  
export const clientDataAR = [
    {
        image: client1,
        clientitle:"ماذا يقول مستخدمينا",
        name: 'كالفين كارلو',
        title: 'مدير',
        desc: '"لقد أدهشتني الدعم الشخصي الذي تلقيته من هذا الفريق. خبرتهم في التوظيف العالمي ساعدتني في الحصول على وظيفة رائعة في الخارج. أوصي بشدة بخدماتهم!"'
        
    },
    {
        image: client2,
        name: 'كريستا سميث',
        title: 'مدير',
        desc: '"التنقل في أسواق العمل الدولية قد يكون مرهقًا، ولكن هذه الشركة جعلت الأمر أسهل بكثير. دعمهم متعدد اللغات ومساعدتهم في الوثائق كانا من الدرجة الأولى. لم أكن لأتمكن من القيام بذلك بدونهم!"'
    },
    {
        image: client3,
        name: 'جيمينا كلون',
        title: 'مدير',
        desc: '"كنت بحاجة إلى مساعدة في التوظيف في عدة دول، وكان دعمهم المخصص استثنائيًا. اهتمام الفريق بالتفاصيل واحترافيته جعل العملية بأكملها سلسة وخالية من التوتر."'
    },
    {
        image: client4,
        name: 'سميث فودكا',
        title: 'مدير',
        desc: '"كانت مساعدة الوثائق منقذة لحياتي في بحثي عن وظيفة دولية. كانت توجيهاتهم واضحة وفعالة، وقدرتهم على الدعم بعدة لغات كانت ميزة كبيرة."'
    },
    {
        image: client5,
        name: 'كريستينو ميرفي',
        title: 'مدير',
        desc: '"أعجبت بمدى فهمهم لتعقيدات التوظيف العالمي. كان الدعم مخصصًا، وفريقهم متعدد اللغات تأكد من أنني كنت مستعدًا جيدًا لكل خطوة في العملية."'
    },
]
export const blogDataAR = [
    {
        id: 1,
        image: formation6,
        Title: "التدريب",
        text:"يقدم هذا التدريب في الإدارة الإدارية للمشاركين المهارات الأساسية للتفوق في المهام الإدارية، من خلال تغطيته لإدارة الوثائق، وتحسين العمليات التنظيمية، والتواصل المهني. ويجمع بين النظرية والتطبيق لتقديم مهارات يمكن تطبيقها فوراً في الشركات.",
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        blogetitle:"التدريب أكثر طلبا",
        title: 'اللغة',
        desc: 'تقدم  Ocean Connecting برنامجًا شاملًا لتعلم اللغة يشمل...',
        detail: 'تقدم  Ocean Connecting برنامجًا شاملًا لتعلم اللغة يغطي المستويات من A1 إلى C2. يتميز البرنامج بوجود معلمين شباب، وأنشطة ممتعة، ورحلات تعليمية، وجداول زمنية مرنة. يستفيد الطلاب من تقييمات منتظمة للمستوى، والوصول المجاني إلى أجهزة الكمبيوتر والإنترنت، وفصول دراسية مكيفة الهواء. كما يقدم البرنامج مراقبة نفسية وإرشادًا، مما يضمن بيئة تعليمية داعمة. يهدف هذا البرنامج إلى تعزيز إتقان اللغة من خلال أساليب تفاعلية ومتنوعة، تلبي احتياجات وأساليب تعلم مختلفة.',
        type: 'language',
        button:"اقرأ المزيد",
        reserver: "للحجز",
        show:"إظهار الكل"
    },
    {
        id: 2,
        image: formation9,
         resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'تكوين وكيل تسجيل في المطار',
        desc: 'يعد تكوين وكيل تسجيل المطار المحترفين لإدارة تسجيل الركاب بفعالية...',
        detail: 'يعد تكوين وكيل تسجيل المطار المحترفين لإدارة تسجيل الركاب بفعالية وضمان سير العمليات في المطار بشكل سلس. يشمل التكوين استقبال الركاب، والتحقق من الوثائق، وإدارة الأمتعة، مع استخدام أنظمة الحجز والتحكم في الأمتعة. يتعلم المشاركون أيضًا إجراءات الأمن في المطار، والقوانين الدولية، وتقنيات خدمة العملاء لتقديم تجربة ممتعة. يشمل التكوين محاكاة عملية لتطبيق المعرفة المكتسبة وتطوير مهارات التواصل وإدارة حالات الطوارئ.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
        show:"إظهار الكل"
    },
    {
        id: 3,
        image: formation8,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'تكوين DJ',
        desc: 'تكوين DJ يعلم المهارات اللازمة لتصبح DJ محترفًا...',
        detail: 'تكوين DJ يعلم المهارات اللازمة لتصبح DJ محترفًا، بما في ذلك تقنيات الخلط، واستخدام المعدات الحديثة مثل الأسطوانات وأجهزة التحكم، وأساسيات الإنتاج الموسيقي لإنشاء ريمكسات وأعمال أصلية. يتعلم المشاركون أيضًا كيفية إدارة الفعاليات، وتنظيم المجموعات الموسيقية، والتفاعل مع الجمهور. بالإضافة إلى الجوانب التقنية، يساعد التكوين على تطوير هوية فنية شخصية، والترويج لأعمالهم عبر الإنترنت وبناء محفظة أعمال. وهو مثالي للمبتدئين و DJs الراغبين في تحسين مهاراتهم ودخول عالم الموسيقى.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
        show:"إظهار الكل"
    },
    {
        id: 4,
        image: formation15,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'تكوين قيادة القوارب واليخوت',
        desc: 'يقدم هذا التكوين تجربة شاملة لعشاق الإبحار...',
        detail: 'يقدم هذا التكوين تجربة شاملة لعشاق الإبحار، بما في ذلك دروس نظرية وعملية حول السلامة، وتقنيات الإبحار، والملاحة الساحلية والبعيدة. يتم توجيه الجلسات من قبل مدربين ذوي خبرة وتشمل تمارين مكثفة في البحر. يمكن للمشاركين الحصول على شهادات معترف بها، مما يتيح لهم قيادة أنواع مختلفة من القوارب واليخوت. انضم إلينا لتطوير مهاراتك البحرية واستمتع بمغامرة بحرية لا تُنسى!',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
        show:"إظهار الكل"
    },
    {
        id: 5,
        image: formation16,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'المنزل والعائلة',
        desc: 'تكوين المنزل والعائلة مصمم لتقديم مهارات عملية و...',
        detail: 'تكوين المنزل والعائلة مصمم لتقديم مهارات عملية ومعرفة متعمقة حول إدارة الحياة المنزلية والعلاقات الأسرية. يتناول مواضيع متنوعة من تنظيم المنزل وإدارة الشؤون المالية للعائلة، إلى تقنيات التواصل وحل النزاعات. الهدف هو تزويد المشاركين بالأدوات اللازمة لإنشاء بيئة أسرية متناغمة ومنظمة بشكل جيد.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
        show:"إظهار الكل"
    },
    {
        id: 6,
        image: formation14,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'تكوين تركيب واستخدام VAR',
        desc: 'تكوين تركيب واستخدام VAR (الموزعين المعتمدين)...',
        detail: 'تكوين تركيب واستخدام VAR (الموزعين المعتمدين) يهدف إلى تزويد المحترفين بالمهارات اللازمة لتركيب وتكوين واستخدام الحلول التكنولوجية المقدمة من قبل VAR. يشمل التكوين مراحل تركيب المعدات والبرمجيات، والتكوين المتقدم، واستخدام الأدوات والتطبيقات بشكل يومي. يتعلم المشاركون أيضًا تقديم الدعم الفني، وتشخيص وحل المشكلات، وإجراء الصيانة الوقائية، وتحسين أداء الحلول. هذا التكوين ضروري لضمان إدارة فعالة للحلول VAR وضمان أداء أمثل للأنظمة.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
        show:"إظهار الكل"
    },
    {
        id: 7,
        image: formation12,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'تكوين في الملاحة البحرية',
        desc: 'تكوين في الملاحة البحرية يعلم المشاركين المهارات...',
        detail: 'تكوين في الملاحة البحرية يعلم المشاركين المهارات الأساسية للإبحار بأمان في البحر، بما في ذلك استخدام أدوات الملاحة مثل الخرائط البحرية وأنظمة GPS، وفهم القوانين الدولية. يتعلم المشاركون كيفية تخطيط الرحلات، وإدارة الأحوال الجوية، وضمان سلامة السفينة والطواقم. يشمل التكوين أيضًا تقنيات الإنقاذ وإدارة حالات الطوارئ، مما يضمن الإبحار الفعال والآمن مع الالتزام بالقوانين البحرية.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
        show:"إظهار الكل"
    },
    {
        id: 8,
        image: formation13,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'الأحجار والمعادن الثمينة',
        desc: 'تكوين حول الأحجار والمعادن الثمينة يقدم فهمًا...',
        detail: 'تكوين حول الأحجار والمعادن الثمينة يقدم فهمًا عميقًا لخصائص وتقييم وصيانة هذه المواد الثمينة. يتعلم المشاركون كيفية تحديد وتقييم الأحجار الثمينة والمعادن الثمينة، باستخدام معايير الجودة والشهادات. يشمل التكوين أيضًا تقنيات المعالجة والصيانة للحفاظ على قيمتها، بالإضافة إلى توجهات السوق والممارسات التجارية. كما يتناول القضايا الأخلاقية والممارسات المستدامة المتعلقة بالاستخراج والتجارة بهذه الموارد.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
        show:"إظهار الكل"
    },
    {
        id: 9,
        image: formation11,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'تطوير الزراعة والصيد',
        desc: 'تكوين لتطوير الزراعة والصيد يهدف إلى تحسين...',
        detail: 'تكوين لتطوير الزراعة والصيد يهدف إلى تحسين الممارسات الزراعية والبحرية مع ضمان الاستدامة والربحية. يشمل تقنيات حديثة لزراعة وإدارة التربة، بالإضافة إلى طرق إدارة مستدامة لمخزونات الأسماك والنظم البيئية المائية. يتعلم المشاركون استخدام أحدث التقنيات والابتكارات، وتبني ممارسات صديقة للبيئة، وتطوير استراتيجيات اقتصادية لتحسين الإنتاجية والوصول إلى الأسواق. هذا التكوين ضروري للمزارعين والصيادين ومديري الموارد الطبيعية الذين يرغبون في تحسين ممارساتهم وضمان التنمية المستدامة في قطاعاتهم.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
        show:"إظهار الكل"
    },
    {
        id: 10,
        image: formation10,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'علوم الأرض والزلازل',
        desc: 'تكوين في علوم الأرض والزلازل يقدم فهمًا...',
        detail: 'تكوين في علوم الأرض والزلازل يقدم فهمًا عميقًا للعمليات الجيولوجية، وآليات الزلازل، وتقنيات تقييم المخاطر الزلزالية. يشمل التكوين المبادئ الأساسية للجيولوجيا، وحركات الصفائح التكتونية، وأسباب الزلازل، بالإضافة إلى طرق المراقبة والتنبؤ بالزلازل. يتعلم المشاركون أيضًا تقييم المخاطر الزلزالية، وتطوير استراتيجيات لتقليل المخاطر، وإعداد البنية التحتية والمجتمعات للتأثيرات الناجمة عن الزلازل. هذا التكوين ضروري للباحثين والمهندسين والمحترفين في إدارة المخاطر الذين يرغبون في تعزيز خبراتهم في علم الزلازل وتقليل المخاطر.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
        show:"إظهار الكل"
    },
    {
        id: 11,
        image: formation19,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'دراسات التكوين والتوظيف الوطني والدولي',
        desc: 'دراسات التكوين والتوظيف الوطني والدولي (EFRNI) هي...',
        detail: 'دراسات التكوين والتوظيف الوطني والدولي (EFRNI) هي تكوين متخصص يهدف إلى تطوير المهارات المتقدمة في مجال التوظيف، على المستوى الوطني والدولي. يشمل التكوين القضايا المتعلقة بالتوظيف في سياقات ثقافية وقانونية مختلفة، ويعلم استخدام الأدوات الحديثة لتحديد وجذب المواهب. كما يركز التكوين أيضًا على تحسين عمليات الاختيار وأهمية إدارة المواهب لضمان الاحتفاظ بالموظفين وتطويرهم في منظور عالمي.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
         show:"إظهار الكل"
    },
    {
        id: 12,
        image: formation17,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'تعليم المسرح للأطفال',
        desc: 'تكوين "تعليم المسرح للأطفال" يقدم للشباب...',
        detail: 'تكوين "تعليم المسرح للأطفال" يقدم للشباب مقدمة في الفن الدرامي من خلال تعزيز ثقتهم بأنفسهم، ومهاراتهم في التواصل، وإبداعهم. من خلال الألعاب التمثيلية، والارتجالات، وتمارين الإبداع، يتعلم الأطفال التعبير عن مشاعرهم وأفكارهم بينما يعززون روح الفريق والقدرة على العمل الجماعي. كما يقدم التكوين أساسيات المسرح، مثل التحدث أمام الجمهور وإدارة توتر المسرح، مما يوفر تجربة غنية تعزز تطويرهم الشخصي ومهاراتهم الاجتماعية.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
         show:"إظهار الكل"
    },
    {
        id: 13,
        image: formation18,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'تكوين مصاعد',
        desc: 'تكوين المصاعد مصمم لتوفير فهم شامل...',
        detail: 'تكوين المصاعد مصمم لتوفير فهم شامل لأنظمة المصاعد، من تركيبها إلى صيانتها. يشمل التكوين مبادئ عمل المصاعد، وإجراءات السلامة، وتقنيات استكشاف الأخطاء وإصلاحها. سيتعلم المشاركون كيفية تركيب وصيانة وإصلاح المصاعد مع الالتزام بمعايير السلامة والتشريعات السارية. التكوين مثالي للفنيين والمهندسين وأي شخص يعمل في قطاع المصاعد، حيث يوفر المهارات اللازمة لضمان تشغيل المعدات بأمان وفعالية.',
        type: 'Formation',
        button:"اقرأ المزيد",
        reserver: "للحجز",
         show:"إظهار الكل"
    },
    {
        id: 14,
        image: formation5,
        resrvedatail: " مرحبًا بكم في منصتنا المصممة خصيصًا لـ.",
        register:"للتسجيل، ببساطة انقر هنا",
        resrveButton:"للحجز",
        title: 'قيادة القطارات والترام',
        desc: 'تكوين قيادة القطارات والترام يعد المشاركين...',
        detail: 'تكوين قيادة القطارات والترام يعد المشاركين لتشغيل هذه المركبات بأمان وفعالية. يشمل التكوين الجوانب التقنية للقيادة، بما في ذلك التحكم في الأوامر، وإدارة أنظمة الإشارة، واتباع إجراءات السلامة. يتعلم المشاركون أيضًا كيفية إدارة حالات الطوارئ، وتحسين استهلاك الطاقة، وضمان راحة الركاب. يشمل التكوين محاكاة عملية ونظرية لتطوير مهارات عميقة في القيادة وإدارة العمليات السككية والتراموية، مع الالتزام بالمعايير التنظيمية السارية.',
        type: 'تكوين',
        button:"اقرأ المزيد",
        reserver: "للحجز",
         show:"إظهار الكل"
    },
]
export const htmlAR=[
    {

    }
]
export const serviceDataAR = [
    {
        id: 1,
        icon: <SlNote />,
        Servicetitle:"اكتشف خدماتنا",
        title: 'التدريب',
        title2:"خدماتنا",
        desc2:"نحن نوفر تدريباً احترافياً يتناسب مع جميع المستويات، وخدمة تنظيف واجهات المباني لضمان السلامة والنظافة في فصل الشتاء، بالإضافة إلى توفير مقرّ سكن لشركتك لتوفر لها عنواناً مرموقاً وإدارة إدارية مبسطة.",
        desc: "عزز مهاراتك من خلال تدريب مخصص من محترفين ذوي خبرة. يقدم المدربون الخبراء لدينا برامج مخصصة لمساعدتك على تحقيق أهدافك بثقة وفعالية.",
        image: service1,
        para1: 'خدمة التدريب',
        desc_para1: "نقدم تدريبات مهنية عالية الجودة، تتناسب مع جميع مستويات الخبرة. تم تصميم برامجنا لتوفير المهارات العملية والنظرية، مما يتيح لك التقدم في مسيرتك المهنية وتحقيق أهدافك المهنية. سواء كنت مبتدئًا أو خبيرًا، سيقوم مدربونا ذوو الخبرة بمساعدتك طوال مسيرتك التعليمية.",
        para2: "الفوائد والمزايا",
        desc_para2: "توفر تدريباتنا خبرة عملية، تتناسب مع الاحتياجات المحددة لكل مشارك، مما يحسن مهاراتهم وقابليتهم للتوظيف.",
        para3: "الجمهور المستهدف",
        desc_para3: "تستهدف هذه التدريبات المحترفين الراغبين في التقدم في مسيرتهم المهنية، والشركات التي تسعى لتطوير مهارات فرقها، والأشخاص الذين يقومون بتغيير مهنتهم.",
        para4: "العملية أو المنهجية",
        desc_para4: "تبدأ كل دورة تدريبية بتحليل الاحتياجات، تليها برنامج مخصص يقدمه خبراء. نحن ندمج بين النظرية والتطبيق لضمان استيعاب فعّال للمعرفة.",
        para5: "القيمة المضافة",
        desc_para5: "تتميز تدريباتنا بمرونتها ونهجها العملي، حيث ندمج أحدث الاتجاهات والتقنيات لتقديم حلول ملائمة وقابلة للتطبيق على الفور في الميدان.",
        Bouton : "تعرف أكثر",
        link:"/formation",

    },
    {
        id: 2,
        icon: <MdOutlineCleaningServices />,
        title: 'تنظيف الواجهات',
        desc: 'عزز مظهر المبنى الخاص بك وطول عمره من خلال خدمات تنظيف الواجهات الاحترافية. تأكد من أن الممتلكات الخاصة بك تترك انطباعًا أوليًا قويًا، مما يعكس جودة عملك واحترافيته.',
        image: service2,
        para1: 'خدمة تنظيف واجهات البنايات',
        desc_para1: "تضمن لك خدمتنا لتنظيف الواجهات نتائج مثالية لاستعادة اللمعان والنظافة لمبانيك. بفضل تقنياتنا الاحترافية ومنتجاتنا الصديقة للبيئة، نقوم بإزالة الأوساخ، والعفن، والملوثات بشكل فعال. ثق بخبرتنا للحفاظ على مظهر ومتانة واجهاتك.",
        para2: "الفوائد والمزايا",
        desc_para2: "يستعيد هذه الخدمة مظهر واجهاتك، ويطيل عمرها، ويحسن صورة ممتلكاتك من خلال تقديم مظهر نظيف ومرتب.",
        para3: "الجمهور المستهدف",
        desc_para3: "هذه الخدمة موجهة لأصحاب المباني السكنية والتجارية والصناعية، بالإضافة إلى مديري العقارات الذين يرغبون في الحفاظ على نظافة وسلامة واجهاتهم.",
        para4: "العملية أو المنهجية",
        desc_para4: "نستخدم تقنيات تنظيف تتناسب مع كل نوع من الأسطح، بما في ذلك الغسيل عالي الضغط واستخدام منتجات صديقة للبيئة. نبدأ بتقييم شامل، يتبعه تنظيف دقيق وفحص جودة نهائي.",
        para5: "القيمة المضافة",
        desc_para5: "تضمن خبرتنا في تنظيف الواجهات نتائج طويلة الأمد وتدخل سريع، مع احترام أعلى المعايير البيئية والأمنية.",
        Bouton : "تعرف أكثر",
link:"/teamglass"
    },
    {
        id: 3,
        icon: <IoHomeOutline />,
        title: 'أسّس شركتك',
        desc: 'استفد من توطين الأعمال المهنية في أغادير لتعزيز صورة شركتك ووجودك في السوق.',
        image: service3,
        para1: 'خدمة التسجيل',
        desc_para1: "تقدم لك خدمتنا للتسجيل عنوانًا تجاريًا مميزًا لشركتك. بالإضافة إلى تبسيط الإدارة الإدارية، نحرص على استلام بريدك وتوفير دعم كامل لجميع إجراءاتك. اجعل عنواننا عنوان شركتك لتعزيز صورتك وتحسين تنظيمك.",
        para2: "الفوائد والمزايا",
        desc_para2: "باستخدام عنواننا، تستفيد من صورة مهنية معززة وإدارة مبسطة لمراسلاتك، مع الحفاظ على خصوصيتك.",
        para3: "الجمهور المستهدف",
        desc_para3: "هذه الخدمة مثالية لرواد الأعمال، والعاملين لحسابهم الخاص، والشركات الناشئة، والشركات الصغيرة التي تسعى إلى إنشاء حضور مهني دون الحاجة إلى مكتب فعلي.",
        para4: "العملية أو المنهجية",
        desc_para4: "نقدم عملية تسجيل سهلة، تشمل استلام وإدارة البريد، بالإضافة إلى خيارات التوجيه حسب احتياجاتك المحددة. يمكنك الوصول إلى مستنداتك بأمان عبر منصتنا الإلكترونية.",
        para5: "القيمة المضافة",
        desc_para5: "تتميز خدمتنا بمرونتها، ودعمها المخصص، وقدرتها على توفير عنوان مميز يعزز مصداقية شركتك، مع تحسين عملياتك الإدارية.",
        Bouton : "تعرف أكثر",
        link:<Link1 to="contact" className="text-sky-500"smooth={true} duration={1000} activeClass='active' spy={true}>اتصل بنا <i className="mdi mdi-chevron-right align-middle"></i></Link1>,

    },
    {
        id: 4,
        title: 'التطوير',
        icon: <CgWebsite />,
        desc: 'عزز تواجدك على الإنترنت من خلال خدمات تطوير الويب المتخصصة لدينا. يقوم مقدمو الخدمة الفرديون لدينا بتصميم مواقع ويب مصممة خصيصًا وسريعة الاستجابة وتتوافق تمامًا مع علامتك التجارية وأهداف عملك.',
        image: service4,
        para1: 'خدمة التطوير',
        desc_para1: "نقدم خدمة كاملة لإنشاء مواقع الويب حسب الطلب لتلبية احتياجاتك الخاصة. من التصميم إلى الإطلاق، يستخدم فريقنا من الخبراء أحدث التقنيات لتطوير مواقع جمالية، وعملية، ومحسّنة لمحركات البحث. سواء كنت بحاجة إلى موقع عرض، أو متجر عبر الإنترنت، أو منصة مخصصة، نحن هنا لتحقيق مشروعك.",
        para2: "الفوائد والمزايا",
        desc_para2: "تم تصميم مواقعنا لتقديم تجربة مستخدم مثالية، وتصميم حديث، ووظائف كاملة، مما يعزز الرؤية على الإنترنت وتفاعل الزوار.",
        para3: "الجمهور المستهدف",
        desc_para3: "تستهدف هذه الخدمة الشركات، ورواد الأعمال، والمحترفين الذين يسعون لإنشاء أو تحسين وجودهم على الإنترنت من خلال موقع ويب يعكس علامتهم التجارية ويحقق أهدافهم التجارية.",
        para4: "العملية أو المنهجية",
        desc_para4: "نبدأ بتحليل شامل لاحتياجاتك، يليه إنشاء تصميم مخصص. ثم نقوم بتطوير واختبار الموقع لضمان أدائه الأمثل قبل إطلاقه.",
        para5: "القيمة المضافة",
        desc_para5: "تضمن مقاربتنا الشخصية وخبرتنا التقنية تحقيق نتائج لا تقتصر على تلبية توقعاتك بل تتجاوزها، من خلال تقديم موقع ويب وظيفي، وجمالي، ومحسن لمحركات البحث.",
        Bouton : "تعرف أكثر",
        link: "/team" ,

    },
    {
        id: 5,
        title: 'التوظيف',
        desc: 'هذا مطلوب عندما، على سبيل المثال، النص النهائي لم يكن متاحًا بعد.',
        image: service5,
        para1: 'خدمة التوظيف',
        desc_para1: "تساعدك خدمتنا للتوظيف للشركات الدولية في تحديد واستقطاب أفضل المواهب على مستوى العالم. بفضل شبكتنا الواسعة وخبرتنا في الموارد البشرية، نجد المرشحين المؤهلين الذين يتوافقون تمامًا مع متطلباتك المحددة. قم بتبسيط عملية التوظيف الخاصة بك وقوي فريقك مع محترفين موهوبين من خلفيات متنوعة.",
        para2: "الفوائد والمزايا",
        desc_para2: "تسهل هذه الخدمة الوصول إلى مجموعة من المرشحين المؤهلين للغاية، وتحسن فعالية عملية التوظيف، وتقلل من أوقات التوظيف، مع ضمان توظيف يتناسب مع احتياجات كل شركة.",
        para3: "الجمهور المستهدف",
        desc_para3: "تستهدف هذه الخدمة الشركات متعددة الجنسيات، والشركات التي توسع نشاطها دوليًا، والمنظمات التي تسعى لتعزيز فريقها بمحترفين موهوبين من أسواق عالمية متنوعة.",
        para4: "العملية أو المنهجية",
        desc_para4: "نستخدم طرق بحث متقدمة وشبكة عالمية للعثور على المرشحين. تتضمن العملية تقييمًا دقيقًا للمهارات، ومقابلات موجهة، وإدارة نشطة للطلبات لضمان تطابق مثالي.",
        para5: "القيمة المضافة",
        Bouton : "تعرف أكثر",
        desc_para5: "تسمح لنا خبرتنا في التوظيف الدولي بالعثور على المواهب المناسبة لمتطلبات شركتك المحددة، مع تقديم خدمة مخصصة ودعم طوال عملية التوظيف لضمان تكامل ناجح.",
        link:"/jobs",

    },
    {
        id: 6,
        title: "ممرض رعاية المرضى",
        desc: "We offer employment contract services in Europe. Contact us today to start your journey toward a bright professional future ! ",
        image: heroImage1,
        para1: "Recruitment Service",
        desc_para1: "Our international recruitment service helps companies identify and hire the best talent worldwide. Through our extensive network and HR expertise, we find qualified candidates who perfectly meet your specific requirements. Simplify your recruitment process and strengthen your team with talented professionals from diverse backgrounds.",
        para2: "Benefits",
        desc_para2: "This service facilitates access to a pool of highly qualified candidates, improves the efficiency of the recruitment process, and reduces hiring times, while ensuring hires that match each company's specific needs.",
        para3: "Target Audience",
        desc_para3: "This service is intended for multinational companies, businesses expanding internationally, and organizations looking to strengthen their team with talented professionals from various global markets.",
        para4: "Process or Methodology",
        desc_para4: "We use advanced search methods and a global network to source candidates. The process includes a thorough skills assessment, targeted interviews, and proactive management of applications to ensure an optimal match.",
        para5: "Added Value",
        Bouton : "تعرف أكثر",
        desc_para5: "Our expertise in international recruitment allows us to find talent suited to your company's specific requirements, while offering personalized service and support throughout the recruitment process to ensure a successful integration.",
        link:"/nurse",
    }
]
export const TitleAR=[
    {
        Title:"التعلم والتدريب مع التوظيف الوطني والدولي",
        button:"اتصل بنا",
        Learn:"التعرف على المزيد",
    }
]
export const NurseAR = [{
    title: "رعاية تمريضية  يمكنك الوثوق بها",
    desc: "فريقنا المخصص من الممرضين المحترفين هنا لتقديم أعلى جودة من الرعاية بتعاطف واحترام. صحتك وراحتك هي أولويتنا القصوى.",
    contact: "اتصل بنا اليوم",
    about: "من نحن",
    descab: "نحن فريق من الممرضين المرخصين وذوي الخبرة مكرس لتقديم رعاية استثنائية في راحة منزلك. من الرعاية بعد الجراحة إلى إدارة الأمراض المزمنة، هدفنا هو تحسين جودة حياتك من خلال خدمات مخصصة ورحيمة."
}];
export const CardAr = [{
    title: "أبرز خدمات الرعاية التمريضية لدينا",
    Comfort: "راحة المريض",
    textCom: "ضمان أقصى درجات الراحة لمرضانا من خلال الرعاية الشخصية والرحيمة.",
    detail: "التفاصيل",
    Caregiver: "دعم مقدمي الرعاية",
    textCare: "دعم مقدمي الرعاية الأسرية بالموارد والراحة التي يحتاجونها لرعاية أحبائهم.",
    Safety: "الأمان والحماية",
    textsafe: "الحفاظ على بيئة آمنة لجميع المرضى من خلال إجراءات أمان صارمة."
}]
export const ServicesSectionAR = [{
    title: "خدمات الرعاية لدينا",
    Patient: "رعاية المرضى",
    descp: "العناية بالمريض أثناء مرضه.",
    Dressing: "تغيير الضمادات",
    descd: "تغيير الضمادات (الجراحية والجلدية، إلخ).",
    Injections: "الحقن",
    desci: "أنواع الحقن العضلية وتحت الجلد.",
    Medical: "الوصفة الطبية",
    decsm: "بوجود وصفة طبية (إلزامية).",
    Umbilical: "العناية بالحبل السري",
    descu: "العناية بالحبل السري للرضع.",
    Postpartum: "رعاية ما بعد الولادة",
    decccp: "العناية بالأم بعد الولادة.",
    IV: "تغيير السوائل الوريدية",
    descI: "تغيير السوائل الوريدية.",
    Blood: "ضغط الدم و الجلوكوز",
    decsB: "مراقبة ضغط الدم ومستويات الجلوكوز."
}];

export const NavbarAR=
[
{
    Home:"الرئيسية",
    Services:"خدمات",
    Formation:"التدريب",
    Jobs:"وظائف",
    gallery:"معرض الصور",
    About:"معلومات عنا",
    Contact_us:"اتصل بنا"
}]
export const AboutAR=[{
    h1 : 'تعرف على  Ocean Connecting ',
    ask:"من نحن؟",
    title:"نحن متخصصون في التوظيف الدولي ومساعدة الوثائق، نقدم دعمًا مخصصًا بعدة لغات لمساعدتك في التنقل عبر الفرص الوظيفية الدولية.",
    desc:"تقدم شركتنا خدمات التوظيف الدولي ودعمًا خبيرًا بعدة لغات. نساعد العملاء في العثور على فرص عمل عالمية ونوفر مساعدة شاملة في إعداد الوثائق بلغات مختلفة. هدفنا هو تسهيل انتقال سلس وفعّال إلى الوظائف الدولية.",
    year:"سنوات الخبرة",
    International:"الدعم الوظيفي الدولي",
    Services:"خدمات"
}]
export const recruitmentAR = [
    {
        id: 1,
        h1:"توظيف",
        title: 'التوظيف الدولي',
        desc: 'ربط المواهب العالمية بالفرص عبر الحدود. نحن نبسط عملية التوظيف الدولي لمساعدتك في العثور على أفضل المرشحين في جميع أنحاء العالم.',
        image:recrutinter,
        title2: 'خدمات التوظيف الدولي',
        desc2: 'تتخصص شركتنا في ربط أفضل المواهب بالفرص العالمية. نقدم حلول توظيف دولية شاملة، بما في ذلك البحث عن المرشحين، وفحصهم، وتوظيفهم. من خلال الاستفادة من شبكتنا الواسعة وخبرتنا في الأسواق المختلفة، نساعد الشركات على العثور على المواهب المناسبة لدفع نموها ونجاحها عبر الحدود.',
        button:"تقدم الآن",
        type: 'دولي',

    },
    {
        id: 2,
        title: 'التوظيف OceanConnecting',
        desc: 'ربط أفضل المواهب مع المنظمات الرائدة على مستوى الوطن. تبسيط عملية التوظيف لديك لتحقيق نتائج فعالة وكفء.',
        image:recrutocean,
        title2: 'التوظيف OceanConnecting',
        desc2: 'نحن متحمسون لدعوتك للتقدم لشغل وظيفة في شركتنا. انضم إلى فريقنا وساهم في بيئتنا الديناميكية بينما تقدم مسيرتك المهنية. استكشف فرص النمو والابتكار والتأثير معنا.',
        button:"تقدم الآن",
        type: 'وطني',
    },
];
export const jobsAR = [
    {
        id: 1,
        image: resume,
        
        h1: "قوائم الوظائف",
       Find: "ابحث عن وظيفتك المثالية معنا",
        title: 'ملف طلب عقد عمل للخارج',
        type: 'دولي',
        menu1: "الوثائق المطلوبه : ",
        secteur: " السجل العدلي كاتجيبوا من المحكمة و كاتكاليزيه ف الوزارة الخارجية (Apostil) ويترجم للإنجليزية ",
        menu2: "الصور المطلوبة :",
        niveaulanguage: "   صورة فوتوغرافية ديالك و  صورة من جواز السفر و  فيديو و صورة ديالك وانت كاتزاول المهنة الي بغيتي تخدم فيها",
        menu6:'المزيد :',
        more:' الإستمارة يمكن ليك الحصول عليها بالضغط على زر التحميل  🙏🏻او باش نسهلو عليكم تقدروا تبعتو لنا الوثائق الأصلية (Pdf)',
        action : 'تقديم الطلب',
        
        
        link: form ,
        model:true
        // link:"https://api.whatsapp.com/send/?phone=%2B212704309787&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D9%83%D8%B1%D9%88%D8%A7%D8%AA%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
    },
    {
        id: 2,
        job:"وكالة توظيف",
        ocean:"Ocean connect",
        image: croatie,
        title: 'عقد عمل في كرواتيا',
        type: 'دولي',
        secteur: 'بناء/ حدادة / نجارة / صباغة / إلكتريك ميكانيك / تكييف / سائق بيرمي D / جزار / الفندقة .',
        niveaulanguage: 'اللغة غير ضرورية.',
        timevisa: 'مدة الحصول على الفيزا 5 أشهر .',
        contratime: 'عقد عمل لمدة سنة .',
        pricecontrat: 'ثمن العقد 6 ملايين .',
        more: 'العقد كيتوفر على السكن و التطبيب بالمجان ..',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D9%83%D8%B1%D9%88%D8%A7%D8%AA%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "القطاع :",
        menu2: "مستوى اللغة :",
        menu3: "مدة التأشيرة :",
        menu4: "العقد :",
        menu5: "سعر العقد :",
        menu6: "المزيد :",
        action : 'تقديم الطلب',
          
          
    },
    {
        id: 3,
        image: allemagne,
        title: 'عقد عمل في ألمانيا',
        type: 'دولي',
        secteur: ' الصحة والتمريض/ الفنادق / البرمجة',
        niveaulanguage: 'ضروري اللغة B1 .',
        timevisa: 'مدة الحصول على الفيزا 8 اشهر .',
        contratime: 'عقد عمل لمدة سنة .',
        pricecontrat: 'ثمن العقد 8 ملايين .',
        more: 'العقد كيتوفر على السكن و التطبيب بالمجان ..',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A3%D9%84%D9%85%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "القطاع :",
        menu2: "مستوى اللغة :",
        menu3: "مدة التأشيرة :",
        menu4: "العقد :",
        menu5: "سعر العقد :",
        menu6: "المزيد :",
        action : 'تقديم الطلب',
    },
    {
        id: 4,
        image: belgium,
        title: 'عقد عمل في بلجيكا',
        type: 'دولي',
        secteur: ' الصحة والتمريض/ الفنادق / البرمجة ',
        niveaulanguage: ' ضروري اللغة B1 ',
        timevisa: 'مدة الحصول على الفيزا 8 اشهر .',
        contratime: 'عقد عمل لمدة سنة .',
        pricecontrat: 'ثمن العقد 6 ملايين .',
        more: 'العقد كيتوفر على السكن و التطبيب بالمجان ..',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A8%D9%84%D8%AC%D9%8A%D9%83%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "القطاع :",
        menu2: "مستوى اللغة :",
        menu3: "مدة التأشيرة :",
        menu4: "العقد :",
        menu5: "سعر العقد :",
        menu6: "المزيد :",
        action : 'تقديم الطلب',
    },
    {
        id: 5,
        image: italy,
        title: 'عقد عمل في إيطاليا',
        type: 'دولي',
        secteur: 'الصحة والتمريض/ الفنادق / فلاحة .',
        niveaulanguage: ' ضروري اللغة B1 ',
        timevisa: 'مدة الحصول على الفيزا 8 اشهر .',
        contratime: 'عقد عمل لمدة سنة .',
        pricecontrat: 'ثمن العقد 6 ملايين .',
        more: 'العقد كيتوفر على السكن و التطبيب بالمجان ..',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D9%8A%D8%B7%D8%A7%D9%84%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "القطاع :",
        menu2: "مستوى اللغة :",
        menu3: "مدة التأشيرة :",
        menu4: "العقد :",
        menu5: "سعر العقد :",
        menu6: "المزيد :",
        action : 'تقديم الطلب',
    },
    {
        id: 6,
        image: spain,
        title: 'عقد عمل في إسبانيا',
        type: 'دولي',
        secteur:' الصحة والتمريض/ الفنادق / فلاحة .',
        niveaulanguage: 'ضروري اللغة B1 .',
        timevisa: 'مدة الحصول على الفيزا 8 اشهر .',
        contratime: 'عقد عمل لمدة سنة .',
        pricecontrat: 'ثمن العقد 6 ملايين .',
        more: 'العقد كيتوفر على السكن و التطبيب بالمجان ..',
        link: "https://api.whatsapp.com/send/?phone=%2B212657236635&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7+Ocean+Connecting+%D8%A3%D8%B1%D9%8A%D8%AF+%D8%A7%D9%84%D8%AA%D9%82%D8%AF%D9%85+%D8%A8%D8%B7%D9%84%D8%A8+%D9%84%D9%84%D8%AD%D8%B5%D9%88%D9%84+%D8%B9%D9%84%D9%89+%D8%B9%D9%82%D8%AF+%D8%B9%D9%85%D9%84+%D8%A8%D8%AF%D9%88%D9%84%D8%A9+%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A%D8%A7+https%3A%2F%2Foceanconnecting.ma%2Fnos-services&type=phone_number&app_absent=0",
        menu1: "القطاع :",
        menu2: "مستوى اللغة :",
        menu3: "مدة التأشيرة :",
        menu4: "العقد :",
        menu5: "سعر العقد :",
        menu6: "المزيد :",
        action : 'تقديم الطلب',
    },
    {
        id: 7,
        image: facade,
        title: 'عامل تنضيف واجهات المباني',
        type: 'وطني',
        secteur: 'خدمة التنظيف',
        niveaulanguage: 'اللغة ليست ضرورية.',
        timevisa: 'مستوى البكالوريا.',
        contratime: 'عقد CDI -CDD.',
        pricecontrat: 'أكادير .',
        more: ' المعرفة بالمواد الكيميائية - التحمل النفسي - التواصل الجيد - القدرة على استخدام المعدات - الدقة والانتباه للتفاصيل - العمل على ارتفاعات عالية - القدرة البدنية - الوعي بالسلامة',
        menu1:" قطاع  : ",
        menu2:" مستوى اللغة  :",
        menu3:" مستوى التعليم  :",
        menu4:" نوع العقد :",
        menu5:" منطقة :",
        menu6:" المهارات الأساسية :",
        action : 'تقديم الطلب',
    },
    // تأكد من أن لكل وظيفة معرف فريد
];

export const ContactAR=[{
    title: "اتصل بنا",
    desc: "يسعدنا سماع رأيك! املأ النموذج أدناه باسمك وبريدك الإلكتروني ورسالتك، وسنرد عليك في أقرب وقت ممكن. شكرًا لتواصلك معنا!",
    name: " اسمك :",
    email: "بريدك الإلكتروني :",
    question: "سؤالك :",
    comment: "تعليقك :",
    Message: "أرسل الرسالة"
}]
export const placementar=[
    {
      
    }
]
export const GalleryAR=[
    {
        id:1,
        title:"مرحباً بكم في معرض الصور!",
        desc:"اكتشف الإبداع والشغف وراء عملنا من خلال هذه الصور. استمتع بالمنظر!",
        image:"https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F2.jpg?alt=media&token=2edf1832-c447-46f8-88af-b496cbaa46fe",
        numberimage:"10 صور",
        datealbum:" 12-12-2024",
        titlealbum:"حدث - الممرضين ",
        img: [
            {alt: 'image1', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F1.jpg?alt=media&token=e00fef12-3166-4135-ba8e-cc244533f9c9'},
            {alt: 'image2', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F2.jpg?alt=media&token=2edf1832-c447-46f8-88af-b496cbaa46fe'},
            {alt: "image3", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F3.jpg?alt=media&token=1ee28e5c-4382-43a8-8486-70a300389152'},
            {alt: "image4", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F4.jpg?alt=media&token=c743a9a4-fd9f-402a-aac8-2a43344d72c8'},
            {alt: "image5", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F5.jpg?alt=media&token=3db9b4fe-05de-49e4-a3ba-0c56756ab4b9'},
            {alt: "image6", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F6.jpg?alt=media&token=cd3f5727-dd69-495d-be36-a476990c0a1e'},
            {alt: "image7", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F7.jpg?alt=media&token=0832fc09-a5ec-4a4c-9a71-e6463c6d9244'},
            {alt: "image8", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F8.jpg?alt=media&token=8addc46f-e121-4456-a129-5e44f4bff1c9'},
            {alt: "image9", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F9.jpg?alt=media&token=530b17a3-fc1e-4e22-99ec-d8cfa51f71b4'},
            {alt: "image10", url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2Fevenement%20-%20infermiere%202024-06-02%2F10.jpg?alt=media&token=f840572c-7b17-42da-a413-565daf589f3e'},
        ]
    },
    {
        id:2,
        image:"https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F1.png?alt=media&token=42c92a0a-9bfe-4b1e-8bb2-5799ba69a1ee",
        numberimage:" 5 صور",
        datealbum:"12-12-2024",
        titlealbum:"فريق تنظيف الزجاج  ",
        img: [
            {alt: 'image1', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F6.jpg?alt=media&token=a6ef683e-9250-4147-acb2-b6a538f16790'},
            {alt: 'image2', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F2.jpg?alt=media&token=89f41d86-0294-4ac9-a646-e8127f751d4a'},
            {alt: 'image3', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F3.jpg?alt=media&token=d9c0d25e-8db6-4ac7-b07d-7641dd174f15'},
            {alt: 'image4', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F4.jpg?alt=media&token=8e6de772-41b2-4905-aa7e-8f81d3d73c86'},
            {alt: 'image5', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FglassCleaning-team1%2F5.jpg?alt=media&token=083fe0ff-6226-492c-9974-3f8423efd177'},
            ]
    },
    {
        id:3,
        image:"https://i.imgur.com/alQ7GWW.jpeg",
        numberimage:" 27 صور",
        datealbum:"12-12-2024",
        titlealbum:"صور المركز ",
        img: [
            {alt: 'image1', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4075.jpg?alt=media&token=0fbbc107-22b2-4fed-bbfb-f680799d7075'},
            {alt: 'image2', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4076.jpg?alt=media&token=4c3ee7dd-e27e-468d-8917-980f9423b292'},
            {alt: 'image3', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4079.jpg?alt=media&token=da9ea1e6-91f5-4e5d-8fa5-af4503e5eff5'},
            {alt: 'image4', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4080.jpg?alt=media&token=7ef19b40-51b6-4aca-b2b6-d950aebdcbd0'},
            {alt: 'image5', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4083.jpg?alt=media&token=2fd8f1ee-3826-46eb-995f-86ac7641fda6'},
            {alt: 'image6', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4084.jpg?alt=media&token=0cf65c9e-d52f-491d-840e-11a43c5d1f70'},
            {alt: 'image7', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4085.jpg?alt=media&token=a291f227-32d8-44be-ae30-f67e25bebf1f'},
            {alt: 'image8', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4086.jpg?alt=media&token=a917d76e-03a1-4d1f-93b7-f68491b61d8b'},
            {alt: 'image9', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4088.jpg?alt=media&token=a47dee19-cee1-4ccc-a3d1-c9c9f85bb833'},
            {alt: 'image10', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4089.jpg?alt=media&token=ccdf637c-b9dd-462f-a7d3-3a4fb32ed37f'},
            {alt: 'image11', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4090.jpg?alt=media&token=4100faca-4836-46bf-b0e9-2ba295540019'},
            {alt: 'image12', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4091.jpg?alt=media&token=fc57e36f-28bd-47c5-aa8e-822cd088c906'},
            {alt: 'image13', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4092.jpg?alt=media&token=74d75869-278f-4f3b-bd04-9ef4419c5b93'},
            {alt: 'image14', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4093.jpg?alt=media&token=c3efdf66-6e8e-4913-a027-413e5db4be98'},
            {alt: 'image15', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4094.jpg?alt=media&token=3b685692-20e7-4b17-a850-4665d25f5d4f'},
            {alt: 'image16', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4095.jpg?alt=media&token=9f76d06d-02ca-4970-82e9-459ad1f7ba49'},
            {alt: 'image17', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4096.jpg?alt=media&token=8906c50e-9cd9-414c-bf53-55fa1eb2a400'},
            {alt: 'image18', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4097.jpg?alt=media&token=1d2807bf-78f9-4740-9e13-c80cca55c584'},
            {alt: 'image19', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4098.jpg?alt=media&token=a2ae568e-d258-4db4-a418-f5a87cf7cb84'},
            {alt: 'image20', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4099.jpg?alt=media&token=a737a81f-e776-4d3d-8f99-4e833a1e10e4'},
            {alt: 'image21', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4100.jpg?alt=media&token=4cd635f4-66d8-4971-b6e5-a8f76f63cb6d'},
            {alt: 'image22', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4102.jpg?alt=media&token=86e6047e-7132-46a0-aafb-d4c87fdfbe6d'},
            {alt: 'image23', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4105.jpg?alt=media&token=d8ee1dc3-59b9-4ef9-819f-0df491aeb3a3'},
            {alt: 'image24', url: 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Gallery%2FCenter-pictures%2FIMG_4106.jpg?alt=media&token=f7966a7d-ec7b-4de7-8a3c-371e470b163d'},
            ]
    },
    
];
export const footerDataAr = {
    "socialLinks": [ // Changed from array to object
        { "id": 1, "label": "Facebook", "to": "https://www.facebook.com/the.ocean.connecting/" },
        { "id": 2, "label": "Instagram", "to": "https://www.instagram.com/oceanconnecting.ma/" },
        { "id": 3, "label": "YouTube", "to": "https://www.youtube.com/@OceanConnecting" },
        { "id": 4, "label": "LinkedIn", "to": "https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" }
    ],
    "contactInfo": [
        {
            "id": 1,
            "Icon": "HiLocationMarker",
            "title": "العنوان",
            "content": "عمارة كوراليا، الطابق 2، إيسلان، الحي المحمدي، أكادير"
        },
        {
            "id": 2,
            "Icon": "PiPhoneCallFill",
            "title": "اتصل بنا",
            "content": "+212 704-309787"
        },
        {
            "id": 3,
            "Icon": "MdMarkEmailRead",
            "title": "راسلنا عبر البريد الإلكتروني",
            "content": "oceanconnecting.ma@gmail.com"
        }
    ],
    "pageElements": [
        { "id": 1, "label": "الرئيسية", "link": "/" },
        { "id": 2, "label": "التكوينات", "link": "/formation" },
        { "id": 3, "label": "التوضيف", "link": "/jobs" },
        { "id": 4, "label": "معرض الصور", "link": "/gallery" },
        { "id": 5, "label": "من نحن", "link": "/" },
        { "id": 6, "label": "تواصل معنا", "link": "/Contact" }
    ],
    "pagelangague": [
        { "id": 1, "label": "الإنجليزية", "link": "/Home" },
        { "id": 2, "label": "الإسبانية", "link": "/Services" },
        { "id": 3, "label": "الألمانية", "link": "/Formation" },
        { "id": 4, "label": "الإيطالية", "link": "/About" },
        { "id": 5, "label": "الفرنسية", "link": "/Contact" }
    ],
    "ourServices": [
        { "id": 1, "label": "إنشاء المواقع و التطبيقات", "link": "/team" },
        { "id": 2, "label": "التدريبات", "link": "/team" },
        { "id": 3, "label": "تنضيف الواجهات", "link": "/teamglass" },
        { "id": 4, "label": "التوضيف الخارجي", "link": "/jobs" },
        { "id": 5, "label": "التمريض حتى المنزل", "link": "/nurse" },
        { "id": 6, "label": "إنشاء شركة", "link": "/" }
    ],
    "ourFormation": [
        { "id": 1, "label": "تكوين الإسعافات الأولية", "link": "/" },
        { "id": 2, "label": "تكوين الدي جي", "link": "/formation/3" },
        { "id": 3, "label": "تكوين صيانة المصاعد الألية", "link": "/formation/13" },
        { "id": 4, "label": "تكوين وكلاء تسجيل الرحلات بالمطار", "link": "/formation/2" },
        { "id": 5, "label": "تكوين في الإنتاج السينيمائي و الإخراج", "link": "/" }
    ],
    "footerText": {
        "logoAlt": "RAKAR Logo",
        "mainDescription": "نحن محترفون",
        "detailedDescription": "نحن متخصصون في التنسيب الوظيفي العالمي والمساعدة في تقديم الوثائق، ونقدم لك دعماً مخصصاً بلغات متعددة لمساعدتك في البحث عن فرص العمل الدولية.",
        "ourServicesTitle": "خدماتنا",
        "ourPageTitle": "صفحاتنا",
        "ourlangagueTitle": "اللغات التي ندرسها",
        "ourFormationTitle":"التكوينات",
    },
    "footerCopyright": {
        "text": "حقوق الملكية © ",
        "company": "Ocean Connecting",
        "allRightsReserved": "جميع الحقوق محفوظة.",
        "message": "شكراً لزيارتك موقعنا الإلكتروني ومرحباً بك في ",
        
    }
}; // Changed from array to object
export const DevelopmentAR = [{  
    title: "التقِ بفريق التطوير لدينا",  
    desc: "نحن فريق شغوف من الخبراء مكرس لصياغة حلول مبتكرة. استكشف المزيد عن كل عضو في الفريق أدناه وتعرّف على التكنولوجيا التي يتميزون بها.",  
    title2: "خدماتنا في التطوير",  
    services : [  
        {  
            title: "الأمان",  
            description: "تأكد من أمان تطبيقاتك باستخدام أحدث بروتوكولات الأمان وأفضل الممارسات. نقدم اختبارات الاختراق، وممارسات البرمجة الآمنة، وتقييمات الامتثال.",  
            icon: <FaLock className="text-blue-600" />  
          },  
          {  
            title: "الاستشارة",  
            description: "احصل على مشورة خبيرة حول استراتيجية التكنولوجيا، وهندسة الأنظمة، وأكثر من ذلك. خدمات الاستشارة لدينا مصممة لمساعدتك في تجاوز التحديات التقنية المعقدة.",  
            icon: <FaComments className="text-green-600" />  
          },  
          {  
            title: "التطوير",  
            description: "من تطوير الواجهة الأمامية إلى تطوير الواجهة الخلفية، يتميز فريقنا في بناء تطبيقات قوية وقابلة للتوسع تناسب احتياجات عملك.",  
            icon: <FaCode className="text-purple-600" />  
          } 
      ]
}]
// export const type=[{
   
// }]