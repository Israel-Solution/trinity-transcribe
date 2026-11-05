export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-navy via-[#141a4a] to-[#2a1466]">
      <div className="flex items-end gap-1.5 h-14 mb-8" aria-hidden>
        {[0, 0.15, 0.3, 0.45, 0.6].map((d, i) => (
          <span key={i} className="bar w-2.5 h-full rounded-full bg-gradient-to-b from-electric to-violet" style={{ animationDelay: `${d}s` }} />
        ))}
      </div>
      <h1 className="text-5xl font-bold tracking-tight">TRINITY TRANSCRIBE</h1>
      <p className="mt-4 text-lg text-white/70">Your Voice. Any Language. Clear Transcription.</p>
      <p className="mt-10 text-sm text-white/40">Stage 1 complete: project foundation and favicon.</p>
    </main>
  );
}
