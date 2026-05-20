import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
} from "lucide-react";
import { BackToTop } from "@/components/back-to-top";
import { ExpandableTagList } from "@/components/expandable-tag-list";
import { SiteHeader } from "@/components/site-header";
import { TrackedLink } from "@/components/tracked-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { PersonalData } from "@/types/personal-data";

interface MinimalTemplateProps {
  data: PersonalData;
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function TagList({ tags, limit }: { tags: string[]; limit?: number }) {
  const visibleTags = typeof limit === "number" ? tags.slice(0, limit) : tags;
  const remainingCount = tags.length - visibleTags.length;

  return (
    <div className="flex flex-wrap gap-2">
      {visibleTags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-900"
        >
          {tag}
        </Badge>
      ))}
      {remainingCount > 0 && (
        <Badge
          variant="outline"
          className="border-slate-200 px-2.5 py-1 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:text-slate-400"
        >
          +{remainingCount} more
        </Badge>
      )}
    </div>
  );
}

export function MinimalTemplate({ data }: MinimalTemplateProps) {
  const socialLinks = [
    { label: "Email", href: `mailto:${data.email}`, Icon: Mail },
    data.linkedin && { label: "LinkedIn", href: data.linkedin, Icon: Linkedin },
    data.github && { label: "GitHub", href: data.github, Icon: Github },
    data.twitter && { label: "Twitter", href: data.twitter, Icon: Twitter },
  ].filter(Boolean) as {
    label: string;
    href: string;
    Icon: typeof Mail;
  }[];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <SiteHeader />

        <main id="top">
          <section className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{data.location}</span>
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                {data.name}
              </h1>
              <p className="mt-4 text-xl font-medium text-slate-700 dark:text-slate-200 sm:text-2xl">
                {data.title}
              </p>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
                {data.bio}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                {data.resume && (
                  <Button className="h-11 rounded-full px-5 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200" asChild>
                    <TrackedLink href={data.resume} download="resume.pdf" eventName="resume_download" eventProperties={{ location: "hero" }}>
                      <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                      Download Resume
                    </TrackedLink>
                  </Button>
                )}
                <Button variant="outline" className="h-11 rounded-full border-slate-300 bg-white px-5 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800" asChild>
                  <TrackedLink href={`mailto:${data.email}`} eventName="email_click" eventProperties={{ location: "hero" }}>
                    <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                    Contact Me
                  </TrackedLink>
                </Button>
              </div>
            </div>

            <Card className="border-slate-200 bg-white shadow-sm transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700">
              <CardContent className="p-6">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">At a glance</p>
                <dl className="mt-5 grid gap-5">
                  <div>
                    <dt className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">5+ years</dt>
                    <dd className="mt-1 text-sm text-slate-600 dark:text-slate-300">Building production web applications</dd>
                  </div>
                  <div>
                    <dt className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">70k+ users</dt>
                    <dd className="mt-1 text-sm text-slate-600 dark:text-slate-300">Supported through public-sector web systems</dd>
                  </div>
                  <div>
                    <dt className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">M.S. CS</dt>
                    <dd className="mt-1 text-sm text-slate-600 dark:text-slate-300">Georgia Tech student, GPA 4.0</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          </section>

          <section id="experience" className="scroll-mt-24 border-t border-slate-200 py-14 dark:border-slate-800 sm:py-16">
            <SectionHeading
              eyebrow="Experience"
              title="Reliable software for real users."
              description="A track record across public health systems, responsive web applications, authentication modernization, and deployment automation."
            />

            <div className="space-y-5">
              {data.experience.map((exp) => (
                <Card
                  key={`${exp.company}-${exp.period}`}
                  className="border-slate-200 bg-white shadow-sm transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                >
                  <CardContent className="p-6 sm:p-7">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">
                          {exp.position}
                        </h3>
                        <p className="mt-1 font-medium text-slate-700 dark:text-slate-200">{exp.company}</p>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 sm:text-right">{exp.period}</p>
                    </div>
                    <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">{exp.description}</p>
                    {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                      <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-600 marker:text-slate-300 dark:text-slate-300 dark:marker:text-slate-600">
                        {exp.bulletPoints.map((point) => (
                          <li key={point} className="ml-4 list-disc pl-1">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-5 border-t border-slate-100 pt-5 dark:border-slate-800">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                        Technologies
                      </p>
                      <TagList tags={exp.tags} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="projects" className="scroll-mt-24 border-t border-slate-200 py-14 dark:border-slate-800 sm:py-16">
            <SectionHeading
              eyebrow="Projects"
              title="Selected work."
              description="A few representative projects spanning portfolio development, application development, and machine learning fundamentals."
            />

            <div className="grid gap-5 md:grid-cols-3">
              {data.projects.map((project) => (
                <Card
                  key={project.title}
                  className="flex border-slate-200 bg-white shadow-sm transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                >
                  <CardContent className="flex min-h-full flex-col p-6">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
                    <div className="mt-5">
                      <TagList tags={project.tags} limit={4} />
                    </div>
                    <Button variant="outline" className="mt-6 rounded-full border-slate-300 bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800" asChild>
                      <TrackedLink href={project.link} target="_blank" rel="noopener noreferrer" eventName="project_click" eventProperties={{ project: project.title }}>
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
                      </TrackedLink>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="skills" className="scroll-mt-24 border-t border-slate-200 py-14 dark:border-slate-800 sm:py-16">
            <SectionHeading
              eyebrow="Skills"
              title="Practical tools across the stack."
              description="Grouped by how they tend to show up in production work: frontend interfaces, backend services, data stores, and delivery tooling."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {data.skillCategories.map((category) => (
                <Card
                  key={category.category}
                  className="border-slate-200 bg-white shadow-sm transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                >
                  <CardContent className="p-6">
                    <h3 className="mb-4 font-semibold tracking-tight text-slate-950 dark:text-white">{category.category}</h3>
                    <ExpandableTagList tags={category.skills} initialLimit={12} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="education" className="scroll-mt-24 border-t border-slate-200 py-14 dark:border-slate-800 sm:py-16">
            <SectionHeading eyebrow="Education" title="Computer science foundation." />

            <div className="grid gap-5 md:grid-cols-2">
              {data.education.map((edu) => (
                <Card
                  key={`${edu.institution}-${edu.period}`}
                  className="border-slate-200 bg-white shadow-sm transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-semibold tracking-tight text-slate-950 dark:text-white">{edu.degree}</h3>
                        <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">{edu.institution}</p>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 sm:text-right">{edu.period}</p>
                    </div>
                    {edu.description && <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{edu.description}</p>}
                    {edu.tags && (
                      <div className="mt-5">
                        <TagList tags={edu.tags} limit={6} />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact" className="scroll-mt-24 border-t border-slate-200 py-14 dark:border-slate-800 sm:py-16">
            <Card className="border-slate-200 bg-slate-950 text-white shadow-sm transition-all duration-200 motion-safe:hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-800 dark:bg-white dark:text-slate-950">
              <CardContent className="flex flex-col gap-8 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">Contact</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight">Let’s build something reliable.</h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300 dark:text-slate-600">
                    The easiest way to reach me is by email. You can also find more of my work on GitHub and connect with me on LinkedIn.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:min-w-72">
                  {data.resume && (
                    <Button variant="secondary" className="w-full rounded-full bg-white text-slate-950 hover:bg-slate-100 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800" asChild>
                      <TrackedLink href={data.resume} download="resume.pdf" eventName="resume_download" eventProperties={{ location: "contact" }}>
                        <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                        Resume
                      </TrackedLink>
                    </Button>
                  )}
                  {socialLinks.map(({ label, href, Icon }) => (
                    <Button key={label} variant="secondary" className="w-full rounded-full bg-white text-slate-950 hover:bg-slate-100 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-800" asChild>
                      <TrackedLink
                        href={href}
                        target={label === "Email" ? undefined : "_blank"}
                        rel={label === "Email" ? undefined : "noopener noreferrer"}
                        eventName={label === "Email" ? "email_click" : `${label.toLowerCase()}_click`}
                        eventProperties={{ location: "contact" }}
                      >
                        <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                        {label}
                      </TrackedLink>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
        <BackToTop />
      </div>
    </div>
  );
}

export default MinimalTemplate;
