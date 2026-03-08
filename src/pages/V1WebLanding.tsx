import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const V1WebLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-28">
        <section className="section-base flex flex-col items-center gap-8">
          <h1 className="text-3xl md:text-4xl font-bold">V1 Web Landing</h1>
          <p className="text-lg text-muted-foreground">
            This is a placeholder for the V1 Web Landing page. You can replace the content of this file with your code for `/v1weblanding`.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default V1WebLanding;