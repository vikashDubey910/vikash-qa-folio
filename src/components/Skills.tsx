import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const testingSkills = [
    "Manual Testing",
    "Regression Testing",
    "Smoke Testing",
    "UAT",
    "Black Box Testing",
    "Bug Tracking",
    "STLC",
  ];

  const tools = [
    "Selenium",
    "SQL",
    "Python",
    "C",
    "Excel",
    "HTML",
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Testing Skills</h3>
            <div className="flex flex-wrap gap-3">
              {testingSkills.map((skill) => (
                <Badge key={skill} variant="default" className="text-sm px-4 py-2">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="text-sm px-4 py-2">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
