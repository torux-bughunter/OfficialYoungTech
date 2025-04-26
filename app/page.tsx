import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MatrixBackground from "@/components/matrix-background"
import EventCard from "@/components/event-card"
import SuccessStory from "@/components/success-story"
import ImageCarousel from "@/components/image-carousel"
import PartnerLogo from "@/components/partner-logo"
import { Mail } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-black via-black to-gray-900 text-center py-32 md:py-48">
        <MatrixBackground />
        <div className="container relative z-10 px-4 flex flex-col items-center">
          <div className="inline-block bg-black/30 backdrop-blur-sm p-6 rounded-lg border border-primary/20 shadow-[0_0_15px_rgba(0,255,0,0.2)] mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Empowering Tomorrow&apos;s <span className="text-primary">Innovators</span>
              <span className="animate-blink ml-1">|</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Inspiring young minds through interactive STEM experiences
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white border-0 shadow-[0_0_10px_rgba(0,255,0,0.3)]"
            >
              <a href="#events">Join Our Events</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <a href="#get-involved">Get Involved</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-background">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="max-w-4xl mx-auto text-muted-foreground">
            Young Tech Pioneers is a nonprofit organization committed to empowering the next generation of innovators by
            giving them hands-on, interactive STEM experiences, with a particular focus on computer science. Unlike
            traditional methods that often emphasize rote coding exercises, we introduce students to advanced topics
            such as machine learning and cybersecurity through engaging, fun, and easy-to-grasp activities. Our approach
            prioritizes the practical, real-life applications of these concepts, moving beyond standard instructional
            techniques to ensure students connect with the material in a meaningful way. Our vision is to move away from
            the conventional, rigid classroom environments seen in most schools and extracurricular settings and instead
            create a personalized learning atmosphere fueled by curiosity, discovery, and passion.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-muted">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard
              title="Young Tech Pioneers STEM Talks"
              date="May 4, 2025"
              location="Plano, TX"
              description="STEAM Talks is a weekly mentorship program where high school students guide middle schoolers in developing their own passion projects in STEAM (Science, Technology, Engineering, Arts, and Math). Participants gain hands-on experience, learn new skills, and work toward a final showcase where they present their projects to the public.  

As a prerequisite, students will take part in the Children's Business Fair, where they can launch a mini-business, sell products, and gain real-world entrepreneurial experience. STEAM Talks is a fun, supportive, and free program designed to spark creativity, build confidence, and bring ideas to life!"
            />
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section id="success" className="py-16 bg-background">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SuccessStory
              title="Plano Children's Business Fair"
              content="Our recent Plano Children's Business Fair was a resounding success, attracting over 100 attendees to the 19 child-led businesses, generating over $650 in revenue for young entrepreneurs. The funds raised directly contribute to advancing our mission of empowering the next generation of innovators, fostering creativity, leadership, and real-world business experience in our community's youth. With assistance and funding from the non-profit organization GripTape, we successfully hosted the first GripTape-alumni-organized Children's Business Fair and are determined to continue paving the path to accessible, interactive, and innovative learning experiences for youth in our community."
            />
            <ImageCarousel
              images={[
                { src: "/images/Image3.JPG", alt: "Children's Business Fair Event" },
                { src: "/images/Image2.JPG", alt: "Young entrepreneurs at the Business Fair" },
                { src: "/images/Image4.JPG", alt: "Business Fair activities" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-16 bg-muted">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Partners</h2>
          <p className="max-w-4xl mx-auto mb-8">
            We are proud to collaborate with organizations that share our vision of empowering the next generation of
            innovators. Our partners play a crucial role in helping us provide high-quality, interactive STEM
            experiences to young minds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <PartnerLogo src="/images/griptape-logo.webp" alt="GripTape Logo" />
            <PartnerLogo src="/images/icode-logo.jpg" alt="iCode Logo" />
          </div>
          <p className="mt-8">
            Interested in partnering with us?{" "}
            <Link href="mailto:official@youngtechpioneers.com" className="text-primary hover:underline">
              Contact us
            </Link>{" "}
            to learn more about how we can work together.
          </p>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-16 bg-background">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join the Young Tech Pioneers Team</h2>
          <div className="max-w-2xl mx-auto mb-8">
            <p className="mb-4">
              We currently have four different positions for our Young Tech Pioneers Board. They include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg">Director of Marketing</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg">Director of Educational Content</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg">Director of Community Outreach</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg">Director of Fundraising</h3>
                </CardContent>
              </Card>
            </div>
            <p className="mb-6">
              Teens with any degree of expertise or experience in any of the above fields are more than welcome to
              apply!
            </p>
          </div>
          <Button asChild>
            <a href="https://3hgb5txzs24.typeform.com/to/bVF865bU" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
          <p className="max-w-2xl mx-auto mb-8">
            If you have any questions or would like to learn more about our programs, please don&apos;t hesitate to
            reach out.
          </p>
          <Button asChild>
            <a href="mailto:official@youngtechpioneers.com">
              <Mail className="mr-2 h-4 w-4" /> Email Us
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}

