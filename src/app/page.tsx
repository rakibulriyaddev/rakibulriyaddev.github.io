import Image from "next/image";
import Nav from "./components/Nav";

const skills = [
  "C++",
  "Python",
  ".NET",
  "Angular",
  "MongoDB",
  "Data Structures & Algorithms",
];

const experience = [
  {
    role: "Software Engineer",
    org: "Orbitax Bangladesh Limited",
    location: "Dhaka, Bangladesh (On-site)",
    period: "Jan. 2024 — Present",
    points: [
      "Develop and maintain web applications using .NET (backend), Angular (frontend), and MongoDB (database).",
      "Apply strong problem-solving and algorithmic skills to build efficient, reliable features.",
    ],
  },
  {
    role: "Competitive Programming Trainer",
    org: "Burichang Ananda Pilot Govt. High School",
    location: "Cumilla, Bangladesh",
    period: "Apr. 2022 — Oct. 2023",
    points: [],
  },
  {
    role: "Problem Setter and Judge",
    org: "Comilla University IT Society",
    location: "Cumilla, Bangladesh",
    period: "March 27, 2022",
    points: [],
  },
];

const projects = [
  {
    title: "TrackMate",
    description:
      "A mobile app for sharing your live location with friends or family and chatting in groups in real time — similar to how location sharing works in apps like WhatsApp or Google Maps, but built from scratch with secure sign-in.",
    tags: ["ASP.NET Core", "MongoDB", "SignalR", "Kotlin", "Jetpack Compose"],
  },
];

const education = [
  {
    school: "Comilla University",
    degree: "B.Sc. in Information and Communication Technology",
    detail: "CGPA: 3.49",
    period: "2019 — 2023",
  },
];

const programmingProfiles = [
  "Codeforces: Expert (max rating 1890), 3317+ problems solved",
  "CodeChef: 5-star (max rating 2065), 158+ problems solved",
  "ICPC: 2 times Asia-West Continent Finalist, 3 times ICPC Regionalist",
];

const honors = [
  "15th — ICPC Asia Dhaka Regional Contest, Dhaka, Bangladesh (2021)",
  "3rd — CUET CSE Fest, Inter University Programming Contest, Chittagong, Bangladesh (2022)",
  "17th — BUET Inter University Programming Contest, Dhaka, Bangladesh (2023)",
];

const highlights = [
  "Software Engineer building production web applications with .NET, Angular, and MongoDB.",
  "Strong competitive programming foundation: Codeforces Expert and CodeChef 5-star.",
  "Multiple-time ICPC regionalist and Asia-West Continent Finalist.",
  "Shipped TrackMate end-to-end — backend, mobile client, deployment, and CI.",
];

export default function Home() {
  return (
    <main className="flex-1 bg-white text-gray-900 dark:bg-slate-900 dark:text-slate-200">
      <Nav />

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <div className="mb-6 h-28 w-28 overflow-hidden rounded-full border border-gray-200 dark:border-slate-700">
              <Image
                src="/images/portrait.jpg"
                alt="Portrait of Rakibul Islam"
                width={112}
                height={112}
                className="h-full w-full object-cover object-top"
                priority
              />
            </div>
            <p className="mb-3 text-sm font-medium tracking-wide text-gray-700 dark:text-white uppercase">
              Software Engineer
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Rakibul Islam
            </h1>
            <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
              Software Engineer at Orbitax Bangladesh Limited
              <br />
              .NET · Angular · MongoDB
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Dhaka, Bangladesh · 2+ years of experience
            </p>
            <p className="mt-6 max-w-2xl text-gray-600 dark:text-slate-400">
              Software Engineer with hands-on experience building web
              applications using .NET, Angular, and MongoDB, with a strong
              foundation in data structures, algorithms, and problem solving.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/rakibulriyaddev"
                className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rkb-rd"
                className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700"
              >
                LinkedIn
              </a>
              <a
                href="https://codeforces.com/profile/rkb_rd"
                className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700"
              >
                Codeforces
              </a>
              <a
                href="/cv/main.pdf"
                download
                className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium hover:border-emerald-500 hover:text-emerald-500 dark:border-slate-700"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Snapshot sidebar */}
          <aside className="rounded-lg border border-gray-200 p-5 dark:border-slate-700">
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Profile Snapshot
            </h2>
            <dl className="mt-4 space-y-3 text-sm">
              {[
                ["Current role", "Software Engineer"],
                ["Company", "Orbitax Bangladesh Limited"],
                ["Experience", "Jan 2024 — Present"],
                ["Focus", ".NET · Angular · MongoDB"],
                ["Competitive", "Codeforces Expert (1890)"],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <dt className="text-gray-500">{label}</dt>
                  <dd className="text-right font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <h3 className="mt-6 text-sm font-semibold text-gray-500 uppercase tracking-wide">
              Highlights
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-slate-400">
              {highlights.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold">Skills</h2>
        <p className="mt-1 text-sm text-gray-500">
          Technologies and tools I work with regularly.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-gray-200 px-3 py-1 text-sm dark:border-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience & Projects */}
      <section id="experience" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold">Experience & Selected Projects</h2>
        <div className="mt-4 space-y-6">
          {experience.map((job) => (
            <div key={job.role} className="border-l-2 border-emerald-500 pl-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {job.role} · {job.org}
                </h3>
                <span className="text-sm text-gray-500">{job.period}</span>
              </div>
              <p className="text-sm text-gray-500">{job.location}</p>
              {job.points.length > 0 && (
                <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-slate-400">
                  {job.points.map((point) => (
                    <li key={point}>◦ {point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-l-2 border-gray-300 pl-4 dark:border-slate-700"
            >
              <h3 className="font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-slate-400">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-4 space-y-4">
          {education.map((edu) => (
            <div key={edu.school} className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="font-semibold">{edu.school}</h3>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  {edu.degree} · {edu.detail}
                </p>
              </div>
              <span className="text-sm text-gray-500">{edu.period}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold">Achievements & Competitive Programming</h2>
        <div className="mt-4 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-gray-500 text-sm uppercase tracking-wide">
              Programming Profiles
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-slate-400">
              {programmingProfiles.map((item) => (
                <li key={item}>◦ {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-500 text-sm uppercase tracking-wide">
              Honors & Awards
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-slate-400">
              {honors.map((item) => (
                <li key={item}>◦ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h2 className="text-2xl font-bold">Get in Touch</h2>
        <p className="mt-4 text-gray-600 dark:text-slate-400">
          Open to new opportunities and interesting projects. Reach out below.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="mailto:rakibulriyad99@gmail.com"
            className="rounded-md bg-emerald-600 px-5 py-2.5 font-medium text-white hover:bg-emerald-500"
          >
            Email Me
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 dark:border-slate-700">
        © {new Date().getFullYear()} Rakibul Islam. Built with Next.js and GitHub Pages.
      </footer>
    </main>
  );
}
