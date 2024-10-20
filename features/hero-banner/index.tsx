import HeroBannerCarousel from "@/components/HeroBanner";

const HeroBannerSection = () => {
  return(
    <section className="hidden md:block pb-3 pt-6 px-4 sm:px-8 md:px-16 lg:px-28">
      <HeroBannerCarousel />
    </section>
  );
}

export default HeroBannerSection;