"use client";

import Link from "next/link";

export function Stepper({ currentStep, totalSteps }) {
  // Création d'un tableau d'étapes dynamique basé sur currentStep et totalSteps
  const steps = Array.from({ length: totalSteps }, (_, i) => {
    const stepNum = i + 1;
    return {
      name: `Étape ${stepNum}`,
      href: "#",
      status:
        stepNum < currentStep
          ? "complete"
          : stepNum === currentStep
          ? "current"
          : "upcoming",
    };
  });

  return (
    <nav
      aria-label="Progress"
      className="flex items-center justify-center mb-6"
    >
      <p className="text-sm font-medium">
        Question {currentStep} sur {totalSteps}
      </p>
      <ol role="list" className="ml-8 flex items-center space-x-5">
        {steps.map((step) => (
          <li key={step.name}>
            {step.status === "complete" ? (
              <span className="block size-2.5 rounded-full bg-blue-600 hover:bg-blue-900">
                <span className="sr-only">{step.name}</span>
              </span>
            ) : step.status === "current" ? (
              <span
                aria-current="step"
                className="relative flex items-center justify-center"
              >
                <span aria-hidden="true" className="absolute flex size-5 p-px">
                  <span className="size-full rounded-full bg-blue-200" />
                </span>
                <span
                  aria-hidden="true"
                  className="relative block size-2.5 rounded-full bg-blue-600"
                />
                <span className="sr-only">{step.name}</span>
              </span>
            ) : (
              <span className="block size-2.5 rounded-full bg-gray-200 hover:bg-gray-400">
                <span className="sr-only">{step.name}</span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
