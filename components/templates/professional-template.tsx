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

interface ProfessionalTemplateProps {
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

export function ProfessionalTemplate({
  data,
  selectedSkills,
  onSkillClick,
  clearFilters,
  allSkills,
  isAndFilter,
  setIsAndFilter,
  filteredProjects,
  filteredExperience,
}: ProfessionalTemplateProps) {
  // State to track which experience items are expanded
  const [expandedExperience, setExpandedExperience] = useState<number[]>([]);

  // Toggle expanded state for an experience item
  const toggleExpand = (index: number) => {
    setExpandedExperience((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="bg-primary h-64 relative">
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card shadow-lg rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-end gap-8">
                <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center text-4xl font-bold text-muted-foreground border-4 border-background">
                  {data.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold">{data.name}</h1>
                  <p className="text-xl text-primary">{data.title}</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a href={`mailto:${data.email}`} aria-label="Email">
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  {data.linkedin && (
                    <Button variant="outline" size="icon" asChild>
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
                    <Button variant="outline" size="icon" asChild>
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
                    <Button variant="outline" size="icon" asChild>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4 flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Location
                  </h2>
                  <p className="text-muted-foreground">{data.location}</p>

                  {data.resume && (
                    <div className="mt-4 flex justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs h-7 px-2 w-24 flex items-center justify-center gap-1"
                        asChild
                      >
                        <a
                          href={data.resume}
                          download
                          aria-label="Download Resume"
                        >
                          <Download className="h-3 w-3" />
                          <span>Resume</span>
                        </a>
                      </Button>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-8 mb-4">
                    <h2 className="text-xl font-semibold">Skills</h2>
                    {selectedSkills.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearFilters}
                        className="text-muted-foreground"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  {selectedSkills.length > 1 && (
                    <div className="flex items-center space-x-2 mb-4">
                      <Label htmlFor="filter-mode-prof" className="text-sm">
                        OR
                      </Label>
                      <Switch
                        id="filter-mode-prof"
                        checked={isAndFilter}
                        onCheckedChange={setIsAndFilter}
                      />
                      <Label htmlFor="filter-mode-prof" className="text-sm">
                        AND
                      </Label>
                    </div>
                  )}

                  {data.skillCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="mb-4">
                      <h3 className="text-sm font-medium text-muted-foreground mb-2">
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, index) => (
                          <Badge
                            key={index}
                            variant={
                              selectedSkills.includes(skill)
                                ? "default"
                                : "secondary"
                            }
                            className="cursor-pointer"
                            onClick={() => onSkillClick(skill)}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">About Me</h2>
                  <p className="text-muted-foreground">{data.bio}</p>
                </CardContent>
              </Card>

              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Experience</h2>
                {selectedSkills.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    Filtered by:{" "}
                    {selectedSkills.join(isAndFilter ? " AND " : " OR ")}
                  </p>
                )}
              </div>

              {filteredExperience.length === 0 ? (
                <Card className="mb-8">
                  <CardContent className="pt-6 text-center">
                    <p className="text-muted-foreground">
                      No experience entries match the selected skills.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6 mb-8">
                  {filteredExperience.map((exp, index) => (
                    <Card
                      key={index}
                      className="cursor-pointer"
                      onClick={() => toggleExpand(index)}
                    >
                      <CardContent className="pt-6">
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2">
                          <div>
                            <h3 className="text-lg font-semibold">
                              {exp.position}
                            </h3>
                            <p className="text-primary font-medium">
                              {exp.company}
                            </p>
                            <span className="text-sm text-muted-foreground">
                              {exp.period}
                            </span>
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
                        <p className="text-muted-foreground mb-3">
                          {exp.description}
                        </p>

                        {/* Expandable bullet points */}
                        {expandedExperience.includes(index) &&
                          exp.bulletPoints && (
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
                                selectedSkills.includes(tag)
                                  ? "default"
                                  : "outline"
                              }
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Projects</h2>
                {selectedSkills.length > 0 && (
                  <p className="text-sm text-muted-foreground">
                    Filtered by:{" "}
                    {selectedSkills.join(isAndFilter ? " AND " : " OR ")}
                  </p>
                )}
              </div>

              {filteredProjects.length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <p className="text-muted-foreground">
                      No projects match the selected skills.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid sm:grid-cols-2 gap-6">
                  {filteredProjects.map((project, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold mb-2">
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
                                selectedSkills.includes(tag)
                                  ? "default"
                                  : "outline"
                              }
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button
                          variant="default"
                          className="bg-primary hover:bg-primary/90"
                          asChild
                        >
                          <a href={project.link}>View Project</a>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between mb-4 mt-8">
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="space-y-6 mb-8">
                {data.education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <span className="text-sm text-muted-foreground">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-2">
                        {edu.institution}
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
                              variant={
                                selectedSkills.includes(tag)
                                  ? "default"
                                  : "outline"
                              }
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
