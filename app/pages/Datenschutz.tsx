'use client';

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Allgemeine Hinweise</h3>
            <p className="mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
              aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenerfassung auf dieser Website</h3>
            <p className="font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
            <p className="mb-4">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem
              Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
            </p>

            <p className="font-semibold mb-2">Wie erfassen wir Ihre Daten?</p>
            <p className="mb-4">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten
              handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p className="mb-4">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme
              erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <p className="font-semibold mb-2">Wofür nutzen wir Ihre Daten?</p>
            <p className="mb-4">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden. Sofern über die Website Verträge geschlossen oder angebahnt
              werden können, werden die übermittelten Daten auch für Vertragsangebote, Bestellungen oder sonstige Auftragsanfragen
              verarbeitet.
            </p>

            <p className="font-semibold mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p className="mb-4">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
              verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
              für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
              zuständigen Aufsichtsbehörde zu.
            </p>
            <p className="mb-4">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.</p>

            <p className="font-semibold mb-2">Analyse-Tools und Tools von Drittanbietern</p>
            <p className="mb-4">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit
              sogenannten Analyseprogrammen.
            </p>
            <p className="mb-4">
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Hosting</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Externes Hosting</h3>
            <p className="mb-4">
              Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf
              den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta-
              und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
              Website generiert werden, handeln.
            </p>
            <p className="mb-4">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden
              (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres
              Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
              und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
              Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p className="mb-4">
              Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
              Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
            </p>
            <p className="mb-4">Wir setzen folgende(n) Hoster ein:</p>
            <p className="mb-2">Unsere Website wird über die Plattform Lovable.dev bereitgestellt. Lovable.dev wird betrieben von:</p>
            <p className="mb-2">1111B South Governors Avenue, Dover, DE 19904, USA</p>
            <p className="mb-2">E-Mail: feedback@lovable.dev</p>
            <p className="mb-4">für Datenschutz-Anfragen: privacy@lovable.dev</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenschutz</h3>
            <p className="mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
              personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
              Datenschutzerklärung.
            </p>
            <p className="mb-4">
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind
              Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche
              Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="mb-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Hinweis zur verantwortlichen Stelle</h3>
            <p className="mb-4">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="mb-2">EWealth Management GmbH</p>
            <p className="mb-2">Am Brambusch 24</p>
            <p className="mb-2">Gebäude 44</p>
            <p className="mb-4">44536 Lünen</p>
            <p className="mb-2">Telefon: +49 176 61549306</p>
            <p className="mb-4">E-Mail: info@ewealth-management.de</p>
            <p className="mb-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die
              Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Speicherdauer</h3>
            <p className="mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
              personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
              Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
              sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B.
              steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall
              dieser Gründe.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website
            </h3>
            <p className="mb-4">
              Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage
              von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1
              DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in
              Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
              Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting)
              eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung
              ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
              erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir
              Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6
              Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6
              Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
              Absätzen dieser Datenschutzerklärung informiert.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Empfänger von personenbezogenen Daten</h3>
            <p className="mb-4">
              Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise
              auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben personenbezogene
              Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung erforderlich ist, wenn wir
              gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden), wenn wir ein berechtigtes
              Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine sonstige Rechtsgrundlage die
              Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur
              auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird
              ein Vertrag über gemeinsame Verarbeitung geschlossen.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p className="mb-4">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits
              erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
              bleibt vom Widerruf unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <p className="mb-4 uppercase font-semibold">
              Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. E oder F DSGVO erfolgt, haben Sie jederzeit das
              Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen
              Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige
              Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch
              einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können
              zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
              überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
              (Widerspruch nach Art. 21 Abs. 1 DSGVO).
            </p>
            <p className="mb-4 uppercase font-semibold">
              Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit
              Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung
              einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
              widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet
              (Widerspruch nach Art. 21 Abs. 2 DSGVO).
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
            <p className="mb-4">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
              insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
              mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Recht auf Datenübertragbarkeit</h3>
            <p className="mb-4">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern
              Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
              technisch machbar ist.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Auskunft, Berichtigung und Löschung</h3>
            <p className="mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über
              Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und
              ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
              personenbezogene Daten können Sie sich jederzeit an uns wenden.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Recht auf Einschränkung der Verarbeitung</h3>
            <p className="mb-4">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können
              Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel
                Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die
                Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li>
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung
                von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li>
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren
                Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>
            <p className="mb-4">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
              abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum
              Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen
              Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Cookies</h3>
            <p className="mb-4">
              Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät
              keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft
              (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht.
              Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung
              durch Ihren Webbrowser erfolgt.
            </p>
            <p className="mb-4">
              Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies).
              Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten
              (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p className="mb-4">
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne
              diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur
              Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
            </p>
            <p className="mb-4">
              Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
              erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des
              Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert,
              sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung
              von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung
              zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG); die Einwilligung ist
              jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im
              Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische
              Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität
              dieser Website eingeschränkt sein.
            </p>
            <p className="mb-4">
              Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Kontaktformular</h3>
            <p className="mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von
              Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
              eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen
              (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die
              Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener
              Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Anfrage per E-Mail, Telefon oder Telefax</h3>
            <p className="mb-4">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung
              eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen
              (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die
              Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener
              Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen –
              bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Kommunikation via WhatsApp</h3>
            <p className="mb-4">
              Für die Kommunikation mit unseren Kunden und sonstigen Dritten nutzen wir unter anderem den Instant-Messaging-Dienst
              WhatsApp. Anbieter ist die WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland.
            </p>
            <p className="mb-4">
              Die Kommunikation erfolgt über eine Ende-zu-Ende-Verschlüsselung (Peer-to-Peer), die verhindert, dass WhatsApp oder
              sonstige Dritte Zugriff auf die Kommunikationsinhalte erlangen können. WhatsApp erhält jedoch Zugriff auf Metadaten, die im
              Zuge des Kommunikationsvorgangs entstehen (z. B. Absender, Empfänger und Zeitpunkt). Wir weisen ferner darauf hin, dass
              WhatsApp nach eigener Aussage, personenbezogene Daten seiner Nutzer mit seiner in den USA ansässigen Konzernmutter Meta
              teilt. Weitere Details zur Datenverarbeitung finden Sie in der Datenschutzerklärung von WhatsApp unter:
              https://www.whatsapp.com/legal/#privacy-policy.
            </p>
            <p className="mb-4">
              Der Einsatz von WhatsApp erfolgt auf Grundlage unseres berechtigten Interesses an einer möglichst schnellen und effektiven
              Kommunikation mit Kunden, Interessenten und sonstigen Geschäfts- und Vertragspartnern (Art. 6 Abs. 1 lit. f DSGVO). Sofern
              eine entsprechende Einwilligung abgefragt wurde, erfolgt die Datenverarbeitung ausschließlich auf Grundlage der
              Einwilligung; diese ist jederzeit mit Wirkung für die Zukunft widerrufbar.
            </p>
            <p className="mb-4">
              Die zwischen Ihnen und uns auf WhatsApp ausgetauschten Kommunikationsinhalte verbleiben bei uns, bis Sie uns zur Löschung
              auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach
              abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen –
              bleiben unberührt.
            </p>
            <p className="mb-4">
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
              https://www.dataprivacyframework.gov/participant/7735.
            </p>
            <p className="mb-4">Wir nutzen WhatsApp in der Variante „WhatsApp Business".</p>
            <p className="mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:
              https://www.whatsapp.com/legal/business-data-transfer-addendum.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Calendly</h3>
            <p className="mb-4">
              Auf unserer Website haben Sie die Möglichkeit, Termine mit uns zu vereinbaren. Für die Terminbuchung nutzen wir das Tool
              „Calendly". Anbieter ist die Calendly LLC, 271 17th St NW, 10th Floor, Atlanta, Georgia 30363, USA (nachfolgend
              „Calendly").
            </p>
            <p className="mb-4">
              Zum Zweck der Terminbuchung geben Sie die abgefragten Daten und den Wunschtermin in die dafür vorgesehene Maske ein. Die
              eingegebenen Daten werden für die Planung, Durchführung und ggf. für die Nachbereitung des Termins verwendet. Die
              Termindaten werden für uns auf den Servern von Calendly gespeichert, dessen Datenschutzerklärung Sie hier einsehen können:
              https://calendly.com/privacy.
            </p>
            <p className="mb-4">
              Die von Ihnen eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>
            <p className="mb-4">
              Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an einer möglichst unkomplizierten Terminvereinbarung mit Interessenten und Kunden. Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25
              Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des
              Nutzers (z. B. Device-Fingerprinting) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:
              https://calendly.com/pages/dpa.
            </p>
            <p className="mb-4">
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
              https://www.dataprivacyframework.gov/participant/6050.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Soziale Medien</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">LinkedIn</h3>
            <p className="mb-4">
              Diese Website nutzt Elemente des Netzwerks LinkedIn. Anbieter ist die LinkedIn Ireland Unlimited Company, Wilton Plaza,
              Wilton Place, Dublin 2, Irland.
            </p>
            <p className="mb-4">
              Bei jedem Abruf einer Seite dieser Website, die Elemente von LinkedIn enthält, wird eine Verbindung zu Servern von LinkedIn
              aufgebaut. LinkedIn wird darüber informiert, dass Sie diese Website mit Ihrer IP-Adresse besucht haben. Wenn Sie den
              „Recommend-Button" von LinkedIn anklicken und in Ihrem Account bei LinkedIn eingeloggt sind, ist es LinkedIn möglich, Ihren
              Besuch auf dieser Website Ihnen und Ihrem Benutzerkonto zuzuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten
              keine Kenntnis vom Inhalt der übermittelten Daten sowie deren Nutzung durch LinkedIn haben.
            </p>
            <p className="mb-4">
              Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
              Die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier:
              https://www.linkedin.com/help/linkedin/answer/a1343190/datenubertragung-aus-der-eu-dem-ewr-und-der-schweiz?lang=de
            </p>
            <p className="mb-4">
              Weitere Informationen hierzu finden Sie in der Datenschutzerklärung von LinkedIn unter:
              https://www.linkedin.com/legal/privacy-policy.
            </p>
            <p className="mb-4">
              Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework" (DPF). Der DPF ist ein
              Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei
              Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese
              Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link:
              https://www.dataprivacyframework.gov/participant/5448.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. eCommerce und Zahlungsanbieter</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Verarbeiten von Kunden- und Vertragsdaten</h3>
            <p className="mb-3">
              Wir erheben, verarbeiten und nutzen personenbezogene Kunden- und Vertragsdaten zur Begründung, inhaltlichen Ausgestaltung
              und Änderung unserer Vertragsbeziehungen. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten)
              erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu
              ermöglichen oder abzurechnen. Rechtsgrundlage hierfür ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
            <p className="mb-4">
              Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung und Ablauf der ggf.
              bestehenden gesetzlichen Aufbewahrungsfristen gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte</h3>
            <p className="mb-4">
              Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa
              an das mit der Zahlungsabwicklung beauftragte Kreditinstitut.
            </p>
            <p className="mb-4">
              Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt
              haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
            </p>
            <p className="mb-4">
              Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines
              Vertrags oder vorvertraglicher Maßnahmen gestattet.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Eigene Dienste</h2>

            <h3 className="text-xl font-semibold mb-3 mt-6">Umgang mit Bewerberdaten</h3>
            <p className="mb-4">
              Wir bieten Ihnen die Möglichkeit, sich bei uns zu bewerben (z. B. per E-Mail, postalisch oder via Online-Bewerberformular).
              Im Folgenden informieren wir Sie über Umfang, Zweck und Verwendung Ihrer im Rahmen des Bewerbungsprozesses erhobenen
              personenbezogenen Daten. Wir versichern, dass die Erhebung, Verarbeitung und Nutzung Ihrer Daten in Übereinstimmung mit
              geltendem Datenschutzrecht und allen weiteren gesetzlichen Bestimmungen erfolgt und Ihre Daten streng vertraulich
              behandelt werden.
            </p>

            <p className="font-semibold mb-2">Umfang und Zweck der Datenerhebung</p>
            <p className="mb-4">
              Wenn Sie uns eine Bewerbung zukommen lassen, verarbeiten wir Ihre damit verbundenen personenbezogenen Daten (z. B.
              Kontakt- und Kommunikationsdaten, Bewerbungsunterlagen, Notizen im Rahmen von Bewerbungsgesprächen etc.), soweit dies zur
              Entscheidung über die Begründung eines Beschäftigungsverhältnisses erforderlich ist. Rechtsgrundlage hierfür ist § 26 BDSG
              nach deutschem Recht (Anbahnung eines Beschäftigungsverhältnisses), Art. 6 Abs. 1 lit. b DSGVO (allgemeine
              Vertragsanbahnung) und – sofern Sie eine Einwilligung erteilt haben – Art. 6 Abs. 1 lit. a DSGVO. Die Einwilligung ist
              jederzeit widerrufbar. Ihre personenbezogenen Daten werden innerhalb unseres Unternehmens ausschließlich an Personen
              weitergegeben, die an der Bearbeitung Ihrer Bewerbung beteiligt sind.
            </p>
            <p className="mb-4">
              Sofern die Bewerbung erfolgreich ist, werden die von Ihnen eingereichten Daten auf Grundlage von § 26 BDSG und Art. 6 Abs. 1
              lit. b DSGVO zum Zwecke der Durchführung des Beschäftigungsverhältnisses in unseren Datenverarbeitungssystemen gespeichert.
            </p>

            <p className="font-semibold mb-2">Aufbewahrungsdauer der Daten</p>
            <p className="mb-4">
              Sofern wir Ihnen kein Stellenangebot machen können, Sie ein Stellenangebot ablehnen oder Ihre Bewerbung zurückziehen,
              behalten wir uns das Recht vor, die von Ihnen übermittelten Daten auf Grundlage unserer berechtigten Interessen (Art. 6
              Abs. 1 lit. f DSGVO) bis zu 6 Monate ab der Beendigung des Bewerbungsverfahrens (Ablehnung oder Zurückziehung der
              Bewerbung) bei uns aufzubewahren. Anschließend werden die Daten gelöscht und die physischen Bewerbungsunterlagen
              vernichtet. Die Aufbewahrung dient insbesondere Nachweiszwecken im Falle eines Rechtsstreits. Sofern ersichtlich ist, dass
              die Daten nach Ablauf der 6-Monatsfrist erforderlich sein werden (z. B. aufgrund eines drohenden oder anhängigen
              Rechtsstreits), findet eine Löschung erst statt, wenn der Zweck für die weitergehende Aufbewahrung entfällt.
            </p>
            <p className="mb-4">
              Eine längere Aufbewahrung kann außerdem stattfinden, wenn Sie eine entsprechende Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              erteilt haben oder wenn gesetzliche Aufbewahrungspflichten der Löschung entgegenstehen.
            </p>

            <p className="font-semibold mb-2">Aufnahme in den Bewerber-Pool</p>
            <p className="mb-4">
              Sofern wir Ihnen kein Stellenangebot machen, besteht ggf. die Möglichkeit, Sie in unseren Bewerber-Pool aufzunehmen. Im
              Falle der Aufnahme werden alle Dokumente und Angaben aus der Bewerbung in den Bewerber-Pool übernommen, um Sie im Falle von
              passenden Vakanzen zu kontaktieren.
            </p>
            <p className="mb-4">
              Die Aufnahme in den Bewerber-Pool geschieht ausschließlich auf Grundlage Ihrer ausdrücklichen Einwilligung (Art. 6 Abs. 1
              lit. a DSGVO). Die Abgabe der Einwilligung ist freiwillig und steht in keinem Bezug zum laufenden Bewerbungsverfahren.
              Der Betroffene kann seine Einwilligung jederzeit widerrufen. In diesem Falle werden die Daten aus dem Bewerber-Pool
              unwiderruflich gelöscht, sofern keine gesetzlichen Aufbewahrungsgründe vorliegen.
            </p>
            <p className="mb-4">
              Die Daten aus dem Bewerber-Pool werden spätestens zwei Jahre nach Erteilung der Einwilligung unwiderruflich gelöscht.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
