import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const socialLinks = [
    { name: "GitHub", url: "https://github.com/pacifiqueCYUBAHIRO", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pacifique-cyubahiro-39a118248/", icon: <FaLinkedin /> },
    { name: "Twitter", url: "https://x.com/paccymaker", icon: <FaTwitter /> },
    { name: "Instagram", url: "https://www.instagram.com/paccy_nmfg_/", icon: <FaInstagram /> }
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">NMFG.PAC</div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-stack developer creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ name, url, icon }) => (
                <a 
                  key={name} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-portfolio-primary hover:text-white transition-colors duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Projects", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "Mobile Apps", "UI/UX Design", "Consulting"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {currentYear} NMFG.PAC All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
