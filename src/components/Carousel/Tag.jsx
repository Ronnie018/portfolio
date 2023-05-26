const dispatchColor = (name) => {
  switch (name.toLowerCase()) {
    case 'python':
      return {
        bg: '#2b5b84',
        color: '#e4e4e4',
      };
    case 'javascript':
      return {
        bg: '##fcdc00',
        color: '#000',
      };
    case 'react':
      return {
        bg: '#0074a6',
        color: '#fff',
      };
    case 'scss':
      return {
        bg: '#ca2485',
        color: '#ffffff',
      };
    case 'tesseract':
      return {
        bg: '#61c416',
        color: '#fcffde',
      };
    case 'flask':
      return {
        bg: '#303030',
        color: '#fff',
      };
    case 'gun':
      return {
        bg: '#d51243',
        color: '#000',
      };
    case 'astro':
      return {
        bg: '#d47a1a',
        color: '#000',
      };
    case 'ruby on rails':
      return {
        bg: '#960d0d',
        color: '#ffffff',
      };
    case 'mysql':
      return {
        bg: '#008080',
        color: '#fff',
      };
    case 'bootstrap':
      return {
        bg: '#5e1e9d',
        color: '#ffffff',
      };
    case 'typescript':
      return {
        bg: '#3178c6',
        color: '#fff',
      };
    case 'tailwind':
      return {
        bg: '#1ab2d4',
        color: '#fff',
      };
    case 'next':
      return {
        bg: '#ffffff',
        color: '#000000',
      };
    case 'node':
      return {
        bg: '#026e00',
        color: '#ffffff',
      };

    default:
      return { bg: '#1ab2d4', color: '#000' };
  }
};

const Tag = ({ children }) => {
  const { bg, color } = dispatchColor(children);
  return <span style={{ backgroundColor: bg, color: color }}>{children}</span>;
};

export default Tag;
