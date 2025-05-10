import { auth } from "@/auth";
import { redirect } from "next/navigation";
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
  Square2StackIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { SignOut } from "@/components/formulaire/SignOut";

export default async function DashboardLayout({ children }) {
  const session = await auth();
  if (!session?.user) redirect("/login");

  return (
    <SidebarLayout
      navbar={
        <Navbar>
          <NavbarSpacer />
          <NavbarSection>
            <Dropdown>
              <DropdownButton as={NavbarItem}>
                <Avatar src="" square />
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
                <DropdownItem href="/dashboard/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Politique de confidentialité</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/dashboard/support">
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
              <SidebarItem href="/dashboard">
                <HomeIcon />
                <SidebarLabel>Tableau de bord</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/dashboard/page">
                <PencilSquareIcon />
                <SidebarLabel>Pages</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/dashboard/seo">
                <SparklesIcon />
                <SidebarLabel>SEO & Trafic</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/dashboard/ads">
                <MegaphoneIcon />
                <SidebarLabel>Publicités</SidebarLabel>
              </SidebarItem>
              <SidebarItem href="/dashboard/blog">
                <Square2StackIcon />
                <SidebarLabel>Blog</SidebarLabel>
              </SidebarItem>
            </SidebarSection>
            <SidebarSpacer />
            <SidebarSection>
              <SidebarItem href="/dashboard/support">
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
                <DropdownItem href="/dashboard/billing">
                  <CreditCardIcon />
                  <DropdownLabel>Facturation</DropdownLabel>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem href="/privacy-policy">
                  <ShieldCheckIcon />
                  <DropdownLabel>Politique de confidentialité</DropdownLabel>
                </DropdownItem>
                <DropdownItem href="/share-feedback">
                  <LightBulbIcon />
                  <DropdownLabel>Partage de feedback</DropdownLabel>
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
