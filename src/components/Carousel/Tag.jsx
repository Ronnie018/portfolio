const dispatchColor = (name) => {
  switch (name.toLowerCase()) {
    case 'python':
      return {
        bg: '#269d56',
        color: '#fff',
      };
    case 'javascript':
      return {
        bg: '#FFD700',
        color: '#000',
      };
    case 'react':
      return {
        bg: '#4259db',
        color: '#fff',
      };
    case 'scss':
      return {
        bg: '#00ff6e',
        color: '#000',
      };
    case 'tesseract':
      return {
        bg: '#98a05d',
        color: '#000',
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
    default:
      return { bg: '#1ab2d4', color: '#000' };
  }
};

const Tag = ({ children }) => {
  const { bg, color } = dispatchColor(children);
  return <span style={{ backgroundColor: bg, color: color }}>{children}</span>;
};

export default Tag;
