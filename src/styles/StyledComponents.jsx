// src/styles/StyledComponents.js
import styled from "styled-components";

// Styled Components
export const CTAButton = styled.button`
  background-color: #1d4ed8;
  color: #ffffff;
  padding: 14px 28px;
  margin-top: 20px;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(29, 78, 216, 0.4);
  cursor: pointer;

  &:hover {
    background-color: #1e40af;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(29, 78, 216, 0.5);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 3px 10px rgba(29, 78, 216, 0.3);
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  background: linear-gradient(to right, #e0f7fa, #e3f2fd);
  position: relative;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
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

export const TextBlock = styled.div`
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

export const ImageWrapper = styled.div`
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
