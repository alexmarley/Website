import { getSortedPostsData, allTags } from "@/lib/blog-data";
import BlogSection from "./BlogSection";

export default function Home() {
  const blogPosts = getSortedPostsData();

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
          Exploring the future of Physical AI, Infrastructure, and Deep Tech. <br />
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
           {" "} |{" "} First Controls Engineer @ {" "}
           <a
            href="https://cometeer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
          Cometeer
          </a>
        </p>
        <p>
          Here's an overview of the startups I've worked on as an investor to date:{" "}
          <a
            href="/portfolio"
            className="underline"
          >
            My Portfolio
          </a>
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-lg font-medium">Contact</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Work Email: alex {"[@]"} upfront.com</li>
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
        <h2 className="text-lg font-medium">Media</h2>
        <ul className="list-disc pl-5 space-y-2">
                 <li>
                   <a
                     href="https://upfront.com/thoughts/meet-alex-marley-our-newest-member-of-the-investment-team"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="underline"
                   >
                     Meet Alex Marley
                   </a>
                   <span> - Upfront Ventures</span>
                 </li>
                 <li>
                   <a
                     href="https://www.luxcapital.com/content/driving-through-china"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="underline"
                   >
                     Driving through China
                   </a>
                   <span> - Lux Capital</span>
                 </li>
                 <li>
                   <a
                     href="https://news.northeastern.edu/2023/02/03/schwarzman-scholar-china-experience/"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="underline"
                   >
                     China experience will provide Schwarzman scholar an international perspective
                   </a>
                   <span> - Northeastern University</span>
                 </li>
                 <li>
                   <a
                     href="https://www.bizjournals.com/boston/inno/stories/awards/2022/11/15/meet-bostinno-s-25-under-25-for-2022.html"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="underline"
                   >
                     Meet BostInno&apos;s 25 Under 25 for 2022
                   </a>
                   <span> - Boston Business Journal</span>
                 </li>
                 <li>
                   <a
                     href="https://dormroomfund.medium.com/part-2-becoming-a-gen-z-investor-e9f036dc55ac"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="underline"
                   >
                     Part II: Becoming a Gen Z Investor
                   </a>
                   <span> - Dorm Room Fund</span>
                 </li>
                 <li>
                   <a
                     href="https://dormroomfund.medium.com/part-i-a-gen-zs-journey-to-vc-dbdc2fad0591"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="underline"
                   >
                     Part I: A Gen Z&apos;s Journey to VC
                   </a>
                   <span> - Dorm Room Fund</span>
                 </li>
        </ul>
      </section>

      <BlogSection posts={blogPosts} tags={allTags} />

      <footer className="mt-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} Alex Marley
      </footer>
    </main>
  );
}
