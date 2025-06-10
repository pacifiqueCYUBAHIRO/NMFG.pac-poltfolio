
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah K.",
      role: "CEO, TechStartup",
      content: "Pacifique delivered an exceptional web application that exceeded our expectations. The attention to detail and technical expertise was outstanding.",
      image: "https://images.unsplash.com/photo-1664575601786-b00156752b61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJ1c2luZXNzfGVufDB8fDB8fHww"
    },
    {
      name: "Mike R.",
      role: "Product Manager, InnovaCorp",
      content: "Working with Pacifique was a game-changer for our project. Fast delivery, clean code, and excellent communication throughout the process.",
      image: "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJ1c2luZXNzfGVufDB8fDB8fHww"
    },
    {
      name: "Emily UMUTESI",
      role: "Founder, Creative Agency",
      content: "Pacifique transformed our design concepts into a beautiful, functional website. The collaboration was seamless and the results were perfect.",
      image: "https://plus.unsplash.com/premium_photo-1664298350269-dcc183a64603?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwcGVvcGxlJTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Feedback from clients I've had the pleasure to work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-2xl text-portfolio-primary mb-4">"</div>
                  <p className="text-muted-foreground italic mb-6">
                    {testimonial.content}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
