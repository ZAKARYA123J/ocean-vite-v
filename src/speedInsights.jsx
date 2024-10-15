import { getSpeedInsights } from '@vercel/speed-insights';

// Fetch insights for a specific URL
export const fetchSpeedInsights = async (url) => {
  try {
    const insights = await getSpeedInsights(url);
    console.log('Speed Insights:', insights);
    return insights;
  } catch (error) {
    console.error('Failed to get Speed Insights:', error);
  }
};
