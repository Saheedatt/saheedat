import { Link } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const Navigation = () => {
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
        className="text-gray-700 hover:text-blue-500 mr-6"
      >
        {item.label}
      </Link>
    ));
  };
  const renderSkipNavigation = () => {
    return (
      <Link to="#main-content" className="sr-only focus:not-sr-only">
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
