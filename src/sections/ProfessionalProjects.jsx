import { ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const professionalProjects = [
  {
    id: 1,
    title: "Lead Sure Media - Digital Marketing Agency",
    company: "Lead Sure Media Pvt. Ltd.",
    description:
      "Developed and maintained high-performance web applications using PHP, MySQL, and JavaScript. Optimized website for SEO and implemented dynamic features for client engagement.",
    image: "/projects/lead-sure.png",
    tags: ["PHP", "MySQL", "JavaScript", "AJAX", "SEO"],
    technologies: "PHP, MySQL, JavaScript, AJAX, HTML, CSS",
    duration: "July 2025 - Present",

    link: "https://www.leadssure.com/",
    hasGithub: false,
  },
  {
    id: 2,
    title: "ISGE - IT Solutions & Consulting",
    company: "ISGE",
    description:
      "Built scalable web solutions for IT consulting services. Implemented modern web technologies for enhanced user experience and business growth.",
    image: "/projects/isge.png",
    tags: ["React", "Node.js", "Web Development"],
    technologies: "React, Node.js, Express.js, MongoDB, HTML, CSS",
    duration: "2025 - 2026",

    link: "https://www.isge.in/",
    hasGithub: false,
  },
  {
    id: 3,
    title: "Aquatech Plus - Water Technology Solutions",
    company: "Aquatech Plus",
    description:
      "Created professional web presence for water technology company. Implemented e-commerce features and product showcase with optimized performance.",
    image: "/projects/aquatech.png",
    tags: ["Web Development", "E-commerce", "Optimization"],
    technologies: "PHP, MySQL, JavaScript, Responsive Design",
    duration: "2025 - 2026",
  
    link: "https://www.aquatechplus.com/",
    hasGithub: false,
  },
  {
    id: 4,
    title: "Bionics RO - Water Purification Systems",
    company: "Bionics RO",
    description:
      "Developed website for water purification company with product information, pricing, and customer inquiry system.",
    image: "/projects/bionics.png",
    tags: ["Web Design", "MySQL", "JavaScript"],
    technologies: "HTML, CSS, JavaScript, MySQL, PHP",
    duration: "2025 - 2026",

    link: "https://www.bionicsro.com/",
    hasGithub: false,
  },
  {
    id: 5,
    title: "Asa Bella - Fashion & Lifestyle Brand",
    company: "Asa Bella",
    description:
      "Built modern e-commerce platform for fashion brand. Implemented product catalog, shopping cart, and user-friendly interface.",
    image: "/projects/asabella.png",
    tags: ["E-commerce", "Frontend", "Web Development"],
    technologies: "React, JavaScript, HTML, CSS, Responsive Design",
    duration: "2025 - 2026",
 
    link: "https://www.asabella.com/",
    hasGithub: false,
  },
  {
    id: 6,
    title: "IMTronics - Electronics & Technology",
    company: "IMTronics",
    description:
      "Developed website for electronics company showcasing products and services. Implemented inventory management and order tracking system.",
    image: "/projects/imtronics.png",
    tags: ["Web Development", "Backend", "Database"],
    technologies: "PHP, MySQL, JavaScript, HTML, CSS",
    duration: "2025 - 2026",
    
    link: "https://www.imtronics.in/",
    hasGithub: false,
  },
  {
    id: 7,
    title: "Nelli Care Products - Healthcare Solutions",
    company: "Nelli Care Products",
    description:
      "Created comprehensive website for healthcare products company. Integrated product information, benefits, and distribution network details.",
    image: "/projects/nelli.png",
    tags: ["Healthcare", "Web Design", "Content Management"],
    technologies: "HTML, CSS, JavaScript, PHP, MySQL",
    duration: "2025 - 2026",
  
    link: "https://www.nellifecareproducts.com/",
    hasGithub: false,
  },
];

const ProfessionalProjects = () => {
  return (
    <section
      id="professional-projects"
      className="py-10 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-1/4 left-0 w-56 h-56 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-10 sm:mb-14 lg:mb-16">
          <span className="text-secondary-foreground text-xs sm:text-sm font-medium tracking-wider uppercase animate-fade-in">
            Professional Experience
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4 sm:mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
            Client{" "}
            <span className="font-serif italic font-normal text-white">
              Work & Projects.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground animate-fade-in animate-delay-200 max-w-2xl mx-auto">
            Real-world projects built for companies, delivering scalable
            solutions and measurable business impact.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative max-w-7xl mx-auto animate-fade-in animate-delay-300">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            speed={900}
            spaceBetween={20}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".professional-projects-next",
              prevEl: ".professional-projects-prev",
            }}
            pagination={{
              clickable: true,
              el: ".professional-projects-pagination",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 1.2,
                spaceBetween: 18,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2.4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="professional-projects-swiper !pb-14"
          >
            {professionalProjects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="glass rounded-2xl sm:rounded-3xl overflow-hidden glow-border h-full flex flex-col group">
                  {/* Image */}
                  <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden bg-surface">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />

                    <div className="absolute left-4 top-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/90 text-xs font-medium text-primary-foreground">
                        {project.company}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                      {project.duration}
                    </p>

                    <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-tight line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground mb-5 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>

                 
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="mt-auto">
                      {project.link !== "#" && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            type="button"
            className="professional-projects-prev hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full glass items-center justify-center hover:bg-primary/10 hover:text-primary transition-all"
            aria-label="Previous project"
          >
            ‹
          </button>

          <button
            type="button"
            className="professional-projects-next hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-20 w-10 h-10 lg:w-12 lg:h-12 rounded-full glass items-center justify-center hover:bg-primary/10 hover:text-primary transition-all"
            aria-label="Next project"
          >
            ›
          </button>

          {/* Pagination */}
          <div className="professional-projects-pagination flex justify-center mt-6" />
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProjects;
