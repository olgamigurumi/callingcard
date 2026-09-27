import { ArrowUpRight } from 'lucide-react'

const LINKEDIN_URL = 'https://www.linkedin.com/in/olga-bortniak-0b5517245'

export function CallingCard() {
  return (
    <article className="w-full max-w-xl rounded-2xl border bg-card p-8 shadow-sm sm:p-12">
      <div className="h-1 w-12 rounded-full bg-primary" aria-hidden="true" />

      <h1 className="mt-8 font-serif text-4xl font-medium tracking-tight text-balance sm:text-5xl">
        Olga Bortniak
      </h1>

      <p className="mt-4 text-lg leading-relaxed text-foreground text-pretty">
        Autonomous creative and digital professional with 20+ years of remote
        experience.
      </p>

      <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
        I combine technical skills, project management, and problem-solving to
        build digital products. Seeking to drive innovative, growth-oriented
        digital projects.
      </p>

      <div className="mt-10 border-t pt-8">
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          How to reach me
        </h2>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Connect on LinkedIn
          <ArrowUpRight className="size-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
        <p className="mt-3 break-all text-sm text-muted-foreground">
          linkedin.com/in/olga-bortniak-0b5517245
        </p>
      </div>
    </article>
  )
}
