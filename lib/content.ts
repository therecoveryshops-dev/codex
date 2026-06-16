import {
  Award,
  CalendarDays,
  CheckCircle2,
  Clock,
  HeartHandshake,
  MapPin,
  Medal,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Users
} from "lucide-react";

export const navItems = [
  { label: "Programs", href: "/lessons" },
  { label: "Facilities", href: "/about/facilities" },
  { label: "Instructors", href: "/about/team" },
  { label: "Events", href: "/events/horse-shows" },
  { label: "Book", href: "/book" }
];

export const stats = [
  { value: "50", label: "Acre Facility" },
  { value: "100", label: "Horse Capacity" },
  { value: "Wylie", label: "North Texas Location" },
  { value: "Pro", label: "Training Programs" }
];

export const trustItems = [
  { label: "50-Acre", value: "Facility" },
  { label: "100-Horse", value: "Capacity" },
  { label: "Wylie", value: "Texas" },
  { label: "Professional", value: "Training" }
];

export const whyChoose = [
  { title: "Certified Instructors", icon: Medal },
  { title: "Safe Learning Environment", icon: ShieldCheck },
  { title: "Personalized Training", icon: HeartHandshake },
  { title: "Well-Cared-For Horses", icon: Sparkles },
  { title: "Competition Opportunities", icon: Trophy },
  { title: "Professional Facilities", icon: Award }
];

export const programs = [
  {
    title: "Riding Lessons",
    eyebrow: "English riding for all ages",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=86",
    description:
      "Structured English riding lessons designed for children, adults, beginners, returning riders, and advanced students.",
    benefits: ["Beginner through advanced", "Children and adult programs", "Safe, consistent lesson horses"],
    href: "/lessons"
  },
  {
    title: "Horse Boarding",
    eyebrow: "Full-care stabling",
    image:
      "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1800&q=86",
    description:
      "European-style boarding with attentive stall care, turnout planning, covered arena access, and owner convenience.",
    benefits: ["Daily horse care", "Covered riding arena", "Room for up to 100 horses"],
    href: "/boarding"
  },
  {
    title: "Horse Training",
    eyebrow: "Trainer-led development",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e3c5f03?auto=format&fit=crop&w=1800&q=86",
    description:
      "Focused horse training for conditioning, young horse development, competition preparation, and performance progress.",
    benefits: ["Young horse development", "Conditioning and fitness", "Competition preparation"],
    href: "/training"
  },
  {
    title: "Horses For Sale",
    eyebrow: "Sales and matching support",
    image:
      "https://images.unsplash.com/photo-1509763878308-8c8f827ac557?auto=format&fit=crop&w=1800&q=86",
    description:
      "Current horses for sale with discipline guidance, temperament evaluation, and a trainer-led buyer process.",
    benefits: ["Dressage and hunter/jumper prospects", "Horse finder support", "Trainer evaluation"],
    href: "/horses-for-sale"
  },
  {
    title: "Events and Summer Camps",
    eyebrow: "Barn life programming",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1800&q=86",
    description:
      "Clinics, horse shows, summer camps, and community events designed for riders learning, training, and competing.",
    benefits: ["Clinics and shows", "Summer camp sessions", "Barn community events"],
    href: "/summer-camp"
  }
];

export const gallery = [
  {
    title: "Covered Arena",
    image:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=86",
    span: "lg:row-span-2"
  },
  {
    title: "Rider Warm-Up",
    image:
      "https://images.unsplash.com/photo-1445820132032-8d4bf795c1bc?auto=format&fit=crop&w=1800&q=86"
  },
  {
    title: "European-Style Stables",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1800&q=86"
  },
  {
    title: "Training Field",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1800&q=86"
  },
  {
    title: "Horse Care",
    image:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1800&q=86"
  },
  {
    title: "Show Preparation",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1800&q=86",
    span: "lg:col-span-2"
  }
];

export const instructors = [
  {
    name: "Kai Handt",
    credentials: "USDF/USEF Champion, Owner and Head Trainer",
    experience: "20+ years",
    specialty: "Dressage, sport-horse development, imported warmblood evaluation",
    image:
      "https://images.unsplash.com/photo-1516822003754-cca485356ecb?auto=format&fit=crop&w=1800&q=86"
  },
  {
    name: "Lesson Instructor",
    credentials: "English riding coach",
    experience: "12 years",
    specialty: "Beginner riders, barn safety, flatwork foundations",
    image:
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1800&q=86"
  },
  {
    name: "Barn Care Team",
    credentials: "Daily equine care specialists",
    experience: "Experienced handlers",
    specialty: "Stall care, turnout, grooming, feeding routines",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1800&q=86"
  }
];

export const horses = [
  {
    name: "Aurelia",
    breed: "Hanoverian mare",
    personality: "Balanced, responsive, steady",
    level: "Intermediate to advanced",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1800&q=86"
  },
  {
    name: "Sterling",
    breed: "Dutch Warmblood gelding",
    personality: "Confident, careful, generous",
    level: "Beginner friendly",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1800&q=86"
  },
  {
    name: "Bellamy",
    breed: "Oldenburg gelding",
    personality: "Athletic, focused, brave",
    level: "Competition riders",
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1800&q=86"
  }
];

export const testimonials = [
  {
    quote:
      "The instruction is serious, but the environment is kind. My daughter walks into the barn taller every week.",
    name: "Melissa R.",
    type: "Parent",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86"
  },
  {
    quote:
      "NTEC gave me the coaching and structure I needed to move from lessons to the show ring with real confidence.",
    name: "Avery L.",
    type: "Competition Rider",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86"
  },
  {
    quote:
      "As an adult beginner, I wanted safety and patience. I found both, plus a community I genuinely look forward to.",
    name: "Daniel F.",
    type: "Adult Beginner",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86"
  }
];

export const events = [
  {
    type: "Clinics",
    title: "Dressage Development Clinic",
    date: "September 14",
    detail: "Focused coaching sessions for riders refining precision, suppleness, and confidence."
  },
  {
    type: "Camps",
    title: "Junior Summer Riding Camp",
    date: "June and July",
    detail: "A barn-life immersion with daily riding, grooming, safety, and horse-care fundamentals."
  },
  {
    type: "Competitions",
    title: "Fall Schooling Show",
    date: "October 11",
    detail: "A polished stepping stone for riders preparing for larger rated competitions."
  },
  {
    type: "Horse Shows",
    title: "NTEC Christmas Show",
    date: "December 6",
    detail: "A signature community show with festive presentation and year-end celebration."
  }
];

export const contact = {
  phone: "972-442-7544",
  email: "info@ntecdfw.com",
  address: "1765 Southview Drive, Wylie, Texas 75098",
  hours: "Mon-Sat, 9-5",
  icons: { Phone, MapPin, Clock, CalendarDays, CheckCircle2, Star, Users }
};
