'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.faq.title}
            </h2>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="vision" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {t.faq.q1}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">
                {t.faq.a1}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technology" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {t.faq.q2}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">
                {t.faq.a2}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="economy" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {t.faq.q3}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">
                {t.faq.a3}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="needed" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {t.faq.q4}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">
                {t.faq.a4}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="why-us" className="border border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary">
                {t.faq.q5}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed">
                {t.faq.a5}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
