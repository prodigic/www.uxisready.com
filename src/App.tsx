"use client";

import { useState } from "react";

type Lang = "fr" | "it" | "es" | "en";

const copy = {
  en: {
    nav: ["What we do", "Clients", "Contact us"], hero: "Shaping engaging experiences", strap: "You learn. We create. They use.",
    intro: "We are a User Experience (UX) design consultancy that specializes in creating and improving digital products for all types of companies and organizations.",
    services: [
      ["Experience Design", "Everything from improving your existing website to designing a new app from scratch. We design the flow, and every screen of your product or service, using our agile and lean UX process. Your users will immediately be able to do what they need to do."],
      ["Usability Testing", "We test how satisfied your customers are with your product or service. We believe in testing at every stage in the design process and we use a wide variety of methods. From learning by observing to analyzing the data of 100’s of customers as they use your product."],
      ["Training", "Our trainings and workshops are specifically tailored to each client. From helping with a specific project or subject (User Testing, Design Collaboration Workshops) to streamlining the UX process within your company (Interim UX Lead, Agile UX, Lean UX)."],
    ],
    quote: "“ Customers always know what’s wrong. They can’t always tell you what they want, but they always can tell you what’s wrong.”", author: "Carly Fiorina",
    processTitle: "Our process", tabs: ["Learn", "Create", "Use"], methodsTitle: "Our methods include:",
    process: [
      ["Together we define your goals, learn about your business, your customers and the competitive landscape of your industry. We then create a UX strategy for your product, service or software.", "Customer research, clients workshops, competitive analysis, heuristic and expert evaluations."],
      ["We create products your customers love. Applying the science of UX design to create an experience which meets their needs. Programming is expensive and we ensure you code just what is valuable to your customers and your business.", "Sketchwork, personas and user stories, experience maps, style guides, rapid prototyping."],
      ["We design the ease-of-use in close collaboration with the development team, and we continue testing and learning more about your customers as they use your product or service. This ensures your product continues to improve once shipped and your customer retention is maximised.", "Learning labs, usability testing, A/B testing, user surveys and web analytics."],
    ],
    clientsTitle: "Thanks to our clients", clientsBody: "We are based in Barcelona and San Francisco and work with clients worldwide in English, French, Italian and Spanish.", contact: "Ready to talk about your next project?", rights: "All rights reserved",
  },
  fr: {
    nav: ["Ce que nous faisons", "Clients", "Contact"], hero: "Nous façonnons des expériences engageantes", strap: "Apprenez. Créons. Utilisent.",
    intro: "UX is Ready est une agence d'Expérience Utilisateur (UX) qui se spécialise dans la création et l'optimisation de produits et services digitaux pour toute entreprise et organisation.",
    services: [
      ["Conception d'Expérience", "De l'amélioration de votre e-commerce courant à concevoir une nouvelle App à partir de zéro. Nous concevons des flux, et chaque écran de votre produit ou service grâce à notre méthodologie agile et «Lean». Vos utilisateurs seront immédiatement capables de faire ce qu'ils ont à faire."],
      ["Tests d'Utilisabilité", "Nous mesurons le degré de satisfaction de vos clients sur votre produit ou service. Nous croyons dans les tests à chaque étape du processus de conception et nous utilisons une vaste gamme de méthodes. De l'apprentissage par l'observation à l'analyse des données de 100 de clients comme ils utilisent votre produit."],
      ["Formation", "Nos cours et ateliers sont spécifiquement conçus pour chaque client. D'aider avec un projet ou un sujet spécifique (User Test, ateliers de conception collaborative) à rationaliser le processus UX au sein de votre entreprise (Interim Lead UX, Agile UX, Lean UX)."],
    ],
    quote: "“Si vous voulez comprendre comme un leone chasse, n' allez pas au zoo. Allez dans la jungle.”", author: "Jim Stengel",
    processTitle: "Notre méthode", tabs: ["Apprendre", "Créer", "Utiliser"], methodsTitle: "Nos méthodes comprennent:",
    process: [
      ["Définir ensemble vos objectifs, connaître votre entreprise, vos clients et le paysage concurrentiel de votre secteur d'activité, pour créer alors une stratégie de UX adaptée à votre produit, service ou logiciel.", "Études de marché, ateliers avec les clients, analyse de la concurrence, évaluation heuristique et d’expert."],
      ["Notre objectif est de créer des produits que vos clients adorent. Nous appliquons la science de la conception UX pour créer des expériences qui répondent à leurs besoins. La programmation est cruciale, et nous nous assurons qu’on codifie juste ce qui est de valeur pour vos clients et votre entreprise.", "Sketchwork, personas et histoires d'utilisateurs, mappage d'expérience, guides de style, prototypage rapide."],
      ["Nous concevons la facilité d'utilisation, en étroite collaboration avec l'équipe de développement, et nous continuons à tester et en savoir plus sur la façon dont vos clients préfèrent utiliser votre produit ou service. Cela garantit que le produit continue à s'améliorer après le lancement, en maximisant votre fidélisation de la clientèle.", "Laboratoires d'apprentissage, tests d'utilisabilité, tests A/B, enquêtes auprès des utilisateurs et analyse Web."],
    ],
    clientsTitle: "Merci à nos clients", clientsBody: "Nous sommes basés à Barcelone et San Francisco et travaillons avec clients dans le monde entier. En anglais, français, italien et espagnol.", contact: "Et si nous parlions de votre prochain projet?", rights: "Tous droits réservés",
  },
  it: {
    nav: ["Cosa facciamo", "Clienti", "Contatto"], hero: "Modelliamo esperienze incredibili", strap: "Conosci. Creiamo. Usano.",
    intro: "UX is Ready è un'agenzia di Esperienza Utente (UX) specializzata in creare ed ottimizzare prodotti digitali e servizi per tutti i tipi di aziende ed organizzazioni.",
    services: [
      ["Design di Esperienza", "Dal migliorare il tuo attuale e-commerce al progettare una nuova App da zero. Disegnamo i flussi ed ogni schermo del tuo prodotto o servizio attraverso la nostra metodologia agile e lean. I tuoi clienti saranno in grado di fare immediatamente quello che devono fare."],
      ["Test di Usabilità", "Misuriamo il grado di soddisfazione dei tuoi clienti sul tuo prodotto o servizio. Crediamo nel testare ogni fase del processo ed abbiamo una vasta gamma di metodi. Dall'imparare attraverso l'osservazione, all'analizzare i dati provenienti da centinaia di clienti mentre usano il tuo prodotto."],
      ["Formazione", "I nostri corsi e seminari sono disegnati su misura per ogni cliente. Da aiutare con un progetto o un argomento specifico (UX agile, laboratori di disegno collaborativo, UX Lean) per agilizzare il processo UX all'interno della tua azienda."],
    ],
    quote: "“Il comportamento delle persone ha senso se si pensa in termini di obiettivi, bisogni e motivazioni.”", author: "Thomas Mann",
    processTitle: "Il nostro metodo", tabs: ["Conoscere", "Creare", "Usare"], methodsTitle: "I nostri metodi includono:",
    process: [
      ["Definire gli obiettivi insieme, conoscere la tua attività, i tuoi clienti ed il panorama competitivo del tuo settore, per poi creare una strategia UX su misura per il tuo prodotto, servizio o software.", "Ricerche di mercato, workshop con clienti, analisi della concorrenza, valutazione euristica e di esperto."],
      ["Il nostro obiettivo è creare prodotti che i tuoi clienti amino. Applichiamo la scienza del design UX per creare esperienze che soddisfino le loro necessità. La programmazione è cruciale, e ci assicuriamo che si codifichi solo ciò che è prezioso per i tuoi clienti ed il tuo business.", "Sketchwork, personas e storie degli utenti, mappe di esperienze, guide di stile, prototipazione rapida."],
      ["Progettiamo la facilità d'uso, in stretta collaborazione con il team di sviluppo, e continuiamo a testare e conoscere meglio come i tuoi clienti preferiscono usare il tuo prodotto o servizio. Questo garantisce che il prodotto continui a migliorare una volta lanciato, fidelizzando i tuoi clienti.", "Learning Labs, test di usabilità, test A/B, sondaggi con utenti e web analytics."],
    ],
    clientsTitle: "Grazie ai nostri clienti", clientsBody: "Siamo a Barcellona e San Francisco e lavoriamo con clienti di tutto il mondo. In inglese, francese, italiano e spagnolo.", contact: "Parliamo del tuo prossimo progetto?", rights: "Tutti i diritti riservati",
  },
  es: {
    nav: ["Qué hacemos", "Clientes", "Contacto"], hero: "Moldeamos experiencias increíbles", strap: "Aprendes. Creamos. Usan.",
    intro: "UX is Ready es una agencia de Experiencia de Usuario (UX) especializada en crear y optimizar productos digitales y servicios para todo tipo de empresas y organizaciones.",
    services: [
      ["Diseño de Experiencia", "Desde mejorar tu actual ecommerce a diseñar una nueva App desde cero. Diseñamos los flujos, y cada pantalla de tu producto o servicio, por medio de nuestra metodología ágil y lean. Tus usuarios van a poder hacer lo que tienen que hacer de inmediato."],
      ["Pruebas de Usabilidad", "Medimos el grado de satisfacción de tus clientes sobre tu producto o servicio. Creemos en testear en cada etapa del proceso y tenemos un amplio abanico de métodos. Desde aprender por observación, a analizar los datos de cientos de clientes mientras usan tu producto."],
      ["Formación", "Nuestros cursos y talleres están diseñados a medida para cada cliente. Desde ayudar con un proyecto o tema específico para agilizar el proceso de UX dentro de tu empresa."],
    ],
    quote: "“ Los clientes siempre saben lo que está mal. No siempre pueden decirte lo que quieren, pero siempre pueden decirte lo que está mal.”", author: "Carly Fiorina",
    processTitle: "Nuestro método", tabs: ["Aprender", "Crear", "Usar"], methodsTitle: "Nuestros métodos incluyen:",
    process: [
      ["Definir juntos tus objetivos, aprender sobre tu negocio, tus clientes y el panorama competitivo de tu industria. Para luego crear una estrategia UX a medida para tu producto, servicio o software.", "Investigación de clientes, talleres con clientes, análisis de la competencia, evaluación heurística y de experto."],
      ["Creamos productos que tus clientes adoran. Aplicamos la ciencia del diseño UX para crear experiencias que satisfagan sus necesidades. Nos aseguramos de desarrollar únicamente lo que aporta valor a tus clientes y a tu negocio.", "Bocetos, personas e historias de usuario, mapas de experiencia, guías de estilo y prototipado rápido."],
      ["Diseñamos la facilidad de uso en estrecha colaboración con el equipo de desarrollo y continuamos probando y aprendiendo cómo tus clientes usan tu producto o servicio.", "Laboratorios de aprendizaje, pruebas de usabilidad, pruebas A/B, encuestas de usuarios y analítica web."],
    ],
    clientsTitle: "Gracias a nuestros clientes", clientsBody: "Estamos en Barcelona y San Francisco y trabajamos con clientes de todo el mundo. En inglés, francés, italiano y español.", contact: "¿Quieres hablarnos de tu próximo proyecto?", rights: "Todos los derechos reservados",
  },
} as const;

const images = ["graphic_design.svg", "graphic_testing.svg", "graphic_training.svg"];
const clients = [["logo_dinube.png", "Dinube"], ["logo_hp.png", "Hewlett Packard"], ["logo_publicis.png", "Publicis"], ["logo_chron.png", "San Francisco Chronicle"], ["logo_atom.png", "Atom Media"], ["logo_radaptive.png", "Radaptive Inc."], ["logo_bofa.png", "Bank of America"], ["logo_snap.png", "Snapfish"]];
const asset = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const [active, setActive] = useState(0);
  const t = copy[lang];
  const chooseLanguage = (next: Lang) => { setLang(next); setActive(0); document.documentElement.lang = next; };
  return <main id="top">
    <header className="topbar">
      <a className="mini-logo" href="#top" aria-label="UX is Ready home"><img src={asset("web_logo.png")} alt="UX is Ready" /></a>
      <div className="header-actions">
        <nav aria-label="Primary navigation"><a className="current" href="#what-we-do">{t.nav[0]}</a><a href="#clients">{t.nav[1]}</a><a href="#contact">{t.nav[2]}</a></nav>
        <div className="language-switch" aria-label="Choose language">{(["fr","it","es","en"] as Lang[]).map(code => <button key={code} type="button" lang={code} className={lang === code ? "selected" : ""} aria-pressed={lang === code} onClick={() => chooseLanguage(code)}>{code.toUpperCase()}</button>)}</div>
      </div>
    </header>
    <section className="hero"><div><h1>{t.hero}</h1><p>{t.strap}</p></div></section>
    <section id="what-we-do" className="services section-shell">
      <p className="intro">{t.intro}</p>
      <div className="service-grid">{t.services.map((service, i) => <article key={service[0]}><img className="service-icon" src={asset(images[i])} alt="" /><h2>{service[0]}</h2><p>{service[1]}</p></article>)}</div>
    </section>
    <section className="quote"><blockquote>{t.quote}</blockquote><cite>{t.author}</cite></section>
    <section className="process-section section-shell"><h2 className="section-title">{t.processTitle}</h2>
      <div className="process-tabs" role="tablist" aria-label={t.processTitle}>{t.tabs.map((name, i) => <button key={name} className={`${["purple","yellow","blue"][i]} ${active === i ? "active" : ""}`} onClick={() => setActive(i)} role="tab" aria-selected={active === i}>{name}</button>)}</div>
      <div className="process-content" role="tabpanel"><div className="process-copy"><p>{t.process[active][0]}</p><h3>{t.methodsTitle}</h3><p className="methods">{t.process[active][1]}</p></div><img src={asset("process.svg")} alt="Learn, create, use, and iterate process" /></div>
    </section>
    <section id="clients" className="clients-section"><div className="section-shell"><h2 className="section-title">{t.clientsTitle}</h2><p>{t.clientsBody}</p><div className="client-grid">{clients.map(([image, name]) => <img key={name} src={asset(image)} alt={name} />)}</div></div></section>
    <section id="contact" className="contact"><img className="contact-logo" src={asset("logo_uxisready.svg")} alt="UX is Ready" /><div className="contact-actions"><h2>{t.contact}</h2><div className="socials"><a href="mailto:hello@uxisready.com?subject=Hello!" aria-label="Email UX is Ready"><span>✉</span></a><a href="https://twitter.com/uxisready" aria-label="UX is Ready on Twitter"><span>♥</span></a></div></div></section>
    <footer><div className="footer-languages">{(["fr","it","es","en"] as Lang[]).map(code => <button key={code} type="button" className={lang === code ? "active-language" : ""} onClick={() => chooseLanguage(code)}>{{fr:"Français",it:"Italiano",es:"Español",en:"English"}[code]}</button>)}</div><span> ©2013-2014 UX is ready · {t.rights}</span></footer>
  </main>;
}
