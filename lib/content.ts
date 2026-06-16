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
    title: "Beginner Lessons",
    eyebrow: "First rides, done right",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86",
    description:
      "A calm, confidence-building introduction to English riding with steady lesson horses and patient instruction.",
    benefits: ["Balance and horsemanship", "Private and small-group options", "Ideal for children and adult beginners"]
  },
  {
    title: "Intermediate Training",
    eyebrow: "Sharper skills",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86",
    description:
      "Structured riding development for students ready to improve position, communication, rhythm, and arena confidence.",
    benefits: ["Flatwork refinement", "Goal-based progress plans", "Lesson horse or personal horse"]
  },
  {
    title: "Advanced Competition Training",
    eyebrow: "For the show ring",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86",
    description:
      "Elite coaching for ambitious dressage, hunter jumper, and competition riders who want championship-level preparation.",
    benefits: ["USEF and USDF show prep", "Competition strategy", "Performance-focused coaching"]
  },
  {
    title: "Summer Camps",
    eyebrow: "A season at the barn",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86",
    description:
      "Immersive riding camp experiences built around safety, horse care, barn life, and lasting confidence.",
    benefits: ["Hands-on grooming", "Daily riding time", "Age-appropriate learning"]
  },
  {
    title: "Horse Boarding",
    eyebrow: "A private home for your horse",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86",
    description:
      "European-style stabling, attentive daily care, covered arena access, and a professional environment for serious owners.",
    benefits: ["Room for up to 100 horses", "Covered riding arena", "Owner convenience and expert care"]
  },
  {
    title: "Private Coaching",
    eyebrow: "Personalized advancement",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86",
    description:
      "Tailored coaching for riders seeking focused progress, horse-owner partnerships, or specialized training support.",
    benefits: ["Individual training plans", "Horse and rider development", "Flexible progression"]
  }
];

export const gallery = [
  {
    title: "Covered Arena",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86",
    span: "lg:row-span-2"
  },
  {
    title: "Outdoor Schooling",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86"
  },
  {
    title: "European-Style Stables",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86"
  },
  {
    title: "Training Fields",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86"
  },
  {
    title: "Horse Care",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86"
  },
  {
    title: "Show Preparation",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86",
    span: "lg:col-span-2"
  }
];

export const instructors = [
  {
    name: "Kai Handt",
    credentials: "USDF/USEF Champion, Owner and Head Trainer",
    experience: "20+ years",
    specialty: "Dressage, elite training, imported warmblood selection",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86"
  },
  {
    name: "Elena Brooks",
    credentials: "USEF Certified Instructor",
    experience: "14 years",
    specialty: "Junior riders, foundations, show readiness",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86"
  },
  {
    name: "Marcus Vale",
    credentials: "Competition Coach",
    experience: "17 years",
    specialty: "Hunter jumper, confidence under pressure",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86"
  }
];

export const horses = [
  {
    name: "Aurelia",
    breed: "Hanoverian Mare",
    personality: "Elegant, patient, highly responsive",
    level: "Intermediate to advanced",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86"
  },
  {
    name: "Sterling",
    breed: "Dutch Warmblood Gelding",
    personality: "Confident, steady, generous",
    level: "Beginner friendly",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86"
  },
  {
    name: "Bellamy",
    breed: "Oldenburg Gelding",
    personality: "Athletic, focused, brave",
    level: "Competition riders",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86"
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
