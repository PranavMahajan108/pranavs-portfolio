import { motion } from "framer-motion";
const Card = ({ children }) => (
  <div className="rounded-2xl shadow p-6 bg-white dark:bg-slate-800">{children}</div>
);

const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={`px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white ${className}`}
  >
    {children}
  </button>
);

import {
  Briefcase,
  BarChart3,
  Database,
  Mail,
  Download,
  Github,
  Linkedin,
  Moon,
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans transition-colors">
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold"
              >
                Pranav's Portfolio
              </motion.h1>
              <p className="mt-4 text-lg text-indigo-100">
                Data Analyst | Spend Analytics | Business Intelligence
              </p>
            </div>
            <Button
              variant="secondary"
              className="rounded-xl"
              onClick={() => setDark(!dark)}
            >
              <Moon className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* About */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <h2 className="text-2xl font-semibold mb-6">About Me</h2>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl">
              I am a Data Analyst with hands-on experience in spend analytics,
              rebate analysis, and procurement data transformation. I specialize
              in converting complex supplier and transaction-level data into
              actionable insights using Excel, Alteryx, and BI tools. My work
              supports cost optimization, supplier strategy, and informed
              business decisions.
            </p>
          </motion.div>
        </section>

        {/* Skills */}
        <section className="bg-white dark:bg-slate-900 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl font-semibold mb-10">Core Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <BarChart3 className="mb-4 text-indigo-600" />
                  <h3 className="font-semibold mb-2">Spend Analytics</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Spend visibility, category analysis, supplier consolidation,
                    and savings opportunity identification.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <Database className="mb-4 text-indigo-600" />
                  <h3 className="font-semibold mb-2">Data & Tools</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Advanced Excel, Alteryx workflows, Spenddata dashboards,
                    data quality checks, and flat file management.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl shadow-sm">
                <CardContent className="p-6">
                  <Briefcase className="mb-4 text-indigo-600" />
                  <h3 className="font-semibold mb-2">Business Intelligence</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    KPI reporting, executive-ready dashboards, stakeholder
                    communication, and insights storytelling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-10">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Enterprise Spend Dashboard</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Built interactive dashboards to analyze supplier-wise and
                  category-wise spend, enabling leadership to track cost trends
                  and optimization opportunities.
                </p>
                <p className="text-xs text-slate-500">Tools: Excel, Spenddata</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">Rebate Analysis & QC Framework</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Designed rebate analysis workflows, validated outputs using QC
                  trackers, and ensured compliance with supplier agreements.
                </p>
                <p className="text-xs text-slate-500">Tools: Alteryx, Excel</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resume */}
        <section className="bg-white dark:bg-slate-900 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Resume</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Download my resume to learn more about my professional journey.
            </p>
            <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-500">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-slate-900 text-slate-100 py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-slate-400 mb-6">
              Open to analytics roles, consulting opportunities, and
              collaboration.
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Button variant="secondary" className="rounded-xl">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="secondary" className="rounded-xl">
                <Github className="h-4 w-4" />
              </Button>
            </div>
            <Button className="rounded-xl bg-indigo-600 hover:bg-indigo-500">
              <Mail className="mr-2 h-4 w-4" /> Contact Me
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 py-6">
          © {new Date().getFullYear()} Pranav Mahajan. Built with React & Tailwind.
        </footer>
      </div>
    </div>
  );
}

