export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 leading-relaxed">
      <header className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">Alex Marley</h1>
        <p className="text-sm text-neutral-500">
          Investing & Researching <br />
          Los Angeles / New York City / San Francisco
        </p>
      </header>

      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-medium">About</h2>
        <p>
          Perpetually Curious. Exploring the future of Physical AI, Infrastructure, and Deep Tech. <br />
          Investor @{" "}
          <a
            href="https://upfront.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
          Upfront Ventures
          </a>
        </p>
        <p>
          <em>Previously:</em> {" "}
          <a
            href="https://www.luxcapital.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
          Lux Capital
          </a>
          {" "} | Schwarzman Scholar {" "} | {" "}
           <a
            href="https://www.dormroomfund.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
          Dorm Room Fund
          </a>
           | {" "} First Controls Engineer @ {" "}
           <a
            href="https://cometeer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
          Cometeer
          </a>
        </p>


      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-medium">Contact</h2>
        <ul>
          Email: amarley99 {"[@]"} gmail.com
        <li>
            Twitter: <a className="underline" href="https://x.com/thealexmarley">
            twitter.com/thealexmarley
            </a>
        </li>
        <li>
            LinkedIn: <a className="underline" href="https://www.linkedin.com/in/alex-marley">
            linkedin.com/in/alex-marley
            </a>
        </li>
        </ul>
      </section>
      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-medium">Writing</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Speaking at an AI Infra meetup in NYC</li>
          <li>Working on a thesis about compute clusters</li>
        </ul>
      </section>

      <footer className="mt-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} Alex Marley
      </footer>
    </main>
  );
}
