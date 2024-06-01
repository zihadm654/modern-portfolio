"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MainNavItem } from "@/types";
import { useSession } from "next-auth/react";

import useScroll from "@/hooks/use-scroll";
import { useSigninModal } from "@/hooks/use-signin-modal";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/shared/icons";
import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

import { MainNav } from "./main-nav";
import { ModeToggle } from "./mode-toggle";
import { UserAccountNav } from "./user-account-nav";

interface NavBarProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  rightElements?: React.ReactNode;
  scroll?: boolean;
  large?: boolean;
}

export function NavBar({
  items,
  children,
  rightElements,
  scroll = false,
  large = false,
}: NavBarProps) {
  const scrolled = useScroll(50);
  const signInModal = useSigninModal();
  const { data: session, status } = useSession();
  const selectedLayout = usePathname();
  // const dashBoard = selectedLayout.startsWith("/dashboard");

  return (
    <header
      className={`sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all ${
        scroll ? (scrolled ? "border-b" : "bg-background/0") : "border-b"
      }`}
    >
      <MaxWidthWrapper
        className="flex h-[60px] items-center justify-between py-4"
        large={large}
      >
        <MainNav items={items}>{children}</MainNav>

        <div className="flex items-center space-x-3">
          {rightElements}
          <ModeToggle />
          {session ? (
            <>
              <UserAccountNav user={session.user} />
            </>
          ) : status === "unauthenticated" ? (
            <Button
              className="gap-2 px-4"
              variant="default"
              size="sm"
              rounded="full"
              onClick={signInModal.onOpen}
            >
              <span>Sign In</span>
              <Icons.arrowRight className="size-4" />
            </Button>
          ) : null}
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
