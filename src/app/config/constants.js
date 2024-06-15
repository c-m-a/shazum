import { atom } from "jotai";
import { ICONS } from "@/shared/utils/icons";

export const navItems = [
  {
    title: "Features",
  },
  {
    title: "Pricing",
  },
  {
    title: "Resources",
  },
  {
    title: "Docs",
  },
];

export const partners = [
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/resume-worded.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/clickhole.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/cre.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/rap-tv.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/awa.svg",
  },
];

export const babyPlan = [
  {
    title: "Up to 2,000 subscribers",
  },
  {
    title: "Unlimited sends",
  },
  {
    title: "Custom newsletter",
  },
  {
    title: "Newsletter analytics",
  },
];

export const KongPlan = [
  {
    title: "Up to 10,000 subscribers",
  },
  {
    title: "Custom domains",
  },
  {
    title: "API access",
  },
  {
    title: "Newsletter community",
  },
];

export const DinoPlan = [
  {
    title: "Up to 100,000 subscribers",
  },
  {
    title: "Referal program",
  },
  {
    title: "AI support",
  },
  {
    title: "Advanced support system",
  },
  {
    title: "Ad Network",
  },
];

export const sideBarActiveItem = atom("/dashboard");

export const reportFilterActiveItem = atom("Overview");

export const emailEditorDefaultValue = atom("");

export const settingsActiveItem = atom("Profile");

export const sideBarItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ICONS.dashboard,
  },
  {
    title: "Write",
    url: "/dashboard/write",
    icon: ICONS.write,
  },
  {
    title: "Grow",
    url: "/dashboard/grow",
    icon: ICONS.analytics,
  },
  {
    title: "Audience",
    url: "/dashboard/audience",
    icon: ICONS.audience,
  },
];

export const sideBarBottomItems = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: ICONS.settings,
  },
  {
    title: "View Site",
    url: "/",
    icon: ICONS.world,
  },
];

export const subscribersData = [
  {
    _id: "64f717a45331088de2ce886c",
    email: "programmershahriarsajeeb@gmail.com",
    createdAt: "5Feb 2024",
    source: "Becodemy website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce886c",
    email: "support@becodemy.com",
    createdAt: "8Feb 2024",
    source: "External website",
    status: "subscribed",
  },
];
