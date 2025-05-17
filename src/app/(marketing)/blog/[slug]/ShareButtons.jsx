"use client";
import Link from "next/link";
import {
  twitterShareUrl,
  facebookShareUrl,
  linkedinShareUrl,
  mailtoShareUrl,
} from "@/lib/share";
import { FaTwitter, FaFacebookF, FaLinkedin } from "react-icons/fa";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export function ShareButtons({ title, url }) {
  const links = [
    {
      href: twitterShareUrl({ title, url }),
      label: "Partager sur Twitter",
      icon: <FaTwitter className="size-5 text-[#1DA1F2]" />,
    },
    {
      href: facebookShareUrl(url),
      label: "Partager sur Facebook",
      icon: <FaFacebookF className="size-5 text-[#1877F2]" />,
    },
    {
      href: linkedinShareUrl(url),
      label: "Partager sur LinkedIn",
      icon: <FaLinkedin className="size-5 text-[#0A66C2]" />,
    },
    {
      href: mailtoShareUrl({ title, url }),
      label: "Partager par email",
      icon: <EnvelopeIcon className="size-5 text-[#0077B6]" />,
    },
  ];

  return (
    <div className="mt-12 flex flex-wrap gap-4">
      {links.map(({ href, label, icon }) => (
        <Link
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex items-center gap-2 rounded-md border px-3 py-1 text-sm transition hover:bg-gray-100 focus:outline focus:outline-2 focus:outline-blue-500"
        >
          {icon}
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
}
