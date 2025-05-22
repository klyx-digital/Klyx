"use client";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiPostgresql,
} from "react-icons/si";
import { useState } from "react";

export function Techno() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const techCategories = [
    {
      title: "FRONTEND",
      subtitle:
        "Des interfaces web modernes et intuitives pour captiver vos visiteurs",
      technologies: [
        {
          name: "HTML5",
          icon: SiHtml5,
          color: "#E34F26",
          description:
            "Une base solide et logique pour un site accessible et bien référencé.",
        },
        {
          name: "CSS3",
          icon: SiCss3,
          color: "#1572B6",
          description:
            "Un design sur mesure et attrayant qui renforce votre identité visuelle",
        },
        {
          name: "JavaScript",
          icon: SiJavascript,
          color: "#F7DF1E",
          description:
            "Des fonctionnalités interactives pour engager vos utilisateurs et rendre votre site vivant",
        },
        {
          name: "React",
          icon: SiReact,
          color: "#61DAFB",
          description:
            " Des applications web rapides, fluides et riches en fonctionnalités pour une expérience utilisateur optimale.",
        },
        {
          name: "Next.js",
          icon: SiNextdotjs,
          color: "#000000",
          description:
            " Des sites web ultra-rapides et parfaitement optimisés pour être trouvés facilement sur Google, augmentant votre visibilité.",
        },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          color: "#06B6D4",
          description:
            "Un design moderne et adaptable à tous les écrans (ordinateurs, tablettes, mobiles) pour toucher une audience plus large.",
        },
        {
          name: "SASS",
          icon: SiSass,
          color: "#CC6699",
          description:
            "Un code CSS organisé et maintenable, garantissant la pérennité et l'évolutivité de votre design.",
        },
      ],
    },
    {
      title: "BACKEND",
      subtitle:
        "Une logique serveur robuste et évolutive pour des fonctionnalités avancées et une performance optimale.",
      technologies: [
        {
          name: "Node.js",
          icon: SiNodedotjs,
          color: "#5FA04E",
          description:
            "Un backend rapide et efficace, capable de gérer un trafic important et d'alimenter des fonctionnalités complexes.",
        },
        {
          name: "Express.js",
          icon: SiExpress,
          color: "#000000",
          description:
            "Une base solide et flexible pour construire des applications web et des API performantes et sécurisées.",
        },
      ],
    },
    {
      title: "BASE DE DONNÉES",
      subtitle:
        "Un stockage de données flexible et performant pour une gestion optimale de votre contenu et de vos informations.",
      technologies: [
        {
          name: "MongoDB",
          icon: SiMongodb,
          color: "#47A248",
          description:
            "Une base de données adaptable à la complexité de votre projet, permettant une gestion efficace et évolutive de vos données.",
        },
        {
          name: "PostgreSQL",
          icon: SiPostgresql,
          color: "#336791",
          description:
            "Une base de données relationnelle pour des projets structurés",
        },
      ],
    },
    {
      title: "OUTILS",
      subtitle:
        "Des outils de développement collaboratifs et efficaces pour garantir un site web de haute qualité, livré dans les meilleurs délais.",
      technologies: [
        {
          name: "Git",
          icon: SiGit,
          color: "#F05032",
          description:
            "Une gestion rigoureuse du code source pour un développement stable, sans erreurs et avec la possibilité de revenir en arrière à tout moment.",
        },
        {
          name: "GitHub",
          icon: SiGithub,
          color: "#181717",
          description:
            "Une plateforme collaborative pour un travail d'équipe fluide et une gestion transparente de l'avancement de votre projet.",
        },
        {
          name: "Postman",
          icon: SiPostman,
          color: "#FF6C37",
          description:
            "Des tests approfondis pour assurer la fiabilité et le bon fonctionnement de chaque aspect de votre site avant sa mise en ligne.",
        },
      ],
    },
  ];

  return (
    <section className="relative px-4 py-8 md:py-16 w-full max-w-7xl mx-auto overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 ">
          Notre boîte à outils technologique : performance et innovation pour
          votre projet web.
        </h2>

        <p className="mt-4 text-lg text-gray-600">
          Nous misons sur un ensemble de technologies modernes et éprouvées pour
          développer des applications web qui dépassent vos attentes en termes
          de performance, de sécurité et d'évolutivité. Notre expertise garantit
          des solutions robustes et pérennes.
        </p>
      </div>

      {/* Technologies Grid */}
      <div className="relative z-10 space-y-12">
        {techCategories.map((category, categoryIndex) => (
          <div key={category.title} className="group">
            {/* Category Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 tracking-wide">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500">{category.subtitle}</p>
                </div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>

            {/* Technologies Cards */}
            <div
              className={`grid gap-6 ${
                category.technologies.length > 4
                  ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
                  : `grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(
                      category.technologies.length,
                      4
                    )}`
              }`}
            >
              {category.technologies.map((tech, techIndex) => {
                const IconComponent = tech.icon;
                const isHovered =
                  hoveredTech === `${categoryIndex}-${techIndex}`;

                return (
                  <div
                    key={tech.name}
                    className="group/card relative"
                    onMouseEnter={() =>
                      setHoveredTech(`${categoryIndex}-${techIndex}`)
                    }
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    {/* Card */}
                    <div className="relative h-full p-6 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer">
                      {/* Hover Background Effect */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-10 transition-opacity duration-300"
                        style={{ backgroundColor: tech.color }}
                      ></div>

                      {/* Content */}
                      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                        {/* Icon */}
                        <div className="relative">
                          <div
                            className="absolute inset-0 rounded-full blur-lg opacity-20 group-hover/card:opacity-40 transition-opacity duration-300"
                            style={{ backgroundColor: tech.color }}
                          ></div>
                          <IconComponent
                            size={48}
                            style={{ color: tech.color }}
                            className="relative z-10 transform group-hover/card:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Tech Name */}
                        <h4 className="font-semibold text-gray-900 text-lg group-hover/card:text-xl transition-all duration-300">
                          {tech.name}
                        </h4>

                        {/* Description (visible on hover) */}
                        <p
                          className={`text-sm text-gray-500 transition-all duration-300 ${
                            isHovered
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2"
                          }`}
                        >
                          {tech.description}
                        </p>
                      </div>

                      {/* Decorative Border */}
                      <div
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r rounded-full transition-all duration-300 group-hover/card:w-full w-0"
                        style={{
                          backgroundImage: `linear-gradient(90deg, transparent, ${tech.color}, transparent)`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
