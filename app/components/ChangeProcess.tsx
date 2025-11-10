'use client';

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useLanguage } from "@/contexts/LanguageContext";

const ChangeProcess = () => {
  const { t } = useLanguage();

  const processSteps = [
    {
      phase: t.changeProcess.phase1,
      title: t.changeProcess.phase1Title,
      duration: t.changeProcess.phase1Duration,
      description: t.changeProcess.phase1Description,
      deliverables: [
        t.changeProcess.phase1Deliverable1,
        t.changeProcess.phase1Deliverable2,
        t.changeProcess.phase1Deliverable3,
        t.changeProcess.phase1Deliverable4
      ]
    },
    {
      phase: t.changeProcess.phase2,
      title: t.changeProcess.phase2Title,
      duration: t.changeProcess.phase2Duration,
      description: t.changeProcess.phase2Description,
      deliverables: [
        t.changeProcess.phase2Deliverable1,
        t.changeProcess.phase2Deliverable2,
        t.changeProcess.phase2Deliverable3,
        t.changeProcess.phase2Deliverable4
      ]
    },
    {
      phase: t.changeProcess.phase3,
      title: t.changeProcess.phase3Title,
      duration: t.changeProcess.phase3Duration,
      description: t.changeProcess.phase3Description,
      deliverables: [
        t.changeProcess.phase3Deliverable1,
        t.changeProcess.phase3Deliverable2,
        t.changeProcess.phase3Deliverable3,
        t.changeProcess.phase3Deliverable4
      ]
    },
    {
      phase: t.changeProcess.phase4,
      title: t.changeProcess.phase4Title,
      duration: t.changeProcess.phase4Duration,
      description: t.changeProcess.phase4Description,
      deliverables: [
        t.changeProcess.phase4Deliverable1,
        t.changeProcess.phase4Deliverable2,
        t.changeProcess.phase4Deliverable3,
        t.changeProcess.phase4Deliverable4
      ]
    }
  ];

  return (
    <section className="py-12 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(220_70%_15%/0.03),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
            {t.changeProcess.title}{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t.changeProcess.titleHighlight}
            </span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.changeProcess.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Accordion type="multiple" className="grid lg:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="border-none"
              >
                <Card className="p-5 md:p-8 hover:shadow-elegant transition-all duration-300 bg-card border-border hover:border-accent/20 group relative overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <AccordionTrigger className="hover:no-underline [&[data-state=open]>svg]:rotate-180 py-0 pb-4">
                      <div className="flex items-center gap-3 md:gap-4 w-full">
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center font-bold text-primary-foreground shadow-lg">
                          {index + 1}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="text-sm font-medium text-accent">{step.phase}</div>
                          <h3 className="text-lg md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="pt-0">
                      <div className="mb-4">
                        <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-accent" />
                          {t.changeProcess.durationLabel} {step.duration}
                        </span>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <div className="space-y-3">
                        {step.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground text-sm">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </div>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Section */}
          <div className="mt-8 md:mt-16 text-center">
            <div className="inline-block p-6 md:p-8 rounded-2xl bg-gradient-to-br from-secondary via-secondary/95 to-secondary border border-border">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
                {t.changeProcess.ctaTitle}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl">
                {t.changeProcess.ctaSubtitle}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-8 py-4 shadow-elegant hover:shadow-glow transition-all duration-300 group"
              >
                {t.changeProcess.ctaButton}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangeProcess;
