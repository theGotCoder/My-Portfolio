import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-950 w-full border-t border-zinc-900">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-6 max-w-7xl mx-auto">
        <div className="text-zinc-500 font-sans text-xs mb-6 md:mb-0">
          © {currentYear} MR ERROR. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a target="_blank" className="text-zinc-500 hover:text-zinc-300 transition-opacity duration-200 hover:underline font-sans text-xs" href={PORTFOLIO_DATA.contact.socials.github}>GitHub</a>
          <a target="_blank" className="text-zinc-500 hover:text-zinc-300 transition-opacity duration-200 hover:underline font-sans text-xs" href={PORTFOLIO_DATA.contact.socials.linkedin}>LinkedIn</a>
          <a target="_blank" className="text-zinc-500 hover:text-zinc-300 transition-opacity duration-200 hover:underline font-sans text-xs" href={PORTFOLIO_DATA.contact.socials.twitter}>Twitter</a>
          <a target="_blank" className="text-zinc-500 hover:text-zinc-300 transition-opacity duration-200 hover:underline font-sans text-xs" href={PORTFOLIO_DATA.contact.socials.email}>Email</a>
        </div>
      </div>
    </footer>
  );
}
