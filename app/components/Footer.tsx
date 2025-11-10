'use client';

import { Mail, Phone, Linkedin } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return <footer className="bg-primary text-primary-foreground py-16" id="kontakt">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {t.footer.companyTitle}
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.contactTitle}</h4>
            <div className="space-y-3">
              <a href="mailto:info@ewealth-management.de" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>info@ewealth-management.de</span>
              </a>
              <a href="tel:+4917623112985" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <span>+49 176 23112985</span>
              </a>
              <a
                href="https://www.linkedin.com/in/laura-klara-s-a025681b2/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.servicesTitle}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.service1}</li>
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.service2}</li>
              
              <li className="hover:text-accent transition-colors cursor-pointer">{t.footer.service3}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/60 text-sm">
            <p>{t.footer.rights}</p>
            <div className="flex gap-6">
              <a href="/impressum" className="hover:text-accent transition-colors">{t.footer.imprint}</a>
              <a href="/datenschutz" className="hover:text-accent transition-colors">{t.footer.privacy}</a>
              <a href="/agb" className="hover:text-accent transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;