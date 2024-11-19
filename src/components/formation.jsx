
import styled from "styled-components";
import React from "react";
import { Helmet } from 'react-helmet-async';
// Function to load client data based on the language
const loadClientData =async (lang) => {
  switch (lang) {
    case 'fr':
      return await import('./locales/fr/translation').then(module => module.blogDataFR);
    case 'ar':
      return await import('./locales/ar/translation').then(module => module.blogDataAR);
    case 'en':
    default:
      return await import('./locales/en/translation').then(module => module.blogDataEN);
  }
};

// Styled Components for CourseCard
const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  border-radius: 12px;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  height: 200px;
  object-fit: cover;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: #475569;
  margin-bottom: 20px;
`;

const FilterInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  transition: border-color 0.2s;
  min-width: 200px;

  &:focus {
    border-color: #3a86ff;
    outline: none;
  }
`;

const FilterSelect = styled.select`
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  transition: border-color 0.2s;
  min-width: 150px;

  &:focus {
    border-color: #3a86ff;
    outline: none;
  }
`;

const ButtonLink = styled(Link)`
  color: #3a86ff;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #2a6bbf;
  }
`;

const CourseCard = React.memo(() => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');
  const { i18n, t } = useTranslation();
  const [bloggDta, setBlogdata] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    loadClientData(i18n.language).then(data => setBlogdata(data));
  }, [i18n.language]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredBlogData = bloggDta.filter(item => {
    const matchesSearchTerm = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || item.type.includes(filter);
    return matchesSearchTerm && matchesFilter;
  });

  const filterOptions = [
    { label: 'All', value: 'All' },
    { label: 'Formation', value: 'Formation' },
    { label: 'Language', value: 'Language' }
  ];
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
    <section className="relative md:py-24 py-16" id="blog">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 pb-6 text-center">
          <div className="relative flex justify-center items-center mt-4">
            <div className="relative flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 p-6">
              <FilterInput
                type="text"
                placeholder="Search by title"
                value={searchTerm}
                onChange={handleSearch}
                className="focus:border-blue-500 transform md:scale-100 scale-110"
              />

              <FilterSelect
                value={filter}
                onChange={handleFilterChange}
                className="focus:border-blue-500 transform md:scale-100 scale-110"
              >
                {filterOptions.map(option => (
                  <option key={option.value} value={option.value}>{t(option.label)}</option>
                ))}
              </FilterSelect>
            </div>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
  {filteredBlogData.map((item, index) => (
    <CardContainer key={index}>
      {index === 0 ? (
        <a href="https://oceanconnecting.com" target="_blank" rel="noopener noreferrer">
          <CardImage src={item.image} alt={item.title} />
        </a>
      ) : (
        <Link to={`/formation-professionnelle-agadir/${item.Link}`}>
          <CardImage src={item.image} alt={item.title} />
        </Link>
      )}
      <div className="mt-4">
        <Title>{t(item.title)}</Title>
        <Description>{t(item.desc)}</Description>
        {index === 0 ? (
          <a
            href="https://oceanconnecting.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold hover:underline"
          >
            {t(item.button)} <i className="mdi mdi-chevron-right align-middle"></i>
          </a>
        ) : (
          <ButtonLink to={`${item.Link}`}>
            {t(item.button)} <i className="mdi mdi-chevron-right align-middle"></i>
          </ButtonLink>
        )}
      </div>
    </CardContainer>
  ))}
</div>

      </div>
    </section>
    </>
  );
});

export default CourseCard;
