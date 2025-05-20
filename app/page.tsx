"use client"


import type React from "react"

import { ArrowDownToLine, ExternalLink, Github, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  const downloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement("a")
    link.href = "/resume.pdf" // This would be your actual resume path
    link.setAttribute("download", "Sky_Kambale_Resume.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold inline-block bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Sky Kambale
              </span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#about"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-purple-400"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-purple-400"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-purple-400"
              >
                Skills
              </Link>
              <Link
                href="#resume"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-purple-400"
              >
                Resume
              </Link>
              <Link
                href="#contact"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:text-purple-400"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="default"
              size="sm"
              className="hidden md:flex bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Hi, I'm Akash Kambale
                </span>
                <br />
                Java Developer
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                I build robust, scalable, and efficient applications with Java and modern frameworks.
              </p>
              <div className="flex gap-4">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get in Touch
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full border-4 border-purple-500/20">
              <Image src="/images/profile.png" alt="Sky Kambale" fill className="object-cover object-top" priority />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="bg-gradient-to-r from-purple-900/10 to-cyan-900/10 py-16 dark:from-purple-900/20 dark:to-cyan-900/20"
        >
          <div className="container space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="text-muted-foreground">Get to know me and my background</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <p>
                  I'm a passionate Java developer with a strong focus on creating robust, scalable, and efficient
                  applications. With several years of experience in the field, I've developed a deep understanding of
                  Java and related technologies.
                </p>
                <p>
                  My journey in software development began when I was fascinated by how applications work. Since then,
                  I've been continuously learning and improving my skills to stay at the forefront of the industry.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or enjoying outdoor activities to maintain a healthy work-life balance.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Pune Maharashtra, India</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  My Approach
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary-foreground"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Clean, maintainable code architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary-foreground"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary-foreground"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Test-driven development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary-foreground"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Microservices architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 p-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary-foreground"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span>Continuous learning and improvement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* Projects Section */}
        <section id="projects" className="py-16">
          <div className="container space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Projects
              </h2>
              <p className="text-muted-foreground">Some of my recent work</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">


              {/* Project 1 */}
              <Card className="overflow-hidden border-purple-500/20 hover:shadow-md hover:shadow-purple-500/10 transition-all">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/images/echelon.png"
                    alt="Echelon Level Up"
                    width={400}
                    height={225}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Echelon Level Up
                  </CardTitle>
                  <CardDescription>Productivity enhancement platform</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Developed a Java-based productivity platform that helps users track and achieve their goals through
                    smart reminders and progress analytics.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden border-purple-500/20 hover:shadow-md hover:shadow-purple-500/10 transition-all">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="https://www.7searchppc.com/blog/wp-content/uploads/2024/06/Mobile-Advertising.png"
                    alt="Mobile-Billboard Advertisement"
                    width={400}
                    height={225}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Mobile-Billboard Advertisement
                  </CardTitle>
                  <CardDescription>Location-based ad delivery system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Built a Java Spring Boot backend for a mobile advertising platform that delivers targeted ads based
                    on user location and demographics.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden border-purple-500/20 hover:shadow-md hover:shadow-purple-500/10 transition-all">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="https://www.damcogroup.com/wp-content/uploads/2023/10/stock-market-prediction-using-ai.jpg"
                    alt="Stock Pro Realtime Analysis"
                    width={400}
                    height={225}
                    className="object-cover transition-all hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Stock Pro Realtime Analysis
                  </CardTitle>
                  <CardDescription>Financial data processing system</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Engineered a high-performance Java application that processes real-time stock market data and
                    provides predictive analytics using machine learning algorithms.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500/10">
                View All Projects
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bg-gradient-to-r from-purple-900/10 to-cyan-900/10 py-16 dark:from-purple-900/20 dark:to-cyan-900/20"
        >
          <div className="container space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Skills
              </h2>
              <p className="text-muted-foreground">Technologies I work with</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Java & Backend
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Java",
                      "Spring Boot",
                      "Spring MVC",
                      "Spring Security",
                      "JPA/Hibernate",
                      "JUnit",
                      "Mockito",
                      "Maven",
                      "Gradle",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:text-purple-400"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Databases & Cloud
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "CI/CD"].map(
                      (skill) => (
                        <div
                          key={skill}
                          className="rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:text-purple-400"
                        >
                          {skill}
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Frontend & Others
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["HTML", "CSS", "JavaScript", "React", "RESTful APIs", "GraphQL", "Git", "Agile/Scrum"].map(
                      (skill) => (
                        <div
                          key={skill}
                          className="rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 px-3 py-1 text-sm font-medium text-purple-500 dark:text-purple-400"
                        >
                          {skill}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Experience Level
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Java Development</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-purple-600 to-cyan-600"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Spring Framework</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[90%] rounded-full bg-gradient-to-r from-purple-600 to-cyan-600"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Database Management</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-purple-600 to-cyan-600"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Microservices Architecture</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-purple-600 to-cyan-600"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">DevOps</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[75%] rounded-full bg-gradient-to-r from-purple-600 to-cyan-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-16">
          <div className="container space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Resume
              </h2>
              <p className="text-muted-foreground">My professional journey</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2 rounded-lg border border-purple-500/20 p-4 hover:shadow-md hover:shadow-purple-500/10 transition-all">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">Master of Computer Science</h4>
                      <span className="text-sm text-muted-foreground">2024 -2026</span>
                    </div>
                    <p className="text-muted-foreground">Garware College , Pune</p>
                    <p className="text-sm">
                      Specialized in Software Engineering and Java Applications. Graduated with honors.
                    </p>
                  </div>
                  <div className="space-y-2 rounded-lg border border-purple-500/20 p-4 hover:shadow-md hover:shadow-purple-500/10 transition-all">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">Bachelor of Science in Computer Science</h4>
                      <span className="text-sm text-muted-foreground">2020 - 2023</span>
                    </div>
                    <p className="text-muted-foreground">RBNB College , Shrirampur , University of Pune</p>
                    <p className="text-sm">
                      Learned software engineering and Java development. Focused on Leetcode DSA .
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Work Experience
                </h3>
                <div className="space-y-6">
                  
                  <div className="space-y-2 rounded-lg border border-purple-500/20 p-4 hover:shadow-md hover:shadow-purple-500/10 transition-all">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold">Java Developer</h4>
                      <span className="text-sm text-muted-foreground">Present 2021</span>
                    </div>
                    <p className="text-muted-foreground">Digital Solutions </p>
                    <p className="text-sm">
                      Developed enterprise Java applications, collaborated with cross-functional teams, and optimized
                      application performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                className="gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                onClick={downloadResume}
              >
                <ArrowDownToLine className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gradient-to-r from-purple-900/10 to-cyan-900/10 py-16 dark:from-purple-900/20 dark:to-cyan-900/20"
        >
          <div className="container space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Contact Me
              </h2>
              <p className="text-muted-foreground">Get in touch for opportunities or collaborations</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Contact Information
                  </h3>
                  <p className="text-muted-foreground">Feel free to reach out through any of these channels</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-purple-500" />
                    <span>akashkambalegenius111@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-purple-500" />
                    <span>Pune Maharashtra, India</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Social Profiles
                  </h3>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                      asChild
                    >
                      <Link href="#" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                      asChild
                    >
                      <Link href="#" aria-label="LinkedIn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                      asChild
                    >
                      <Link href="#" aria-label="Twitter">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-purple-500/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="flex h-10 w-full rounded-md border border-purple-500/20 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="flex min-h-[120px] w-full rounded-md border border-purple-500/20 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
                  </Button>
                  {submitted && (
                    <p className="text-center text-green-500 text-sm">
                      Thank you for your message! I'll get back to you soon.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-purple-500/20 py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Sky Kambale. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-sm hover:text-purple-500" asChild>
              <Link href="#">Privacy Policy</Link>
            </Button>
            <Button variant="ghost" size="sm" className="text-sm hover:text-purple-500" asChild>
              <Link href="#">Terms of Service</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
