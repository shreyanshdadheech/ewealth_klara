'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const Impressum = () => {
  const { language } = useLanguage();
  const pageTitles: Record<'de'|'en'|'es'|'tr', string> = {
    de: "Impressum",
    en: "Legal Notice",
    es: "Aviso Legal",
    tr: "Künye",
  };
  const content = {
    de: {
      headingAddress: "Angaben gemäß § 5 TMG",
      company: "EWealth Management GmbH",
      street1: "Am Brambusch 24",
      street2: "Gebäude 44",
      zipCity: "44536 Lünen",
      tradeRegLabel: "Handelsregister:",
      tradeReg: "HRB 37116",
      courtLabel: "Registergericht:",
      court: "Dortmund",
      representedBy: "Vertreten durch:",
      representative: "Laura Klara Schlevinski",
      contact: "Kontakt",
      phone: "Telefon: +49 176 61549306",
      fax: "Telefax: +49 (0) 123 44 55 99",
      email: "E-Mail: info@ewealth-management.de",
      insuranceHeading: "Angaben zur Berufs­haftpflicht­versicherung",
      insurerNameSeat: "Name und Sitz des Versicherers:",
      insurer: "ARAG",
      insurerStreet: "Pretzfelder Str. 15",
      insurerZip: "90425",
      insuranceScope: "Geltungsraum der Versicherung:",
      insuranceScopeValue: "Deutschland",
      consumerHeading: "Verbraucher­streit­beilegung/Universal­schlichtungs­stelle",
      consumerText:
        "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
    },
    en: {
      headingAddress: "Information pursuant to § 5 TMG (German Telemedia Act)",
      company: "EWealth Management GmbH",
      street1: "Am Brambusch 24",
      street2: "Building 44",
      zipCity: "44536 Lünen, Germany",
      tradeRegLabel: "Commercial Register:",
      tradeReg: "HRB 37116",
      courtLabel: "Register Court:",
      court: "Dortmund",
      representedBy: "Represented by:",
      representative: "Laura Klara Schlevinski",
      contact: "Contact",
      phone: "Phone: +49 176 61549306",
      fax: "Fax: +49 (0) 123 44 55 99",
      email: "Email: info@ewealth-management.de",
      insuranceHeading: "Professional liability insurance",
      insurerNameSeat: "Name and registered office of the insurer:",
      insurer: "ARAG",
      insurerStreet: "Pretzfelder Str. 15",
      insurerZip: "90425",
      insuranceScope: "Territorial scope of insurance:",
      insuranceScopeValue: "Germany",
      consumerHeading: "Consumer dispute resolution / universal arbitration body",
      consumerText:
        "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
    },
    es: {
      headingAddress: "Información conforme al § 5 TMG (Ley alemana de telemedios)",
      company: "EWealth Management GmbH",
      street1: "Am Brambusch 24",
      street2: "Edificio 44",
      zipCity: "44536 Lünen, Alemania",
      tradeRegLabel: "Registro Mercantil:",
      tradeReg: "HRB 37116",
      courtLabel: "Juzgado de Registro:",
      court: "Dortmund",
      representedBy: "Representada por:",
      representative: "Laura Klara Schlevinski",
      contact: "Contacto",
      phone: "Teléfono: +49 176 61549306",
      fax: "Fax: +49 (0) 123 44 55 99",
      email: "Correo: info@ewealth-management.de",
      insuranceHeading: "Seguro de responsabilidad profesional",
      insurerNameSeat: "Nombre y domicilio de la aseguradora:",
      insurer: "ARAG",
      insurerStreet: "Pretzfelder Str. 15",
      insurerZip: "90425",
      insuranceScope: "Ámbito territorial del seguro:",
      insuranceScopeValue: "Alemania",
      consumerHeading: "Resolución de litigios de consumo / organismo de conciliación",
      consumerText:
        "No estamos dispuestos ni obligados a participar en procedimientos de resolución de conflictos ante un organismo de conciliación para consumidores.",
    },
    tr: {
      headingAddress: "§ 5 TMG (Alman Telemedya Yasası) uyarınca bilgiler",
      company: "EWealth Management GmbH",
      street1: "Am Brambusch 24",
      street2: "Bina 44",
      zipCity: "44536 Lünen, Almanya",
      tradeRegLabel: "Ticaret Sicili:",
      tradeReg: "HRB 37116",
      courtLabel: "Kayıt Mahkemesi:",
      court: "Dortmund",
      representedBy: "Temsil eden:",
      representative: "Laura Klara Schlevinski",
      contact: "İletişim",
      phone: "Telefon: +49 176 61549306",
      fax: "Faks: +49 (0) 123 44 55 99",
      email: "E-posta: info@ewealth-management.de",
      insuranceHeading: "Mesleki sorumluluk sigortası",
      insurerNameSeat: "Sigortacının adı ve merkez adresi:",
      insurer: "ARAG",
      insurerStreet: "Pretzfelder Str. 15",
      insurerZip: "90425",
      insuranceScope: "Sigortanın coğrafi kapsamı:",
      insuranceScopeValue: "Almanya",
      consumerHeading: "Tüketici uyuşmazlık çözümü / genel tahkim kurumu",
      consumerText:
        "Bir tüketici tahkim kurumu nezdindeki uyuşmazlık çözüm süreçlerine katılmaya ne istekli ne de zorunluyuz.",
    },
  } as const;
  const t = content[language];
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{pageTitles[language]}</h1>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.headingAddress}</h2>
            <p className="mb-2">{t.company}</p>
            <p className="mb-2">{t.street1}</p>
            <p className="mb-2">{t.street2}</p>
            <p className="mb-4">{t.zipCity}</p>
            
            <p className="mb-2"><strong>{t.tradeRegLabel}</strong> {t.tradeReg}</p>
            <p className="mb-2"><strong>{t.courtLabel}</strong> {t.court}</p>
            
            <p className="mt-4"><strong>{t.representedBy}</strong></p>
            <p>{t.representative}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.contact}</h2>
            <p className="mb-2">{t.phone}</p>
            <p className="mb-2">{t.fax}</p>
            <p className="mb-2">{t.email}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.insuranceHeading}</h2>
            <p className="mb-2"><strong>{t.insurerNameSeat}</strong></p>
            <p className="mb-2">{t.insurer}</p>
            <p className="mb-2">{t.insurerStreet}</p>
            <p className="mb-4">{t.insurerZip}</p>
            
            <p className="mb-2"><strong>{t.insuranceScope}</strong></p>
            <p>{t.insuranceScopeValue}</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{t.consumerHeading}</h2>
            <p>{t.consumerText}</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
