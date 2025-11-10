'use client';

import { Award, Target, Briefcase, Globe2 } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const TrustSection = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Globe2,
      value: "5+",
      label: t.trustSection.stat1Label,
      description: t.trustSection.stat1Description
    },
    {
      icon: Target,
      value: "30+",
      label: t.trustSection.stat2Label,
      description: t.trustSection.stat2Description
    },
    {
      icon: Briefcase,
      value: "100%",
      label: t.trustSection.stat3Label,
      description: t.trustSection.stat3Description
    },
    {
      icon: Award,
      value: "Top",
      label: t.trustSection.stat4Label,
      description: t.trustSection.stat4Description
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-primary via-primary/95 to-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(35_85%_55%/0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.trustSection.title}{" "}
            <span className="text-accent">
              {t.trustSection.titleHighlight}
            </span>
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {t.trustSection.subtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 border-2 border-accent/20 mb-4 group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-5xl font-bold mb-2 text-accent">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-primary-foreground/80 text-sm">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {t.trustSection.whyTrustTitle}
            </h3>
            <p className="text-center text-primary-foreground/90 mb-8 text-lg">
              {t.trustSection.whyTrustSubtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">{t.trustSection.feature1Title}</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    {t.trustSection.feature1Description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">{t.trustSection.feature2Title}</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    {t.trustSection.feature2Description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">{t.trustSection.feature3Title}</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    {t.trustSection.feature3Description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                <div>
                  <h4 className="font-semibold mb-1">{t.trustSection.feature4Title}</h4>
                  <p className="text-primary-foreground/80 text-sm">
                    {t.trustSection.feature4Description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
