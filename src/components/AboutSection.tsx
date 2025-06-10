
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience building scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm a full-stack developer who loves creating digital experiences that make a difference. 
              With expertise in React, Node.js, and modern web technologies, I bridge the gap between 
              design and functionality.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge through tech talks and mentoring.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-portfolio-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                alt="Developer workspace"
                className="w-full h-64 object-cover rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
