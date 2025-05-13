"use client";

import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/ui/dropdown";
import { Cog8ToothIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarLabel,
  NavbarSection,
  NavbarSpacer,
} from "@/components/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarDivider,
  SidebarSpacer,
} from "@/components/ui/sidebar";
import { StackedLayout } from "@/components/ui/stacked-layout";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Accueil", url: "/" },
  { label: "Tarifs", url: "/pricing" },
  { label: "Pourquoi Klyx ?", url: "/why-klyx" },
];

export function MarketingLayout({ children }) {
  const pathname = usePathname();
  return (
    <StackedLayout
      navbar={
        <Navbar>
          <Dropdown>
            <DropdownButton as={NavbarItem} className="max-lg:hidden">
              <NavbarLabel>KLYX</NavbarLabel>
            </DropdownButton>
          </Dropdown>
          <NavbarDivider className="max-lg:hidden" />
          <NavbarSection className="max-lg:hidden">
            {navItems.map(({ label, url }) => (
              <NavbarItem key={label} href={url} current={pathname === url}>
                {label}
              </NavbarItem>
            ))}
            <Dropdown>
              <DropdownButton plain>
                Blog
                <ChevronDownIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-48">
                <DropdownItem href="/blog">Tous les articles</DropdownItem>
                <DropdownItem href="/blog/seo">
                  Gagner en visibilité (SEO)
                </DropdownItem>
                <DropdownItem href="/blog/performance">
                  Améliorer la performance
                </DropdownItem>
                <DropdownItem href="/blog/conversions">
                  Booster les conversions (E-commerce)
                </DropdownItem>
                <DropdownItem href="/blog/efficace">
                  Créer un site efficace
                </DropdownItem>
                <DropdownItem href="/blog/ux">
                  Optimiser l’expérience utilisateur
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
          <NavbarSpacer />
          <NavbarDivider />
          <NavbarSection className="max-lg:hidden">
            <NavbarItem href="/login">Connexion</NavbarItem>
            <NavbarItem
              href="/register"
              className="bg-black rounded-xs text-white"
            >
              <span className="text-white">Inscription</span>
            </NavbarItem>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <Dropdown>
              <DropdownButton as={SidebarItem} className="lg:mb-2.5">
                <SidebarLabel>KLYX</SidebarLabel>
              </DropdownButton>
            </Dropdown>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              {navItems.map(({ label, url }) => (
                <SidebarItem key={label} href={url} current={pathname === url}>
                  {label}
                </SidebarItem>
              ))}
              <SidebarItem href="/blog">Blog</SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarDivider />
            <SidebarSection>
              <SidebarItem href="/login">Connexion</SidebarItem>
              <SidebarItem href="/register" className="bg-black rounded-xs">
                <span className="text-white">Inscription</span>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
        </Sidebar>
      }
    >
      {children}
    </StackedLayout>
  );
}
