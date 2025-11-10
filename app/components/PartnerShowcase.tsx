'use client';

import { Sparkles, Quote } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useLanguage } from "@/contexts/LanguageContext";

const PartnerShowcase = () => {
  const { t } = useLanguage();
  
  const partners = [
    { name: t.partnerShowcase.partner1Name, region: t.partnerShowcase.partner1Region, description: t.partnerShowcase.partner1Description },
    { name: t.partnerShowcase.partner2Name, region: t.partnerShowcase.partner2Region, description: t.partnerShowcase.partner2Description, image: "/assets/shrey-profile.jpg" },
    { name: t.partnerShowcase.partner3Name, region: t.partnerShowcase.partner3Region, description: t.partnerShowcase.partner3Description },
  ];
  
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent)/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent-secondary)/0.15),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="w-5 h-5 text-accent animate-glow" />
            <span className="text-accent font-semibold">{t.partnerShowcase.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t.partnerShowcase.title}{" "}
            <span className="bg-gradient-to-r from-accent via-[hsl(var(--accent-secondary))] to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
              {t.partnerShowcase.titleHighlight}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.partnerShowcase.subtitle}
          </p>
        </div>

        {/* Info Banner - In Aufbau */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-[hsl(var(--accent-secondary))]/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-accent/30 text-center">
              <p className="text-muted-foreground text-lg">
                <span className="text-accent font-semibold">{t.partnerShowcase.noticeLabel}</span> {t.partnerShowcase.noticeText}
              </p>
            </div>
          </div>
        </div>

        {/* Innovative Partner Grid with Glow Effects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative flex"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-[hsl(var(--accent-secondary))]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glow" />
              
              {/* Card */}
              <div className="relative w-full flex flex-col p-8 rounded-2xl bg-card/50 backdrop-blur-md border border-border/50 group-hover:border-accent/50 transition-all duration-300 group-hover:shadow-glow">
                <div className="flex flex-col items-center text-center gap-4 flex-grow">
                  {/* Profile Image or Animated Icon - Fixed Size */}
                  <div className="w-24 h-24 flex-shrink-0">
                    {partner.image ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent/50 transition-all duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-[hsl(var(--accent-secondary))]/20 group-hover:opacity-75 transition-opacity duration-300" />
                        <img 
                          src={partner.image} 
                          alt={partner.name}
                          className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-[hsl(var(--accent-secondary))]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-[hsl(var(--accent-secondary))] animate-glow" />
                      </div>
                    )}
                  </div>
                  
                  {/* Partner Name - Fixed Height */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 min-h-[2.5rem] flex items-center justify-center">
                    {index === 1 ? (
                      <>
                        {partner.name.split('SDX VISION')[0]}
                        <a 
                          href="https://sdx.vision" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-orange-500 hover:text-orange-600 underline transition-colors duration-300"
                        >
                          SDX VISION
                        </a>
                      </>
                    ) : (
                      partner.name
                    )}
                  </h3>
                  
                  {/* Region Badge - Fixed Height */}
                  <div className="min-h-[2rem] flex items-center justify-center">
                    <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
                      {partner.region}
                    </span>
                  </div>
                  
                  {/* Description - Fixed Height Area */}
                  <div className="min-h-[3rem] flex items-center justify-center flex-grow">
                    {partner.description ? (
                      <p className="text-sm text-muted-foreground">
                        {partner.description}
                      </p>
                    ) : (
                      <p className="text-sm text-muted-foreground opacity-0">
                        &nbsp;
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Leadership Section */}
        <div className="mt-20 mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-[hsl(var(--accent-secondary))]/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Content Card */}
              <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 rounded-3xl bg-card/60 backdrop-blur-md border border-accent/30 shadow-glow">
                {/* Image Side */}
                <div className="flex items-center justify-center">
                  <div className="relative">
                    {/* Image Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/40 to-[hsl(var(--accent-secondary))]/40 rounded-2xl blur-xl animate-glow" />
                    
                    {/* Image */}
                    <div className="relative rounded-2xl overflow-hidden border-2 border-accent/30 shadow-glow-accent">
                      <img 
                        src="/assets/laura-profile.jpg" 
                        alt="Laura Klara Schlevinski - Geschäftsführerin und Gesellschafterin"
                        className="w-full h-auto object-cover aspect-[3/4] md:aspect-[4/5]"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex flex-col justify-center space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                      <Sparkles className="w-4 h-4 text-accent animate-glow" />
                      <span className="text-accent text-sm font-semibold">{t.partnerShowcase.leadershipBadge}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                      {t.partnerShowcase.leadershipName}
                    </h3>
                    
                    <p className="text-xl text-accent font-semibold mb-6">
                      {t.partnerShowcase.leadershipRole}
                    </p>
                  </div>

                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      {t.partnerShowcase.leadershipBio1}
                    </p>
                    <p className="text-lg leading-relaxed">
                      {t.partnerShowcase.leadershipBio2}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
                      {t.partnerShowcase.leadershipSkill1}
                    </span>
                    <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
                      {t.partnerShowcase.leadershipSkill2}
                    </span>
                    <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
                      {t.partnerShowcase.leadershipSkill3}
                    </span>
                  </div>

                  {/* Expandable Biography Section */}
                  <Accordion type="single" collapsible className="pt-4">
                    <AccordionItem value="bio" className="border-none">
                      <AccordionTrigger className="hover:no-underline text-left py-4 px-6 rounded-xl bg-accent/5 hover:bg-accent/10 transition-all duration-300">
                        <span className="text-base font-semibold text-foreground">
                          {t.partnerShowcase.expandBioLabel}
                        </span>
                      </AccordionTrigger>
                      
                      <AccordionContent className="pt-6">
                        <div className="space-y-6 p-6 rounded-xl bg-card/30 border border-border/50">
                          {/* Quote */}
                          <div className="relative p-6 rounded-xl bg-gradient-to-br from-card via-card to-card/80 border border-border">
                            <div className="absolute top-4 left-4 text-accent/20">
                              <Quote className="h-8 w-8" />
                            </div>
                            <p className="text-base md:text-lg text-foreground/90 leading-relaxed mt-6 italic">
                              {t.about.quote}{" "}
                              <span className="font-bold text-accent">{t.about.quoteHighlight}</span>{" "}
                              {t.about.quoteEnd}
                            </p>
                          </div>

                          {/* Journey and Education */}
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Early Journey */}
                            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-[hsl(var(--accent-secondary))] flex items-center justify-center text-xl">
                                  🌍
                                </div>
                                <div>
                                  <h4 className="text-lg font-bold text-foreground mb-1">{t.about.journey.title}</h4>
                                  <div className="h-1 w-12 bg-gradient-to-r from-accent to-[hsl(var(--accent-secondary))] rounded-full" />
                                </div>
                              </div>
                              <p className="text-foreground/80 leading-relaxed text-sm">
                                {t.about.journey.description}{" "}
                                <span className="font-semibold text-accent">{t.about.journey.highlight}</span>{" "}
                                {t.about.journey.end}
                              </p>
                            </div>

                            {/* Education & Expertise */}
                            <div className="p-6 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-secondary))]/5 to-primary/5 border border-border">
                              <div className="flex items-start gap-3 mb-3">
                                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-[hsl(var(--accent-secondary))] flex items-center justify-center text-xl">
                                  🎓
                                </div>
                                <div>
                                  <h4 className="text-lg font-bold text-foreground mb-1">{t.about.education.title}</h4>
                                  <div className="h-1 w-12 bg-gradient-to-r from-primary to-[hsl(var(--accent-secondary))] rounded-full" />
                                </div>
                              </div>
                              <p className="text-foreground/80 leading-relaxed text-sm">
                                {t.about.education.description}{" "}
                                <span className="font-semibold text-primary">{t.about.education.highlight}</span>
                                {t.about.education.end}
                              </p>
                            </div>
                          </div>

                          {/* Closing Quote */}
                          <div className="text-center py-6">
                            <Quote className="h-10 w-10 text-accent/30 mx-auto mb-4" />
                            <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-accent to-[hsl(var(--accent-secondary))] bg-clip-text text-transparent leading-relaxed">
                              {t.about.closingQuote}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-md border border-accent/20">
            <p className="text-lg text-muted-foreground mb-4">
              {t.partnerShowcase.ctaText}
            </p>
            <div className="flex flex-wrap gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="w-5 h-5 animate-glow" />
                <span className="font-semibold">{t.partnerShowcase.ctaFeature1}</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-accent/50" />
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="w-5 h-5 animate-glow" />
                <span className="font-semibold">{t.partnerShowcase.ctaFeature2}</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-accent/50" />
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="w-5 h-5 animate-glow" />
                <span className="font-semibold">{t.partnerShowcase.ctaFeature3}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerShowcase;
