import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Expertise } from '@/components/sections/Expertise';
import { Experience } from '@/components/sections/Experience';
import { Blog } from '@/components/sections/Blog';
import { Contact } from '@/components/sections/Contact';
import { useTheme } from '@/hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HelmetProvider>
      <Helmet>
        <title>Matt Gilbert | Senior Test Engineer</title>
        <meta
          name="description"
          content="Matt Gilbert - Senior Test Engineer II with 10+ years of experience in software testing, test automation, and quality engineering. Specializing in API testing, framework development, and process improvement."
        />
        <meta
          name="keywords"
          content="Test Engineer, QA Engineer, Test Automation, Software Testing, Quality Assurance, API Testing, Python, TypeScript, Java"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mattgilbert.dev/" />
        <meta
          property="og:title"
          content="Matt Gilbert | Senior Test Engineer"
        />
        <meta
          property="og:description"
          content="Senior Test Engineer II with 10+ years of experience in software testing, test automation, and quality engineering."
        />
        <meta property="og:image" content="/static/headshot.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mattgilbert.dev/" />
        <meta
          property="twitter:title"
          content="Matt Gilbert | Senior Test Engineer"
        />
        <meta
          property="twitter:description"
          content="Senior Test Engineer II with 10+ years of experience in software testing, test automation, and quality engineering."
        />
        <meta property="twitter:image" content="/static/headshot.jpg" />

        {/* Theme color */}
        <meta
          name="theme-color"
          content={theme === 'dark' ? '#0f172a' : '#f8fafc'}
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Expertise />
          <Experience />
          <Blog />
          <Contact />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
