import Header from '../feature-loopstudios/components/Header';
import Article from '../feature-loopstudios/components/Article';
import Cards from '../feature-loopstudios/components/Cards';
import Footer from '../feature-loopstudios/components/Footer';
import { useRef, useEffect } from 'react';
const Loopstudios = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main
      ref={contentRef}
      className=" font-alata overflow-hidden h-screen overflow-y-auto"
    >
      <Header />
      <Article />
      <Cards />
      <Footer />
    </main>
  );
};
export default Loopstudios;
