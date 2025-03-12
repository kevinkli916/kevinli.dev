"use client";

import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Twitter,
  X,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { PersonalData } from "@/types/personal-data";

interface CreativeTemplateProps {
  data: PersonalData;
  selectedSkills: string[];
  onSkillClick: (skill: string) => void;
  clearFilters: () => void;
  allSkills: string[];
  isAndFilter: boolean;
  setIsAndFilter: (value: boolean) => void;
  filteredProjects: typeof PersonalData.prototype.projects;
  filteredExperience: typeof PersonalData.prototype.experience;
}

export function CreativeTemplate({
  data,
  selectedSkills,
  onSkillClick,
  clearFilters,
  allSkills,
  isAndFilter,
  setIsAndFilter,
  filteredProjects,
  filteredExperience,
}: CreativeTemplateProps) {
  // State to track which experience items are expanded
  const [expandedExperience, setExpandedExperience] = useState<number[]>([]);

  // Toggle expanded state for an experience item
  const toggleExpand = (index: number) => {
    setExpandedExperience((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 dark:from-blue-950 dark:to-slate-950 text-foreground">
      <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <header className="relative mb-20">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-200 dark:bg-teal-800 rounded-full opacity-50 blur-3xl"></div>

          <div className="relative z-10 text-center">
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
              {data.name}
            </h1>
            <p className="text-2xl font-light mb-6">{data.title}</p>
            <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
              {data.bio}
            </p>

            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{data.location}</span>
              </div>
            </div>

            <div className="flex justify-center gap-4 mb-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white/80 dark:bg-gray-800/80"
                asChild
              >
                <a href={`mailto:${data.email}`} aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              {data.linkedin && (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 dark:bg-gray-800/80"
                  asChild
                >
                  <a
                    href={data.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {data.twitter && (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 dark:bg-gray-800/80"
                  asChild
                >
                  <a
                    href={data.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {data.github && (
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full bg-white/80 dark:bg-gray-800/80"
                  asChild
                >
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>

            {data.resume && (
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-7 px-2 flex items-center gap-1 w-24 bg-white hover:bg-white/90"
                  asChild
                >
                  <a href={data.resume} download aria-label="Download Resume">
                    <Download className="h-3 w-3" />
                    <span>Resume</span>
                  </a>
                </Button>
              </div>
            )}
          </div>
        </header>

        <section className="mb-20">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
              Skills
            </h2>
            <div className="flex items-center gap-4 mb-2">
              {selectedSkills.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground"
                >
                  Clear filter <X className="ml-1 h-4 w-4" />
                </Button>
              )}
            </div>
            {selectedSkills.length > 1 && (
              <div className="flex items-center space-x-2 mb-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full">
                <Label htmlFor="filter-mode-creative" className="text-sm">
                  OR
                </Label>
                <Switch
                  id="filter-mode-creative"
                  checked={isAndFilter}
                  onCheckedChange={setIsAndFilter}
                />
                <Label htmlFor="filter-mode-creative" className="text-sm">
                  AND
                </Label>
              </div>
            )}
          </div>

          {data.skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-center">
                {category.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    className={`px-4 py-2 text-base cursor-pointer transition-all ${
                      selectedSkills.includes(skill)
                        ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                        : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => onSkillClick(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
            Experience{" "}
            {selectedSkills.length > 0 && (
              <span className="text-sm font-normal text-foreground ml-2">
                Filtered by{" "}
                {selectedSkills.join(isAndFilter ? " AND " : " OR ")}
              </span>
            )}
          </h2>

          {filteredExperience.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No experience entries match the selected skills.
            </p>
          ) : (
            <div className="space-y-12">
              {filteredExperience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-teal-600 cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-600 -translate-x-[3px]"></div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{exp.position}</h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {exp.period}
                      </p>
                    </div>
                    {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                      <div className="mt-1 pointer-events-none text-blue-600 dark:text-blue-400">
                        {expandedExperience.includes(index) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-3">
                    {exp.description}
                  </p>

                  {/* Expandable bullet points */}
                  {expandedExperience.includes(index) && exp.bulletPoints && (
                    <ul className="list-disc list-inside text-muted-foreground mb-3 pl-2 space-y-1">
                      {exp.bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-1">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className={`text-xs ${selectedSkills.includes(tag) ? "border-blue-500 text-blue-500" : ""}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
            Projects{" "}
            {selectedSkills.length > 0 && (
              <span className="text-sm font-normal text-foreground ml-2">
                Filtered by{" "}
                {selectedSkills.join(isAndFilter ? " AND " : " OR ")}
              </span>
            )}
          </h2>

          {filteredProjects.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No projects match the selected skills.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="h-2 bg-gradient-to-r from-blue-600 to-teal-600"></div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className={`text-xs ${selectedSkills.includes(tag) ? "border-blue-500 text-blue-500" : ""}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="default"
                      className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                      asChild
                    >
                      <a href={project.link}>View Project</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
            Education
          </h2>

          <div className="space-y-12">
            {data.education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:to-teal-600"
              >
                <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-blue-600 -translate-x-[3px]"></div>
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {edu.institution}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {edu.period}
                </p>
                {edu.description && (
                  <p className="text-muted-foreground mb-3">
                    {edu.description}
                  </p>
                )}
                {edu.tags && (
                  <div className="flex flex-wrap gap-1">
                    {edu.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className={`text-xs ${selectedSkills.includes(tag) ? "border-blue-500 text-blue-500" : ""}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
