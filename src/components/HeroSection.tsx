
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Greeting */}
          <div className="animate-slide-up text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Pacifique CYUBAHIRO</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Full-Stack Developer crafting beautiful, functional, and user-centered digital experiences
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button 
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-portfolio-primary hover:bg-portfolio-secondary text-white px-8 py-3 text-lg transition-all duration-200"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white px-8 py-3 text-lg transition-all duration-200"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Right side - Profile Picture */}
          <div className="animate-float flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-portfolio-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-portfolio-secondary/20 rounded-full blur-xl"></div>
              
              {/* Profile picture container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-portfolio-primary/30 shadow-2xl bg-gradient-to-br from-portfolio-primary/10 to-portfolio-secondary/10 p-2">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/50">
                  <img 
                    src="/lovable-uploads/1f404858-a324-4b22-89a8-86f39b790b68.png" 
                    alt="Pacifique CYUBAHIRO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
