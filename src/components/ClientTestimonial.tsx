import { InfiniteMovingCards } from "./ui/InfiniteCard";

export function ClientTestimonial() {
  return (
    <section className="h-screen rounded-md flex flex-col antialiased items-center justify-center relative overflow-x-hidden  space-y-10">

        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center  ">Client Testimonial</h1>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </section>
  );
}

const testimonials = [
  {
    quote:
      "It's my pleasure to recommend Madhuri, who has been providing graphic design and UI/UX services for our company for the last One years. Madhuri is a skilled and creative professional who has consistently delivered high-quality designs and user interfaces for our web and mobile applications. She has an excellent sense of aesthetics and usability, and she always aims to satisfy the needs and expectations of our team. Madhuri is also a reliable and cooperative partner who communicates well and works effectively with our internal team of developers, testers, and project managers. She is always willing to learn new skills and technologies, and she adapts swiftly to changing requirements and feedback. I highly recommend her for any graphic design or UI/UX work.",
    name: "Ashwani Kumar Singh Rathore",
    title: "CEO, DutyPar @ IndoAi",
  },
  {
    quote:
      "Awesome creativity 😎 I would like to express my sincere appreciation for the excellent work that the Almondd has done for my  companies social media presence. They have consistently delivered high-quality content that reflects my brand identity and engages my target audience. They have also been very responsive, flexible and proactive in managing the campaigns and addressing any issues or feedback. I am very impressed by their creativity, professionalism and dedication to their clients. They have exceeded my expectations and I look forward to continuing our successful collaboration.",
    name: "Kumar Gaurav",
    title: "Service Manager, AVITA Technologies",
  },
  {
    quote: "Got the Best Graphics Design from here. Seeking for more Good Graphics.",
    name: "Rakesh Ranjan",
    title: "Web GIS Administrator cum Developer at ORSAC",
  },
  
];
