export interface NavItem {
  label: string;
  href?: string;
  children?: {
    title: string;
    description: string;
    href: string;
    image: string;
  }[];
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Packages",
    children: [
      {
        title: "Umrah Packages",
        description:
          "Affordable and VIP Umrah packages throughout the year.",
        href: "/packages/umrah",
        image: "/images/menu/umrah.jpg",
      },

      {
        title: "Hajj Packages",
        description:
          "Official Hajj packages with premium services.",
        href: "/packages/hajj",
        image: "/images/menu/hajj.jpg",
      },

      {
        title: "Holiday Tours",
        description:
          "International holiday and vacation packages.",
        href: "/packages/tours",
        image: "/images/menu/tour.jpg",
      },

      {
        title: "Flight Booking",
        description:
          "Book local and international flights easily.",
        href: "/packages/flights",
        image: "/images/menu/flight.jpg",
      },
    ],
  },

  {
    label: "Destinations",
    href: "/destinations",
  },

  {
    label: "Gallery",
    href: "/gallery",
  },

  {
    label: "News",
    href: "/news",
  },

  {
    label: "Contact",
    href: "/contact",
  },
];