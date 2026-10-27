// Kelas Tailwind bersama (REQ §6.4). Hanya string, tanpa library tambahan.

export const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export const btnPrimary = `inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark ${focusRing}`;

export const btnSecondary = `inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 ${focusRing}`;

export const btnSmall = `inline-flex h-9 items-center justify-center gap-2 rounded-lg bg-accent px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark ${focusRing}`;

export const textLink = `font-medium text-accent underline-offset-4 hover:underline ${focusRing}`;

export const badge =
  "rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-600";

export const tag =
  "rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600";
