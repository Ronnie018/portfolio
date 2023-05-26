const HamburguerMenu = ({
  onClick,
  size,
  color = '#009BB0',
  lines = '#C8C8C8',
  line_width = 2,
  className,
}) => {
  return (
    <div onClick={onClick} className={className}>
      <svg
        width={size}
        height={size}
        viewBox='0 0 42 42'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect width={size} height={size} fill={color} />
        <path
          d='M10 20.9736H32'
          stroke={lines}
          strokeWidth={line_width}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10 12.9819H32'
          stroke={lines}
          strokeWidth={line_width}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10 28.9651H32'
          stroke={lines}
          strokeWidth={line_width}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
};

export default HamburguerMenu;
