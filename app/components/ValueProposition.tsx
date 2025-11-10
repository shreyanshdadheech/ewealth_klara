'use client';

import Link from "next/link";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

import { useLanguage } from "@/contexts/LanguageContext";

const ValueProposition = () => {
  const { t } = useLanguage();

  const triggers = [
    {
      problem: t.triggers.trigger1Problem,
      solution: t.triggers.trigger1Solution
    },
    {
      problem: t.triggers.trigger2Problem,
      solution: t.triggers.trigger2Solution
    },
    {
      problem: t.triggers.trigger3Problem,
      solution: t.triggers.trigger3Solution
    },
    {
      problem: t.triggers.trigger4Problem,
      solution: t.triggers.trigger4Solution
    },
    {
      problem: t.triggers.trigger5Problem,
      solution: t.triggers.trigger5Solution
    },
    {
      problem: t.triggers.trigger6Problem,
      solution: t.triggers.trigger6Solution
    }
  ];

  return (
    <section id="about" className="py-12 md:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(35_85%_55%/0.05),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3 md:mb-4">
              {t.triggers.title}{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {t.triggers.titleHighlight}
              </span>
              ?
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              {t.triggers.subtitle}
            </p>
          </div>

          <div className="space-y-3 md:space-y-6">
            {triggers.map((trigger, index) => (
              <Card 
                key={index}
                className="p-4 md:p-6 hover:shadow-elegant transition-all duration-300 bg-card border-border hover:border-primary/20 group"
              >
                <div className="flex gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-0.5 md:mt-1">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Check className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-foreground mb-1 md:mb-2">
                      {trigger.problem}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      <span className="text-accent font-medium">→</span> {trigger.solution}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground shadow-elegant">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                {t.triggers.callToActionTitle}
              </h3>
              <p className="text-primary-foreground/90 mb-4 md:mb-6 text-base md:text-lg">
                {t.triggers.callToActionSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 shadow-glow hover:shadow-[0_0_80px_hsl(35_85%_55%/0.4)] transition-all duration-300"
                >
                  {t.triggers.callToActionButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
