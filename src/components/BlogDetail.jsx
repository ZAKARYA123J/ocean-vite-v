import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Function to load blog data based on language
const loadClientData = (lang) => {
  switch (lang) {
    case 'fr':
      return import('./locales/fr/translation').then((module) => module.blogDataFR);
    case 'ar':
      return import('./locales/ar/translation').then((module) => module.blogDataAR);
    case 'en':
    default:
      return import('./locales/en/translation').then((module) => module.blogDataEN);
  }
};

// Styled Components for Professional Look
const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 50px 20px;
  background-color: #f5f7fa;
  min-height: 100vh;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const BlogContainer = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 40px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const BlogHeader = styled.div`
  text-align: center;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const BlogImage = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
`;

const BlogContent = styled(motion.div)`
  font-size: 1.1rem;
  line-height: 1.75;
  color: #4a5568;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const BlogDetail = React.memo(() => {
  const { i18n, t } = useTranslation();
  const [blogData, setBlogData] = useState([]);
  const { name } = useParams(); // Get the blog name from the URL
  const filteredBlogPosts = blogData.filter((post) => post.Link === name);

  useEffect(() => {
    loadClientData(i18n.language).then((data) => setBlogData(data));
  }, [i18n.language]);

  if (filteredBlogPosts.length === 0) {
    return <div className="text-center py-4 text-red-500">Blog post not found.</div>;
  }

  return (
    <PageContainer>
      {filteredBlogPosts.map((blogPost, index) => (
        <BlogContainer
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <BlogHeader>
            <BlogTitle>{t(blogPost.title)}</BlogTitle>
          </BlogHeader>

          <BlogImage
            src={blogPost.image}
            alt={blogPost.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          <BlogContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t(blogPost.detail)}
          </BlogContent>

          <BlogContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t(blogPost.why_choose_us?.expert_instructors)}<br />
            {t(blogPost.why_choose_us?.customized_learning)}<br />
            {t(blogPost.why_choose_us?.flexible_formats)}
          </BlogContent>

          {blogPost.language_courses?.slice(0, 1).map((skill) => (
            <p className='font-bold' key={skill.title}>
              {t(skill.title)}
            </p>
          ))}

          {blogPost.language_courses?.map((skill) => (
            <BlogContent
              key={skill.language}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className='font-bold'>{t(skill.language)}</span>: {skill.description}
            </BlogContent>
          ))}

          <BlogContent
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t(blogPost.cta?.message)}
          </BlogContent>
        </BlogContainer>
      ))}
    </PageContainer>
  );
});

export default BlogDetail;
