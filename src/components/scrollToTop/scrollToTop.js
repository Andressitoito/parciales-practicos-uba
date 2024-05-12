const ScrollToTopButton = () => {
 const scrollToTop = () => {
  window.scrollTo({
   top: 0,
   behavior: "smooth"
  });
 };

 return (
  <button
   onClick={scrollToTop}
   className="fixed bottom-5 right-5 bg-blue-400 opacity-50 z-50 hover:bg-blue-600 text-white font-bold py-3 px-3 rounded-full shadow-md outline-none focus:outline-none"
  >
   <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
   >
    <path
     strokeLinecap="round"
     strokeLinejoin="round"
     strokeWidth={2}
     d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
   </svg>
  </button>
 );
};

export default ScrollToTopButton;
