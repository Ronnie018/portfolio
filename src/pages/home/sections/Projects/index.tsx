import StProjects from './styled';
import Carousel from '../../../../components/Carousel/index';
import { useState } from 'react';

const Projects = () => {
  const [centered, setCentered] = useState<string | null>(null);

  const items = [
    {
      path: '/images/projects/',
      filename: 'reentry.png',
      title: 'Prisoner Reentry Advocates',
      url: 'https://reentry-ronnie018.vercel.app/',
      tags: ['Tailwind', 'Typescript'],
      done: false,
      type: 'web',
    },
    {
      path: '/images/projects/',
      filename: 'together_player.png',
      title: 'React Online Music Player',
      url: 'https://github.com/Ronnie018/together-reactPlayer',
      tags: ['React', 'JavaScript', 'Gun'],
      done: false,
      type: 'repo',
    },
    {
      path: '/images/projects/',
      filename: 'nlw_spacetime.png',
      title: 'NLW Spacetime',
      url: 'https://github.com/Ronnie018/NLW-spacetime-webClient',
      tags: ['Next', 'Node', 'Typescript', 'MySQL', 'Tailwind'],
      done: false,
      type: 'repo',
    },
    {
      path: '/images/projects/',
      filename: 'roberta_portfolio.png',
      title: 'Design portfolio',
      url: 'https://robertaandrade.github.io/portfolio-design/',
      tags: ['React', 'SCSS', 'Astro'],
      done: true,
      type: 'web',
    },
    {
      path: '/images/projects/',
      filename: 'invoice_analizer.png',
      title: 'Pyhon OCR Invoice Analyzer',
      url: 'https://github.com/Ronnie018/ocr',
      tags: ['Python', 'Tesseract', 'Flask'],
      done: true,
      type: 'repo',
    },
    {
      path: '/images/projects/',
      filename: 'e_art.png',
      title: 'E Art Virtual Art Gallery',
      url: 'https://e-art-project.vercel.app/',
      tags: ['Next', 'Tailwind', 'Javascript'],
      done: false,
      type: 'web',
    },
    {
      path: '/images/projects/',
      filename: 'ror_blog.png',
      title: 'Ruby Fullstack Blog App',
      url: 'https://github.com/Ronnie018/ROR-mvc-getting-started',
      tags: ['MySQL', 'Bootstrap', 'Ruby on Rails'],
      done: true,
      type: 'repo',
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
