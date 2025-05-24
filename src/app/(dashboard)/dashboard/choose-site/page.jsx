"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  ExternalLink,
  Globe,
  CheckCircle2,
  Loader2,
  ArrowRight,
} from "lucide-react";

export default function ChooseSitePage() {
  const search = useSearchParams();
  const router = useRouter();
  const [linkingStates, setLinkingStates] = useState({});
  const [selectedSite, setSelectedSite] = useState(null);

  const raw = search.get("sites");

  if (!raw) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Globe className="w-8 h-8 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Aucune propriété trouvée
          </h3>
          <p className="text-slate-600">
            Veuillez vous reconnecter à Google Search Console.
          </p>
        </div>
      </div>
    );
  }

  const sites = JSON.parse(decodeURIComponent(raw));

  const linkSite = async (url) => {
    setLinkingStates((prev) => ({ ...prev, [url]: "loading" }));
    setSelectedSite(url);

    try {
      const response = await fetch("/api/site/link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        setLinkingStates((prev) => ({ ...prev, [url]: "success" }));
        setTimeout(() => {
          router.replace("/dashboard");
        }, 1000);
      } else {
        throw new Error("Erreur lors de la liaison");
      }
    } catch (error) {
      setLinkingStates((prev) => ({ ...prev, [url]: "error" }));
      setTimeout(() => {
        setLinkingStates((prev) => ({ ...prev, [url]: null }));
      }, 3000);
    }
  };

  const formatUrl = (url) => {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  };

  const getButtonState = (url) => {
    const state = linkingStates[url];
    if (state === "loading")
      return {
        text: "Connexion...",
        disabled: true,
        icon: Loader2,
        spinning: true,
      };
    if (state === "success")
      return {
        text: "Connecté",
        disabled: true,
        icon: CheckCircle2,
        spinning: false,
      };
    if (state === "error")
      return {
        text: "Erreur",
        disabled: false,
        icon: ArrowRight,
        spinning: false,
      };
    return {
      text: "Connecter",
      disabled: false,
      icon: ArrowRight,
      spinning: false,
    };
  };

  return (
    <div className="min-h-screen ">
      {/* Header Section */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-4">
              Sélectionnez votre site web
            </h1>
            <p className=" text-slate-600 max-w-2xl mx-auto">
              Choisissez le site que vous souhaitez connecter à votre dashboard.
              Vous pourrez analyser ses performances SEO et suivre son
              évolution.
            </p>
          </div>
        </div>
      </div>

      {/* Sites Selection */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-4 sm:gap-6">
          {sites.map((site, index) => {
            const buttonState = getButtonState(site.siteUrl);
            const IconComponent = buttonState.icon;
            const isSelected = selectedSite === site.siteUrl;

            return (
              <div
                key={site.siteUrl}
                className={`group relative bg-white rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isSelected && linkingStates[site.siteUrl] === "success"
                    ? "border-green-200 bg-green-50"
                    : isSelected
                    ? "border-blue-200 bg-blue-50"
                    : "border-slate-200 hover:border-blue-300"
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8">
                  <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                        linkingStates[site.siteUrl] === "success"
                          ? "bg-green-100"
                          : "bg-slate-100 group-hover:bg-blue-100"
                      }`}
                    >
                      {linkingStates[site.siteUrl] === "success" ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <ExternalLink className="w-6 h-6 text-slate-600 group-hover:text-blue-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">
                        {formatUrl(site.siteUrl)}
                      </h3>
                      <p className="text-sm text-slate-500">{site.siteUrl}</p>
                    </div>
                  </div>

                  <Button
                    onClick={() => linkSite(site.siteUrl)}
                    disabled={buttonState.disabled}
                    className="hover:cursor-pointer"
                  >
                    {buttonState.text}
                  </Button>
                </div>

                {/* Loading Overlay */}
                {linkingStates[site.siteUrl] === "loading" && (
                  <div className="absolute inset-0 bg-white/80 rounded-xl flex items-center justify-center">
                    <div className="flex items-center space-x-3">
                      <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
                      <span className="text-blue-600 font-medium">
                        Connexion en cours...
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
