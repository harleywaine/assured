interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

const Logo = ({ className = "w-40 h-12", isScrolled = false }: LogoProps) => {
  const textColor = isScrolled ? "#1C374B" : "#ffffff";
  
  return (
    <svg
      className={className}
      viewBox="0 0 500 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Simple logomark: Minimal roof shape */}
      <path 
        d="M15 60L42 33L69 60" 
        stroke={textColor} 
        strokeWidth="7" 
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Text: Elevate Assured - Bigger */}
      <text 
        x="85" 
        y="66" 
        fill={textColor}
        fontSize="56"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-0.3"
      >
        Elevate Assured
      </text>
    </svg>
  );
};

export default Logo;
