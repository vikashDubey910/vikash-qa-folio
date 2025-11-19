import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ShoppingCart, Library } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Application Testing",
      icon: ShoppingCart,
      type: "Manual Testing",
      duration: "Project",
      description: "Comprehensive manual testing of an e-commerce web application covering critical user flows and functionalities.",
      responsibilities: [
        "Performed end-to-end testing of login, registration, cart, and checkout functionalities",
        "Created and executed detailed test cases for various user scenarios",
        "Validated UI/functional behaviour across different browsers and devices",
        "Logged and tracked defects using structured defect reporting",
        "Practiced STLC methodology throughout the testing lifecycle",
        "Conducted regression testing after bug fixes to ensure system stability"
      ],
      testScopes: [
        "User Authentication (Login/Logout/Registration)",
        "Product Search and Filtering",
        "Shopping Cart Operations (Add/Update/Remove)",
        "Checkout Process and Payment Flow",
        "Order Confirmation and History"
      ],
      tools: ["Manual Testing", "Test Case Management", "Bug Tracking", "Regression Testing"],
      sampleTestCases: [
        "Verify user can successfully register with valid credentials",
        "Verify appropriate error messages for invalid login attempts",
        "Verify shopping cart updates correctly when adding/removing items",
        "Verify checkout process completes successfully with valid payment",
        "Verify order confirmation displays correct details post-purchase"
      ]
    },
    {
      title: "Library Management System Testing",
      icon: Library,
      type: "Manual Testing",
      duration: "Project",
      description: "Detailed manual testing of a Library Management System focusing on book operations and student management modules.",
      responsibilities: [
        "Performed manual testing on key modules: Book Search, Student Login, Book Issue, and Return",
        "Created detailed test cases based on functional requirements for each module",
        "Verified UI validations and field-level checks for data integrity",
        "Validated data consistency for student and book records across operations",
        "Conducted smoke testing to verify critical functionalities post-deployment",
        "Executed functional and regression testing during iterative releases",
        "Documented test results and defects with detailed reproduction steps"
      ],
      testScopes: [
        "Student Login and Authentication",
        "Book Search and Catalog Management",
        "Book Issue Process and Validation",
        "Book Return and Fine Calculation",
        "Student Record Management"
      ],
      tools: ["Manual Testing", "SQL", "Test Documentation", "Smoke Testing"],
      sampleTestCases: [
        "Verify student can login with valid credentials and access dashboard",
        "Verify book search returns accurate results based on title/author/ISBN",
        "Verify system prevents issuing books when student limit is reached",
        "Verify fine calculation is correct for overdue book returns",
        "Verify book status updates correctly after issue and return operations"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on testing experience across diverse application domains
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-xl transition-all">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <Badge variant="default">{project.type}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {project.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Testing Scope</h4>
                      <div className="space-y-3 mb-4">
                        {project.testScopes.map((scope, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span className="text-sm text-muted-foreground">{scope}</span>
                          </div>
                        ))}
                      </div>
                      
                      <h4 className="font-semibold mb-2">Tools & Techniques</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <h4 className="font-semibold mb-3">Sample Test Cases</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.sampleTestCases.map((testCase, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-3 rounded-lg bg-muted/50">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm">{testCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
