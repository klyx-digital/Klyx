-- CreateTable
CREATE TABLE "SearchAnalyticsDay" (
    "id" TEXT NOT NULL,
    "siteUrl" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "clicks" INTEGER NOT NULL,
    "impressions" INTEGER NOT NULL,
    "ctr" DOUBLE PRECISION NOT NULL,
    "position" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "SearchAnalyticsDay_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SearchAnalyticsDay_siteUrl_idx" ON "SearchAnalyticsDay"("siteUrl");

-- CreateIndex
CREATE UNIQUE INDEX "SearchAnalyticsDay_siteUrl_date_key" ON "SearchAnalyticsDay"("siteUrl", "date");
