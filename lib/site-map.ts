export type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

export type PageSection = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

export type SitePage = {
  slug: string;
  navLabel: string;
  title: string;
  eyebrow: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  image: string;
  layout: "story" | "profile" | "proof" | "facility" | "pricing" | "service" | "training" | "sales" | "events" | "gallery" | "blog" | "contact";
  proof: { value: string; label: string }[];
  intro: string;
  sections: PageSection[];
  feature: {
    title: string;
    body: string;
    items: string[];
  };
  cta: {
    label: string;
    href: string;
    title: string;
    body: string;
  };
  related: string[];
};

export const menuTree: MenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "About NTEC", href: "/about" },
      { label: "Kai Handt", href: "/about/kai-handt" },
      { label: "Our Team", href: "/about/team" },
      { label: "Awards", href: "/about/awards" },
      { label: "Facilities", href: "/about/facilities" }
    ]
  },
  {
    label: "Services",
    children: [
      { label: "Horse Boarding", href: "/boarding" },
      { label: "Horse Riding Lessons", href: "/lessons" },
      { label: "English Riding Lessons", href: "/lessons/english" },
      { label: "Dressage Riding Lessons", href: "/lessons/dressage" },
      { label: "Hunter Jumper Lessons", href: "/lessons/hunter-jumper" },
      { label: "Horse Training", href: "/training" },
      { label: "NTEC Pricing", href: "/pricing" },
      { label: "Board Agreement Form", href: "/forms/board-agreement" },
      { label: "Release and Contact Form", href: "/forms/release-contact" },
      { label: "Policy and Procedures Form", href: "/forms/policies" }
    ]
  },
  {
    label: "Horse Sales",
    children: [
      { label: "Current For Sale", href: "/horses-for-sale" },
      { label: "Dressage Horses For Sale", href: "/horses-for-sale/dressage" },
      { label: "Hunter / Jumper", href: "/horses-for-sale/hunter-jumper" },
      { label: "Young Horses", href: "/horses-for-sale/young-horses" },
      { label: "Sold Horses", href: "/horses-for-sale/sold" },
      { label: "Horse Finder Form", href: "/horse-finder" }
    ]
  },
  {
    label: "Events",
    children: [
      { label: "NTEC Christmas Show", href: "/events/christmas-show" },
      { label: "Para-Equestrian Clinic", href: "/events/para-equestrian-clinic" },
      { label: "Talent Search Event", href: "/events/talent-search" },
      { label: "Upcoming Horse Shows", href: "/events/horse-shows" },
      { label: "Summer Camp", href: "/summer-camp" },
      { label: "Past Events", href: "/events/past" }
    ]
  },
  { label: "Blog", href: "/blog" },
  {
    label: "Gallery",
    children: [
      { label: "Awards and Events", href: "/gallery/awards-events" },
      { label: "Barn Life", href: "/gallery/barn-life" },
      { label: "Videos", href: "/gallery/videos" }
    ]
  },
  { label: "Contact", href: "/contact" },
  { label: "Book Now", href: "/book" }
];

const images = {
  arena: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86",
  rider: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86",
  dressage: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86",
  field: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86",
  stable: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86",
  care: "https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86"
};

const defaultProof = [
  { value: "50", label: "Acres in Wylie" },
  { value: "100", label: "Horse capacity" },
  { value: "1985", label: "Established facility" }
];

function section(eyebrow: string, title: string, body: string, points: string[]): PageSection {
  return { eyebrow, title, body, points };
}

function makePage(page: SitePage): SitePage {
  return page;
}

export const sitePages: SitePage[] = [
  makePage({
    slug: "about",
    navLabel: "About NTEC",
    title: "About North Texas Equestrian Center",
    eyebrow: "Wylie, Texas",
    description: "A 50-acre equestrian center for riding lessons, boarding, training, horse sales, camps, and events.",
    seoTitle: "About North Texas Equestrian Center",
    seoDescription: "Learn about NTEC in Wylie, Texas, including the facility, mission, riding community, and training philosophy.",
    image: images.arena,
    layout: "story",
    proof: defaultProof,
    intro: "NTEC gives riders and horse owners a structured barn environment with safe instruction, daily horse care, and professional training support.",
    sections: [
      section("Location", "Located in Wylie, Texas", "The center serves families and horse owners across North Texas from a 50-acre property designed for daily riding and horse care.", ["Wylie location", "North Texas riders", "Room for lessons and boarding", "Easy inquiry path"]),
      section("Mission", "Safe Riding and Responsible Horse Care", "The program is built around clear instruction, careful horse handling, and respect for the rider’s current experience level.", ["Safety-first lessons", "Horse care routines", "Parent-friendly communication", "Professional standards"]),
      section("Community", "A Barn for Learning and Progress", "Riders can begin with English basics, move into dressage or hunter jumper work, and connect with camps, events, and training opportunities.", ["Youth and adult riders", "Beginner through advanced", "Dressage and hunter/jumper", "Barn community"])
    ],
    feature: {
      title: "Facility Overview",
      body: "NTEC brings lessons, boarding, training, and sales into one connected equestrian facility.",
      items: ["Covered riding spaces", "Stable and tack areas", "Training support", "Horse sales guidance"]
    },
    cta: { label: "Contact Us", href: "/contact", title: "Have questions about NTEC?", body: "Contact the office for lessons, boarding, training, or facility visits." },
    related: ["about/facilities", "lessons", "boarding"]
  }),
  makePage({
    slug: "about/kai-handt",
    navLabel: "Kai Handt",
    title: "Kai Handt",
    eyebrow: "Owner and Head Trainer",
    description: "Champion trainer profile focused on dressage, sport-horse development, competition preparation, and German warmblood expertise.",
    seoTitle: "Kai Handt | NTEC Head Trainer",
    seoDescription: "Meet Kai Handt, owner and head trainer at NTEC, known for dressage instruction, competition training, and warmblood experience.",
    image: images.dressage,
    layout: "profile",
    proof: [
      { value: "USDF", label: "Dressage background" },
      { value: "USEF", label: "Competition experience" },
      { value: "FEI", label: "Advanced rider development" }
    ],
    intro: "Kai Handt leads the training program with a direct, technical approach that helps riders understand position, timing, horse development, and competition preparation.",
    sections: [
      section("Credibility", "Champion-Level Training Background", "Kai’s work centers on correct basics, dressage skill, and preparation for riders who want measurable progress.", ["Dressage instruction", "Competition coaching", "Rider development", "Training rides"]),
      section("Philosophy", "Correct Work Before Shortcuts", "The training approach emphasizes rhythm, balance, clarity, and the horse’s confidence before performance pressure.", ["Systematic progression", "Horse-first decisions", "Clear rider feedback", "Consistent standards"]),
      section("Sport Horses", "Warmblood Selection and Development", "Kai’s experience with German warmbloods helps owners and buyers evaluate movement, temperament, training level, and long-term fit.", ["Warmblood knowledge", "Horse sales guidance", "Development planning", "Buyer support"])
    ],
    feature: { title: "Train With Kai", body: "Riders can inquire about private coaching, dressage instruction, horse training, and competition preparation.", items: ["Dressage lessons", "Training consultations", "Horse-owner coaching", "Show preparation"] },
    cta: { label: "Request Lesson", href: "/book", title: "Interested in training with Kai?", body: "Send a lesson inquiry and describe your riding goals." },
    related: ["training", "lessons/dressage", "horses-for-sale"]
  }),
  makePage({
    slug: "about/team",
    navLabel: "Our Team",
    title: "Our Team",
    eyebrow: "Instructors and Barn Staff",
    description: "Instructor and staff profiles with specialties, experience, care roles, and safety-first coaching style.",
    seoTitle: "NTEC Team and Instructors",
    seoDescription: "Meet the instructors and barn staff supporting riding lessons, boarding, horse care, and training at NTEC.",
    image: images.rider,
    layout: "profile",
    proof: [
      { value: "Safe", label: "Coaching approach" },
      { value: "Daily", label: "Horse care" },
      { value: "English", label: "Riding focus" }
    ],
    intro: "The team supports riders in the arena and horses in the stable with practical instruction, attentive care, and clear communication.",
    sections: [
      section("Instruction", "Coaches for Children and Adults", "Lesson staff help beginners learn safely, returning adults rebuild confidence, and developing riders prepare for discipline-specific goals.", ["Beginner lessons", "Youth riders", "Adult lessons", "Private coaching"]),
      section("Care", "Staff That Keeps the Barn Organized", "Daily care includes feeding routines, stall support, turnout planning, grooming areas, and preparation for lessons or training rides.", ["Feeding support", "Stall care", "Turnout planning", "Owner communication"]),
      section("Style", "Patient, Structured Coaching", "Riders are taught with clear expectations and appropriate progression so confidence grows without rushing important fundamentals.", ["Safety reminders", "Clear exercises", "Horse matching", "Barn etiquette"])
    ],
    feature: { title: "Team Profiles", body: "This page is prepared for instructor cards, care staff roles, credentials, specialties, and contact pathways.", items: ["Instructor specialties", "Experience notes", "Coaching style", "Care responsibilities"] },
    cta: { label: "Meet Our Team", href: "/about/team", title: "Find the right instructor fit.", body: "Review team roles and ask NTEC which program is best for your rider." },
    related: ["lessons", "boarding", "about"]
  }),
  makePage({
    slug: "about/awards",
    navLabel: "Awards",
    title: "Awards and Recognition",
    eyebrow: "Competition Proof",
    description: "Awards, competition achievements, rider success stories, certifications, and recognition earned through consistent training.",
    seoTitle: "NTEC Awards and Competition Achievements",
    seoDescription: "Explore NTEC awards, rider success stories, competition achievements, certifications, and recognition.",
    image: images.dressage,
    layout: "proof",
    proof: [
      { value: "Riders", label: "Developed for shows" },
      { value: "USDF", label: "Dressage relevance" },
      { value: "USEF", label: "Competition pathway" }
    ],
    intro: "Awards help visitors understand the training standard behind the barn: preparation, discipline, and rider progress over time.",
    sections: [
      section("Competition", "Achievements in the Ring", "Results reflect careful training, show preparation, and riders learning how to perform under pressure.", ["Dressage results", "Hunter/jumper preparation", "Show-ring habits", "Rider accountability"]),
      section("Rider Success", "Progress at Every Level", "Success can mean a first show, a more accurate dressage test, a confident jumping round, or a safer first canter.", ["Youth milestones", "Adult rider progress", "Competition confidence", "Training goals"]),
      section("Recognition", "A Reputation Built Over Time", "NTEC’s credibility comes from consistent work with horses, families, owners, and riders across different levels.", ["Trainer recognition", "Facility reputation", "Certifications and affiliations", "Client trust"])
    ],
    feature: { title: "Recognition With Practical Meaning", body: "Awards support the promise that instruction is structured, serious, and still accessible to new riders.", items: ["Training accomplishments", "Rider stories", "Facility recognition", "Competition results"] },
    cta: { label: "Request Lesson", href: "/book", title: "Ready to work toward a riding goal?", body: "Start with a lesson inquiry and tell NTEC what you want to improve." },
    related: ["lessons", "training", "about/kai-handt"]
  }),
  makePage({
    slug: "about/facilities",
    navLabel: "Facilities",
    title: "NTEC Facilities",
    eyebrow: "50-Acre Equestrian Property",
    description: "Arenas, stables, turnout, tack areas, boarding spaces, and training areas at the Wylie facility.",
    seoTitle: "NTEC Facilities in Wylie, Texas",
    seoDescription: "Explore NTEC's 50-acre facility with riding arenas, stables, turnout, tack areas, boarding spaces, and training areas.",
    image: images.stable,
    layout: "facility",
    proof: defaultProof,
    intro: "The property supports daily lessons, horse boarding, training rides, camps, sales appointments, and events in one organized equestrian setting.",
    sections: [
      section("Arenas", "Riding Spaces for Lessons and Training", "Arena access supports beginner basics, dressage schooling, hunter jumper exercises, and show preparation.", ["Covered arena", "Outdoor schooling", "Dressage work", "Jumping exercises"]),
      section("Stables", "Boarding Spaces and Daily Care Areas", "The stable environment supports stall care, feeding, grooming, tack storage, and regular owner access.", ["Stall areas", "Grooming zones", "Tack storage", "Owner access"]),
      section("Grounds", "Turnout and Training Space", "The 50-acre property gives horses and riders room for turnout, conditioning, and practical training routines.", ["Turnout", "Training areas", "Camp space", "Event support"])
    ],
    feature: { title: "View Facilities", body: "The facilities page helps families and owners see how the property supports daily riding and horse care.", items: ["Arenas", "Stables", "Tack areas", "Boarding spaces"] },
    cta: { label: "View Facilities", href: "/about/facilities", title: "See where the work happens.", body: "Review the facility overview or contact NTEC to schedule a visit." },
    related: ["boarding", "lessons", "gallery/barn-life"]
  }),
  makePage({
    slug: "boarding",
    navLabel: "Horse Boarding",
    title: "Horse Boarding",
    eyebrow: "Boarding With Daily Care",
    description: "Boarding services with horse care, feeding, turnout, stall care, owner benefits, and facility access.",
    seoTitle: "Horse Boarding in Wylie, TX",
    seoDescription: "Request horse boarding availability at NTEC with daily care, feeding, turnout, stall care, and facility access.",
    image: images.stable,
    layout: "service",
    proof: [
      { value: "Daily", label: "Care routines" },
      { value: "50", label: "Acre property" },
      { value: "100", label: "Horse capacity" }
    ],
    intro: "Boarding at NTEC is for owners who want consistent care, a professional barn environment, and access to riding and training spaces.",
    sections: [
      section("Care", "Horse Care and Feeding", "Boarding centers on routine, observation, feeding support, and practical communication with owners.", ["Feeding routines", "Water checks", "Daily observation", "Owner updates"]),
      section("Turnout", "Turnout and Stall Care", "Horses need clean, organized stable care and turnout planning based on weather, footing, and individual needs.", ["Stall care", "Turnout planning", "Grooming areas", "Stable routines"]),
      section("Owner Benefits", "A Facility Owners Can Use", "Owners can connect boarding with lessons, training rides, arena use, tack areas, and professional guidance.", ["Arena access", "Training options", "Tack space", "Wylie location"])
    ],
    feature: { title: "Boarding Inquiry", body: "Share your horse's routine, care needs, and training interest so NTEC can discuss current boarding availability.", items: ["Stall availability", "Care needs", "Training interest", "Owner schedule"] },
    cta: { label: "Request Boarding Availability", href: "/boarding#boarding-inquiry", title: "Looking for boarding?", body: "Contact NTEC about current stall availability and horse care needs." },
    related: ["about/facilities", "training", "pricing"]
  }),
  makePage({
    slug: "lessons",
    navLabel: "Horse Riding Lessons",
    title: "Horse Riding Lessons",
    eyebrow: "Riding Lessons for Children and Adults",
    description: "Main riding lesson overview for beginners, youth riders, adults, private lessons, and safe English riding instruction.",
    seoTitle: "Horse Riding Lessons in Wylie, TX",
    seoDescription: "Book riding lessons for children and adults at NTEC with safe, structured English riding instruction.",
    image: images.rider,
    layout: "service",
    proof: [
      { value: "Youth", label: "Lesson programs" },
      { value: "Adult", label: "Beginner friendly" },
      { value: "Private", label: "Coaching available" }
    ],
    intro: "NTEC teaches riders how to sit, steer, groom, tack, communicate with the horse, and progress safely into English riding disciplines.",
    sections: [
      section("Beginners", "First Lessons Done Carefully", "New riders learn handling, mounting, steering, balance, and basic barn safety before moving too quickly.", ["First rides", "Barn safety", "Balance", "Confidence"]),
      section("Youth and Adults", "Lessons for Different Ages", "Children, teens, and adults can start with fundamentals and progress at a pace that fits their confidence and goals.", ["Youth lessons", "Adult beginners", "Returning riders", "Private coaching"]),
      section("Progression", "From Basics to Disciplines", "Riders can move into English fundamentals, dressage, hunter jumper work, or private goals with instructor guidance.", ["English riding", "Dressage", "Hunter jumper", "Personal horse support"])
    ],
    feature: { title: "Book a Lesson", body: "Use the lesson inquiry form to share rider age, experience, program interest, and preferred schedule.", items: ["Beginner lessons", "Youth riders", "Adult lessons", "Private coaching"] },
    cta: { label: "Book a Lesson", href: "/book", title: "Ready to start riding?", body: "Complete the lesson inquiry form and NTEC will help with the right first step." },
    related: ["lessons/english", "lessons/dressage", "lessons/hunter-jumper"]
  }),
  makePage({
    slug: "lessons/english",
    navLabel: "English Riding Lessons",
    title: "English Riding Lessons",
    eyebrow: "Riding Fundamentals",
    description: "English riding fundamentals with posture, balance, control, safety, and steady progression.",
    seoTitle: "English Riding Lessons in Wylie, TX",
    seoDescription: "Learn English riding fundamentals at NTEC with posture, balance, control, safety, and progression.",
    image: images.field,
    layout: "service",
    proof: [
      { value: "Posture", label: "Rider position" },
      { value: "Balance", label: "Mounted control" },
      { value: "Safety", label: "Lesson structure" }
    ],
    intro: "English riding lessons focus on quiet position, clear aids, arena awareness, and the confidence to ride safely.",
    sections: [
      section("Position", "Posture and Balance", "Riders learn how their seat, hands, legs, and eyes affect the horse's rhythm and direction.", ["Seat basics", "Hands and reins", "Leg aids", "Eyes and posture"]),
      section("Control", "Steering, Pace, and Arena Patterns", "Lessons build control through walk, trot, circles, transitions, and simple patterns before more advanced work.", ["Steering", "Transitions", "Arena figures", "Pace control"]),
      section("Safety", "Progression That Makes Sense", "Students advance when they understand the horse, the exercise, and the safety expectations.", ["Horse handling", "Mounting safety", "Lesson horse match", "Skill checkpoints"])
    ],
    feature: { title: "English Riding Pathway", body: "This page supports riders preparing for dressage, hunter jumper, or confident recreational riding.", items: ["Beginner basics", "Intermediate control", "Private coaching", "Discipline readiness"] },
    cta: { label: "Request Lesson", href: "/book", title: "Start English riding lessons.", body: "Send a lesson inquiry with rider age and experience level." },
    related: ["lessons", "lessons/dressage", "lessons/hunter-jumper"]
  }),
  makePage({
    slug: "lessons/dressage",
    navLabel: "Dressage Lessons",
    title: "Dressage Riding Lessons",
    eyebrow: "Precision and Communication",
    description: "Dressage training for rider communication, precision, discipline, and competition preparation.",
    seoTitle: "Dressage Lessons in Wylie, TX",
    seoDescription: "Improve dressage riding with instruction focused on communication, precision, discipline, and show preparation.",
    image: images.dressage,
    layout: "training",
    proof: [
      { value: "Dressage", label: "Training focus" },
      { value: "Precision", label: "Rider aids" },
      { value: "Shows", label: "Preparation" }
    ],
    intro: "Dressage instruction helps riders improve timing, balance, connection, accuracy, and communication with the horse.",
    sections: [
      section("Communication", "Clear Aids and Better Timing", "Riders work on using seat, leg, and rein aids with enough clarity for the horse to understand.", ["Seat aids", "Leg aids", "Rein contact", "Timing"]),
      section("Precision", "Accuracy in the Arena", "Lessons can include circles, transitions, lateral work, test movements, and exercises that improve control.", ["Transitions", "Figures", "Lateral basics", "Test accuracy"]),
      section("Competition", "Preparation for the Show Ring", "Riders preparing for competition can work on warm-up plans, test review, and performance habits.", ["Test preparation", "Warm-up routine", "Show habits", "Goal planning"])
    ],
    feature: { title: "Dressage Training at NTEC", body: "Dressage riders can combine lessons, training rides, and horse-owner coaching.", items: ["Private lessons", "Training rides", "Test preparation", "Horse-owner support"] },
    cta: { label: "Request Lesson", href: "/book", title: "Ask about dressage lessons.", body: "Submit a lesson inquiry and describe your dressage goals." },
    related: ["about/kai-handt", "training", "lessons"]
  }),
  makePage({
    slug: "lessons/hunter-jumper",
    navLabel: "Hunter Jumper Lessons",
    title: "Hunter Jumper Lessons",
    eyebrow: "Confidence Over Fences",
    description: "Jumping basics, arena work, confidence over fences, and show preparation for hunter jumper riders.",
    seoTitle: "Hunter Jumper Lessons in Wylie, TX",
    seoDescription: "Build jumping basics, arena control, confidence over fences, and show preparation at NTEC.",
    image: images.field,
    layout: "training",
    proof: [
      { value: "Flatwork", label: "Before fences" },
      { value: "Fences", label: "Confidence building" },
      { value: "Shows", label: "Course preparation" }
    ],
    intro: "Hunter jumper lessons start with control, balance, rhythm, and confidence before riders take on more complex jumping questions.",
    sections: [
      section("Basics", "Flatwork Before Jumping", "Riders build position, steering, pace, and transitions so fences feel organized instead of rushed.", ["Two-point position", "Rhythm", "Steering", "Pace control"]),
      section("Fences", "Confidence Through Simple Exercises", "Pole work, small fences, and gymnastic exercises help riders understand approach, jump, and landing.", ["Pole work", "Small fences", "Approach", "Landing"]),
      section("Shows", "Course and Competition Preparation", "Riders can work toward course riding, show readiness, and better decisions under pressure.", ["Course work", "Show habits", "Warm-up planning", "Confidence"])
    ],
    feature: { title: "Hunter Jumper Pathway", body: "The program can support lesson horses, personal horses, youth riders, and adult riders learning to jump.", items: ["Lesson horses", "Personal horses", "Youth riders", "Adult riders"] },
    cta: { label: "Request Lesson", href: "/book", title: "Ask about hunter jumper lessons.", body: "Submit a lesson inquiry and share rider experience." },
    related: ["lessons", "training", "events/horse-shows"]
  }),
  makePage({
    slug: "training",
    navLabel: "Horse Training",
    title: "Horse Training",
    eyebrow: "Professional Horse Development",
    description: "Professional horse training, young horse development, conditioning, performance work, and competition preparation.",
    seoTitle: "Horse Training in Wylie, TX",
    seoDescription: "Professional horse training at NTEC for young horse development, conditioning, performance, and competition preparation.",
    image: images.care,
    layout: "training",
    proof: [
      { value: "Young", label: "Horse development" },
      { value: "Fit", label: "Conditioning" },
      { value: "Shows", label: "Preparation" }
    ],
    intro: "Training at NTEC gives horses a clear plan based on age, discipline, fitness, temperament, and the owner’s goals.",
    sections: [
      section("Development", "Young Horse Education", "Young horses need patient handling, clear expectations, and progressive training that does not rush mental or physical readiness.", ["Handling", "Ground manners", "Rideability", "Confidence"]),
      section("Performance", "Conditioning and Skill Building", "Training can focus on strength, responsiveness, discipline-specific work, and consistency under saddle.", ["Conditioning", "Responsiveness", "Discipline work", "Consistency"]),
      section("Competition", "Preparation for Shows and Sales", "Horses can be prepared for competition settings, sales appointments, or owner goals with practical training rides.", ["Show preparation", "Sales preparation", "Owner coaching", "Progress planning"])
    ],
    feature: { title: "Training Consultation", body: "A training conversation should start with the horse’s current routine, history, and the owner’s priorities.", items: ["Age and experience", "Discipline", "Schedule", "Owner goals"] },
    cta: { label: "Contact Us", href: "/contact", title: "Need training support?", body: "Contact NTEC to discuss your horse and training goals." },
    related: ["about/kai-handt", "boarding", "horses-for-sale"]
  }),
  makePage({
    slug: "pricing",
    navLabel: "NTEC Pricing",
    title: "NTEC Pricing",
    eyebrow: "Rates and Availability",
    description: "Pricing categories for lessons, boarding, training, camps, and forms with current rates confirmed by NTEC.",
    seoTitle: "NTEC Pricing and Availability",
    seoDescription: "View pricing categories for lessons, boarding, training, and camp. Contact NTEC for current pricing and availability.",
    image: images.rider,
    layout: "pricing",
    proof: [
      { value: "Lessons", label: "Children and adults" },
      { value: "Boarding", label: "By availability" },
      { value: "Training", label: "Custom plans" }
    ],
    intro: "Exact pricing can change by program, schedule, availability, and horse needs. This page organizes the main service categories and directs visitors to request current rates.",
    sections: [
      section("Lessons", "Lesson Pricing Categories", "Ask about beginner lessons, private coaching, youth lessons, adult lessons, dressage, and hunter jumper instruction.", ["Beginner lessons", "Private coaching", "Dressage", "Hunter jumper"]),
      section("Boarding", "Boarding Pricing Categories", "Boarding depends on current stall availability, care requirements, facility access, and owner needs.", ["Stall availability", "Daily care", "Turnout", "Facility access"]),
      section("Training and Camp", "Training and Camp Pricing", "Training plans and summer camp registration should be confirmed directly with NTEC for current dates and availability.", ["Training rides", "Competition prep", "Young horses", "Summer camp"])
    ],
    feature: { title: "Contact NTEC for Current Pricing and Availability", body: "Use this page to choose the right category before calling or sending an inquiry.", items: ["Lesson pricing", "Boarding pricing", "Training pricing", "Camp pricing"] },
    cta: { label: "View Pricing", href: "/pricing", title: "Need current pricing?", body: "Review categories, then contact NTEC for current rates and openings." },
    related: ["lessons", "boarding", "training"]
  }),
  makePage({
    slug: "forms/board-agreement",
    navLabel: "Board Agreement Form",
    title: "Board Agreement Form",
    eyebrow: "Boarding Paperwork",
    description: "Boarding agreement information for owners preparing to board a horse at NTEC.",
    seoTitle: "NTEC Board Agreement Form",
    seoDescription: "Review boarding agreement information and next steps for boarding clients at NTEC.",
    image: images.stable,
    layout: "service",
    proof: defaultProof,
    intro: "This page gives boarding clients a clear place for agreement details, required information, and next steps before moving a horse into care.",
    sections: [
      section("Owner Details", "Information Needed From the Owner", "Boarding paperwork should collect owner contact information, horse details, emergency contacts, and care notes.", ["Owner contact", "Horse details", "Emergency contact", "Care notes"]),
      section("Care Terms", "Daily Care Expectations", "The agreement should clarify stall care, feeding, turnout, barn rules, and communication expectations.", ["Stall care", "Feeding", "Turnout", "Communication"]),
      section("Next Steps", "Confirm Availability First", "Owners should confirm stall availability before completing paperwork or planning a move-in date.", ["Availability check", "Move-in timing", "Required forms", "Office contact"])
    ],
    feature: { title: "Boarding Documents", body: "Use this page for downloadable forms or a future online agreement workflow.", items: ["Agreement details", "Horse care notes", "Owner contact", "Emergency information"] },
    cta: { label: "Request Boarding Availability", href: "/boarding#boarding-inquiry", title: "Need a stall?", body: "Start with boarding availability before completing forms." },
    related: ["boarding", "about/facilities", "contact"]
  }),
  makePage({
    slug: "forms/release-contact",
    navLabel: "Release and Contact Form",
    title: "Release and Contact Form",
    eyebrow: "Client Forms",
    description: "Release and contact information for lesson riders, camp participants, and visitors.",
    seoTitle: "NTEC Release and Contact Form",
    seoDescription: "Find release and contact form information for riders, camp participants, and visitors at NTEC.",
    image: images.rider,
    layout: "service",
    proof: [
      { value: "Rider", label: "Contact details" },
      { value: "Safety", label: "Release information" },
      { value: "Visit", label: "Prepared arrival" }
    ],
    intro: "Release and contact information helps NTEC prepare for lessons, camps, visits, and rider safety needs.",
    sections: [
      section("Rider Info", "Basic Rider and Guardian Details", "Forms should collect accurate contact information, rider age, emergency contacts, and relevant experience.", ["Guardian name", "Rider name", "Phone and email", "Emergency contact"]),
      section("Release", "Safety and Participation Acknowledgment", "Riders and guardians should understand barn expectations, mounted activity risks, and participation requirements.", ["Safety rules", "Mounted activity", "Barn expectations", "Acknowledgment"]),
      section("Arrival", "Prepare Before the First Visit", "Completed forms help the office and instructors prepare for the rider’s first lesson or camp day.", ["First visit", "Lesson preparation", "Camp readiness", "Office review"])
    ],
    feature: { title: "Client Form Hub", body: "This page can later connect to online forms while keeping the static site fully navigable today.", items: ["Release form", "Contact form", "Emergency info", "Rider details"] },
    cta: { label: "Book a Lesson", href: "/book", title: "Ready to ride?", body: "Complete the lesson inquiry form before your first visit." },
    related: ["book", "lessons", "summer-camp"]
  }),
  makePage({
    slug: "forms/policies",
    navLabel: "Policy and Procedures Form",
    title: "Policy and Procedures",
    eyebrow: "Barn Policies",
    description: "Barn policies, rider procedures, safety expectations, scheduling notes, and practical information for NTEC clients.",
    seoTitle: "NTEC Policies and Procedures",
    seoDescription: "Review NTEC barn policies, rider procedures, safety expectations, and scheduling notes.",
    image: images.arena,
    layout: "service",
    proof: [
      { value: "Safety", label: "Barn rules" },
      { value: "Clear", label: "Procedures" },
      { value: "Ready", label: "First visit" }
    ],
    intro: "Clear policies help riders, parents, and horse owners understand how to move safely and respectfully around the barn.",
    sections: [
      section("Safety", "Barn and Riding Safety", "Policies should explain helmet expectations, horse handling, arena awareness, and safe visitor behavior.", ["Helmet rules", "Horse handling", "Arena awareness", "Visitor conduct"]),
      section("Scheduling", "Lessons, Weather, and Communication", "Procedures should clarify scheduling, cancellations, weather decisions, and how clients should communicate changes.", ["Lesson schedule", "Weather notes", "Cancellation policy", "Office contact"]),
      section("Barn Etiquette", "Respect for Horses and Riders", "Barn procedures help protect horses, riders, instructors, and owners sharing the facility.", ["Quiet stable behavior", "Tack areas", "Gates and turnout", "Shared spaces"])
    ],
    feature: { title: "Policy Reference", body: "This page gives clients a clear reference point before lessons, boarding, camp, or events.", items: ["Safety expectations", "Scheduling rules", "Barn etiquette", "Client communication"] },
    cta: { label: "Contact Us", href: "/contact", title: "Have a policy question?", body: "Contact NTEC before your visit if anything is unclear." },
    related: ["lessons", "boarding", "contact"]
  }),
  makePage({
    slug: "horses-for-sale",
    navLabel: "Current For Sale",
    title: "Current Horses For Sale",
    eyebrow: "Horse Sales",
    description: "Current horse sales overview with sport-horse matching, buyer guidance, and horse images only.",
    seoTitle: "Horses For Sale in Texas",
    seoDescription: "Explore current horses for sale through NTEC, including dressage horses, hunter/jumpers, and young prospects.",
    image: images.dressage,
    layout: "sales",
    proof: [
      { value: "Current", label: "Sale horses" },
      { value: "Private", label: "Buyer guidance" },
      { value: "Sport", label: "Horse focus" }
    ],
    intro: "Buying a horse is a high-trust decision. NTEC helps riders evaluate fit, temperament, training level, and long-term goals.",
    sections: [
      section("Current For Sale", "A Guided Sales Overview", "This page introduces sale categories and routes buyers toward the right discipline page or private inquiry.", ["Current horses", "Dressage options", "Hunter/jumper options", "Young prospects"]),
      section("Matching", "Fit Comes Before Flash", "The right horse should match the rider’s goals, experience, budget, and support system.", ["Rider fit", "Temperament", "Training level", "Budget conversation"]),
      section("Appointments", "Private Sales Conversations", "Some horses may be discussed privately, so buyers should contact NTEC with clear criteria.", ["Private inquiry", "Trial appointments", "Trainer guidance", "Horse finder"])
    ],
    feature: { title: "Sales Pathways", body: "Explore current horses by discipline or use the horse finder form for a guided search.", items: ["Dressage horses", "Hunter/jumpers", "Young horses", "Horse finder form"] },
    cta: { label: "Request Horse Finder Help", href: "/horse-finder", title: "Need help finding the right horse?", body: "Tell NTEC what you are looking for." },
    related: ["horses-for-sale/dressage", "horses-for-sale/hunter-jumper", "horse-finder"]
  }),
  makePage({
    slug: "horses-for-sale/dressage",
    navLabel: "Dressage Horses For Sale",
    title: "Dressage Horses For Sale",
    eyebrow: "Dressage Sales",
    description: "Dressage horses for sale with suitability, training level, temperament, and matching process.",
    seoTitle: "Dressage Horses For Sale | NTEC",
    seoDescription: "Explore dressage horses for sale with guidance on suitability, training level, temperament, and rider fit.",
    image: images.dressage,
    layout: "sales",
    proof: [
      { value: "Dressage", label: "Discipline fit" },
      { value: "Training", label: "Level review" },
      { value: "Match", label: "Rider suitability" }
    ],
    intro: "Dressage buyers need clear information about movement, temperament, training history, and rider compatibility.",
    sections: [
      section("Suitability", "Match the Horse to the Rider", "A dressage prospect should fit the rider’s current skill, goals, and support system.", ["Rider level", "Temperament", "Goals", "Budget"]),
      section("Training Level", "Understand the Horse's Education", "Profiles should explain age, training level, strengths, and what the horse is ready to do next.", ["Age", "Training level", "Show history", "Next steps"]),
      section("Process", "Trainer-Guided Evaluation", "NTEC can help buyers ask the right questions before scheduling a visit or trial ride.", ["Video review", "Trainer notes", "Appointment", "Fit discussion"])
    ],
    feature: { title: "Dressage Sales Inquiry", body: "Use the horse finder form if a suitable horse is not currently listed.", items: ["Training level", "Movement", "Temperament", "Rider fit"] },
    cta: { label: "Request Horse Finder Help", href: "/horse-finder", title: "Looking for a dressage horse?", body: "Send your criteria and NTEC will help guide the search." },
    related: ["horse-finder", "about/kai-handt", "lessons/dressage"]
  }),
  makePage({
    slug: "horses-for-sale/hunter-jumper",
    navLabel: "Hunter / Jumper",
    title: "Hunter / Jumper Horses",
    eyebrow: "Jumping Horse Sales",
    description: "Hunter/jumper horses with jumping ability, temperament, competition fit, and rider suitability.",
    seoTitle: "Hunter Jumper Horses For Sale | NTEC",
    seoDescription: "Explore hunter/jumper horses with attention to jumping ability, temperament, competition fit, and rider match.",
    image: images.field,
    layout: "sales",
    proof: [
      { value: "Jumping", label: "Ability" },
      { value: "Temperament", label: "Rider match" },
      { value: "Shows", label: "Competition fit" }
    ],
    intro: "Hunter/jumper buyers need to understand rideability, confidence, scope, rhythm, and how the horse handles new questions.",
    sections: [
      section("Ability", "Jumping Talent and Rideability", "The right horse should have ability that matches the rider’s level and confidence.", ["Scope", "Rhythm", "Adjustability", "Rideability"]),
      section("Temperament", "Confidence Matters", "Temperament is central for riders moving from lessons into shows or more independent riding.", ["Bravery", "Patience", "Consistency", "Rider confidence"]),
      section("Competition Fit", "Prepare for the Right Job", "NTEC can help evaluate whether a horse is suited for lessons, local shows, or more ambitious competition goals.", ["Local shows", "Course work", "Lesson fit", "Competition goals"])
    ],
    feature: { title: "Hunter Jumper Sales Inquiry", body: "Use a private inquiry to describe fence height, goals, experience, and budget.", items: ["Fence experience", "Show goals", "Rider level", "Budget"] },
    cta: { label: "Request Horse Finder Help", href: "/horse-finder", title: "Need a hunter/jumper match?", body: "Tell NTEC what type of horse you need." },
    related: ["horse-finder", "lessons/hunter-jumper", "events/horse-shows"]
  }),
  makePage({
    slug: "horses-for-sale/young-horses",
    navLabel: "Young Horses",
    title: "Young Horses",
    eyebrow: "Prospects",
    description: "Young prospect horses with development potential, trainer guidance, handling history, and suitability.",
    seoTitle: "Young Horses For Sale | NTEC",
    seoDescription: "Explore young horses for sale with development potential, trainer guidance, handling history, and suitability.",
    image: images.care,
    layout: "sales",
    proof: [
      { value: "Young", label: "Prospects" },
      { value: "Guided", label: "Trainer input" },
      { value: "Future", label: "Development" }
    ],
    intro: "Young horse buyers are evaluating potential, not just what the horse can do today. Guidance matters.",
    sections: [
      section("Potential", "Evaluate the Future Carefully", "Young horses should be assessed for temperament, movement, handling, and likely discipline fit.", ["Temperament", "Movement", "Handling", "Discipline fit"]),
      section("Development", "Training Takes Time", "A young horse needs a realistic plan for handling, fitness, riding milestones, and owner support.", ["Handling plan", "Fitness", "Riding milestones", "Owner support"]),
      section("Guidance", "Trainer Advice Before Purchase", "NTEC can help buyers understand the commitment and the right questions to ask before buying a prospect.", ["Timeline", "Budget", "Training plan", "Risk discussion"])
    ],
    feature: { title: "Young Horse Inquiry", body: "Use the horse finder form to describe your experience level and development goals.", items: ["Bloodlines", "Handling", "Timeline", "Training support"] },
    cta: { label: "Request Horse Finder Help", href: "/horse-finder", title: "Looking for a young prospect?", body: "Send NTEC your goals and experience level." },
    related: ["horse-finder", "training", "horses-for-sale"]
  }),
  makePage({
    slug: "horses-for-sale/sold",
    navLabel: "Sold Horses",
    title: "Sold Horses",
    eyebrow: "Success Stories",
    description: "Past sold horses, successful matches, buyer confidence, and sales program credibility.",
    seoTitle: "Sold Horses | NTEC",
    seoDescription: "View past sold horses and success stories from NTEC's horse sales program.",
    image: images.dressage,
    layout: "sales",
    proof: [
      { value: "Matches", label: "Past sales" },
      { value: "Riders", label: "New partnerships" },
      { value: "Trust", label: "Sales credibility" }
    ],
    intro: "Sold horses show the value of careful matching: rider goals, horse temperament, training history, and long-term suitability.",
    sections: [
      section("Archive", "Past Horse Matches", "A sold horse archive helps buyers see that NTEC understands fit and follow-through.", ["Past horses", "Buyer goals", "Discipline match", "Training background"]),
      section("Confidence", "Proof of the Sales Process", "Successful matches give future buyers confidence that the search will be practical and honest.", ["Buyer confidence", "Trainer input", "Horse history", "Private guidance"]),
      section("Next Match", "Start With Criteria", "Future buyers should start by sharing riding level, discipline, budget, and temperament preferences.", ["Rider level", "Discipline", "Budget", "Timeline"])
    ],
    feature: { title: "Sales Success", body: "This page can grow into a CMS-managed archive of sold horses and client stories.", items: ["Horse names", "Discipline", "Buyer fit", "Success notes"] },
    cta: { label: "Request Horse Finder Help", href: "/horse-finder", title: "Want help finding your match?", body: "Start a private horse finder inquiry." },
    related: ["horse-finder", "horses-for-sale", "training"]
  }),
  makePage({
    slug: "horse-finder",
    navLabel: "Horse Finder Form",
    title: "Horse Finder Form",
    eyebrow: "Buyer Inquiry",
    description: "A horse finder inquiry form for riders searching for dressage horses, hunter/jumpers, young prospects, or sold-horse alternatives.",
    seoTitle: "Horse Finder Form | NTEC",
    seoDescription: "Submit a horse finder inquiry with riding goals, discipline, budget, temperament, and timeline.",
    image: images.rider,
    layout: "contact",
    proof: [
      { value: "Private", label: "Buyer search" },
      { value: "Fit", label: "Rider and horse" },
      { value: "Guide", label: "Trainer input" }
    ],
    intro: "The horse finder form helps NTEC understand what kind of horse you need before recommending options or next steps.",
    sections: [
      section("Criteria", "Describe the Horse You Need", "The search should start with discipline, rider level, height range, temperament, and goals.", ["Discipline", "Rider level", "Temperament", "Goals"]),
      section("Budget", "Be Clear About Range and Timeline", "A realistic budget and timeline help focus the search and avoid mismatched options.", ["Budget range", "Timeline", "Location", "Trial needs"]),
      section("Support", "Trainer-Guided Search", "NTEC can help buyers evaluate whether a horse is a practical fit for the rider and program.", ["Trainer notes", "Video review", "Appointment", "Follow-up"])
    ],
    feature: { title: "Horse Finder Inquiry", body: "Use this page for a private inquiry form that captures buyer criteria.", items: ["Riding goals", "Discipline", "Budget", "Temperament"] },
    cta: { label: "Request Horse Finder Help", href: "/horse-finder", title: "Start the search.", body: "Submit your criteria and NTEC can respond with guidance." },
    related: ["horses-for-sale", "horses-for-sale/dressage", "horses-for-sale/hunter-jumper"]
  }),
  makePage({
    slug: "events/christmas-show",
    navLabel: "NTEC Christmas Show",
    title: "NTEC Christmas Show",
    eyebrow: "Seasonal Event",
    description: "Christmas show details, event overview, rider information, spectator notes, and registration CTA.",
    seoTitle: "NTEC Christmas Show",
    seoDescription: "Learn about the NTEC Christmas Show with event overview, rider details, spectator notes, and registration information.",
    image: images.field,
    layout: "events",
    proof: [
      { value: "Show", label: "Seasonal event" },
      { value: "Riders", label: "Participation" },
      { value: "Barn", label: "Community" }
    ],
    intro: "The Christmas Show gives riders a seasonal goal and the barn community a reason to gather around progress and preparation.",
    sections: [
      section("Overview", "A Seasonal Barn Show", "The event page should explain who can participate, what the day includes, and how riders prepare.", ["Rider participation", "Show format", "Spectator notes", "Barn community"]),
      section("Registration", "How Riders Join", "Registration details should be clear, including dates, requirements, and office contact.", ["Entry details", "Deadlines", "Requirements", "Office contact"]),
      section("Preparation", "Arrive Ready for the Day", "Riders should know what to bring, when to arrive, and how to prepare horses and tack.", ["Arrival time", "Tack prep", "Attire", "Warm-up"])
    ],
    feature: { title: "Christmas Show Details", body: "Use this page for event dates, divisions, entry notes, and day-of announcements.", items: ["Event date", "Divisions", "Schedule", "Registration"] },
    cta: { label: "View Events", href: "/events/horse-shows", title: "See upcoming show details.", body: "Review the horse show calendar and registration notes." },
    related: ["events/horse-shows", "gallery/awards-events", "lessons"]
  }),
  makePage({
    slug: "events/para-equestrian-clinic",
    navLabel: "Para-Equestrian Clinic",
    title: "Para-Equestrian Clinic",
    eyebrow: "Clinic",
    description: "Clinic details, accessibility, training purpose, rider preparation, and registration CTA.",
    seoTitle: "Para-Equestrian Clinic | NTEC",
    seoDescription: "Learn about NTEC para-equestrian clinic details, accessibility, training purpose, and registration information.",
    image: images.arena,
    layout: "events",
    proof: [
      { value: "Clinic", label: "Training event" },
      { value: "Access", label: "Rider support" },
      { value: "Prep", label: "Clear information" }
    ],
    intro: "The para-equestrian clinic page gives riders and families clear details about purpose, accessibility, preparation, and registration.",
    sections: [
      section("Purpose", "Focused Training and Evaluation", "The clinic supports riders seeking professional feedback and a structured training setting.", ["Rider evaluation", "Training feedback", "Goal review", "Professional coaching"]),
      section("Accessibility", "Practical Rider Support", "Clinic information should explain rider needs, facility considerations, and communication before arrival.", ["Accessibility notes", "Support needs", "Arrival planning", "Office contact"]),
      section("Registration", "Know What to Bring", "Participants should understand forms, schedule, tack, attire, and any clinic-specific requirements.", ["Forms", "Schedule", "Tack", "Requirements"])
    ],
    feature: { title: "Clinic Registration", body: "This page is ready for current clinic dates, clinician notes, and registration details.", items: ["Clinic date", "Rider requirements", "Facility notes", "Registration"] },
    cta: { label: "Contact Us", href: "/contact", title: "Ask about clinic details.", body: "Contact NTEC for current clinic information and registration." },
    related: ["events/horse-shows", "training", "about/facilities"]
  }),
  makePage({
    slug: "events/talent-search",
    navLabel: "Talent Search Event",
    title: "Talent Search Event",
    eyebrow: "Rider Development",
    description: "Talent search event details, rider evaluation, training feedback, participation requirements, and CTA.",
    seoTitle: "Talent Search Event | NTEC",
    seoDescription: "Learn about NTEC talent search event details, participation requirements, rider evaluation, and registration information.",
    image: images.dressage,
    layout: "events",
    proof: [
      { value: "Riders", label: "Development" },
      { value: "Feedback", label: "Evaluation" },
      { value: "Goals", label: "Next steps" }
    ],
    intro: "The talent search page is for riders who want evaluation, training feedback, and a clearer path toward competition or development goals.",
    sections: [
      section("Event", "Rider Evaluation Format", "The event should explain who the program is for and what participants can expect during evaluation.", ["Rider level", "Evaluation", "Feedback", "Preparation"]),
      section("Participation", "Requirements and Readiness", "Riders need to understand forms, schedule, tack, horse requirements, and preparation.", ["Forms", "Schedule", "Tack", "Horse readiness"]),
      section("Next Steps", "Feedback That Leads Somewhere", "The event should connect evaluation to lessons, training, and a practical plan for progress.", ["Training plan", "Lesson goals", "Show goals", "Follow-up"])
    ],
    feature: { title: "Talent Search Participation", body: "Use this page for dates, requirements, evaluator information, and registration.", items: ["Event date", "Eligibility", "Evaluation notes", "Registration"] },
    cta: { label: "Contact Us", href: "/contact", title: "Ask about participation.", body: "Contact NTEC for current talent search details." },
    related: ["training", "lessons/dressage", "events/horse-shows"]
  }),
  makePage({
    slug: "events/horse-shows",
    navLabel: "Upcoming Horse Shows",
    title: "Upcoming Horse Shows",
    eyebrow: "Show Calendar",
    description: "Upcoming horse shows calendar layout with dates, event notes, rider preparation, and registration CTA.",
    seoTitle: "Upcoming Horse Shows | NTEC",
    seoDescription: "View upcoming horse shows, calendar details, rider preparation notes, and registration information.",
    image: images.field,
    layout: "events",
    proof: [
      { value: "Shows", label: "Calendar" },
      { value: "Riders", label: "Preparation" },
      { value: "Dates", label: "Updates" }
    ],
    intro: "The horse show page organizes upcoming dates, registration notes, and preparation details for riders and families.",
    sections: [
      section("Calendar", "Upcoming Dates and Venues", "A calendar layout should show show dates, locations, disciplines, and registration deadlines.", ["Dates", "Venues", "Disciplines", "Deadlines"]),
      section("Preparation", "Rider and Horse Readiness", "Riders should know what to practice, what to pack, and how to prepare before show day.", ["Practice goals", "Packing list", "Warm-up plan", "Tack check"]),
      section("Registration", "Clear Next Steps", "Registration notes should explain who to contact, what forms are needed, and when entries are due.", ["Entry forms", "Office contact", "Payment notes", "Schedule"])
    ],
    feature: { title: "Horse Show Calendar", body: "Use this page for current show dates, divisions, venues, and updates.", items: ["Dressage shows", "Hunter/jumper shows", "Local events", "Rated shows"] },
    cta: { label: "View Events", href: "/events/horse-shows", title: "Review the show calendar.", body: "Check upcoming dates and contact NTEC with registration questions." },
    related: ["events/christmas-show", "lessons/hunter-jumper", "lessons/dressage"]
  }),
  makePage({
    slug: "summer-camp",
    navLabel: "Summer Camp",
    title: "Summer Camp",
    eyebrow: "Youth Riding Program",
    description: "Summer camp overview with riding activities, horse care basics, safety, dates, and registration CTA.",
    seoTitle: "Horse Summer Camp in Wylie, TX",
    seoDescription: "Explore NTEC summer camp with riding activities, horse care basics, safety, dates, and registration information.",
    image: images.rider,
    layout: "events",
    proof: [
      { value: "Riding", label: "Daily activities" },
      { value: "Care", label: "Horse basics" },
      { value: "Safety", label: "Supervised barn time" }
    ],
    intro: "Summer camp gives children and teens a structured barn experience with riding, grooming, horse care, and safety instruction.",
    sections: [
      section("Activities", "Riding and Barn Skills", "Campers learn riding basics, grooming, tack, horse handling, and the responsibilities of being around horses.", ["Riding", "Grooming", "Tack basics", "Horse handling"]),
      section("Safety", "Supervised Learning", "Camp should be organized around clear rules, instructor supervision, age-appropriate activities, and horse care education.", ["Supervision", "Barn rules", "Age-appropriate work", "Horse respect"]),
      section("Registration", "Dates and What to Bring", "Families need clear information about session dates, forms, clothing, lunch, water, and pickup details.", ["Session dates", "Forms", "What to bring", "Pickup details"])
    ],
    feature: { title: "Summer Camp Registration", body: "Use this page for current session dates, release forms, and registration instructions.", items: ["Session dates", "Riding activities", "Horse care", "Parent information"] },
    cta: { label: "Summer Camp Registration", href: "/summer-camp", title: "Ready for camp?", body: "Review camp details and contact NTEC about registration." },
    related: ["lessons", "forms/release-contact", "gallery/barn-life"]
  }),
  makePage({
    slug: "events/past",
    navLabel: "Past Events",
    title: "Past Events",
    eyebrow: "Event Recaps",
    description: "Past events gallery and recap for clinics, shows, camps, awards, and barn community moments.",
    seoTitle: "Past Events | NTEC",
    seoDescription: "View NTEC past event recaps, clinics, horse shows, camps, awards, and barn community moments.",
    image: images.field,
    layout: "events",
    proof: [
      { value: "Clinics", label: "Past events" },
      { value: "Shows", label: "Barn calendar" },
      { value: "Camp", label: "Seasonal moments" }
    ],
    intro: "Past events show the rhythm of the barn: clinics, shows, camps, awards, and community days that give riders goals and memories.",
    sections: [
      section("Recaps", "What Happened at the Barn", "Event recaps should summarize the purpose, rider participation, and highlights from each event.", ["Event overview", "Rider participation", "Highlights", "Photos"]),
      section("Gallery", "Images From Shows and Clinics", "Past event pages can connect to the awards and events gallery for visual proof.", ["Shows", "Clinics", "Awards", "Community"]),
      section("Future", "Use Past Events to Plan Ahead", "Families and riders can review past events to understand what future opportunities may look like.", ["Future planning", "Registration interest", "Program fit", "Calendar updates"])
    ],
    feature: { title: "Past Events Archive", body: "This page is ready for CMS-managed event recaps and photo galleries.", items: ["Event title", "Date", "Recap", "Gallery link"] },
    cta: { label: "View Gallery", href: "/gallery/awards-events", title: "See event photos.", body: "Browse awards, shows, and event imagery." },
    related: ["events/horse-shows", "gallery/awards-events", "summer-camp"]
  }),
  makePage({
    slug: "gallery/awards-events",
    navLabel: "Awards and Events",
    title: "Awards and Events Gallery",
    eyebrow: "Competition and Event Photos",
    description: "Gallery for competitions, awards, shows, clinics, and barn events.",
    seoTitle: "Awards and Events Gallery | NTEC",
    seoDescription: "View NTEC gallery images for competitions, awards, shows, clinics, and equestrian events.",
    image: images.dressage,
    layout: "gallery",
    proof: [
      { value: "Awards", label: "Recognition" },
      { value: "Shows", label: "Competition" },
      { value: "Events", label: "Barn calendar" }
    ],
    intro: "This gallery category should show the public side of the barn: competitions, award moments, clinics, and special events.",
    sections: [
      section("Competitions", "Show and Award Moments", "Images should focus on riders, horses, presentation moments, and event preparation.", ["Riders", "Horses", "Awards", "Show prep"]),
      section("Clinics", "Training and Education Events", "Clinic photos can show instruction, horse and rider work, and facility use.", ["Clinics", "Instruction", "Arena work", "Learning moments"]),
      section("Events", "Community at the Barn", "Event galleries help visitors see the barn as active, organized, and welcoming.", ["Barn community", "Seasonal events", "Families", "Rider progress"])
    ],
    feature: { title: "View Gallery", body: "This page is prepared for a CMS-managed masonry gallery with equestrian-only imagery.", items: ["Awards", "Shows", "Clinics", "Events"] },
    cta: { label: "View Gallery", href: "/gallery/awards-events", title: "Browse awards and events.", body: "Explore competition and event imagery." },
    related: ["events/horse-shows", "events/past", "gallery/barn-life"]
  }),
  makePage({
    slug: "gallery/barn-life",
    navLabel: "Barn Life",
    title: "Barn Life Gallery",
    eyebrow: "Daily Equestrian Life",
    description: "Gallery for barn life, horses, riders, lessons, stables, tack, arenas, and daily care.",
    seoTitle: "Barn Life Gallery | NTEC",
    seoDescription: "View barn life images from NTEC including horses, riders, lessons, stables, tack, arenas, and daily care.",
    image: images.stable,
    layout: "gallery",
    proof: [
      { value: "Barn", label: "Daily life" },
      { value: "Horses", label: "Care moments" },
      { value: "Lessons", label: "Rider progress" }
    ],
    intro: "Barn life photography helps families understand the daily environment: lessons, horse care, stables, tack areas, and rider routines.",
    sections: [
      section("Lessons", "Riders Learning Safely", "Images should show riders, instructors, lesson horses, arenas, and safe mounted work.", ["Lessons", "Instructors", "Lesson horses", "Arenas"]),
      section("Care", "Daily Horse Care", "Barn life includes grooming, tack, stall routines, feeding preparation, and horse handling.", ["Grooming", "Tack", "Stalls", "Handling"]),
      section("Facility", "Stable and Arena Details", "Visitors want to see where horses live, where riders tack up, and where lessons happen.", ["Stables", "Tack areas", "Arenas", "Turnout"])
    ],
    feature: { title: "Barn Life Collection", body: "Use only equestrian facility images: horses, riders, stables, arenas, tack, and barn care.", items: ["Horse care", "Lessons", "Stables", "Tack"] },
    cta: { label: "Contact Us", href: "/contact", title: "Want to visit the barn?", body: "Contact NTEC to ask about lessons, boarding, or facility visits." },
    related: ["about/facilities", "boarding", "lessons"]
  }),
  makePage({
    slug: "gallery/videos",
    navLabel: "Videos",
    title: "Video Gallery",
    eyebrow: "Training and Facility Video",
    description: "Video gallery layout for training clips, horse sales reels, facility walkthroughs, lessons, and event recaps.",
    seoTitle: "NTEC Video Gallery",
    seoDescription: "Watch NTEC video content for training clips, horse sales reels, facility views, lessons, and event recaps.",
    image: images.rider,
    layout: "gallery",
    proof: [
      { value: "Video", label: "Training clips" },
      { value: "Sales", label: "Horse reels" },
      { value: "Events", label: "Recaps" }
    ],
    intro: "Video helps riders and buyers understand movement, training progress, facility layout, and the feel of the barn.",
    sections: [
      section("Training", "Short Clips for Rider Education", "Training videos can show exercises, arena work, and rider development without replacing instruction.", ["Flatwork", "Jumping", "Dressage", "Lesson clips"]),
      section("Sales", "Horse Sales Reels", "Sales videos should show movement, temperament, rideability, and discipline suitability.", ["Walk", "Trot", "Canter", "Jumping or dressage"]),
      section("Events", "Show and Camp Recaps", "Event videos can recap horse shows, clinics, summer camp, and barn activities.", ["Show recaps", "Clinic clips", "Camp moments", "Facility videos"])
    ],
    feature: { title: "Video Layout", body: "This page is ready for embedded videos, reels, captions, and category filters.", items: ["Training clips", "Sales reels", "Facility previews", "Event recaps"] },
    cta: { label: "View Gallery", href: "/gallery/awards-events", title: "Browse more media.", body: "See competition and barn life gallery sections." },
    related: ["gallery/awards-events", "gallery/barn-life", "horses-for-sale"]
  }),
  makePage({
    slug: "blog",
    navLabel: "Blog",
    title: "NTEC Blog",
    eyebrow: "Rider Education",
    description: "Educational equestrian articles for riding lessons, horse care, boarding, training, and parent questions.",
    seoTitle: "NTEC Blog | Riding Lessons and Horse Care",
    seoDescription: "Read NTEC articles about riding lessons, choosing instructors, horse care, boarding tips, and training preparation.",
    image: images.rider,
    layout: "blog",
    proof: [
      { value: "Lessons", label: "Rider tips" },
      { value: "Care", label: "Horse owner advice" },
      { value: "Boarding", label: "Barn guidance" }
    ],
    intro: "The blog should answer practical questions for riders, parents, and horse owners before they call or visit.",
    sections: [
      section("Lessons", "Articles for New Riders", "Topics can explain first lessons, what to wear, how often to ride, and how to choose an instructor.", ["First lesson", "What to wear", "Lesson frequency", "Instructor fit"]),
      section("Care", "Articles for Horse Owners", "Boarding and care articles help owners understand routines, facility questions, and preparation for a new barn.", ["Boarding tips", "Care routines", "Facility tours", "Owner preparation"]),
      section("Training", "Education for Progress", "Training articles can explain horse development, show preparation, and discipline-specific work.", ["Dressage basics", "Jumping readiness", "Young horses", "Show prep"])
    ],
    feature: { title: "Blog Listing", body: "This page is ready for article cards, categories, and internal links to service pages.", items: ["Riding tips", "Boarding advice", "Horse care", "Training education"] },
    cta: { label: "Book a Lesson", href: "/book", title: "Have a rider question?", body: "Send a lesson inquiry and describe the rider’s goals." },
    related: ["lessons", "boarding", "training"]
  }),
  makePage({
    slug: "contact",
    navLabel: "Contact",
    title: "Contact North Texas Equestrian Center",
    eyebrow: "Call or Visit",
    description: "Contact details, general contact form, phone number, address, office hours, map placeholder, and quick action buttons.",
    seoTitle: "Contact NTEC in Wylie, Texas",
    seoDescription: "Contact NTEC at 972-442-7544 or visit 1765 Southview Drive, Wylie, Texas 75098.",
    image: images.arena,
    layout: "contact",
    proof: [
      { value: "972", label: "442-7544" },
      { value: "Wylie", label: "Texas" },
      { value: "1765", label: "Southview Drive" }
    ],
    intro: "Use the contact page for general questions about lessons, boarding, training, horse sales, camp, events, or a facility visit.",
    sections: [
      section("Details", "Phone, Address, and Office Hours", "North Texas Equestrian Center is located at 1765 Southview Drive, Wylie, Texas 75098. Call 972-442-7544 for current office guidance.", ["972-442-7544", "1765 Southview Drive", "Wylie, Texas 75098", "Office hours by inquiry"]),
      section("General Form", "Send a Clear Message", "The contact form should collect name, email, phone, interest, and message so the office can respond efficiently.", ["Name", "Email", "Phone", "Message"]),
      section("Map", "Plan Your Visit", "A map placeholder gives visitors a clear place for directions and arrival notes.", ["Map placeholder", "Driving directions", "Visit notes", "Parking guidance"])
    ],
    feature: { title: "Quick Contact Actions", body: "Visitors should be able to call, email, or book a lesson without searching.", items: ["Call Now", "Email", "Book Lesson", "General inquiry"] },
    cta: { label: "Contact Us", href: "/contact", title: "Need to reach NTEC?", body: "Call, email, or send a general inquiry." },
    related: ["book", "boarding", "lessons"]
  }),
  makePage({
    slug: "book",
    navLabel: "Book Now",
    title: "Book a Lesson",
    eyebrow: "Lesson Inquiry",
    description: "A dedicated lesson inquiry page with rider details, parent or guardian contact, program interest, preferred schedule, and message.",
    seoTitle: "Book a Horse Riding Lesson in Wylie, TX",
    seoDescription: "Submit a riding lesson inquiry for NTEC with parent/guardian name, rider name, contact details, rider age, experience, program interest, schedule, and message.",
    image: images.rider,
    layout: "contact",
    proof: [
      { value: "Form", label: "Lesson inquiry" },
      { value: "Safe", label: "Rider matching" },
      { value: "Next", label: "Scheduling step" }
    ],
    intro: "The book page gathers the details NTEC needs to match a rider with the right lesson path and follow up with useful scheduling options.",
    sections: [
      section("Rider Details", "Parent and Rider Information", "The form asks for parent or guardian name, rider name, rider age, contact details, and experience level.", ["Parent/guardian name", "Rider name", "Rider age", "Experience level"]),
      section("Program Fit", "Choose the Right Riding Program", "Riders can indicate interest in English basics, dressage, hunter jumper, youth lessons, adult lessons, or private coaching.", ["English riding", "Dressage", "Hunter jumper", "Private lessons"]),
      section("Schedule", "Preferred Days and Times", "Preferred availability helps NTEC respond with realistic next steps.", ["Weekdays", "Weekends", "Morning or afternoon", "Message"])
    ],
    feature: { title: "Submit a Lesson Inquiry", body: "After the form is submitted, NTEC can review the rider details and recommend the right next step.", items: ["Review rider details", "Confirm program fit", "Discuss schedule", "Prepare for first visit"] },
    cta: { label: "Book a Lesson", href: "/book", title: "Ready to request a lesson?", body: "Complete the inquiry form and NTEC will help with the next step." },
    related: ["lessons", "lessons/english", "contact"]
  })
];

export const allPageSlugs = sitePages.map((page) => page.slug);

export function findPage(slug: string) {
  return sitePages.find((page) => page.slug === slug);
}
