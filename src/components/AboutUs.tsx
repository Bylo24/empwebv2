import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import loganImg from "@/assets/logan.jpg";
import samImg from "@/assets/sam.png";
const team = [{
  name: "Logan Hempel",
  role: "Founder",
  image: loganImg,
  linkedin: "https://www.linkedin.com/in/logan-hempel-043a5b2b9/"
}, {
  name: "Sam Howell",
  role: "Co-founder",
  image: samImg,
  linkedin: "https://linkedin.com/"
}];
const AboutUs = () => {
  return <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-12">
          <span className="section-badge mb-4">About us</span>
        </motion.div>

        {/* About text */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.1
      }} className="text-center mb-16 max-w-3xl mx-auto">
          
          
          
          
          <p className="text-lg md:text-xl leading-relaxed">We’re Logan and Sam, the team behind Emporom Media, a Wellington based digital marketing agency built on the belief that marketing should deliver real results. Logan started Emporom Media, with Sam joining in late 2025. We’re both 18, hands on, and manage all work ourselves to ensure quality and consistency. We keep a small client list, do not outsource, and give clients direct access to us, meaning you work directly with the people running your campaigns. Our focus is clear strategy, strong execution, and marketing that supports measurable business growth.
          <strong>let's chat.</strong>
          </p>
        </motion.div>

        {/* Team members */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="flex flex-wrap justify-center gap-12">
          {team.map(member => <div key={member.name} className="flex flex-col items-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-2 border-border">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>)}
        </motion.div>
      </div>
    </section>;
};
export default AboutUs;