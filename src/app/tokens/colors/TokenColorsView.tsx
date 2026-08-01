"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  backgroundColorTokens,
  borderColorTokens,
  borderAttributeDescriptions,
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

function slugify(attribute: string): string {
  return `bg-${attribute}`;
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
    <div className="group/token relative inline-flex max-w-full">
      <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs text-white opacity-0 shadow-md transition-opacity group-hover/token:opacity-100">
        {copied ? "Copied!" : "Copy to clipboard"}
      </span>
      <button
        type="button"
        onClick={() => copy(name)}
        aria-label={copied ? `Copied ${name}` : `Copy token ${name}`}
        className="inline-flex max-w-full cursor-pointer items-center gap-1.5 rounded-md bg-bg-secondary px-2 py-1 text-left font-mono text-[13px] leading-5 text-text-primary transition-colors hover:bg-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        <code className="truncate">{name}</code>
      </button>
    </div>
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
    <div className="group relative w-full max-w-[200px]">
      <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs text-white opacity-0 shadow-md transition-opacity group-hover:opacity-100">
        {copied ? "Copied!" : "Copy to clipboard"}
      </span>
      <button
        type="button"
        onClick={() => copy(primitive)}
        aria-label={
          copied ? `Copied ${primitive}` : `Copy primitive ${primitive}`
        }
        className="w-full cursor-pointer overflow-hidden rounded-lg border border-neutral-300 bg-bg-primary text-left transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
      >
        <div
          className="mx-2 mt-2 h-8 rounded-md border border-neutral-200"
          style={{ backgroundColor: hex }}
          title={hex}
        />
        <p className="flex items-center gap-1.5 px-3 py-2 font-mono text-sm text-text-primary">
          <span className="truncate">{primitive}</span>
        </p>
      </button>
    </div>
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

function TocButton({
  active,
  indent,
  onClick,
  children,
}: {
  active: boolean;
  indent?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`block w-full cursor-pointer border-l-2 py-1.5 text-left text-sm transition-colors ${
        indent ? "pl-6" : "pl-3"
      } ${
        active
          ? "border-brand-500 font-medium text-text-brand"
          : "border-transparent text-text-secondary hover:text-text-primary"
      }`}
    >
      {children}
    </button>
  );
}

function TableOfContents({
  filter,
  onFilterChange,
}: {
  filter: string | null;
  onFilterChange: (value: string | null) => void;
}) {
  return (
    <nav
      aria-label="Table of contents"
      className="hidden w-56 shrink-0 border-l border-neutral-200 xl:block"
    >
      <div className="sticky top-10">
        <p className="mb-3 pl-3 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
          On this page
        </p>

        <TocButton active={filter === null} onClick={() => onFilterChange(null)}>
          All Tokens
        </TocButton>

        <TocButton
          active={filter === "color"}
          onClick={() => onFilterChange("color")}
        >
          Color
        </TocButton>

        <TocButton
          active={filter === "background"}
          indent
          onClick={() => onFilterChange("background")}
        >
          Background
        </TocButton>

        <TocButton
          active={filter === "border"}
          indent
          onClick={() => onFilterChange("border")}
        >
          Border
        </TocButton>
      </div>
    </nav>
  );
}

export function TokenColorsView() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string | null>(null);
  const deferredQuery = useDeferredValue(query);

  const bgGroups = useMemo(() => {
    const filtered = backgroundColorTokens.filter((token) =>
      matchesQuery(token, deferredQuery),
    );
    return groupTokensByAttribute(filtered);
  }, [deferredQuery]);

  const borderGroups = useMemo(() => {
    const filtered = borderColorTokens.filter((token) =>
      matchesQuery(token, deferredQuery),
    );
    return groupTokensByAttribute(filtered, borderAttributeDescriptions, "Border");
  }, [deferredQuery]);

  return (
    <main className="flex flex-1 flex-col px-10 py-10">
      <h1 className="text-[32px] font-bold tracking-tight text-text-primary">
        Design Tokens
      </h1>

      <label className="relative mt-6 block max-w-xl">
        <span className="sr-only">Search tokens</span>
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

      <div className="mt-12 flex gap-8">
        <div className="min-w-0 flex-1">
        {(filter === null || filter === "color" || filter === "background") && (
        <section id="background">
          <h2 className="text-xl font-bold text-text-primary">Background</h2>

          <div className="mt-6">
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(180px,0.8fr)_minmax(180px,0.8fr)] gap-6 border-b border-neutral-300 pb-3 text-sm text-text-secondary">
              <span>Token and description</span>
              <span>Light value</span>
              <span>Dark value</span>
            </div>

            {bgGroups.length === 0 ? (
              <p className="py-8 text-sm text-text-secondary">
                No tokens match &ldquo;{query.trim()}&rdquo;.
              </p>
            ) : (
              bgGroups.map((group, groupIndex) => {
                const isLastGroup = groupIndex === bgGroups.length - 1;
                return (
                  <div
                    key={group.attribute}
                    id={slugify(group.attribute)}
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
        )}

        {(filter === null || filter === "color" || filter === "border") && (
        <section id="border" className={filter !== "border" ? "mt-16" : undefined}>
          <h2 className="text-xl font-bold text-text-primary">Border</h2>

          <div className="mt-6">
            <div className="grid grid-cols-[minmax(0,1.4fr)_minmax(180px,0.8fr)_minmax(180px,0.8fr)] gap-6 border-b border-neutral-300 pb-3 text-sm text-text-secondary">
              <span>Token and description</span>
              <span>Light value</span>
              <span>Dark value</span>
            </div>

            {borderGroups.length === 0 ? (
              <p className="py-8 text-sm text-text-secondary">
                No tokens match &ldquo;{query.trim()}&rdquo;.
              </p>
            ) : (
              borderGroups.map((group, groupIndex) => {
                const isLastGroup = groupIndex === borderGroups.length - 1;
                return (
                  <div
                    key={group.attribute}
                    id={`border-${group.attribute}`}
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
        )}
        </div>

        <TableOfContents filter={filter} onFilterChange={setFilter} />
      </div>
    </main>
  );
}
