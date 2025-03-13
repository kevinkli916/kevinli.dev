"use client";

import { useState, useEffect } from "react";
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

interface MinimalTemplateProps {
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

export function MinimalTemplate({
  data,
  selectedSkills,
  onSkillClick,
  clearFilters,
  allSkills,
  isAndFilter,
  setIsAndFilter,
  filteredProjects,
  filteredExperience,
}: MinimalTemplateProps) {
  // State to track which experience items are expanded
  const [expandedExperience, setExpandedExperience] = useState<number[]>([]);
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    // Remove pulse effect after 5 seconds
    const timer = setTimeout(() => setShowPulse(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle expanded state for an experience item
  const toggleExpand = (index: number) => {
    setExpandedExperience((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 sm:py-16 px-3 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12 pt-4 sm:pt-8">
          <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
          <p className="text-xl text-primary mb-4">{data.title}</p>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
            {data.bio}
          </p>
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{data.location}</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full hover:bg-secondary hover:text-primary transition-colors"
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
                className="rounded-full hover:bg-secondary hover:text-primary transition-colors"
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
                className="rounded-full hover:bg-secondary hover:text-primary transition-colors"
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
                className="rounded-full hover:bg-secondary hover:text-primary transition-colors"
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
                className="text-xs h-7 px-2 flex items-center gap-1 w-24"
                asChild
              >
                <a
                  href={data.resume}
                  download={"resume.pdf"}
                  aria-label="Download Resume"
                >
                  <Download className="h-3 w-3" />
                  <span>Resume</span>
                </a>
              </Button>
            </div>
          )}
        </header>

        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold">Skills</h2>
              <p className="text-xs text-muted-foreground">
                Click on badges to filter experience and projects
              </p>
            </div>
            <div className="flex items-center gap-4">
              {selectedSkills.length > 1 && (
                <div className="flex items-center space-x-2">
                  <Label htmlFor="filter-mode" className="text-sm pl-2">
                    Filtering mode: OR
                  </Label>
                  <Switch
                    id="filter-mode"
                    checked={isAndFilter}
                    onCheckedChange={setIsAndFilter}
                  />
                  <Label htmlFor="filter-mode" className="text-sm">
                    AND
                  </Label>
                </div>
              )}
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
          </div>

          {data.skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-6">
              <h3 className="text-lg font-medium mb-3 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {category.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant={
                      selectedSkills.includes(skill) ? "default" : "secondary"
                    }
                    className={`
                    cursor-pointer transition-all duration-200 hover:scale-105 flex items-center gap-1
                    ${!selectedSkills.includes(skill) ? "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100" : ""}
                    `}
                    onClick={() => onSkillClick(skill)}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Experience{" "}
            {selectedSkills.length > 0 && (
              <span className="text-sm font-normal text-muted-foreground ml-2">
                Filtered by{" "}
                {selectedSkills.join(isAndFilter ? " AND " : " OR ")}
              </span>
            )}
          </h2>
          {filteredExperience.length === 0 ? (
            <p className="text-muted-foreground">
              No experience entries match the selected skills.
            </p>
          ) : (
            <div className="space-y-6">
              {filteredExperience.map((exp, index) => (
                <div
                  key={index}
                  className="border-l-2 border-muted pl-4 cursor-pointer hover:border-primary transition-colors duration-200"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium">{exp.position}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        {exp.period}
                      </p>
                    </div>
                    {exp.bulletPoints && exp.bulletPoints.length > 0 && (
                      <div className="mt-1 pointer-events-none">
                        {expandedExperience.includes(index) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </div>
                    )}
                  </div>
                  <p className="text-muted-foreground mb-2">
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
                        variant={
                          selectedSkills.includes(tag) ? "default" : "outline"
                        }
                        className="text-xs"
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

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Projects{" "}
            {selectedSkills.length > 0 && (
              <span className="text-sm font-normal text-muted-foreground ml-2">
                Filtered by{" "}
                {selectedSkills.join(isAndFilter ? " AND " : " OR ")}
              </span>
            )}
          </h2>
          {filteredProjects.length === 0 ? (
            <p className="text-muted-foreground">
              No projects match the selected skills.
            </p>
          ) : (
            <div className="grid gap-4">
              {filteredProjects.map((project, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant={
                            selectedSkills.includes(tag) ? "default" : "outline"
                          }
                          className="text-xs transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-muted pl-4">
                <h3 className="text-lg font-medium">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground mb-2">
                  {edu.period}
                </p>
                {edu.description && (
                  <p className="text-muted-foreground mb-2">
                    {edu.description}
                  </p>
                )}
                {edu.tags && (
                  <div className="flex flex-wrap gap-1">
                    {edu.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant={
                          selectedSkills.includes(tag) ? "default" : "outline"
                        }
                        className="text-xs"
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
