import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Collapse() {
  return (
    <div className="bg-black rounded-2xl">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Questions les plus fréquentes
            </h2>
            <p className="mt-4 text-base/7 text-white">
              Une question ? Notre équipe vous répond rapidement{" "}
              <a
                href="/contact"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                Contactez-nous
              </a>
              .
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0 text-white space-y-10">
            {/* À propos de Klyx */}
            <h3 className="text-lg font-medium text-gray-400">
              À propos de Klyx
            </h3>
            <Accordion type="single" className="w-full" collapsible>
              <AccordionItem value="about-1">
                <AccordionTrigger>Qu’est-ce que Klyx ?</AccordionTrigger>
                <AccordionContent>
                  Klyx est une agence digitale nouvelle génération qui crée des
                  sites web 100 % sur-mesure pour entrepreneurs, freelances, TPE
                  et PME. Contrairement aux plateformes no-code ou aux agences
                  classiques, nous proposons une solution clé en main :
                  abonnement mensuel, sans engagement, avec hébergement,
                  maintenance, SEO et accompagnement inclus.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="about-2">
                <AccordionTrigger>Pour qui ?</AccordionTrigger>
                <AccordionContent>
                  Klyx s’adresse à tous les professionnels qui veulent une
                  présence en ligne moderne, rapide et efficace : indépendants,
                  commerçants, coachs, artisans, PME, startups… Nos offres
                  s’adaptent à vos besoins, quel que soit votre niveau digital.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Offres & Tarifs */}
            <h3 className="text-lg font-medium text-gray-400">
              Offres & Tarifs
            </h3>
            <Accordion type="single" className="w-full" collapsible>
              <AccordionItem value="pricing-1">
                <AccordionTrigger>
                  Des frais de création à prévoir ?
                </AccordionTrigger>
                <AccordionContent>
                  Aucun. La création de votre site est comprise dans
                  l’abonnement. Pas de frais cachés, pas de surprise.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pricing-2">
                <AccordionTrigger>
                  Puis-je modifier mon site après la mise en ligne ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui ! Chaque formule inclut des modifications mensuelles
                  gratuites (textes, images…). Besoin de plus ? Payez à l’unité
                  ou optez pour un forfait illimité.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pricing-3">
                <AccordionTrigger>Dois-je m’engager ?</AccordionTrigger>
                <AccordionContent>
                  Jamais. Nos abonnements sont sans engagement. Vous arrêtez
                  quand vous voulez, sans justification.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pricing-4">
                <AccordionTrigger>
                  Que devient mon site si j’arrête ?
                </AccordionTrigger>
                <AccordionContent>
                  Votre site est mis en pause. Vous pouvez le réactiver à tout
                  moment ou demander un export du code source (option payante).
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="pricing-5">
                <AccordionTrigger>
                  Quels moyens de paiement acceptez-vous ?
                </AccordionTrigger>
                <AccordionContent>
                  Paiement sécurisé en ligne par carte bancaire (Visa,
                  MasterCard…) via Stripe. Prélèvement automatique chaque mois.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Création & Livraison */}
            <h3 className="text-lg font-medium text-gray-400">
              Création & Livraison
            </h3>
            <Accordion type="single" className="w-full" collapsible>
              <AccordionItem value="creation-1">
                <AccordionTrigger>Quels sont les délais ?</AccordionTrigger>
                <AccordionContent>
                  Après validation du questionnaire et du paiement, votre site
                  est livré en 7 à 14 jours ouvrés selon la formule choisie.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="creation-2">
                <AccordionTrigger>
                  Comment se passe la création ?
                </AccordionTrigger>
                <AccordionContent>
                  1. Vous remplissez un questionnaire intelligent.
                  <br />
                  2. Nous validons ensemble vos besoins.
                  <br />
                  3. Vous recevez une maquette, puis la version en ligne.
                  <br />
                  4. Vous validez, nous mettons le site en ligne.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="creation-3">
                <AccordionTrigger>
                  Mon site sera-t-il adapté au mobile ?
                </AccordionTrigger>
                <AccordionContent>
                  Toujours. Chaque site est responsive, optimisé pour tous les
                  écrans, sans surcoût.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="creation-4">
                <AccordionTrigger>
                  Des exemples de réalisations ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui ! Consultez notre portfolio (à venir) ou demandez-nous des
                  exemples.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Fonctionnalités & Technique */}
            <h3 className="text-lg font-medium text-gray-400">
              Fonctionnalités & Technique
            </h3>
            <Accordion type="single" className="w-full" collapsible>
              <AccordionItem value="tech-1">
                <AccordionTrigger>Le SEO est-il inclus ?</AccordionTrigger>
                <AccordionContent>
                  Oui. Chaque site est livré optimisé pour le référencement :
                  structure, balises, sitemap, rapidité… Un suivi mensuel est
                  inclus avec les offres Pro et Premium.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tech-2">
                <AccordionTrigger>Puis-je vendre en ligne ?</AccordionTrigger>
                <AccordionContent>
                  Oui, avec la formule Premium. Gérez vos produits, commandes et
                  paiements simplement.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tech-3">
                <AccordionTrigger>Puis-je avoir un blog ?</AccordionTrigger>
                <AccordionContent>
                  Oui, à partir de la formule Pro.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="tech-4">
                <AccordionTrigger>
                  Intégrez-vous Google Analytics ou Facebook Pixel ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, tous les outils marketing nécessaires peuvent être
                  intégrés.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Support & Maintenance */}
            <h3 className="text-lg font-medium text-gray-400">
              Support & Maintenance
            </h3>
            <Accordion type="single" className="w-full" collapsible>
              <AccordionItem value="support-1">
                <AccordionTrigger>
                  Comment obtenir de l’aide ou demander une modification ?
                </AccordionTrigger>
                <AccordionContent>
                  Support humain, rapide et réactif par email ou chat. Les
                  modifications se font via un formulaire simple depuis votre
                  dashboard.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support-2">
                <AccordionTrigger>Qui gère la maintenance ?</AccordionTrigger>
                <AccordionContent>
                  Nous ! Hébergement, mises à jour et sécurité sont compris.
                  Vous restez concentré sur votre activité.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="support-3">
                <AccordionTrigger>
                  Suis-je propriétaire du site ?
                </AccordionTrigger>
                <AccordionContent>
                  Vous avez un droit d’utilisation total tant que vous êtes
                  abonné. Pour devenir propriétaire du code source, une option
                  de rachat est disponible.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Sécurité & Hébergement */}
            <h3 className="text-lg font-medium text-gray-400">
              Sécurité & Hébergement
            </h3>
            <Accordion type="single" className="w-full" collapsible>
              <AccordionItem value="security-1">
                <AccordionTrigger>Où est hébergé mon site ?</AccordionTrigger>
                <AccordionContent>
                  Sur Vercel, partenaires fiables pour un hébergement rapide et
                  sécurisé.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="security-2">
                <AccordionTrigger>Mon site est-il sécurisé ?</AccordionTrigger>
                <AccordionContent>
                  Oui. HTTPS, mises à jour automatiques, surveillance continue :
                  la sécurité est notre priorité.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="security-3">
                <AccordionTrigger>
                  Les données de mes clients sont-elles protégées ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui. Respect du RGPD, stockage sécurisé, aucune revente ni
                  exploitation des données.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
