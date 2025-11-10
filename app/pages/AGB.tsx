'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const AGB = () => {
  const { language } = useLanguage();
  const pageTitles: Record<'de'|'en'|'es'|'tr', string> = {
    de: "Allgemeine Geschäftsbedingungen",
    en: "Terms and Conditions",
    es: "Términos y Condiciones",
    tr: "Şartlar ve Koşullar",
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{pageTitles[language]}</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/80">
            <p className="text-sm italic mb-8">
              für die Erbringung von Dienstleistungen von EWealth Management GmbH, Am Brambusch 24, 44536 Lünen, 
              E-Mail: info@ewealth-management.de (nachfolgend „Auftragnehmer") gegenüber seinen Kunden (nachfolgend „Auftraggeber")
            </p>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">1. Allgemeines</h2>
              <p className="mb-3">
                <strong>1.1</strong> Diese Allgemeinen Geschäftsbedingungen (AGB) für die Erbringung von Dienstleistungen 
                gelten für Verträge, die zwischen dem Auftraggeber und dem Auftragnehmer unter Einbeziehung dieser AGB 
                geschlossen werden.
              </p>
              <p className="mb-3">
                <strong>1.2</strong> Der Auftragnehmer schließt keine Verträge mit Verbrauchern bzw. Privatpersonen.
              </p>
              <p className="mb-3">
                <strong>1.3</strong> Der Auftragnehmer ist berechtigt, in eigenem Namen und auf eigene Rechnung die 
                erforderlichen Leistungen an Subunternehmer zu vergeben, die ihrerseits ebenfalls Subunternehmer einsetzen 
                dürfen. Der Auftragnehmer bleibt hierbei alleiniger Vertragspartner des Auftraggebers. Der Einsatz von 
                Subunternehmern erfolgt nicht, wenn für den Auftragnehmer ersichtlich ist, dass deren Einsatz berechtigten 
                Interessen des Auftraggebers zuwiderläuft.
              </p>
              <p className="mb-3">
                <strong>1.4</strong> Soweit neben diesen AGB weitere Vertragsdokumente oder andere Geschäftsbedingungen in 
                Text- oder Schriftform Vertragsbestandteil geworden sind, gehen die Regelungen dieser weiteren 
                Vertragsdokumente im Widerspruchsfalle den vorliegenden AGB vor.
              </p>
              <p className="mb-3">
                <strong>1.5</strong> Von diesen Geschäftsbedingungen abweichende AGB, die durch den Auftraggeber verwendet 
                werden, erkennt Auftragnehmer – vorbehaltlich einer ausdrücklichen Zustimmung – nicht an.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">2. Vertragsgegenstand und Leistungsumfang</h2>
              <p className="mb-3">
                <strong>2.1</strong> Der Auftragnehmer erbringt als selbständiger Unternehmer folgende Leistungen gegenüber 
                dem Auftraggeber:
              </p>
              <p className="mb-3 ml-6">
                Unternehmensberatung und Vermittlung von Internationalen KI-getriebenen Prozessen
              </p>
              <p className="mb-3">
                <strong>2.2</strong> Der spezifische Leistungsumfang ist Gegenstand von Individualvereinbarungen zwischen 
                Auftragnehmer und dem Auftraggeber.
              </p>
              <p className="mb-3">
                <strong>2.3</strong> Der Auftragnehmer erbringt die vertragsgemäßen Leistungen mit größtmöglicher Sorgfalt 
                und Gewissenhaftigkeit nach dem jeweils neuesten Stand, neuesten Regeln und Erkenntnissen.
              </p>
              <p className="mb-3">
                <strong>2.4</strong> Der Auftragnehmer ist zur Erbringung der vertragsgemäß geschuldeten Leistungen 
                verpflichtet. Bei der Durchführung seiner Tätigkeit ist er jedoch etwaigen Weisungen im Hinblick auf die Art 
                der Erbringung seiner Leistungen, den Ort der Leistungserbringung ebenso wie die Zeit der Leistungserbringung 
                nicht unterworfen. Er wird jedoch bei der Einteilung der Tätigkeitstage und bei der Zeiteinteilung an diesen 
                Tagen diese selbst in der Weise festlegen, dass eine optimale Effizienz bei seiner Tätigkeit und bei der 
                Realisierung des Vertragsgegenstandes erzielt wird. Die Leistungserbringung durch den Auftragnehmer erfolgt 
                lediglich in Abstimmung und in Koordination mit dem Auftraggeber.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">3. Mitwirkungspflichten des Auftraggebers</h2>
              <p className="mb-3">
                Es obliegt dem Auftraggeber, die von ihm zum Zwecke der Leistungserfüllung zur Verfügung zu stellenden 
                Informationen, Daten und sonstigen Inhalte vollständig und korrekt mitzuteilen. Für Verzögerungen und 
                Verspätungen bei der Leistungserbringung, die durch eine verspätete und notwendige Mit- bzw. Zuarbeit des 
                Kunden entstehen, ist der Auftragnehmer gegenüber dem Kunden in keinerlei Hinsicht verantwortlich; die 
                Vorschriften unter der Überschrift „Haftung/Freistellung" bleiben hiervon unberührt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">4. Vergütung</h2>
              <p className="mb-3">
                <strong>4.1</strong> Die Vergütung wird individualvertraglich vereinbart.
              </p>
              <p className="mb-3">
                <strong>4.2</strong> Die Vergütung ist nach der Leistung der Dienste zu entrichten. Ist die Vergütung nach 
                Zeitabschnitten bemessen, so ist sie nach dem Ablauf der einzelnen Zeitabschnitte zu entrichten (§ 614 BGB). 
                Bei aufwandsbezogener Abrechnung ist der Auftragnehmer vorbehaltlich abweichender Vereinbarungen berechtigt, 
                die erbrachte Leistungen monatlich abzurechnen.
              </p>
              <p className="mb-3">
                <strong>4.3</strong> Der Auftragnehmer stellt dem Auftraggeber nach Erbringung der Leistungen eine Rechnung 
                per Post oder per E-Mail (z.B. als PDF). Die Vergütung ist innerhalb von 14 Tagen nach Zugang der Rechnung 
                zur Zahlung fällig.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">5. Haftung / Freistellung</h2>
              <p className="mb-3">
                <strong>5.1</strong> Der Auftragnehmer haftet aus jedem Rechtsgrund uneingeschränkt bei Vorsatz oder grober 
                Fahrlässigkeit, bei vorsätzlicher oder fahrlässiger Verletzung des Lebens, des Körpers oder der Gesundheit, 
                aufgrund eines Garantieversprechens, soweit diesbezüglich nichts anderes geregelt ist oder aufgrund 
                zwingender Haftung. Verletzt der Auftragnehmer fahrlässig eine wesentliche Vertragspflicht, ist die Haftung 
                auf den vertragstypischen, vorhersehbaren Schaden begrenzt, sofern nicht gemäß vorstehendem Satz unbeschränkt 
                gehaftet wird. Wesentliche Vertragspflichten sind Pflichten, die der Vertrag dem Auftragnehmer nach seinem 
                Inhalt zur Erreichung des Vertragszwecks auferlegt, deren Erfüllung die ordnungsgemäße Durchführung des 
                Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf. Im Übrigen 
                ist eine Haftung des Auftragnehmers ausgeschlossen. Vorstehende Haftungsregelungen gelten auch im Hinblick 
                auf die Haftung des Auftragnehmers für seine Erfüllungsgehilfen und gesetzlichen Vertreter.
              </p>
              <p className="mb-3">
                <strong>5.2</strong> Der Auftraggeber stellt den Auftragnehmer von jeglichen Ansprüchen Dritter frei, die 
                gegen den Auftragnehmer aufgrund von Verstößen des Kunden gegen diese Vertragsbedingungen oder gegen 
                geltendes Recht geltend gemacht werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">6. Vertragsdauer und Kündigung</h2>
              <p className="mb-3">
                <strong>6.1</strong> Die Vertragsdauer und die Fristen zur ordentlichen Kündigung vereinbaren die Parteien 
                individuell.
              </p>
              <p className="mb-3">
                <strong>6.2</strong> Das Recht beider Parteien zur fristlosen Kündigung aus wichtigem Grund bleibt unberührt.
              </p>
              <p className="mb-3">
                <strong>6.3</strong> Der Auftragnehmer hat alle ihm überlassenen Unterlagen und sonstigen Inhalte nach 
                Vertragsbeendigung unverzüglich nach Wahl des Kunden zurückzugeben oder zu vernichten. Die Geltendmachung 
                eines Zurückbehaltungsrechts daran ist ausgeschlossen. Elektronische Daten sind vollständig zu löschen. 
                Ausgenommen davon sind Unterlagen und Daten, hinsichtlich derer eine längere gesetzliche Aufbewahrungspflicht 
                besteht, jedoch nur bis zum Ende der jeweiligen Aufbewahrungsfrist. Der Auftragnehmer hat dem Unternehmen auf 
                dessen Verlangen die Löschung schriftlich zu bestätigen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">7. Vertraulichkeit und Datenschutz</h2>
              <p className="mb-3">
                <strong>7.1</strong> Der Auftragnehmer wird alle ihm im Zusammenhang mit dem Auftrag zur Kenntnis gelangenden 
                Vorgänge streng vertraulich behandeln. Der Auftragnehmer verpflichtet sich, die Geheimhaltungspflicht 
                sämtlichen Angestellten und / oder Dritten, die Zugang zu den vertragsgegenständlichen Informationen haben, 
                aufzuerlegen. Die Geheimhaltungspflicht gilt zeitlich unbegrenzt über die Dauer dieses Vertrages hinaus.
              </p>
              <p className="mb-3">
                <strong>7.2</strong> Der Auftragnehmer verpflichtet sich, bei der Durchführung des Auftrags sämtliche 
                datenschutzrechtlichen Vorschriften – insbesondere die Vorschriften der Datenschutzgrundverordnung und des 
                Bundesdatenschutzgesetzes – einzuhalten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 mt-8">8. Schlussbestimmungen</h2>
              <p className="mb-3">
                <strong>8.1</strong> Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des CISG.
              </p>
              <p className="mb-3">
                <strong>8.2</strong> Sollte eine Bestimmung dieser AGB unwirksam sein oder werden, so wird die Gültigkeit der 
                AGB im Übrigen hiervon nicht berührt.
              </p>
              <p className="mb-3">
                <strong>8.3</strong> Der Auftraggeber wird den Auftragnehmer bei der Erbringung seiner vertragsgemäßen 
                Leistungen durch angemessene Mitwirkungshandlungen, soweit erforderlich, fördern. Der Auftraggeber wird 
                insbesondere dem Auftragnehmer die zur Erfüllung des Auftrags erforderlichen Informationen und Daten zur 
                Verfügung stellen.
              </p>
              <p className="mb-3">
                <strong>8.4</strong> Sofern der Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts oder 
                öffentlich-rechtliches Sondervermögen ist oder keinen allgemeinen Gerichtsstand in Deutschland hat, 
                vereinbaren die Parteien den Sitz des Auftragnehmers als Gerichtsstand für sämtliche Streitigkeiten aus 
                diesem Vertragsverhältnis; ausschließliche Gerichtsstände bleiben hiervon unberührt.
              </p>
              <p className="mb-3">
                <strong>8.5</strong> Der Auftragnehmer ist berechtigt, diese AGB aus sachlich gerechtfertigten Gründen (z. B. 
                Änderungen in der Rechtsprechung, Gesetzeslage, Marktgegebenheiten oder der Geschäfts- oder 
                Unternehmensstrategie) und unter Einhaltung einer angemessenen Frist zu ändern. Bestandskunden werden hierüber 
                spätestens zwei Wochen vor Inkrafttreten der Änderung per E-Mail benachrichtigt. Sofern der Bestandskunde 
                nicht innerhalb der in der Änderungsmitteilung gesetzten Frist widerspricht, gilt seine Zustimmung zur 
                Änderung als erteilt. Widerspricht er, treten die Änderungen nicht in Kraft; Auftragnehmer ist in diesem Fall 
                berechtigt, den Vertrag zum Zeitpunkt des Inkrafttretens der Änderung außerordentlich zu kündigen. Die 
                Benachrichtigung über die beabsichtigte Änderung dieser AGB wird auf die Frist und die Folgen des Widerspruchs 
                oder seines Ausbleibens hinweisen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
