"use client";

import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from "@/components/ui/dropdown";
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
  { label: "Offres & Tarifs", url: "/pricing" },
  { label: "Pourquoi Klyx ?", url: "/why-klyx" },
  { label: "Blog", url: "/blog" },
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
