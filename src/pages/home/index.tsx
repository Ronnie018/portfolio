import styled from 'styled-components';
import Hero from './sections/Hero';
import Bio from './sections/Bio';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from '../../components/Footer';

const StHome = styled.div``;

const Home = () => {
  return (
    <StHome>
      <Hero />
      <Bio />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </StHome>
  );
};

export default Home;
