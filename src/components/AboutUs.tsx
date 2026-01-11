import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import loganImg from "@/assets/logan.jpg";
import samImg from "@/assets/sam.png";

const team = [
  {
    name: "Logan Hempel",
    role: "Founder",
    image: loganImg,
    linkedin: "https://www.linkedin.com/in/logan-hempel-043a5b2b9/",
  },
  {
    name: "Sam Howell",
    role: "Co-founder",
    image: samImg,
    linkedin: "https://linkedin.com/",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="section-badge mb-4">About us</span>
        </motion.div>

        {/* About text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            We're <strong>Logan and Sam</strong> — a Wellington-based{" "}
            <strong>digital marketing agency</strong> that started with a couple of laptops, a lot of
            curiosity, and a pretty strong belief that <strong>marketing should actually work.</strong>
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            <strong>Logan</strong> kicked things off, and <strong>Sam joined in late 2025</strong>. We're
            both <strong>18</strong>, which surprises people sometimes — <strong>but we're hands-on</strong>,
            we do the work ourselves, and we care a lot about getting <strong>real results for our clients.</strong>
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            <strong>We keep things simple.</strong> Small client list, no outsourcing, and direct access
            to us. <strong>If you work with us</strong>, you're dealing with the people actually running
            your campaigns and making the calls.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            We focus on <strong>smart strategy,</strong> clear thinking, and <strong>marketing</strong>{" "}
            that earns its keep — not fluff, buzzwords, or overcomplicated plans. Just solid work for
            businesses that <strong>want to grow.</strong>
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            If you're keen to work with a small team that's easy to deal with and properly invested in
            your success, <strong>let's chat.</strong>
          </p>
        </motion.div>

        {/* Team members */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-12"
        >
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-2 border-border">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
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
    </section>
  );
};

export default AboutUs;
