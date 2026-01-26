// Mock window.matchMedia for gsap/ScrollTrigger compatibility in Jest
if (typeof window !== 'undefined' && !window.matchMedia) {
  window.matchMedia = function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {},
      removeEventListener: function () {},
      dispatchEvent: function () {},
    };
  };
}
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
