import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/ui/dropdown";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const categoryLabels = {
  seo: "Gagner en visibilité (SEO)",
  performance: "Améliorer la performance",
  conversions: "Booster les conversions (E-commerce)",
  efficace: "Créer un site efficace",
  ux: "Optimiser l’expérience utilisateur",
};

export function Categories({ selected }) {
  const label = selected ? categoryLabels[selected] : "Toutes les catégories";

  return (
    <Dropdown>
      <DropdownButton plain>
        {label}
        <ChevronDownIcon />
      </DropdownButton>
      <DropdownMenu className="min-w-48">
        <DropdownItem href="/blog">Tous les articles</DropdownItem>
        <DropdownItem href={`/blog?category=seo`}>
          Gagner en visibilité (SEO)
        </DropdownItem>
        <DropdownItem href={`/blog?category=performance`}>
          Améliorer la performance
        </DropdownItem>
        <DropdownItem href={`/blog?category=conversions`}>
          Booster les conversions (E-commerce)
        </DropdownItem>
        <DropdownItem href={`/blog?category=efficace`}>
          Créer un site efficace
        </DropdownItem>
        <DropdownItem href={`/blog?category=ux`}>
          Optimiser l’expérience utilisateur
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
