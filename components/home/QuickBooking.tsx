"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import {
  Plane,
  Building2,
  PlaneTakeoff,
  PlaneLanding,
  ShieldCheck,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Flight",
    icon: Plane,
    color: "bg-blue-600",
    href: "/flights",
  },
  {
    title: "Hotels",
    icon: Building2,
    color: "bg-orange-500",
    href: "/hotels",
  },
  {
    title: "Umrah",
    icon: PlaneTakeoff,
    color: "bg-green-600",
    href: "/umrah",
  },
  {
    title: "Hajj",
    icon: PlaneLanding,
    color: "bg-purple-600",
    href: "/hajj",
  },
];

export default function QuickBooking() {

  return (

<section className="relative -mt-24 z-30">

<div className="max-w-7xl mx-auto px-6">

<motion.div

initial={{opacity:0,y:60}}

whileInView={{opacity:1,y:0}}

viewport={{once:true}}

transition={{duration:.7}}

className="
rounded-[32px]
bg-white
shadow-[0_25px_70px_rgba(0,0,0,.12)]
overflow-hidden
"

>

<div className="grid lg:grid-cols-5">

{/* LEFT */}

<div
className="
lg:col-span-4
p-8
"
>

<div className="flex items-center gap-3 mb-8">

<ShieldCheck className="text-blue-700"/>

<h2 className="text-3xl font-bold">

Start Your Journey

</h2>

</div>

<div className="grid md:grid-cols-4 gap-5">

{services.map((service)=>{

const Icon=service.icon;

return(

<Link

key={service.title}

href={service.href}

className="
border
rounded-2xl
p-6
hover:shadow-xl
transition
group
"

>

<div

className={`
w-14
h-14
rounded-2xl
${service.color}
flex
items-center
justify-center
mb-5
group-hover:scale-110
transition
`}

>

<Icon
className="text-white"
/>

</div>

<h3 className="font-bold text-lg">

{service.title}

</h3>

<p className="text-slate-500 mt-2">

Book instantly

</p>

</Link>

);

})}

</div>

</div>

{/* RIGHT */}

<div
className="
bg-blue-700
p-8
text-white
flex
flex-col
justify-center
"
>              <h3 className="text-3xl font-black leading-tight">

                Ready To Travel?

              </h3>

              <p className="mt-5 text-blue-100 leading-8">

                Book flights, hotels, Umrah, Hajj and visa
                services from one trusted platform.

              </p>

              <div className="mt-10 space-y-5">

                <div className="relative">

                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    className="
                    w-full
                    rounded-2xl
                    bg-white
                    text-slate-800
                    px-5
                    py-4
                    outline-none
                    "
                  />

                </div>

                <div className="relative">

                  <input
                    type="date"
                    className="
                    w-full
                    rounded-2xl
                    bg-white
                    text-slate-800
                    px-5
                    py-4
                    outline-none
                    "
                  />

                </div>

                <Link
                  href="https://booking.myhamdalatravels.com"
                  target="_blank"
                  className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-yellow-400
                  hover:bg-yellow-500
                  text-slate-900
                  py-4
                  font-bold
                  transition
                  "
                >

                  <Search size={20} />

                  Search Availability

                </Link>

              </div>

              <div className="mt-10 border-t border-blue-500 pt-8">

                <div className="grid grid-cols-2 gap-5">

                  <div>

                    <h4 className="text-3xl font-black">

                      24/7

                    </h4>

                    <p className="text-blue-100">

                      Customer Support

                    </p>

                  </div>

                  <div>

                    <h4 className="text-3xl font-black">

                      100%

                    </h4>

                    <p className="text-blue-100">

                      Secure Booking

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );

}