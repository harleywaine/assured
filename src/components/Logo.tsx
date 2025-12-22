interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

const Logo = ({ className = "w-40 h-12", isScrolled = false }: LogoProps) => {
  return (
    <img
      src="/Navbar Logo.svg"
      alt="Elevate Assured Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
};

export default Logo;
