import React, { createContext } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const heroImage1 = 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice.png?alt=media&token=b54504fc-6722-431f-8787-d75218233c1b';
  const heroImage2 = 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice1.png?alt=media&token=0d65089b-9802-41ec-800d-ab41f867dab0';
  const heroImage4 = 'https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fservice2.png?alt=media&token=0a170203-2f38-4d56-8309-030c8b87e0d3';

  const images = useMemo(() => [heroImage1, heroImage2, heroImage4], []);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <ImageContext.Provider value={{ images, currentImage, setCurrentImage }}>
      {children}
    </ImageContext.Provider>
  );
};

// Custom hook to use ImageContext
export const useImageContext = () => useContext(ImageContext);
