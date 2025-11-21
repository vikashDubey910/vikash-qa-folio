const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg">
            I am a dedicated QA Testing Engineer with a strong foundation in manual testing methodologies. 
            My expertise lies in creating comprehensive test cases, identifying defects, and ensuring software quality 
            throughout the Software Testing Life Cycle (STLC).
          </p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Education</h3>
            <div className="space-y-2">
              <div>
                <p className="font-medium text-foreground">Bachelor of Computer Applications (BCA)</p>
                <p>72% - Recent Graduate</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Master of Computer Applications (MCA)</p>
                <p>Currently Pursuing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
