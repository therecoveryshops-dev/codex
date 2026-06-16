"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MapPinned,
  Menu,
  Phone,
  Send,
  Star,
  X
} from "lucide-react";
import {
  contact,
  events,
  gallery,
  horses,
  instructors,
  navItems,
  programs,
  stats,
  testimonials,
  trustItems,
  whyChoose
} from "@/lib/content";
import { FullSiteFooter, FullSiteHeader } from "@/components/site-chrome";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 }
};

function Reveal({
  children,
  className = "",
  delay = 0
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-90px" }}
      variants={fadeUp}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-4 text-xs font-semibold uppercase tracking-[0.26em] ${
        light ? "text-gold" : "text-forest"
      }`}
    >
      {children}
    </p>
  );
}

function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-forest/88 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-sm">
          <span className="grid h-11 w-11 place-items-center border border-gold/60 font-display text-lg text-gold">
            NT
          </span>
          <span>
            <span className="block font-display text-xl leading-none">NTEC</span>
            <span className="block text-[11px] uppercase tracking-[0.24em] text-white/62">
              Wylie, Texas
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm text-sm font-medium text-white/78 transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${contact.phone}`}
            className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm text-white/78 transition hover:text-gold"
          >
            <Phone className="h-4 w-4" />
            {contact.phone}
          </a>
          <Link
            href="/book"
            className="focus-ring inline-flex items-center gap-2 bg-gold px-5 py-3 text-sm font-semibold text-forest shadow-gold transition hover:bg-white"
          >
            Book a Lesson
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          aria-label="Open menu"
          className="focus-ring rounded-sm p-2 lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-forest p-6 text-white lg:hidden">
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl">NTEC</span>
            <button aria-label="Close menu" className="focus-ring rounded-sm p-2" onClick={() => setOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-14 grid gap-6" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 pb-5 font-display text-4xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 150]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-forest text-white">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1800&q=86"
          alt="Rider training at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,53,36,.82),rgba(18,53,36,.48)_45%,rgba(18,53,36,.12)),linear-gradient(0deg,rgba(18,53,36,.92),rgba(18,53,36,0)_42%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-5 pb-14 pt-32 lg:px-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-3 border border-gold/50 bg-white/8 px-4 py-2 text-sm text-white/82 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            North Texas Equestrian Center
          </div>
          <h1 className="font-display text-5xl leading-[0.95] tracking-normal md:text-7xl lg:text-8xl">
            Ride With Confidence.
            <span className="block text-gold">Train With Excellence.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
            Premier horseback riding lessons, boarding, camps, and competition training on a 50-acre
            equestrian estate in North Texas.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="focus-ring inline-flex items-center justify-center gap-3 bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-forest transition hover:bg-white"
            >
              Book Your First Lesson
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/lessons"
              className="focus-ring inline-flex items-center justify-center gap-3 border border-white/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-gold hover:text-gold"
            >
              Explore Programs
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid gap-px overflow-hidden border border-white/12 bg-white/12 md:grid-cols-4"
        >
          {trustItems.map((item) => (
            <div key={item.label} className="bg-forest/35 p-5 backdrop-blur">
              <p className="text-lg font-semibold text-gold">{item.value}</p>
              <p className="mt-1 text-sm text-white/68">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_.9fr] lg:px-8">
        <Reveal className="relative min-h-[520px] overflow-hidden shadow-estate">
          <Image
            src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=1800&q=86"
            alt="A rider training with a horse in a professional arena"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest/92 to-transparent p-8 text-white">
            <p className="max-w-sm font-display text-3xl">A USEF Elite Training Center of Excellence near Lake Lavon.</p>
          </div>
        </Reveal>

        <Reveal className="self-center">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="font-display text-4xl leading-tight text-forest md:text-6xl">
            Train Where Champions Are Made
          </h2>
          <p className="mt-6 text-lg leading-8 text-ink/72">
            NTEC combines accomplished instruction, thoughtful horse care, and a professional facility
            built for riders at every stage, from first lesson to competitive goals.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {whyChoose.map(({ title, icon: Icon }) => (
              <div key={title} className="flex items-center gap-4 border-l border-gold/50 bg-white/55 p-4">
                <span className="grid h-11 w-11 place-items-center bg-forest text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-forest">{title}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Programs</Eyebrow>
          <h2 className="font-display text-4xl leading-tight text-forest md:text-6xl">
            A Riding Path for Every Ambition
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-20">
          {programs.map((program, index) => (
            <Reveal
              key={program.title}
              className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="image-mask group relative min-h-[430px] overflow-hidden bg-forest">
                <Image
                  src={program.image}
                  alt={`${program.title} at North Texas Equestrian Center`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/42 to-transparent opacity-80" />
              </div>
              <div className="lg:px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">{program.eyebrow}</p>
                <h3 className="mt-4 font-display text-4xl text-forest md:text-5xl">{program.title}</h3>
                <p className="mt-5 text-lg leading-8 text-ink/72">{program.description}</p>
                <ul className="mt-8 grid gap-3">
                  {program.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-forest">
                      <span className="h-px w-8 bg-gold" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={
                    program.title === "Horse Boarding"
                      ? "/boarding"
                      : program.title === "Summer Camps"
                        ? "/summer-camp"
                        : program.title.includes("Competition")
                          ? "/training"
                          : "/lessons"
                  }
                  className="focus-ring mt-9 inline-flex items-center gap-3 border-b border-gold pb-2 font-semibold text-forest transition hover:text-gold"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilityShowcase() {
  return (
    <section id="facilities" className="noise bg-forest py-24 text-white lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal>
            <Eyebrow light>Facility Showcase</Eyebrow>
            <h2 className="font-display text-4xl leading-tight md:text-6xl">Fifty Acres Designed for Horses and Riders</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-lg leading-8 text-white/68">
              European-style stables, covered riding spaces, training fields, and room for up to
              100 horses create a serious but welcoming environment for daily riding life.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid auto-rows-[240px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item) => (
            <Reveal key={item.title} className={`group relative overflow-hidden ${item.span ?? ""}`}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/76 via-forest/4 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-display text-2xl">{item.title}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function InstructorsAndHorses() {
  return (
    <section id="instructors" className="bg-linen py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow>Instruction</Eyebrow>
          <h2 className="font-display text-4xl leading-tight text-forest md:text-6xl">Meet Our Instructors</h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {instructors.map((person) => (
            <Reveal key={person.name} className="group bg-white shadow-estate">
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-3xl text-forest">{person.name}</h3>
                <p className="mt-2 font-semibold text-gold">{person.credentials}</p>
                <p className="mt-4 text-sm text-ink/65">{person.experience} of experience</p>
                <p className="mt-2 leading-7 text-ink/72">{person.specialty}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-28 grid gap-12 lg:grid-cols-[.65fr_1.35fr] lg:items-center">
          <Reveal>
            <Eyebrow>Meet Our Horses</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-forest md:text-6xl">
              Trusted Partners for Every Level
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink/72">
              Carefully matched lesson horses support calm learning, clear communication, and steady progress.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {horses.map((horse) => (
              <Reveal key={horse.name} className="group relative min-h-[430px] overflow-hidden bg-forest text-white">
                <Image
                  src={horse.image}
                  alt={horse.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/25 to-transparent" />
                <div className="absolute bottom-0 p-6">
                  <p className="font-display text-3xl">{horse.name}</p>
                  <p className="text-gold">{horse.breed}</p>
                  <p className="mt-4 text-sm leading-6 text-white/75">{horse.personality}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/55">{horse.level}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:items-center">
        <Reveal className="relative min-h-[560px] overflow-hidden bg-forest">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
        </Reveal>
        <Reveal>
          <Eyebrow>Testimonials</Eyebrow>
          <div className="flex gap-1 text-gold" aria-label="Five star rating">
            {[...Array(5)].map((_, starIndex) => (
              <Star key={starIndex} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <blockquote className="mt-8 font-display text-4xl leading-tight text-forest md:text-6xl">
            “{testimonial.quote}”
          </blockquote>
          <div className="mt-9 flex items-center justify-between border-t border-forest/12 pt-6">
            <div>
              <p className="font-semibold text-forest">{testimonial.name}</p>
              <p className="text-sm uppercase tracking-[0.18em] text-ink/52">{testimonial.type}</p>
            </div>
            <div className="flex gap-3">
              <button
                aria-label="Previous testimonial"
                className="focus-ring grid h-12 w-12 place-items-center border border-forest/20 text-forest transition hover:border-gold hover:text-gold"
                onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next testimonial"
                className="focus-ring grid h-12 w-12 place-items-center bg-forest text-white transition hover:bg-gold hover:text-forest"
                onClick={() => setIndex((index + 1) % testimonials.length)}
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="bg-forest py-16 text-white">
      <div className="mx-auto grid max-w-7xl divide-y divide-white/12 px-5 md:grid-cols-4 md:divide-x md:divide-y-0 lg:px-8">
        {stats.map((stat) => (
          <Reveal key={stat.label} className="py-8 md:px-8">
            <p className="font-display text-6xl text-gold md:text-7xl">{stat.value}</p>
            <p className="mt-3 text-sm uppercase tracking-[0.22em] text-white/60">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Events() {
  const filters = ["All", "Clinics", "Camps", "Competitions", "Horse Shows"];
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? events : events.filter((event) => event.type === filter);

  return (
    <section id="events" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal>
            <Eyebrow>Events</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-forest md:text-6xl">
              Clinics, Camps, Competitions, and Shows
            </h2>
          </Reveal>
          <Reveal className="flex flex-wrap gap-2 lg:justify-end">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`focus-ring px-4 py-2 text-sm font-semibold transition ${
                  filter === item ? "bg-forest text-white" : "bg-white text-forest hover:bg-gold/20"
                }`}
              >
                {item}
              </button>
            ))}
          </Reveal>
        </div>
        <div className="mt-14 border-l border-gold/60">
          {visible.map((event, eventIndex) => (
            <Reveal key={event.title} className="relative ml-7 pb-12">
              <span className="absolute -left-[34px] top-1 grid h-4 w-4 place-items-center rounded-full bg-gold ring-8 ring-cream" />
              <div className="grid gap-3 md:grid-cols-[180px_1fr]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{event.date}</p>
                <div className={eventIndex === visible.length - 1 ? "" : "border-b border-forest/10 pb-10"}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-forest/48">{event.type}</p>
                  <h3 className="mt-2 font-display text-3xl text-forest">{event.title}</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-ink/68">{event.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  return (
    <section id="booking" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
        <Reveal className="bg-forest p-8 text-white md:p-12">
          <Eyebrow light>Start Riding</Eyebrow>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">Schedule Your First Lesson</h2>
          <p className="mt-6 text-lg leading-8 text-white/72">
            Tell us about the rider, their goals, and the kind of experience you are looking for.
            The NTEC team will help match the right program, horse, and instructor.
          </p>
          <div className="mt-10 grid gap-5">
            {[
              "Beginner-friendly matching for children and adults",
              "Boarding consultations for horse owners",
              "Competition pathways for advancing riders",
              "Professional environment minutes from Dallas suburbs"
            ].map((item) => (
              <div key={item} className="flex gap-4">
                <span className="mt-2 h-px w-10 bg-gold" />
                <p className="text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="shadow-estate">
          <form className="grid gap-5 bg-cream p-6 md:grid-cols-2 md:p-9">
            {["Name", "Email", "Phone", "Age"].map((label, index) => (
              <label key={label} className={index === 0 ? "md:col-span-2" : ""}>
                <span className="mb-2 block text-sm font-semibold text-forest">{label}</span>
                <input
                  type={label === "Email" ? "email" : label === "Phone" ? "tel" : "text"}
                  className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 text-ink outline-none"
                  placeholder={label}
                />
              </label>
            ))}
            <label>
              <span className="mb-2 block text-sm font-semibold text-forest">Experience Level</span>
              <select className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 text-ink outline-none">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>Returning rider</option>
              </select>
            </label>
            <label>
              <span className="mb-2 block text-sm font-semibold text-forest">Program Interest</span>
              <select className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 text-ink outline-none">
                <option>Riding lessons</option>
                <option>Horse boarding</option>
                <option>Competition training</option>
                <option>Summer camp</option>
                <option>Private coaching</option>
              </select>
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-forest">Preferred Schedule</span>
              <input
                className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 text-ink outline-none"
                placeholder="Weekdays, weekends, mornings, afternoons"
              />
            </label>
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-semibold text-forest">Message</span>
              <textarea
                rows={5}
                className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 text-ink outline-none"
                placeholder="Tell us about goals, rider age, horse ownership, or questions."
              />
            </label>
            <button
              type="submit"
              className="focus-ring inline-flex items-center justify-center gap-3 bg-forest px-7 py-4 font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-gold hover:text-forest md:col-span-2"
            >
              Schedule My Lesson
              <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-[1.1fr_.7fr_.7fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-4xl text-gold">NTEC</p>
          <p className="mt-5 max-w-sm leading-7 text-white/68">
            North Texas Equestrian Center offers lessons, boarding, training, horse sales, and
            equestrian events on a 50-acre facility in Wylie, Texas.
          </p>
          <div className="mt-6 flex gap-3">
            <a aria-label="Instagram" href="https://www.instagram.com/" className="focus-ring grid h-11 w-11 place-items-center border border-white/16 transition hover:border-gold hover:text-gold">
              <Instagram className="h-5 w-5" />
            </a>
            <a aria-label="Facebook" href="https://www.facebook.com/" className="focus-ring grid h-11 w-11 place-items-center border border-white/16 transition hover:border-gold hover:text-gold">
              <Facebook className="h-5 w-5" />
            </a>
            <a aria-label="Email" href={`mailto:${contact.email}`} className="focus-ring grid h-11 w-11 place-items-center border border-white/16 transition hover:border-gold hover:text-gold">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-gold">Explore</p>
          <div className="mt-5 grid gap-3 text-white/70">
            {["About", "Programs", "Boarding", "Events", "Contact"].map((item) => (
              <Link key={item} href={item === "Contact" ? "/contact" : item === "Programs" ? "/lessons" : item === "Facilities" ? "/about/facilities" : item === "Events" ? "/events/horse-shows" : "/book"} className="focus-ring w-fit rounded-sm transition hover:text-gold">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-gold">Hours</p>
          <p className="mt-5 text-white/70">{contact.hours}</p>
          <p className="mt-8 font-semibold uppercase tracking-[0.2em] text-gold">Reviews</p>
          <p className="mt-5 text-white/70">4.9 average rider rating</p>
        </div>
        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-gold">Visit</p>
          <div className="mt-5 grid gap-4 text-white/70">
            <p className="flex gap-3">
              <MapPinned className="mt-1 h-5 w-5 shrink-0 text-gold" />
              {contact.address}
            </p>
            <a href={`tel:${contact.phone}`} className="focus-ring flex w-fit gap-3 rounded-sm transition hover:text-gold">
              <Phone className="h-5 w-5 text-gold" />
              {contact.phone}
            </a>
          </div>
          <div className="mt-6 h-32 overflow-hidden border border-white/12 bg-white/8">
            <iframe
              title="North Texas Equestrian Center map"
              src="https://www.google.com/maps?q=1765%20Southview%20Drive%20Wylie%20Texas%2075098&output=embed"
              className="h-full w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/45">
        © 2026 North Texas Equestrian Center, Inc. Concept redesign.
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <FullSiteHeader />
      <Hero />
      <WhyChoose />
      <Programs />
      <FacilityShowcase />
      <InstructorsAndHorses />
      <Testimonials />
      <SocialProof />
      <Events />
      <Booking />
      <FullSiteFooter />
      <Link
        href="/book"
        className="focus-ring fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 bg-gold px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-forest shadow-gold transition hover:bg-white"
      >
        Book A Lesson
        <ArrowRight className="h-4 w-4" />
      </Link>
    </main>
  );
}
