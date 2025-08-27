import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../assets/logo.png";

export default function Header() {
  const [active, setActive] = useState("#hero");
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
      const sections = ["hero", "about", "services", "portfolio", "contact"];
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 120;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(`#${id}`);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scroll ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center py-1 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Neuronix Logo" className="h-10 md:h-12" />
        </div>

        {/* Desktop Menu (lg+) */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6 font-medium">
            {["hero", "about", "services", "portfolio", "contact"].map(
              (link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className={`relative transition-all hover:text-[#f39c12] ${
                      active === `#${link}`
                        ? "text-[#f39c12] font-semibold after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#f39c12]"
                        : ""
                    }`}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile / Tablet Menu Button (lg-) */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-2xl p-2 rounded-md transition ${
              menuOpen ? "bg-[#f39c12] text-white" : "bg-white text-gray-800 hover:bg-[#f39c12] hover:text-white"
            } focus:outline-none`}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu (lg-) */}
      <nav
        className={`lg:hidden bg-white shadow-lg transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 py-6">
          {["hero", "about", "services", "portfolio", "contact"].map(
            (link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className={`text-lg font-medium transition hover:text-white ${
                    active === `#${link}` ? "text-[#f39c12]" : "text-gray-800"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
