export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24">
      <div className="max-w-lg text-center">
        <p className="text-sm tracking-wide text-zinc-500 uppercase">
          Design system
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Aqueous
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          Internal documentation site for the company design system. Component
          references will live here as they are added.
        </p>
      </div>
    </main>
  );
}
