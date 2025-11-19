import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bug, TestTube, FileCheck, Database, Code, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Testing Expertise",
      icon: TestTube,
      skills: ["Manual Testing", "Regression Testing", "Smoke Testing", "UAT", "Black Box Testing", "Functional Testing"]
    },
    {
      title: "Bug Management",
      icon: Bug,
      skills: ["Bug Tracking", "Bug Life Cycle", "Defect Reporting", "Test Case Writing", "Test Execution"]
    },
    {
      title: "Tools & Technologies",
      icon: Code,
      skills: ["Selenium", "SQL", "Python", "HTML", "Excel", "MS-Word"]
    },
    {
      title: "Methodologies",
      icon: FileCheck,
      skills: ["STLC", "Test Automation (Basic)", "Agile Methodologies", "End-to-End Testing"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL Queries", "Data Validation", "Data Consistency Checks"]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Quick Learner", "Detail-Oriented", "Problem Solving", "Team Collaboration", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set in quality assurance and software testing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
