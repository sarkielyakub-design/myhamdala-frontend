"use client";

import { motion } from "framer-motion";

import Image from "next/image";

import {
  Star,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Abdullahi Musa",
    location: "Kano, Nigeria",
    image: "/images/testimonials/user1.jpg",
    rating: 5,
    message:
      "M.Y Hamdala handled our Umrah trip professionally. Everything from visa processing to accommodation exceeded our expectations.",
  },
  {
    id: 2,
    name: "Fatima Ibrahim",
    location: "Abuja, Nigeria",
    image: "/images/testimonials/user2.jpg",
    rating: 5,
    message:
      "Booking was smooth and the support team was always available. I highly recommend them for international travel.",
  },
  {
    id: 3,
    name: "Muhammad Bello",
    location: "Kaduna, Nigeria",
    image: "/images/testimonials/user3.jpg",
    rating: 5,
    message:
      "Professional staff, excellent hotels and seamless flight arrangements. I'll definitely travel with them again.",
  },
];

export default function Testimonials() {

  return (

<section className="py-28 bg-white">

<div className="max-w-7xl mx-auto px-6">

<motion.div

initial={{opacity:0,y:40}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

className="text-center"

>

<p className="uppercase tracking-[6px] text-blue-700 font-semibold">

TESTIMONIALS

</p>

<h2 className="mt-4 text-5xl font-black">

What Our Clients Say

</h2>

<p className="mt-6 max-w-3xl mx-auto text-slate-500 leading-8">

Thousands of travellers trust us for Hajj,
Umrah, flights, visas and international
holiday packages.

</p>

</motion.div>

<div className="grid lg:grid-cols-3 gap-8 mt-20">{testimonials.map((item,index)=>(

<motion.div

key={item.id}

initial={{
opacity:0,
y:40,
}}

whileInView={{
opacity:1,
y:0,
}}

viewport={{
once:true,
}}

transition={{
delay:index*.15,
}}

whileHover={{
y:-10,
}}

className="
relative
rounded-[32px]
bg-slate-50
border
border-slate-200
p-8
shadow-lg
hover:shadow-2xl
transition-all
"

>

<div
className="
absolute
top-8
right-8
text-blue-100
"
>

<Quote size={60}/>

</div>

<div className="flex">

{Array.from({length:item.rating}).map((_,i)=>(

<Star

key={i}

size={18}

fill="#FACC15"

className="text-yellow-400"

/>

))}

</div>

<p
className="
mt-8
leading-8
text-slate-600
italic
"
>

"{item.message}"

</p>

<div className="mt-10 flex items-center gap-4">

<div className="relative w-16 h-16 rounded-full overflow-hidden">

<Image

src={item.image}

alt={item.name}

fill

className="object-cover"

/>

</div>

<div>

<h4 className="font-bold text-lg">

{item.name}

</h4>

<p className="text-slate-500">

{item.location}

</p>

</div>

</div>

</motion.div>

))}        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
          mt-24
          rounded-[36px]
          bg-gradient-to-r
          from-blue-900
          via-blue-800
          to-blue-700
          p-12
          text-center
          text-white
          "
        >

          <h2 className="text-5xl font-black">

            Join Thousands Of Happy Travellers

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-blue-100 leading-8">

            Experience professional travel planning,
            secure bookings and exceptional customer
            service for your next journey.

          </p>

        </motion.div>

      </div>

    </section>

  );

}