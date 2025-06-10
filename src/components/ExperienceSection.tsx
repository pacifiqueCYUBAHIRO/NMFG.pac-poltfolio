
import { Card, CardContent } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Lead development of scalable web applications serving 100k+ users. Mentored junior developers and implemented CI/CD pipelines.",
      achievements: [
        "Reduced load times by 40% through optimization",
        "Led team of 5 developers",
        "Implemented automated testing reducing bugs by 60%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed responsive web applications using React and modern frontend technologies. Collaborated with designers to create pixel-perfect UIs.",
      achievements: [
        "Built 15+ responsive web applications",
        "Improved user engagement by 35%",
        "Established frontend best practices"
      ]
    },
    {
      title: "Junior Developer",
      company: "WebSolutions Ltd.",
      period: "2019 - 2020",
      description: "Started my professional journey working on various client projects and learning industry best practices.",
      achievements: [
        "Completed 20+ client projects",
        "Learned modern development workflows",
        "Contributed to open-source projects"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-portfolio-primary/30 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-portfolio-primary rounded-full border-4 border-background hidden md:block"></div>
                  
                  <Card className="md:ml-16 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-portfolio-primary font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full mt-2 md:mt-0 self-start">
                          {exp.period}
                        </span>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-portfolio-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
