import { z } from "zod";

const questionsByPlan = {
  essentiel: [
    {
      question: "Quel est le nom de votre activité ?",
      type: "text",
    },
    {
      question: "Pourquoi voulez-vous un site web aujourd’hui ?",
      type: "single",
      options: [
        "Présenter mon activité / mes services",
        "Être trouvé localement ",
        "Générer des appels ou demandes de devis",
        "Autre motivation",
      ],
    },
    {
      question: "Votre secteur d’activité",
      type: "select",
      options: [
        "Artisan (ex. plombier, électricien)",
        "Profession libérale / Coaching",
        "Commerce de proximité",
        "Restaurant / Food truck",
        "Autre",
      ],
    },
    {
      question: "Disposez-vous déjà d’une identité visuelle ?",
      type: "single",
      options: [
        "Oui ",
        "Partiellement : j’ai un logo mais pas de charte",
        "Non, j’ai besoin d’aide",
      ],
    },
    {
      question: "souhaitez-vous que nous rédigions les textes ?",
      type: "single",
      options: ["Oui", "Non"],
    },
    {
      question: "Nom de domaine",
      type: "single",
      options: ["Je l’ai déjà", "Je veux que Klyx s’en occupe"],
    },
    {
      question: "E-mail pour valider l’abonnement Essentiel (99 €/mois)",
      type: "email",
    },
  ],

  pro: [
    { question: "Nom de l’entreprise ", type: "text" },
    {
      question: "Objectif principal du site",
      type: "single",
      options: [
        "Présenter la société et rassurer",
        "Générer des leads qualifiés",
        "Publier des contenus (blog / ressources)",
        "Autre",
      ],
    },
    {
      question: "Secteur",
      type: "select",
      options: ["PME / Services B2B", "Startup", "Services", "Autre"],
    },
    {
      question: "Fonctionnalités souhaitées",
      type: "multi",
      options: [
        "Blog ou actualités",
        "Formulaire avancé (devis, quiz…)",
        "Espace équipe / carrière",
        "Intégration CRM / newsletter",
        "Galerie",
        "Autre fonctionnalité",
      ],
    },
    {
      question: "Exemples de sites qui vous plaisent (URL)",
      type: "textarea",
    },
    {
      question: "Nom de domaine (déjà réservé ?)",
      type: "single",
      options: ["Oui", "Non"],
    },
    { question: "E-mail pour finaliser Pro (179 €/mois)", type: "email" },
  ],

  premium: [
    { question: "Nom de l’entreprise ", type: "text" },
    {
      question: "Objectif clé",
      type: "single",
      options: [
        "Vendre en ligne (e-commerce complet)",
        "Plateforme sur-mesure (SaaS, marketplace…)",
        "Autre (précisez)",
      ],
    },
    {
      question: "Vos 3 concurrents principaux (URL ou nom)",
      type: "textarea",
    },
    {
      question: "Fonctionnalités avancées indispensables",
      type: "multi",
      options: [
        "E-commerce",
        "Espace client",
        "Chat en temps réel",
        "Système d’abonnement / paiement récurrent",
      ],
    },
    {
      question: "Style ou inspirations (liens)",
      type: "textarea",
    },
    {
      question: "Priorités de performance",
      type: "multi",
      options: ["SEO ", "Vitesse", "Sécurité", "PWA", "Accessibilité"],
    },
    {
      question: "Personas cibles (qui sont vos clients ?)",
      type: "textarea",
    },
    { question: "Nom de domaine", type: "single", options: ["Oui", "Non"] },
    {
      question: "E-mail décisionnaire pour Premium (299 €/mois)",
      type: "email",
    },
  ],
  default: [
    {
      question: "Quel type de site souhaitez-vous ?",
      type: "single",
      options: ["Site vitrine", "E-commerce", "Blog", "Autre"],
    },
    {
      question: "Décrivez brièvement votre projet",
      type: "textarea",
    },
    { question: "Votre e-mail", type: "email" },
  ],
};

export const stepSchemas = (question) => {
  switch (question.type) {
    case "email":
      return z.object({ [question.question]: z.string().email() });
    case "text":
    case "textarea":
      return z.object({ [question.question]: z.string().min(2) });
    case "single":
    case "select":
      return z.object({ [question.question]: z.string().min(1) });
    case "multi":
      return z.object({ [question.question]: z.array(z.string()).min(1) });
    default:
      return z.object({});
  }
};

export { questionsByPlan };
