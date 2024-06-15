"use client";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function Providers({ children }) {
  const pathname = usePathname();
  const paths = new Set([
    "/",
    "/dashboard/new-email",
    "/sign-up",
    "/sign-in",
    "/subscribe",
  ]);

  return (
    <NextUIProvider>
      {!paths.has(pathname) ? (
        <div className="w-full flex">
          <div className="w-[290px] h-screen overflow-y-scroll"></div>
        </div>
      ) : (
        <>{children}</>
      )}
    </NextUIProvider>
  )
}
