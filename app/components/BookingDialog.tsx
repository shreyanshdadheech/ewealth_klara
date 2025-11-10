'use client';

import { useState } from "react";
import { format } from "date-fns";
import { de, enUS, es, tr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BookingDialogProps {
  children: React.ReactNode;
}

export const BookingDialog = ({ children }: BookingDialogProps) => {
  const [dateValue, setDateValue] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const { language, t } = useLanguage();

  const dateLocales = {
    de: de,
    en: enUS,
    es: es,
    tr: tr,
  };

  const currentLocale = dateLocales[language];

  // Convert date string to Date object for formatting
  const date = dateValue ? new Date(dateValue) : undefined;
  
  // Get minimum date (today)
  const today = new Date();
  const minDate = today.toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !name || !email) {
      toast({
        title: t.booking.errorTitle,
        description: t.booking.errorRequired,
        variant: "destructive",
      });
      return;
    }

    try {
      const formattedDate = format(date, "PPP", { locale: currentLocale });
      
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          date: formattedDate,
          message,
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      toast({
        title: t.booking.successTitle,
        description: t.booking.successMessage.replace('{date}', formattedDate),
      });

      // Reset form and close dialog
      setDateValue("");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setOpen(false);
    } catch (error) {
      console.error("Error sending booking request:", error);
      toast({
        title: t.booking.errorTitle,
        description: t.booking.errorGeneral,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-accent to-[hsl(var(--accent-secondary))] bg-clip-text text-transparent">
            {t.booking.title}
          </DialogTitle>
          <DialogDescription>
            {t.booking.description}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Date Picker */}
          <div className="space-y-2">
            <Label htmlFor="date">{t.booking.dateLabel}</Label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              <Input
                id="date"
                name="date"
                type="date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                min={minDate}
                required
                className="pl-10"
              />
            </div>
            {date && (
              <p className="text-sm text-muted-foreground">
                {format(date, "PPP", { locale: currentLocale })}
              </p>
            )}
          </div>

          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">{t.booking.nameLabel}</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t.booking.namePlaceholder}
              required
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">{t.booking.emailLabel}</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.booking.emailPlaceholder}
              required
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">{t.booking.phoneLabel}</Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t.booking.phonePlaceholder}
            />
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message">{t.booking.messageLabel}</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.booking.messagePlaceholder}
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
          >
            {t.booking.submitButton}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
