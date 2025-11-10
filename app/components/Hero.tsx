'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookingDialog } from "@/components/BookingDialog";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-24 pb-12 md:pb-16">
      {/* Orange Globe Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full bg-orange-500/15 blur-3xl" />
      </div>

      {/* Left Side Tech Pattern */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-0 pointer-events-none opacity-30">
        <div className="relative h-full w-full">
          {/* Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Animated Circuit Paths */}
            <path
              d="M20 50 L80 100 L40 180 L100 240 L30 320 L90 380 L50 460 L110 520 L40 600 L100 660 L60 740"
              stroke="url(#orangeGradient)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
            <path
              d="M60 80 L120 140 L80 220 L140 280 L70 360 L130 420 L90 500 L150 560 L80 640 L140 700"
              stroke="url(#orangeGradient)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            {/* Tech Nodes */}
            <circle cx="20" cy="50" r="4" fill="rgb(249, 115, 22)" className="animate-ping" />
            <circle cx="100" cy="240" r="3" fill="rgb(249, 115, 22)" className="animate-ping" style={{ animationDelay: '1s' }} />
            <circle cx="30" cy="320" r="3.5" fill="rgb(249, 115, 22)" className="animate-ping" style={{ animationDelay: '1.5s' }} />
            <circle cx="110" cy="520" r="4" fill="rgb(249, 115, 22)" className="animate-ping" style={{ animationDelay: '2s' }} />
            <circle cx="60" cy="740" r="3" fill="rgb(249, 115, 22)" className="animate-ping" style={{ animationDelay: '2.5s' }} />
          </svg>
          {/* Floating Tech Elements */}
          <div className="absolute top-20 left-8 w-12 h-12 border-2 border-orange-500/40 rounded rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
          <div className="absolute top-60 left-12 w-8 h-8 border-2 border-orange-500/30 rounded-full animate-pulse" />
          <div className="absolute bottom-40 left-6 w-16 h-16 border-2 border-orange-500/20 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Right Side Tech Pattern */}
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 lg:w-64 z-0 pointer-events-none opacity-30">
        <div className="relative h-full w-full">
          {/* Circuit Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="orangeGradientRight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Animated Circuit Paths */}
            <path
              d="M180 50 L120 100 L160 180 L100 240 L170 320 L110 380 L150 460 L90 520 L160 600 L100 660 L140 740"
              stroke="url(#orangeGradientRight)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.3s' }}
            />
            <path
              d="M140 80 L80 140 L120 220 L60 280 L130 360 L70 420 L110 500 L50 560 L120 640 L60 700"
              stroke="url(#orangeGradientRight)"
              strokeWidth="1.5"
              fill="none"
              className="animate-pulse"
              style={{ animationDelay: '0.8s' }}
            />
            {/* Tech Nodes */}
            <circle cx="180" cy="50" r="4" fill="rgb(249, 115, 22)" className="animate-ping" style={{ animationDelay: '0.5s' }} />
            <circle cx="100" cy="240" r="3" fill="rgb(249, 115, 22)" className="animate-ping" style={{ animationDelay: '1.5s' }} />
            <circle cx="170" cy="320" r="3.5" fill="rgb(249, 115, 22)" className="animate-ping" style={{ animationDelay: '2s' }} />
            <circle cx="90" cy="520" r="4" fill="rgb(249, 115, 22)" className="animate-ping" style={{ animationDelay: '2.5s' }} />
            <circle cx="140" cy="740" r="3" fill="rgb(249, 115, 22)" className="animate-ping" style={{ animationDelay: '3s' }} />
          </svg>
          {/* Floating Tech Elements */}
          <div className="absolute top-32 right-8 w-10 h-10 border-2 border-orange-500/40 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
          <div className="absolute top-80 right-12 w-6 h-6 border-2 border-orange-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-32 right-6 w-14 h-14 border-2 border-orange-500/20 rounded rotate-12 animate-pulse" style={{ animationDelay: '1.5s' }} />
          {/* Data Stream Effect */}
          <div className="absolute top-1/2 right-16 w-1 h-32 bg-gradient-to-b from-transparent via-orange-500/40 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Content - Centered and Symmetrical */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="mb-2 md:mb-3 inline-block animate-slide-in-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-card/40 backdrop-blur-md px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-semibold border border-accent/30">
              <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-accent animate-glow" />
              <span className="text-accent">
                {t.hero.badge}
              </span>
              <Globe className="h-3 w-3 md:h-4 md:w-4 text-accent animate-glow" />
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="mb-4 md:mb-5 lg:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight animate-slide-in-up px-2">
            {t.hero.title}{" "}
            <span className="text-accent block sm:inline">
              {t.hero.titleHighlight}
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="mb-6 md:mb-8 lg:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-in-up px-4" style={{ animationDelay: '0.2s' }}>
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-10 lg:mb-12 justify-center animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
            <BookingDialog>
              <Button 
                size="lg" 
                className="group bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 md:px-10 py-6 md:py-7 text-base md:text-lg transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  {t.hero.cta}
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </BookingDialog>
          </div>

          {/* Trust Indicators (after CTA) */}
          <div className="flex flex-wrap gap-6 md:gap-8 justify-center mt-4 md:mt-6 lg:mt-8 animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="px-5 md:px-6 py-3 md:py-4 rounded-2xl bg-card/20 backdrop-blur-md border border-border">
              <div className="flex items-center gap-3">
                <span className="text-xl md:text-2xl">⭐</span>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-accent">
                    100%
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-medium">{t.hero.trustLabel}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Info */}
          <p className="mt-4 md:mt-6 lg:mt-8 text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-up px-4" style={{ animationDelay: '0.8s' }}>
            {t.hero.experience}
          </p>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-8 right-6 md:right-10 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-accent/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-accent animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
