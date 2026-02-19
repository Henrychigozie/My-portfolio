import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Emmanuel Okafor",
    role: "Startup Founder • Lagos",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=400&auto=format&fit=crop",
    review:
      "Working with Chigozie was exceptional. He understood my vision instantly and delivered a world-class platform that positioned my startup professionally.",
    stars: 5,
  },
  {
    id: 2,
    name: "Philip Adeyemi",
    role: "Product Manager • Abuja",
    image:
      "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=400&auto=format&fit=crop",
    review:
      "His attention to detail and design excellence is unmatched. The final product exceeded expectations and elevated our entire brand presence.",
    stars: 5,
  },
  {
    id: 3,
    name: "Precious Nwankwo",
    role: "Business Owner • Port Harcourt",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=400&auto=format&fit=crop",
    review:
      "Professional, reliable, and highly skilled. My customers immediately noticed the difference. It gave my business instant credibility.",
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-32 bg-[#0f172a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-2xl mx-auto mb-24">

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-emerald-400 font-semibold tracking-[0.3em] uppercase text-sm"
          >
            Testimonials
          </motion.span>


          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-6 text-4xl md:text-5xl font-bold text-white"
          >
            Trusted by businesses
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
              across Nigeria
            </span>
          </motion.h2>


          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-6 text-slate-400 text-lg"
          >
            Delivering premium digital experiences that help African brands grow.
          </motion.p>

        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-10">

          {reviews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -12 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-emerald-500/20 to-transparent"
            >


              {/* Card */}

              <div className="relative h-full bg-slate-900/70 backdrop-blur-xl rounded-3xl p-9 border border-slate-700 hover:border-emerald-500/40 shadow-lg hover:shadow-emerald-500/10 transition duration-500">


                {/* Quote */}

                <div className="absolute -top-5 left-8 bg-slate-900 border border-slate-700 rounded-full p-3">

                  <Quote className="text-emerald-400" size={22} />

                </div>



                {/* Stars */}

                <div className="flex gap-1 mb-6 mt-4">

                  {[...Array(item.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-emerald-400 fill-emerald-400"
                    />
                  ))}

                </div>



                {/* Review */}

                <p className="text-slate-300 leading-relaxed mb-8">

                  "{item.review}"

                </p>



                {/* User */}

                <div className="flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 group-hover:scale-110 transition duration-500"
                  />


                  <div>

                    <h4 className="font-semibold text-white">

                      {item.name}

                    </h4>


                    <p className="text-sm text-emerald-400">

                      {item.role}

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
