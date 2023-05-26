import styled from 'styled-components';

const StSkill = styled.div`
  display: grid;
  background: #e1e1e1;
  box-shadow: 0px 22px 20px rgba(255, 255, 255, 0.1),
    inset 0px 0px 0px 15px rgba(255, 255, 255, 0.25),
    inset -14px -13px 10px 11px rgba(0, 48, 173, 0.19);
  place-items: center;
  width: 180px;
  height: 180px;
  border-radius: 100vmax;
  :hover {
    box-shadow: 0px 27px 22px 5px rgba(255, 255, 255, 0.07),
      inset 0px 3px 10px rgba(0, 48, 173, 0.19);
    .content {
      row-gap: 0rem;
      justify-content: center;
      .icon {
        transform: scale(0.7) translateY(-50px);
        animation: bounce;
        animation-duration: 4000ms;
        animation-iteration-count: infinite;
        animation-delay: 0.4s;
        animation-fill-mode: both;
      }
      .name {
        transform: scale(0.9) translateY(-50px);
      }
    }
  }
  &,
  * {
    user-select: none;
    cursor: grab;
    transition: cubic-bezier(0.455, 0.03, 0.515, 0.955) 200ms;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1rem;
    * {
      transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 250ms;
    }
    .icon {
    }
    .name {
      color: ${(props) => props.color};
    }
  }
  @keyframes bounce {
    0% {
      transform: scale(0.7) translateY(-50px) rotateZ(0deg);
    }
    4% {
      transform: scale(0.7) translateY(-50px) rotateZ(45deg);
    }
    10% {
      transform: scale(0.7) translateY(-50px) rotateZ(-50deg);
    }
    14% {
      transform: scale(0.7) translateY(-50px) rotateZ(0deg);
    }
    100% {
      transform: scale(0.7) translateY(-50px) rotateZ(0deg);
    }
  }
`;

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaLinux,
  FaFigma,
  FaLaravel,
  FaDatabase,
  FaFlask,
  FaPhp,
} from 'react-icons/fa';

import { SiTypescript, SiRedux, SiExpress } from 'react-icons/all';

const Skill = ({ children, color, setDescription }) => {
  const enumeratedIcons = {
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    JavaScript: FaJsSquare,
    TypeScript: SiTypescript,
    React: FaReact,
    Redux: SiRedux,
    Node: FaNodeJs,
    Express: SiExpress,
    SQL: FaDatabase,
    Git: FaGitAlt,
    Figma: FaFigma,
    PHP: FaPhp,
    Python: FaPython,
    Laravel: FaLaravel,
    Linux: FaLinux,
    Flask: FaFlask,
  };

  const enumeratedText = {
    HTML: "Accessible and semantic code wouldn't be possible without this",
    CSS: 'Everybody loves CSS, with it we can be limitlessly creative with our ideas.',
    JavaScript:
      'JavaScript is the language of the web. It is the most popular language in the world, and it is used to build almost every web page on the web.',
    TypeScript:
      'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    React: 'React is a JavaScript library for building user interfaces.',
    Redux: 'Redux is a predictable state container for JavaScript apps.',
    Node: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
    Express:
      'Express.js is a minimal and flexible Node.js web application framework.',
    SQL: "SQL is the world's most used programming language.",
    Git: 'Git is a distributed version control system.',
    Figma:
      'Figma is a design tool that lets you create beautiful digital products.',
    PHP: 'PHP is a widely used, open source general-purpose scripting language.',
    Python: 'Python is a widely used high-level programming language.',
    Laravel: 'Laravel is a PHP framework.',
    Linux: 'Linux is a free and open-source operating system.',
    Flask: 'Flask is a microframework for Python.',
  };

  const Icon = enumeratedIcons[children];
  return (
    <StSkill
      color={color}
      onPointerOver={() => {
        setDescription(enumeratedText[children]);
      }}
    >
      <div className='content'>
        <div className='icon'>
          <Icon size={76} color={color} />
        </div>
        <div className='name'>{children}</div>
      </div>
    </StSkill>
  );
};

export default Skill;
