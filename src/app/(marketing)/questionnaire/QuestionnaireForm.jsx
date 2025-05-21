"use client";

import { useActionState, useState } from "react";
import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
} from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";
import { Radio, RadioField, RadioGroup } from "@/components/ui/radio";
import {
  Checkbox,
  CheckboxField,
  CheckboxGroup,
} from "@/components/ui/checkbox";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { actionQuestionnaire } from "./action";
import { Stepper } from "./Stepper";

export function QuestionnaireForm() {
  const initialState = {
    errors: {},
    message: null,
  };
  const [state, formAction, isPending] = useActionState(
    actionQuestionnaire,
    initialState
  );
  const [step, setStep] = useState(1);
  const totalSteps = 11;

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  console.log("step", step);

  return (
    <div className="mx-auto max-w-3xl py-6 md:py-12">
      <Stepper currentStep={step} totalSteps={totalSteps} />
      <form action={formAction}>
        <Fieldset>
          <FieldGroup>
            <Field hidden={step !== 1}>
              <Label>Quel est le nom de votre entreprise ou projet ?</Label>
              <Input type="text" name="nameEntreprise" />
              <Description>
                Ce nom sera visible sur votre site et dans toutes vos
                communications. Si vous n'avez pas encore de nom définitif, ne
                vous inquiétez pas, nous pourrons le mettre à jour si besoin !
              </Description>
            </Field>

            <Field hidden={step !== 2}>
              <Label>
                Pour commencer, quel est l'objectif principal de votre futur
                site web ?
              </Label>
              <RadioGroup name="objectifSite">
                <RadioField>
                  <Radio value="essential" />
                  <Label>
                    Vitrine Élégante : Présentez votre activité et gagnez la
                    confiance de vos visiteurs.
                  </Label>
                  <Description>
                    Un site simple et professionnel pour montrer qui vous êtes,
                    vos services et rassurer vos clients.
                  </Description>
                </RadioField>
                <RadioField>
                  <Radio value="pro" />
                  <Label>
                    Booster de Prospects : Transformez vos visiteurs en contacts
                    qualifiés et obtenez plus de demandes de devis.
                  </Label>
                  <Description>
                    Parfait pour développer votre activité ! Inclut un blog pour
                    partager votre expertise et des formulaires avancés pour
                    capter l'intérêt de vos prospects.
                  </Description>
                </RadioField>
                <RadioField>
                  <Radio value="premium" />
                  <Label>
                    E-commerce Puissant : Lancez et développez votre boutique en
                    ligne pour vendre vos produits sans limite.
                  </Label>
                  <Description>
                    Idéal pour les entreprises souhaitant vendre directement en
                    ligne. Bénéficiez d'une boutique performante avec gestion
                    des produits, des paiements sécurisés et bien plus encore.
                  </Description>
                </RadioField>
              </RadioGroup>
            </Field>

            <Field hidden={step !== 3}>
              <Label>
                Parlons de vos clients ! À qui s'adresse principalement votre
                site web ?
              </Label>
              <Textarea name="cible" />
              <Description>
                Imaginez votre visiteur idéal... Quel âge a-t-il ? Quel est son
                métier ? Quels sont ses besoins et ses centres d'intérêt ? Où
                habite-t-il ? Plus vous nous donnez de détails, mieux nous
                pourrons concevoir un site qui lui parle directement. Exemple :
                "Jeunes professionnels de 30-45 ans à Paris, intéressés par les
                solutions de gestion de projet innovantes.
              </Description>
            </Field>

            <Field hidden={step !== 4}>
              <Label>
                Quels sont les principaux concurrents directs ou les leaders
                reconnus dans votre secteur d'activité en ligne ?
              </Label>
              <Textarea name="concurrents" />
              <Description>
                Veuillez indiquer 2 ou 3 entreprises ou sites web qui sont vos
                concurrents directs principaux ou qui sont considérés comme des
                leaders dans votre domaine d'activité en ligne. Cela nous aidera
                à comprendre le paysage concurrentiel.
              </Description>
            </Field>

            <Field hidden={step !== 5}>
              <Label>
                Avez-vous déjà une identité visuelle pour votre marque (logo,
                couleurs, charte graphique) ?
              </Label>
              <Select name="identiteVisuelle">
                <option value="yes">
                  Oui, j’ai déjà un logo et une charte graphique complète
                </option>
                <option value="partial">Partiellement (logo seulement)</option>
                <option value="no">Non, je n’ai pas d’identité visuelle</option>
              </Select>
              <Description>
                Si vous avez déjà un logo et/ou une charte graphique, nous les
                intégrerons pour assurer une image de marque cohérente. Sinon,
                pas de souci ! La création d'une identité visuelle
                professionnelle est incluse dans votre abonnement Klyx.
              </Description>
            </Field>

            <Field hidden={step !== 6}>
              <Label>
                Pour le contenu de votre site, préférez-vous nous confier la
                rédaction et l'optimisation, ou fournirez-vous les textes ?
              </Label>
              <RadioGroup name="textes">
                <RadioField>
                  <Radio value="yes" />
                  <Label>Oui, prenez tout en charge</Label>
                </RadioField>
                <RadioField>
                  <Radio value="no" />
                  <Label>Non, nous fournirons le contenu</Label>
                </RadioField>
              </RadioGroup>
              <Description>
                Notre équipe de professionnels peut créer des textes percutants
                et optimisés pour le référencement (SEO) qui captiveront vos
                visiteurs. Si vous préférez écrire votre propre contenu, nous
                l'intégrerons avec plaisir.
              </Description>
            </Field>

            <Field hidden={step !== 7}>
              <Label>
                Quelles sont les fonctionnalités indispensables pour atteindre
                vos objectifs avec ce site web ? Cochez celles qui sont
                importantes pour vous.
              </Label>
              <CheckboxGroup>
                <CheckboxField>
                  <Checkbox
                    name="fonctionnalites"
                    value="blog"
                    defaultChecked
                  />
                  <Label>
                    Blog / Actualités : Partagez vos dernières nouvelles et
                    votre expertise.
                  </Label>
                </CheckboxField>
                <CheckboxField>
                  <Checkbox name="fonctionnalites" value="boutique" />
                  <Label>
                    Boutique en ligne / Paiement sécurisé : Vendez vos produits
                    ou services directement en ligne en toute confiance.
                  </Label>
                </CheckboxField>
                <CheckboxField>
                  <Checkbox name="fonctionnalites" value="espaceClient" />
                  <Label>
                    Espace client sécurisé : Offrez un accès personnalisé à vos
                    clients.
                  </Label>
                </CheckboxField>
                <CheckboxField>
                  <Checkbox name="fonctionnalites" value="formulaire" />
                  <Label>
                    Formulaire avancé : Créez des formulaires sur mesure pour
                    des devis, des prises de rendez-vous, des sondages, etc.
                  </Label>
                </CheckboxField>
                <CheckboxField>
                  <Checkbox name="fonctionnalites" value="crm" />
                  <Label>
                    Intégration Newsletter / CRM : Gérez facilement vos contacts
                    et vos campagnes marketing.
                  </Label>
                </CheckboxField>
                <CheckboxField>
                  <Checkbox name="fonctionnalites" value="chat" />
                  <Label>
                    Chat en temps réel : Interagissez directement avec vos
                    visiteurs pour répondre à leurs questions.
                  </Label>
                </CheckboxField>
              </CheckboxGroup>
            </Field>

            <Field hidden={step !== 8}>
              <Label>
                Y a-t-il des sites web dont vous aimez particulièrement le
                design ou l'expérience utilisateur ?
              </Label>
              <Textarea name="inspiration" />
              <Description>
                Partagez-nous 2 ou 3 liens de sites internet qui vous plaisent
                visuellement ou dont vous appréciez la navigation. Cela nous
                aidera à comprendre vos préférences esthétiques. Exemple :
                www.sitequiinspire1.com, www.sitequiinspire2.net
              </Description>
            </Field>

            <Field hidden={step !== 9}>
              <Label>
                Avez-vous déjà choisi un nom de domaine pour votre futur site
                web ?
              </Label>
              <Select name="nomDeDomaine">
                <option value="yes">Oui</option>
                <option value="no">Non</option>
              </Select>
              <Description>
                Si vous avez déjà un nom de domaine, parfait ! Nous
                l'utiliserons. Sinon, la création d'un nom de domaine pertinent
                est incluse dans votre offre Klyx.
              </Description>
            </Field>

            <Field hidden={step !== 10}>
              <Label>
                Quelle est votre adresse e-mail pour que nous puissions vous
                contacter et finaliser votre projet ?
              </Label>
              <Input type="email" name="email" />
            </Field>

            <Field hidden={step !== 11}>
              <Label>Autres informations concernant votre projet web ?</Label>
              <Textarea
                name="autresInformations"
                placeholder="Si vous avez d'autres détails, des préférences particulières ou des informations complémentaires à nous communiquer concernant votre futur site web, n'hésitez pas à les mentionner ici..."
              />
              <Description>
                Toute information supplémentaire peut nous aider à mieux
                comprendre vos besoins et à vous proposer la solution la plus
                adaptée.
              </Description>
            </Field>
          </FieldGroup>

          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button type="button" onClick={prevStep} outline>
                ← Étape précédente
              </Button>
            )}
            {step < totalSteps ? (
              <Button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                Étape suivante →
              </Button>
            ) : (
              <Button type="submit" color="blue">
                Envoyer mon brief complet
              </Button>
            )}
          </div>
        </Fieldset>
      </form>
    </div>
  );
}
