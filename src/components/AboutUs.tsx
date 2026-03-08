import { motion, useInView } from "framer-motion";
import { Linkedin } from "lucide-react";
import { useRef } from "react";
import loganImg from "@/assets/logan.jpg";
import samImg from "@/assets/sam.png";

const team = [
  {
    firstName: "Logan",
    lastName: "Hempel",
    role: "Founder",
    image: loganImg,
    linkedin: "https://www.linkedin.com/in/logan-hempel-043a5b2b9/",
  },
  {
    firstName: "Sam",
    lastName: "Howell",
    role: "Co-founder",
    image: samImg,
    linkedin: "https://nz.linkedin.com/in/samuel-howell-b666b1314",
  },
];

const AboutUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.4 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden section-base"
    >
      <motion.div className="relative z-10">
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading section-heading--narrow"
          >
            <span className="section-badge">About us</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          className="section-body text-center mb-12"
          >
            <p className="text-lg md:text-xl leading-relaxed">
              We’re Logan and Sam, the team behind Emporom Media — a Wellington-based
              digital marketing agency founded on the belief that marketing should
              deliver <span className="text-keyword">measurable business results</span>. Emporom Media
              was established by Logan, with Sam joining in late 2025 to help scale our vision.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              We operate as a highly <span className="text-keyword">hands-on</span>,{" "}
              <span className="text-keyword">founder-led</span> team, managing every aspect of our work
              personally to maintain exceptional quality and consistency. By keeping
              our client roster intentionally small and never outsourcing, we offer something
              increasingly rare: <span className="text-keyword">direct access</span> to the people actually
              running your campaigns.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Our approach is built on <span className="text-keyword">clear strategy</span>, disciplined execution,
              and <span className="text-keyword">performance-driven marketing</span> designed to support sustainable growth.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">Let’s talk.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-12 relative z-10 mt-8"
          >
            {team.map((member) => (
              <div
                key={`${member.firstName}-${member.lastName}`}
                className="flex flex-col items-center"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-2 border-border">
                <img
                  src={member.image}
                  alt={`${member.firstName} ${member.lastName}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                </div>
                <h3 className="text-lg font-bold">
                  {member.firstName} {member.lastName}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
