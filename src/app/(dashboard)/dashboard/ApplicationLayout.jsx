"use client";

import { Avatar } from "@/components/ui/avatar";
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
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from "@/components/ui/navbar";
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
  SidebarItem,
} from "@/components/ui/sidebar";
import { SidebarLayout } from "@/components/ui/sidebar-layout";
import {
  Cog8ToothIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  UserIcon,
  ChevronUpIcon,
} from "@heroicons/react/16/solid";
import {
  CreditCardIcon,
  HomeIcon,
  MegaphoneIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { SignOut } from "@/components/formulaire/SignOut";
import { usePathname } from "next/navigation";

export function ApplicationLayout({ children, session }) {
  let pathname = usePathname();
  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src={session?.user?.image || ""} square />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="bottom end">
                <DropdownItem href="/dashboard/settings">
                  <UserIcon />
                  <DropdownLabel>Mon profil</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/dashboard/billing">
                  <CreditCardIcon />
                  <DropdownLabel>Facturation</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/dashboard/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Paramètres</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Politique de confidentialité</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/support">
                  <LightBulbIcon />
                  <DropdownLabel>Support</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <SignOut />
              </DropdownMenu>
            </Dropdown>
          </NavbarSection>
        </Navbar>
      }
      sidebar={
        <Sidebar>
          <SidebarHeader>
            <SidebarLabel className="text-xl font-semibold px-4 py-2">
              KLYX
            </SidebarLabel>
          </SidebarHeader>
          <SidebarBody>
            <SidebarSection>
              <SidebarItem
                href="/dashboard"
                current={pathname === "/dashboard"}
              >
                <HomeIcon />
                <SidebarLabel>Tableau de bord</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/dashboard/page"
                current={pathname === "/dashboard/page"}
              >
                <PencilSquareIcon />
                <SidebarLabel>Pages</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/dashboard/seo"
                current={pathname === "/dashboard/seo"}
              >
                <SparklesIcon />
                <SidebarLabel>SEO & Trafic</SidebarLabel>
              </SidebarItem>
              <SidebarItem
                href="/dashboard/ads"
                current={pathname === "/dashboard/ads"}
              >
                <MegaphoneIcon />
                <SidebarLabel>Publicités</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/support" current={pathname === "/support"}>
                <QuestionMarkCircleIcon />
                <SidebarLabel>Support</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
          </SidebarBody>
          <SidebarFooter className="max-lg:hidden">
            <Dropdown>
              <DropdownButton as={SidebarItem}>
                <span className="flex flex-col items-start px-4 pb-4">
                  <p className="text-sm font-medium text-zinc-950 dark:text-white">
                    {session?.user?.name || "Utilisateur"}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {session?.user?.email || "email inconnu"}
                  </p>
                </span>
                <ChevronUpIcon />
              </DropdownButton>
              <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href="/my-profile">
                  <UserIcon />
                  <DropdownLabel>Mon profil</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/settings">
                  <Cog8ToothIcon />
                  <DropdownLabel>Paramètres</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/billing">
                  <CreditCardIcon />
                  <DropdownLabel>Facturation</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Politique de confidentialité</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <SignOut />
              </DropdownMenu>
            </Dropdown>
          </SidebarFooter>
        </Sidebar>
      }
    >
      {children}
    </SidebarLayout>
  );
}
