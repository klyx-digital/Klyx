-- CreateTable
CREATE TABLE "Questionnaire" (
    "id" TEXT NOT NULL,
    "nameEntreprise" TEXT,
    "objectifSite" TEXT NOT NULL,
    "cible" TEXT,
    "concurrents" TEXT,
    "identiteVisuelle" TEXT NOT NULL,
    "textes" TEXT NOT NULL,
    "fonctionnalites" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "inspiration" TEXT,
    "nomDeDomaine" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "autresInformations" TEXT,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Questionnaire_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Questionnaire_email_idx" ON "Questionnaire"("email");

-- AddForeignKey
ALTER TABLE "Questionnaire" ADD CONSTRAINT "Questionnaire_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
