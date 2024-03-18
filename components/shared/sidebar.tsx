"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "@/config";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/logo-text.svg"
            alt="Imaginify"
            width={180}
            height={28}
          />
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={cn(
                      "sidebar-nav_element group",
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700",
                    )}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={isActive ? "brightness-200" : ""}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={cn(
                      "sidebar-nav_element group",
                      isActive
                        ? "bg-purple-gradient text-white"
                        : "text-gray-700",
                    )}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt={link.label}
                        width={24}
                        height={24}
                        className={isActive ? "brightness-200" : ""}
                      />
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer p-3">
                <UserButton afterSignOutUrl="/sign-in" showName />
              </li>

              <li className="sidebar-nav_element group text-gray-700">
                <Link
                  className="sidebar-link"
                  href={links.sourceCode}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    src="/assets/icons/github.svg"
                    alt="Github"
                    width={24}
                    height={24}
                  />
                  Source Code
                </Link>
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Sign in</Link>
            </Button>

            <Button
              className="sidebar-nav_element group bg-purple-gradient text-white"
              asChild
            >
              <Link
                className="gap-x-2"
                href={links.sourceCode}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  src="/assets/icons/github.svg"
                  alt="Github"
                  width={24}
                  height={24}
                  className="brightness-200"
                />
                Source Code
              </Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};
