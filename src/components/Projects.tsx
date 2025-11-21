import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Application Testing",
      description: "Comprehensive testing of an e-commerce platform including user registration, product catalog, shopping cart, and checkout processes.",
      scope: [
        "Functional testing of all user flows",
        "Payment gateway integration testing",
        "Cross-browser compatibility testing",
        "Created 100+ test cases",
        "Identified and tracked 50+ defects",
      ],
    },
    {
      title: "Library Management System Testing",
      description: "End-to-end testing of a library management system covering book inventory, user management, and borrowing processes.",
      scope: [
        "Test case creation for all modules",
        "Database testing and validation",
        "User access control testing",
        "Created detailed test reports",
        "Performed regression testing",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {project.scope.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
