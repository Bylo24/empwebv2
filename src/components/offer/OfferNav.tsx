import emporomLogo from "@/assets/emporom-logo.png";

const OfferNav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="https://emporom.media" className="flex items-center">
          <img src={emporomLogo} alt="Emporom Media" className="h-7 sm:h-8" />
        </a>
        <a
          href="#get-demo"
          className="bg-accent text-accent-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Get Free Demo
        </a>
      </div>
    </nav>
  );
};

export default OfferNav;
