
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAuthAction = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
        : "bg-transparent"
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold mb-2">
            <p>NMFG.PAC</p>
 

          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", id: "hero" },
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "Experience", id: "experience" },
              { name: "Contact", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline"
                  onClick={() => navigate("/dashboard")}
                  className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white transition-all duration-200"
                >
                  Dashboard
                </Button>
                <Button 
                  variant="outline"
                  onClick={logout}
                  className="transition-all duration-200"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button 
                onClick={() => navigate("/login")}
                className="bg-portfolio-primary hover:bg-portfolio-secondary text-white transition-all duration-200"
              >
                Login
              </Button>
            )}
            
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-portfolio-primary hover:bg-portfolio-secondary text-white transition-all duration-200"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
