'use client';

import { useState } from "react";
import { Globe, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const languages = [
    { code: "de" as const, name: "Deutsch", flag: "🇩🇪" },
    { code: "en" as const, name: "English", flag: "🇬🇧" },
    { code: "es" as const, name: "Español", flag: "🇪🇸" },
    { code: "tr" as const, name: "Türkçe", flag: "🇹🇷" },
  ];

  const navLinks = [
    { href: "/#about", label: t.nav.menu.about },
    { href: "/#services", label: t.nav.menu.services },
    { href: "/datenschutz", label: t.nav.menu.privacy },
    { href: "/agb", label: t.nav.menu.terms },
    { href: "/contact", label: t.nav.menu.contact },
  ];

  const currentLang = languages.find((item) => item.code === language);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <a href="/" className="text-sm font-semibold tracking-wide text-foreground sm:text-base">
          {t.nav.brand}
        </a>

        <div className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 bg-background">
                <Globe className="h-4 w-4" />
                <span className="text-lg">{currentLang?.flag}</span>
                <span className="hidden sm:inline">{currentLang?.name}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`cursor-pointer gap-3 ${language === lang.code ? "bg-accent/10 text-foreground" : ""}`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <DropdownMenu open={mobileOpen} onOpenChange={setMobileOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="border-border text-foreground/80">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem className="cursor-default font-semibold" disabled>
                {t.nav.brand}
              </DropdownMenuItem>
              {navLinks.map((item) => (
                <DropdownMenuItem key={item.href} asChild className="cursor-pointer">
                  <a href={item.href}>{item.label}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 bg-background">
                <Globe className="h-4 w-4" />
                <span className="text-base">{currentLang?.flag}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`cursor-pointer gap-3 ${language === lang.code ? "bg-accent/10 text-foreground" : ""}`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
