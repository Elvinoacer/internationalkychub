import { testimonials } from "@/app/data/dummyData";
import { StarIcon } from "../icons";

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16 md:px-10 md:py-24">
      <div className="flex flex-col items-center gap-10 text-center">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Trusted by Bettors Worldwide
          </h2>
          <p className="mt-4 text-base">
            Hear what our satisfied customers have to say about our service.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border border-border-light bg-card-light p-6 text-left dark:border-border-dark dark:bg-card-dark"
            >
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 italic">{testimonial.quote}</p>
              <p className="mt-4 font-bold">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
