import { FaLinkedin, FaInstagram, FaFacebook, FaX  } from "react-icons/fa6";

export const testimonials = [
    {
      quote:
        "We have 100 Redtail GPS devices and plan to buy more our company is growing, and as we acquire other businesses we plan to outfit those trucks as well. We especially appreciate the pricing flexibility of the various Redtail service plans. We chose five minute screenshots, which have a lower monthly rate than other GPS companies quoted. The Redtail customer service and tech support have been great, and we have achieved fuel savings. Weve had a very good experience with Redtail. ",
      name: "Vince Zamora",
      title: "Fleet Manager at UCI Consutructions",
    },
    {
      quote:
        "REDTAIL Telematics came to my attention in the very early days of Usage-Based Insurance when young driver coaching and their technology was used to help launch UBI pioneer ingenie. Their products and services have proved insightful and robust, and have evolved with markets as diverse as vehicle tracking, all aspects of fleet management, and most latterly the demands of monetising the connected vehicle.",
      name: "Colin Shillito",
      title: "Head of Business Development at BT Enterprises",
    },
    {
      quote:
        "The Redtail hardware has been selected as a best-in-class device that combines sensitivity, accuracy and commercial performance in a small outline, with excellent technical documentation and support. The combination of the Redtail VAM with their DataWarehouse data storage and device management solution is a winning combination that takes the effort out of driver data acquisition.",
      name: "David Kirby",
      title: "COO at MyDrive Solutions",
    },
    {
      quote:
        "With the second stolen truck we could track its route and all of its stops around Oklahoma City. In 20/20 hindsight we could have set a geo-fence around it and probably nabbed the thief. But it turned out to be a good move just taking our truck back when we did - because a tornado ripped through that neighborhood a couple of days later, and we would have lost it if wed waited. The Redtail GPS tracking works really well for stolen vehicle recovery. We love it Im putting one on my restored 79 Trans Am.",
      name: "Bobby Stringer",
      title: "Owner at Stringer Transports",
    },
    {
      quote:
        "Our company sells and erects pre-engineered steel buildings and we run a small fleet. Im very happy with Redtail GPS. I saved enough in the first week to pay for the tracker and service after terminating three drivers who were late for work, falsifying timesheets and making unauthorized use of the vehicle. The remaining employees are more productive now just knowing that we use Redtail. Its very user-friendly and easy to install. We don’t get great cell coverage where we are but it’s been Johnny on the spot. It showed me both addresses at a job site based on where the truck was parked: it’s that precise! I use it with my iPad and plan to order another unit. Highly recommended.",
      name: "Bryan Weaver",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "T-Mobile",
      img: "/t-mobile.svg",
    },
    {
      id: 2,
      name: "Ford",
      img: "/ford.svg",
    },
    {
      id: 3,
      name: "Jaguar",
      img: "/jaguar.svg",
    },
    {
      id: 4,
      name: "Land Rover",
      img: "/lr.svg",
    },
    {
      id: 5,
      name: "Fujitsu",
      img: "/fujitsu.svg",
    },
    {
      id: 6,
      name: "Admiral",
      img: "/admiral.svg",
    },
    {
      id: 7,
      name: "Tracker",
      img: "/tracker.svg",
    },
  ];

  export const socialMedia = [
    {
      id: 1,
      Icon: FaLinkedin,
      url: "https://www.linkedin.com/company/redtail-telematics",
    },
    {
      id: 2,
      Icon: FaInstagram,
      url: "https://www.instagram.com/redtailtelematics",
    },
    {
      id: 3,
      Icon: FaFacebook,
      url: "https://www.facebook.com/redtailtelematics",
    },
    {
      id: 4,
      Icon: FaX,
      url: "https://www.twitter.com/redtailtele",
    },
  ];
  
  export const pricingRedtail = [
    {
      id: 1,
      title: "Monthly Service Plan",
      desc: "Monthly Standard Service Plan for all HD Products.",
      bulletPoints: [
        "Real-time vehicle tracking",
        "Customizable maps with points of interest",
        "Geofencing with boundary alerts",
        "Monthly billing with no long-term commitment",
        "24/7 customer support",
      ],
      price: "$19.99/month",
      link: "https://secure.redtailtelematics.com/VAM-HSP2.html",
    },
    {
      id: 2,
      title: "Annual Service Plan - Location",
      desc: "Unlimited usage annual service plan.",
      bulletPoints: [
        "One-click vehicle location",
        "User-friendly mobile app and website",
        "Available on Apple App Store and Google Play",
        "Annual subscription with unlimited use",
        "Comprehensive location history",
      ],
      price: "$99.99/year",
      link: "https://secure.redtailtelematics.com/VAA-CLK.html",
    },
    {
      id: 3,
      title: "Annual Service Plan - Tracking",
      desc: "Annual Standard Service Plan for all HD Products.",
      bulletPoints: [
        "Real-time tracking and monitoring",
        "Customizable maps with detailed points of interest",
        "Instant boundary alerts for geofencing",
        "Yearly subscription with significant savings",
        "Detailed trip and usage reports",
      ],
      price: "$199.99/year",
      link: "https://secure.redtailtelematics.com/VAA-HSP2.html",
    },
    {
      id: 4,
      title: "Enterprise Service Plan",
      desc: "Designed for large-scale fleet operations.",
      bulletPoints: [
        "Advanced telematics solutions",
        "Maximize efficiency, safety, and profitability",
        "Comprehensive suite of fleet management features",
        "Customizable to fit enterprise needs",
        "Dedicated account manager and premium support",
      ],
      price: "Contact us for pricing",
      link: "#contact",
    },
  ];


export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is telematics and how does it benefit my construction business?",
    answer:
      "Telematics refers to the use of GPS and onboard diagnostics to monitor the location, usage, and health of your construction vehicles and equipment. For a construction business, telematics provides real-time insights into asset performance, operator behavior, and maintenance needs, helping you optimize equipment usage, reduce downtime, and enhance job site security.",
  },
  {
    question: "How can telematics help reduce operational costs in construction?",
    answer:
      "Telematics can help reduce operational costs by providing data on equipment health and usage patterns, which allows you to schedule proactive maintenance, reducing unexpected breakdowns. It also tracks fuel consumption, prevents unauthorized equipment use, and helps optimize job site operations, ultimately lowering fuel and repair costs while increasing productivity.",
  },
  {
    question: "How do I set up telematics devices on construction equipment?",
    answer:
      "To set up telematics devices on your construction vehicles and equipment, purchase compatible GPS or telematics devices and follow the manufacturer’s installation instructions. After installation, activate the devices via the telematics platform to start tracking equipment and monitoring its performance in real-time.",
  },
  {
    question: "Can telematics improve the security of my construction equipment?",
    answer:
      "Yes, telematics significantly enhances equipment security. You can track the location of your machinery in real-time, receive alerts for unauthorized use, and recover stolen equipment more quickly. Geofencing allows you to create boundaries around job sites, with alerts triggered if equipment moves outside the designated zones, ensuring better security and control.",
  },
  {
    question: "How does telematics improve job site efficiency?",
    answer:
      "Telematics improves job site efficiency by providing real-time data on equipment location and usage, helping you allocate resources more effectively. You can monitor equipment status, reduce idle time, and optimize fleet utilization. This leads to better coordination between sites, reduced delays, and increased productivity.",
  },
  {
    question: "What type of data can I track with telematics for construction equipment?",
    answer:
      "Telematics allows you to track data such as real-time location, equipment usage, fuel consumption, operator behavior (e.g., harsh acceleration or speeding), engine health diagnostics, and maintenance needs. This data is crucial for managing fleet performance, maintaining equipment longevity, and improving safety on job sites.",
  },
  {
    question: "Can telematics help reduce insurance premiums for my construction fleet?",
    answer:
      "Yes, telematics can potentially help reduce your insurance premiums. By monitoring operator behavior and providing real-time data on equipment usage and security, you can demonstrate that your fleet is well-managed and secure, which may lead to lower insurance premiums.",
  },
  {
    question: "How do I access telematics data for my construction vehicles and equipment?",
    answer:
      "You can access telematics data through a web dashboard or mobile app provided by the telematics platform. From there, you can view real-time information on equipment location, performance, and operator behavior, as well as generate reports to help with decision-making and project management.",
  },
  {
    question: "How can telematics help with maintenance scheduling for construction equipment?",
    answer:
      "Telematics provides real-time data on equipment health, including engine diagnostics, operating hours, and usage patterns. This information helps you schedule maintenance proactively, preventing breakdowns, minimizing job site downtime, and extending the lifespan of your machinery.",
  },
  {
    question: "What kind of customer support is available for telematics setup and maintenance in construction?",
    answer:
      "Our dedicated support team is available to assist with the setup, maintenance, and troubleshooting of telematics devices for your construction fleet. Support is available Monday to Friday, 9:00 AM to 6:00 PM, with emergency assistance available via email or phone for urgent issues.",
  },
];


