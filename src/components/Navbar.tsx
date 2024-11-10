import { Link, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const Navigation = () => {
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Projects", href: "/projects" },
  ];

  const renderNavItems = () => {
    return navItems.map((item) => (
      <Link
      key={item.label}
      to={item.href}
      className={`
        relative py-2 group 
        text-black hover:text-pinkish 
        transition-colors duration-300 mr-6
        ${location.pathname === item.href ? 'text-pinkish' : ''}
      `}
    >
      <span className="relative z-10">
        {item.label}
      </span>
      <span className={`
          absolute bottom-0 left-0 w-0 h-0.5 
          bg-pinkish
          group-hover:w-full
          transition-all duration-300 ease-out
          ${location.pathname === item.href ? 'w-full' : ''}
        `} />
      </Link>

    ));
  };
  const renderSkipNavigation = () => {
    return (
      <Link to="#main-content" className="sr-only focus:not-sr-only
      focus:absolute focus:top-8 focus:left-4">
        Skip to main content
      </Link>
    );
  };

  return (
    <nav className="flex justify-between items-center p-4 mt-4">
      {renderSkipNavigation()}
      <div>{renderNavItems()}</div>
    </nav>
  );
};
export default Navigation;
