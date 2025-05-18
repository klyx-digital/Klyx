"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { questionsByPlan, stepSchemas } from "./schema";
import { QuestionField } from "./QuestionField";
import { createAnswers } from "./action";
import { Button } from "@/components/ui/button";
import { FieldGroup, Fieldset } from "@/components/ui/fieldset";

export default function Wizard({ plan }) {
  const steps = questionsByPlan[plan] ?? questionsByPlan.default;
  const [stepIdx, setStepIdx] = useState(0);

  const currentSchema = stepSchemas(steps[stepIdx]);

  const {
    handleSubmit,
    control,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(currentSchema),
    defaultValues: {},
    mode: "onSubmit",
  });

  async function onNext(data) {
    const valid = await trigger();
    if (!valid) return;

    localStorage.setItem(
      `klyx-${plan}`,
      JSON.stringify({ ...getAll(), ...data })
    );

    if (stepIdx < steps.length - 1) {
      setStepIdx(stepIdx + 1);
    } else {
      await createAnswers({ plan, answers: getAll() });
    }
  }

  const getAll = () => JSON.parse(localStorage.getItem(`klyx-${plan}`) || "{}");

  const question = steps[stepIdx];

  const navSteps = steps.map((_, idx) => ({
    name: `Étape ${idx + 1}`,
    href: "#",
    status:
      idx < stepIdx ? "complete" : idx === stepIdx ? "current" : "upcoming",
  }));

  return (
    <div className="py-6 md:py-12">
      <form
        onSubmit={handleSubmit(onNext)}
        className="mx-auto max-w-2xl space-y-8"
      >
        <Fieldset>
          <FieldGroup>
            <nav
              aria-label="Progress"
              className="flex items-center justify-center mb-4"
            >
              <p className="text-sm font-medium">
                Étape {stepIdx + 1} sur {steps.length}
              </p>
              <ol role="list" className="ml-8 flex items-center space-x-5">
                {navSteps.map((step) => (
                  <li key={step.name}>
                    {step.status === "complete" ? (
                      <span
                        className="block size-2.5 rounded-full bg-blue-600"
                        aria-hidden="true"
                      />
                    ) : step.status === "current" ? (
                      <span
                        className="relative flex items-center justify-center"
                        aria-current="step"
                      >
                        <span
                          className="absolute flex size-5 p-px"
                          aria-hidden="true"
                        >
                          <span className="size-full rounded-full bg-blue-200" />
                        </span>
                        <span
                          className="relative block size-2.5 rounded-full bg-blue-600"
                          aria-hidden="true"
                        />
                      </span>
                    ) : (
                      <span
                        className="block size-2.5 rounded-full bg-gray-200"
                        aria-hidden="true"
                      />
                    )}
                    <span className="sr-only">{step.name}</span>
                  </li>
                ))}
              </ol>
            </nav>

            {/* Question */}
            <QuestionField
              question={question}
              control={control}
              errors={errors}
            />

            <div className="flex justify-between">
              <Button
                type="button"
                color="white"
                disabled={stepIdx === 0}
                onClick={() => setStepIdx(stepIdx - 1)}
              >
                Retour
              </Button>

              <Button type="submit" color="blue" disabled={isSubmitting}>
                {stepIdx === steps.length - 1 ? "Continuer" : "Suivant"}
              </Button>
            </div>
          </FieldGroup>
        </Fieldset>
      </form>
    </div>
  );
}
