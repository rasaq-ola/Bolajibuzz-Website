export const track = (event, data = {}) => {
  if (typeof window === 'undefined') return;
  (window.dataLayer = window.dataLayer || []).push({ event, ...data });
};
