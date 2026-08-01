"use client";

import { changelog, type ChangeType } from "@/lib/changelog";
import packageJson from "../../../package.json";

const typeLabels: Record<ChangeType, string> = {
  added: "Added",
  changed: "Changed",
  removed: "Removed",
  fixed: "Fixed",
};

const typeDotColors: Record<ChangeType, string> = {
  added: "bg-green-500",
  changed: "bg-brand-500",
  removed: "bg-red-500",
  fixed: "bg-orange-500",
};

function ChangeTypeBadge({ type }: { type: ChangeType }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md bg-bg-secondary px-2 py-0.5 text-xs font-medium text-text-secondary">
      <span className={`size-1.5 rounded-full ${typeDotColors[type]}`} />
      {typeLabels[type]}
    </span>
  );
}

export function OverviewView() {
  return (
    <main className="flex flex-1 flex-col px-10 py-10">
      <div className="max-w-3xl">
        <h1 className="text-[32px] font-bold tracking-tight text-text-primary">
          Aqueous Design System
        </h1>
        <p className="mt-3 text-base leading-relaxed text-text-secondary">
          Placeholder description — add your design system overview here.
        </p>

        <p className="mt-6 font-mono text-[40px] font-bold leading-none tracking-tight text-text-brand">
          v{packageJson.version}
        </p>
      </div>

      <section className="mt-14 max-w-3xl">
        <h2 className="text-xl font-bold text-text-primary">Changelog</h2>

        <div className="mt-8 flex flex-col gap-12">
          {changelog.map((release) => (
            <div key={release.version}>
              <div className="flex items-baseline gap-3">
                <h3 className="text-lg font-semibold text-text-primary">
                  {release.version === "Unreleased"
                    ? "Unreleased"
                    : `v${release.version}`}
                </h3>
                {release.date && (
                  <span className="text-sm text-text-tertiary">
                    {release.date}
                  </span>
                )}
              </div>

              <div className="mt-4 flex flex-col gap-4 border-l-2 border-neutral-200 pl-5">
                {release.changes.map((change, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-2">
                      <ChangeTypeBadge type={change.type} />
                      <span className="text-xs text-text-tertiary">
                        {change.timestamp}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm font-medium text-text-primary">
                      {change.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-text-secondary">
                      {change.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
