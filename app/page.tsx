"use client";

import { useState } from "react";
import { MinimalTemplate } from "@/components/templates/minimal-template";
import { CreativeTemplate } from "@/components/templates/creative-template";
import { ProfessionalTemplate } from "@/components/templates/professional-template";
import TemplateSwitcher from "@/components/template-switcher";
import type { PersonalData } from "@/types/personal-data";

// Sample data
const personalData: PersonalData = {
  name: "Kevin Li",
  title: "Full-Stack Software Engineer",
  bio: "I'm a passionate developer with 5+ years of experience building web applications. I specialize in React, Next.js, and Node.js.",
  location: "California, USA",
  email: "kevin@kevinli.dev",
  linkedin: "https://linkedin.com/in/kevinli916",
  github: "https://github.com/kevinkli916",
  // twitter: "https://twitter.com/test",
  resume: "/resume.pdf", // Path to your resume file
  skillCategories: [
    {
      category: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "SASS",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "ES6",
        "React",
        "React Hooks",
        "Next.js",
        "Bootstrap",
        "Reactstrap",
        "React-Bootstrap",
      ],
    },
    {
      category: "Backend",
      skills: [
        "C#",
        "ASP.NET Framework MVC",
        "ASP.NET Core MVC",
        "Entity Framework",
        "Node.js",
        "Express.js",
      ],
    },
    {
      category: "Databases",
      skills: [
        "MongoDB",
        "SQL",
        "T-SQL",
        "SSMS",
        "SQL Server",
        "pgAdmin",
        "PostgreSQL",
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        "IIS",
        "Apache",
        "Postman",
        "Databricks",
        "YAML",
        "Azure DevOps Pipelines",
        "Octopus Deploy",
        "CI/CD",
        "Git",
        "Heroku",
        "AWS",
        "PayPal REST API",
        "DevTools",
      ],
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform with payment processing and inventory management.",
      link: "#",
      tags: ["JavaScript", "React", "Node.js"],
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates.",
      link: "#",
      tags: ["TypeScript", "React", "Next.js"],
    },
    {
      title: "kevinli.dev",
      description:
        "A responsive portfolio website built with Next.js and Tailwind CSS.",
      link: "#",
      tags: ["HTML", "Next.js", "Tailwind CSS", "Apache"],
    },
  ],
  experience: [
    {
      company: "California Department of Public Health (CDPH)",
      position: "Software Developer",
      period: "May 2020 - Present",
      description:
        "Leading development of web applications for Women, Infants, and Children (WIC).",
      bulletPoints: [
        "Led development of Authorized Product List Submission System (APLSS) to facilitate submission and moderation of over 10,000 food products for the Women, Infants, and Children (WIC) program's Approved Product List (APL)",
        "Implemented, tested, and deployed responsive website following latest React guidelines using ES6 React Hooks",
        "Maintained ASP.NET Core APIs to perform authentication, authorization, and CRUD operations",
        "Maintained My Family, a Women, Infant, and Children (WIC) website supporting ~70,000 monthly users, using ASP.NET Framework MVC",
        "Replaced legacy authentication Resource Owner Password Credential (ROPC) grant flow with industry standard OAuth 2.0 and OIDC compliant Authorization Code grant with Proof Key for Code Exchange (PKCE) using Okta",
        "Designed and implemented continuous integration (CI) and continuous delivery (CD) pipeline to replace manual deployments using Microsoft-hosted Azure DevOps Services Pipelines and Octopus Deploy",
      ],
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "ES6",
        "React",
        "React Hooks",
        "Node.js",
        "C#",
        "ASP.NET Core MVC",
        "SQL",
        "T-SQL",
        "SQL Server",
        "SSMS",
        "Databricks",
        "IIS",
        "Reactstrap",
        "DevTools",
        "Postman",
        "YAML",
        "Azure DevOps Pipelines",
        "Octopus Deploy",
        "CI/CD",
      ],
    },
    {
      company: "California State University, Sacramento (CSUS)",
      position: "Application Developer, Part-Time",
      period: "Jan 2020 - Dec 2020",
      description:
        "Redesigned outdated table-formatted website into responsive web application using React and React-Bootstrap",
      bulletPoints: [
        "Redesigned outdated website formatted with tables into responsive web application using React and React-Bootstrap",
        "Designed and created database using Hibernate’s ORM code-first approach to map OOP models to database",
        "Modernized visual components to boost customer trust and acquisition. Replaced PayPal’s “Pay Now” button with custom-built payment interface using PayPal’s REST API",
        "Created deployment plans and deployed web application to cloud services Heroku and Amazon Web Services (AWS)",
      ],
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Bootstrap",
        "React-Bootstrap",
        "Heroku",
        "AWS",
        "PayPal REST API",
        "DevTools",
        "Git",
      ],
    },
    {
      company: "Autosoft Inc.",
      position: "Web Developer, Part-Time",
      period: "Oct 2015 - Jul 2017",
      description: "Developed and maintained client websites and applications.",
      bulletPoints: [
        "Maintained catalog containing over 30 million parts across 15,000 models using ASP.NET MVC and SQL Server",
        "Added Google Analytics and Google meta tags to web pages. Used Google Analytics to analyze user data and improve marketing efficiency. Updated web pages to improve performance and navigation",
        "Tested, analyzed, and refined stored procedures and T-SQL queries in SQL Server Management Studio (SSMS)",
        "Created and updated deployment plans for web application deployment to on-prem hosting environments",
      ],
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "C#",
        "SQL",
        "T-SQL",
        "ASP.NET Framework MVC",
        "SQL Server",
        "SSMS",
        "IIS",
        "Entity Framework",
        "Bootstrap",
        "Postman",
        "DevTools",
      ],
    },
    {
      company: "Sacramento Municipal Utility District (SMUD)",
      position: "Frontend Developer, Intern",
      period: "Jun 2015 - Sep 2015",
      description:
        "Modernized non-responsive to be responsive and mobile-friendly.",
      bulletPoints: [
        "Modernized static website and created responsive page layouts using HTML, CSS, JavaScript, and Bootstrap",
        "Performed functional and integration tests to identify bugs and performance issues using browser DevTools",
        "Analyzed meta tags, web page content, keywords, and page structures to improve and optimize search engine rankings",
      ],
      tags: ["HTML", "CSS", "SASS", "JavaScript", "DevTools"],
    },
  ],
  education: [
    {
      institution: "Georgia Institute of Technology",
      degree: "Master of Science in Computer Science",
      period: "2024 - Present",
      description: "GPA: 4.0",
      tags: ["Computer Science", "Machine Learning", "Artificial Intelligence"],
    },
    {
      institution: "California State University, Sacramento",
      degree: "Bachelor of Science in Computer Science",
      period: "2018 - 2021",
      // description: "",
      tags: ["Computer Science", "Web Development", "Software Engineering"],
    },
  ],
};

export default function Home() {
  const [activeTemplate, setActiveTemplate] = useState<
    "minimal" | "creative" | "professional"
  >("minimal");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isAndFilter, setIsAndFilter] = useState<boolean>(false);
  const [showTemplatePicker, setShowTemplatePicker] = useState<boolean>(
    process.env.NODE_ENV === "development",
  );

  // Create a flat array of all skills for filtering
  const allSkills = personalData.skillCategories.flatMap(
    (category) => category.skills,
  );

  const handleSkillClick = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill)); // Remove skill if already selected
    } else {
      setSelectedSkills([...selectedSkills, skill]); // Add skill if not selected
    }
  };

  // Filter projects based on selected skills and filter mode
  const filteredProjects =
    selectedSkills.length > 0
      ? personalData.projects.filter((project) => {
          if (isAndFilter) {
            // AND logic: project must have ALL selected skills
            return selectedSkills.every((skill) =>
              project.tags.includes(skill),
            );
          } else {
            // OR logic: project must have AT LEAST ONE selected skill
            return selectedSkills.some((skill) => project.tags.includes(skill));
          }
        })
      : personalData.projects;

  // Filter experience based on selected skills and filter mode
  const filteredExperience =
    selectedSkills.length > 0
      ? personalData.experience.filter((exp) => {
          if (isAndFilter) {
            // AND logic: experience must have ALL selected skills
            return selectedSkills.every((skill) => exp.tags.includes(skill));
          } else {
            // OR logic: experience must have AT LEAST ONE selected skill
            return selectedSkills.some((skill) => exp.tags.includes(skill));
          }
        })
      : personalData.experience;

  // Clear all filters
  const clearFilters = () => {
    setSelectedSkills([]);
  };

  const renderTemplate = () => {
    const templateProps = {
      data: personalData,
      selectedSkills,
      onSkillClick: handleSkillClick,
      clearFilters,
      allSkills,
      isAndFilter,
      setIsAndFilter,
      filteredProjects,
      filteredExperience,
    };

    switch (activeTemplate) {
      case "minimal":
        return <MinimalTemplate {...templateProps} />;
      case "creative":
        return <CreativeTemplate {...templateProps} />;
      case "professional":
        return <ProfessionalTemplate {...templateProps} />;
      default:
        return <MinimalTemplate {...templateProps} />;
    }
  };

  return (
    <main className="min-h-screen">
      {showTemplatePicker && (
        <TemplateSwitcher
          activeTemplate={activeTemplate}
          setActiveTemplate={setActiveTemplate}
        />
      )}
      {renderTemplate()}
    </main>
  );
}
