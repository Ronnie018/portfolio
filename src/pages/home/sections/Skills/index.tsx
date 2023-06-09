import StSkills from './styled';
import Skill from './Skill';
import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const skillsElm = useRef(null);
  const [width, setWidth] = useState(0);
  const [description, setDescription] = useState();
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'Express',
    'SQL',
    'Git',
    'Figma',
    'TypeScript',
    'PHP',
    'Python',
    'Laravel',
    'Linux',
    'Flask',
    'Ruby',
    'Rails',
  ];
  let running = false;
  useEffect(() => {
    if (running) return;
    running = true;

    const width =
      (skillsElm?.current as HTMLElement | any)?.scrollWidth -
      (skillsElm?.current as HTMLElement | any)?.clientWidth +
      25;
    width && setWidth(width);
  }, []);

  return (
    <StSkills width={width}>
      <div className='container' id='Skills'>
        <header className='header'>
          <h2>Skills i am proficient in:</h2>
        </header>
        <div className='skills-container'>
          <div className='skills' ref={skillsElm}>
            {skills.map((skill, index) => (
              <div className='skill' key={index}>
                <Skill color='#0066B0' setDescription={setDescription}>
                  {skill}
                </Skill>
              </div>
            ))}
          </div>
        </div>
        <div className='description show'>{description}</div>
      </div>
    </StSkills>
  );
};

export default Skills;
