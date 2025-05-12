import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rows = [
  {
    critere: "Personnalisation",
    klyx: <Badge color="lime">100% sur-mesure</Badge>,
    nocode: <Badge color="red">Limitée aux templates</Badge>,
    agence: <Badge color="cyan">Sur-mesure, coûteux</Badge>,
  },
  {
    critere: "Performance & Rapidité",
    klyx: <Badge color="lime">Ultra-rapide, code optimisé</Badge>,
    nocode: <Badge color="amber">Lenteur fréquente</Badge>,
    agence: <Badge color="amber">Optimisée à la livraison</Badge>,
  },
  {
    critere: "SEO & Référencement",
    klyx: <Badge color="lime">Inclus & optimisé</Badge>,
    nocode: <Badge color="red">Mal optimisé</Badge>,
    agence: <Badge color="amber">En option payante</Badge>,
  },
  {
    critere: "Maintenance & Sécurité",
    klyx: <Badge color="lime">Incluse, proactive</Badge>,
    nocode: <Badge color="red">À gérer soi-même</Badge>,
    agence: <Badge color="amber">Facturée en plus</Badge>,
  },
  {
    critere: "Modifications & Support",
    klyx: <Badge color="lime">Inclus, support humain</Badge>,
    nocode: <Badge color="red">À faire soi-même</Badge>,
    agence: <Badge color="amber">Facturées, support variable</Badge>,
  },
  {
    critere: "Coût Initial",
    klyx: <Badge color="lime">0 €</Badge>,
    nocode: <Badge color="amber">Frais cachés possibles</Badge>,
    agence: <Badge color="red">2 000 € à 10 000 €+</Badge>,
  },
  {
    critere: "Coût Mensuel",
    klyx: <Badge color="lime">Dès 99 €/mois, tout inclus</Badge>,
    nocode: <Badge color="lime">15–60 €/mois, extras payants</Badge>,
    agence: <Badge color="red">Coûts imprévisibles</Badge>,
  },
  {
    critere: "Engagement",
    klyx: <Badge color="lime">Sans engagement</Badge>,
    nocode: <Badge color="amber">Abonnement/migration difficile</Badge>,
    agence: <Badge color="lime">Sans engagement</Badge>,
  },
  {
    critere: "Évolutivité",
    klyx: <Badge color="lime">Site évolutif & scalable</Badge>,
    nocode: <Badge color="red">Très limité</Badge>,
    agence: <Badge color="amber">Possible, coûteux</Badge>,
  },
  {
    critere: "Facilité d’utilisation",
    klyx: <Badge color="lime">Aucune compétence requise</Badge>,
    nocode: <Badge color="amber">Apprentissage nécessaire</Badge>,
    agence: <Badge color="lime">Géré par l’agence</Badge>,
  },
];

export function CodeVsNocode() {
  return (
    <div className="px-6">
      <h2 className="text-2xl font-semibold tracking-tight text-pretty text-gray-900">
        Comparez et choisissez la solution qui fera vraiment la différence pour
        votre entreprise
      </h2>
      <p className="mt-2 text-gray-500 max-w-3xl">
        Face à la multitude d’offres web, il est parfois difficile de s’y
        retrouver. Ce tableau comparatif vous permet de visualiser en un coup
        d’œil les forces et limites de chaque solution : Klyx, plateformes
        No-Code et agences web classiques. Découvrez pourquoi Klyx se démarque
        sur les critères qui comptent vraiment : performance, personnalisation,
        simplicité, évolutivité et accompagnement humain. Faites le choix
        éclairé qui propulsera votre activité.
      </p>
      <div className=" mt-10 ring-1 ring-gray-300 sm:rounded-lg">
        <Table className="[--gutter:--spacing(6)] sm:[--gutter:--spacing(8)]">
          <TableHead>
            <TableRow>
              <TableHeader>Critères Clés</TableHeader>
              <TableHeader>Klyx 🚀</TableHeader>
              <TableHeader>No-Code</TableHeader>
              <TableHeader>Agence Web</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.critere}>
                <TableCell className="font-semibold">{row.critere}</TableCell>
                <TableCell>{row.klyx}</TableCell>
                <TableCell>{row.nocode}</TableCell>
                <TableCell>{row.agence}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
