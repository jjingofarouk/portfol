// lib/ga.ts
export const GA_MEASUREMENT_ID = 'G-VV2EQ7JH2R'; // Your actual GA ID

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};