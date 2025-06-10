
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Cross-browser Compatible"]
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["React Native", "Flutter", "Progressive Web Apps", "App Store Optimization"]
    },
    {
      title: "Backend Development",
      description: "Scalable server-side solutions and API development",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security Implementation"]
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance digital experiences",
      features: ["Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      title: "Consulting",
      description: "Technical consulting and code reviews to improve your projects",
      features: ["Code Review", "Architecture Planning", "Performance Audit", "Team Training"]
    },
    {
      title: "Maintenance",
      description: "Ongoing support and maintenance for your digital products",
      features: ["Bug Fixes", "Feature Updates", "Security Patches", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold group-hover:text-portfolio-primary transition-colors duration-200">
                  {service.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-portfolio-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
