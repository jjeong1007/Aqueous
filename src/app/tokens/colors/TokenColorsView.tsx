"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Check, Search } from "lucide-react";
import {
  backgroundColorTokens,
  groupTokensByAttribute,
  type ColorTokenEntry,
} from "@/lib/color-tokens";

function matchesQuery(token: ColorTokenEntry, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    token.name.toLowerCase().includes(q) ||
    token.hex.toLowerCase().includes(q) ||
    token.primitive.toLowerCase().includes(q) ||
    token.attribute.toLowerCase().includes(q)
  );
}

function useCopyFeedback() {
  const [copied, setCopied] = useState(false);

  async function copy(value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setCopied(false);
    }
  }

  return { copied, copy };
}

function CopyableTokenName({ name }: { name: string }) {
  const { copied, copy } = useCopyFeedback();

  return (
    <button
      type="button"
      onClick={() => copy(name)}
      title={copied ? "Copied" : `Copy ${name}`}
      aria-label={copied ? `Copied ${name}` : `Copy token ${name}`}
      className="inline-flex max-w-full items-center gap-1.5 rounded-md bg-bg-secondary px-2 py-1 text-left font-mono text-[13px] leading-5 text-text-primary transition-colors hover:bg-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
    >
      <code className="truncate">{name}</code>
      {copied ? (
        <Check
          aria-hidden
          className="size-3.5 shrink-0 text-icon-brand"
          strokeWidth={2}
        />
      ) : null}
    </button>
  );
}

function LightValueCard({
  hex,
  primitive,
}: {
  hex: string;
  primitive: string;
}) {
  const { copied, copy } = useCopyFeedback();

  return (
    <button
      type="button"
      onClick={() => copy(primitive)}
      title={copied ? "Copied" : `Copy ${primitive}`}
      aria-label={copied ? `Copied ${primitive}` : `Copy primitive ${primitive}`}
      className="w-full max-w-[200px] overflow-hidden rounded-lg border border-neutral-300 bg-bg-primary text-left transition-colors hover:border-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
    >
      <div
        className="mx-2 mt-2 h-8 rounded-md border border-neutral-200"
        style={{ backgroundColor: hex }}
        title={hex}
      />
      <p className="flex items-center gap-1.5 px-3 py-2 font-mono text-sm text-text-primary">
        <span className="truncate">{primitive}</span>
        {copied ? (
          <Check
            aria-hidden
            className="size-3.5 shrink-0 text-icon-brand"
            strokeWidth={2}
          />
        ) : null}
      </p>
    </button>
  );
}

function DarkValuePlaceholder() {
  return (
    <div className="w-full max-w-[200px] overflow-hidden rounded-lg bg-neutral-700">
      <div className="mx-2 mt-2 h-8 rounded-md bg-black/35" />
      <p className="px-3 py-2 font-mono text-sm text-white/50">—</p>
    </div>
  );
}

function TokenRow({ token }: { token: ColorTokenEntry }) {
  return (
    <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(180px,0.8fr)_minmax(180px,0.8fr)] items-center gap-6 py-5">
      <div className="min-w-0">
        <CopyableTokenName name={token.name} />
      </div>
      <LightValueCard hex={token.hex} primitive={token.primitive} />
      <DarkValuePlaceholder />
    </div>
  );
}

export function TokenColorsView() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const groups = useMemo(() => {
    const filtered = backgroundColorTokens.filter((token) =>
      matchesQuery(token, deferredQuery),
    );
    return groupTokensByAttribute(filtered);
  }, [deferredQuery]);

  return (
    <main className="flex flex-1 flex-col px-10 py-10">
      <h1 className="text-[32px] font-bold tracking-tight text-text-primary">
        Color
      </h1>

      <label className="relative mt-6 block max-w-xl">
        <span className="sr-only">Search color tokens</span>
        <Search
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-icon-secondary"
          strokeWidth={1.75}
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by token, primitive, or hex…"
          className="w-full rounded-lg border border-neutral-300 bg-bg-primary py-2.5 pr-3 pl-10 text-sm text-text-primary outline-none placeholder:text-text-tertiary focus:border-brand-500"
        />
      </label>

      <section className="mt-12">
        <h2 className="text-xl font-bold text-text-primary">Background</h2>

        <div className="mt-6">
          <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(180px,0.8fr)_minmax(180px,0.8fr)] gap-6 border-b border-neutral-300 pb-3 text-sm text-text-secondary">
            <span>Token and description</span>
            <span>Light value</span>
            <span>Dark value</span>
          </div>

          {groups.length === 0 ? (
            <p className="py-8 text-sm text-text-secondary">
              No tokens match “{query.trim()}”.
            </p>
          ) : (
            groups.map((group, groupIndex) => {
              const isLastGroup = groupIndex === groups.length - 1;
              return (
                <div
                  key={group.attribute}
                  className={
                    isLastGroup ? undefined : "border-b border-neutral-200"
                  }
                >
                  {group.tokens.map((token) => (
                    <TokenRow key={token.name} token={token} />
                  ))}
                  <p className="max-w-3xl pb-6 text-sm leading-6 text-text-secondary">
                    {group.description}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
}
