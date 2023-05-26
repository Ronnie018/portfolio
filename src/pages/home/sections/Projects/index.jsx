import StProjects from './styled';
import Carousel from '../../../../components/Carousel/index.jsx';
import { useState } from 'react';

const Projects = () => {
  const [centered, setCentered] = useState(null);

  const items = [
    {
      path: '/images/projects/',
      filename: 'together_player.png',
      title: 'React Online Music Player',
      url: 'https://github.com/Ronnie018/together-reactPlayer',
      tags: ['React', 'JavaScript', 'Gun'],
    },
    {
      path: '/images/projects/',
      filename: 'ror_blog.png',
      title: 'Ruby Fullstack Blog App',
      url: 'https://github.com/Ronnie018/ROR-mvc-getting-started',
      tags: ['MySQL', 'Bootstrap', 'Ruby on Rails'],
    },
    {
      path: '/images/projects/',
      filename: 'nlw_spacetime.png',
      title: 'NLW Spacetime',
      url: 'https://github.com/Ronnie018/NLW-spacetime-webClient',
      tags: ['Next', 'Node', 'Typescript', 'MySQL', 'Tailwind'],
    },
    {
      path: '/images/projects/',
      filename: 'roberta_portfolio.png',
      title: 'Astro Illustration and Design portfolio',
      url: 'https://robertaandrade.github.io/portfolio-design/',
      tags: ['React', 'SCSS', 'Astro'],
    },
    {
      path: '/images/projects/',
      filename: 'invoice_analizer.png',
      title: 'Pyhon OCR Invoice Analyzer',
      url: 'https://github.com/Ronnie018/ocr',
      tags: ['Python', 'Tesseract', 'Flask'],
    },
  ];

  return (
    <StProjects>
      <div className='container' id='Portfolio'>
        <header className='header'>
          <h2>{centered ? centered : 'My projects'}</h2>
        </header>
        <Carousel items={items} setCentered={setCentered} />
      </div>
    </StProjects>
  );
};

export default Projects;
