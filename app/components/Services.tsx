'use client';

import { Card } from "@/components/ui/card";
import { Globe2, TrendingUp, Users, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'change-management',
      icon: Globe2,
      title: t.services.service1.title,
      description: t.services.service1.description,
      highlights: [t.services.service1.highlight1, t.services.service1.highlight2, t.services.service1.highlight3],
    },
    {
      id: 'international-management',
      icon: Shield,
      title: t.services.service2.title,
      description: t.services.service2.description,
      highlights: [t.services.service2.highlight1, t.services.service2.highlight2, t.services.service2.highlight3],
    },
    {
      id: 'stakeholder-management',
      icon: Users,
      title: t.services.service3.title,
      description: t.services.service3.description,
      highlights: [t.services.service3.highlight1, t.services.service3.highlight2, t.services.service3.highlight3],
    },
    {
      id: 'project-management',
      icon: TrendingUp,
      title: t.services.service4.title,
      description: t.services.service4.description,
      highlights: [t.services.service4.highlight1, t.services.service4.highlight2, t.services.service4.highlight3],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            {t.services.title}
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <Accordion type="multiple" className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-none flex"
              >
                <Card id={service.id} className="w-full flex flex-col p-4 md:p-8 hover:shadow-elegant transition-all duration-300 group bg-card border-border hover:border-accent/20">
                  <div className="flex items-start gap-3 md:gap-6 flex-grow">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
                      </div>
                    </div>

                    <div className="flex-1 flex flex-col min-h-[8rem]">
                      <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180 py-0 pb-3 md:pb-4 text-left flex-shrink-0">
                        <h3 className="text-lg md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors pr-4">
                          {service.title}
                        </h3>
                      </AccordionTrigger>

                      <AccordionContent className="pt-0 flex-grow flex flex-col">
                        <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed flex-grow">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2 flex-shrink-0">
                          {service.highlights.map((highlight, idx) => (
                            <span
                              key={idx}
                              className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </AccordionContent>
                    </div>
                  </div>
                </Card>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Services;
