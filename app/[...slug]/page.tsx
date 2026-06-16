import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  FileText,
  MapPinned,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star
} from "lucide-react";
import { FullSiteFooter, FullSiteHeader } from "@/components/site-chrome";
import { contact, gallery, instructors, testimonials } from "@/lib/content";
import { allPageSlugs, findPage, menuTree, sitePages, type SitePage } from "@/lib/site-map";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

const layoutIntro: Record<SitePage["layout"], string> = {
  story: "A premium story page for families, riders, and owners evaluating the heart of NTEC.",
  profile: "A people-first page built around trust, expertise, and the experience behind the program.",
  proof: "A credibility page that turns recognition and rider progress into clear social proof.",
  facility: "An image-led property page for visitors who need to understand the physical environment.",
  pricing: "A decision page that helps visitors choose the right program conversation.",
  service: "A conversion-focused service page with practical details and a strong next step.",
  training: "A performance page for riders and owners who want structure, development, and expert eyes.",
  sales: "A private-client page for horse buyers who need fit, discretion, and guidance.",
  events: "A calendar-minded page for seasonal programming, clinics, shows, and registration.",
  gallery: "A media-forward page designed for visual proof and future CMS collections.",
  blog: "An editorial page for SEO, education, and practical rider questions.",
  contact: "A direct conversion page for calls, bookings, forms, maps, and visits."
};

export function generateStaticParams() {
  return allPageSlugs.map((slug) => ({ slug: slug.split("/") }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = findPage(slug.join("/"));

  if (!page) {
    return {};
  }

  return {
    title: page.seoTitle,
    description: page.seoDescription,
    openGraph: {
      title: page.seoTitle,
      description: page.seoDescription,
      images: [{ url: page.image }]
    }
  };
}

function flattenMenu(items = menuTree): { label: string; href: string }[] {
  return items.flatMap((item) => [
    ...(item.href && item.href !== "/" ? [{ label: item.label, href: item.href }] : []),
    ...(item.children ? flattenMenu(item.children) : [])
  ]);
}

function relatedPages(page: SitePage) {
  return page.related
    .map((slug) => sitePages.find((item) => item.slug === slug))
    .filter(Boolean) as SitePage[];
}

function SpecializedPanel({ page }: { page: SitePage }) {
  if (page.slug === "book") {
    const fields = [
      "Parent/guardian name",
      "Rider name",
      "Email",
      "Phone",
      "Rider age",
      "Riding experience level",
      "Interested program",
      "Preferred days/times"
    ];

    return (
      <form className="grid gap-5 bg-cream p-7 md:grid-cols-2">
        {fields.map((label) => (
          <label key={label} className={label === "Preferred days/times" ? "md:col-span-2" : ""}>
            <span className="mb-2 block text-sm font-semibold text-forest">{label}</span>
            <input className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 outline-none" placeholder={label} />
          </label>
        ))}
        <label className="md:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-forest">Message</span>
          <textarea rows={6} className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 outline-none" placeholder="Tell us about the rider, goals, confidence level, and anything NTEC should know before the first lesson." />
        </label>
        <button className="focus-ring inline-flex items-center justify-center gap-3 bg-forest px-7 py-4 font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-gold hover:text-forest md:col-span-2">
          Submit Lesson Inquiry <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    );
  }

  if (page.slug === "horse-finder") {
    const fields = [
      "Name",
      "Email",
      "Phone",
      "Riding discipline",
      "Rider experience",
      "Budget range",
      "Preferred age/height",
      "Timeline"
    ];

    return (
      <form className="grid gap-5 bg-cream p-7 md:grid-cols-2">
        {fields.map((label) => (
          <label key={label}>
            <span className="mb-2 block text-sm font-semibold text-forest">{label}</span>
            <input className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 outline-none" placeholder={label} />
          </label>
        ))}
        <label className="md:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-forest">Horse finder notes</span>
          <textarea rows={6} className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 outline-none" placeholder="Describe the horse you are looking for, temperament needs, show goals, and any must-have details." />
        </label>
        <button className="focus-ring inline-flex items-center justify-center gap-3 bg-forest px-7 py-4 font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-gold hover:text-forest md:col-span-2">
          Request Horse Finder Help <ArrowRight className="h-4 w-4" />
        </button>
      </form>
    );
  }

  if (page.layout === "pricing") {
    const pricing = [
      ["Lesson Pricing", "Beginner, youth, adult, and private coaching options."],
      ["Boarding Pricing", "Availability and care options confirmed by the office."],
      ["Training Pricing", "Custom plans based on horse, discipline, and frequency."],
      ["Camp Pricing", "Seasonal registration and session details by inquiry."]
    ];

    return (
      <div className="grid gap-4 md:grid-cols-2">
        {pricing.map(([title, body]) => (
          <div key={title} className="border border-forest/10 bg-white p-6">
            <p className="font-display text-3xl text-forest">{title}</p>
            <p className="mt-4 leading-7 text-ink/66">{body}</p>
          </div>
        ))}
        <div className="border border-gold/30 bg-gold/15 p-6 md:col-span-2">
          <p className="font-semibold text-forest">Contact NTEC for current availability and pricing.</p>
        </div>
      </div>
    );
  }

  if (page.layout === "profile") {
    return (
      <div className="grid gap-5 md:grid-cols-3">
        {instructors.map((person) => (
          <div key={person.name} className="group bg-white shadow-estate">
            <div className="relative aspect-[4/3] overflow-hidden bg-forest">
              <Image src={person.image} alt={person.name} fill sizes="33vw" className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="font-display text-3xl text-forest">{person.name}</p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-gold">{person.experience}</p>
              <p className="mt-4 leading-7 text-ink/66">{person.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (page.layout === "events") {
    const events = ["Featured clinic", "Horse show calendar", "Summer camp session", "Seasonal barn event"];
    return (
      <div className="grid gap-4">
        {events.map((event, index) => (
          <div key={event} className="grid gap-4 border border-forest/10 bg-white p-5 md:grid-cols-[120px_1fr_auto] md:items-center">
            <div className="bg-forest p-4 text-center text-white">
              <p className="text-xs uppercase tracking-[0.2em] text-gold">Event</p>
              <p className="font-display text-4xl">0{index + 1}</p>
            </div>
            <div>
              <p className="font-display text-3xl text-forest">{event}</p>
              <p className="mt-2 text-ink/64">Add current dates, registration notes, and rider preparation details from the CMS.</p>
            </div>
            <CalendarDays className="h-7 w-7 text-gold" />
          </div>
        ))}
      </div>
    );
  }

  if (page.layout === "gallery") {
    return (
      <div className="grid auto-rows-[210px] gap-4 md:grid-cols-3">
        {gallery.map((item, index) => (
          <div key={item.title} className={`group relative overflow-hidden bg-forest ${index === 0 ? "md:row-span-2" : ""} ${index === 5 ? "md:col-span-2" : ""}`}>
            <Image src={item.image} alt={item.title} fill sizes="33vw" className="object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/80 to-transparent" />
            <p className="absolute bottom-5 left-5 font-display text-3xl text-white">{item.title}</p>
          </div>
        ))}
      </div>
    );
  }

  if (page.layout === "blog") {
    const posts = [
      "How to Prepare for a First Riding Lesson",
      "Choosing the Right Riding Instructor",
      "How Often Riders Should Practice",
      "What to Ask Before Boarding Your Horse"
    ];

    return (
      <div className="grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <article key={post} className="border border-forest/10 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Rider Education</p>
            <h3 className="mt-4 font-display text-3xl leading-tight text-forest">{post}</h3>
            <p className="mt-4 leading-7 text-ink/66">A CMS-ready article card for SEO content that can link into lessons, boarding, training, and contact.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-forest">
              Read topic <ArrowRight className="h-4 w-4" />
            </span>
          </article>
        ))}
      </div>
    );
  }

  if (page.layout === "contact") {
    return (
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="bg-forest p-7 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Contact Info</p>
          <a href={`tel:${contact.phone}`} className="mt-5 flex items-center gap-3 font-display text-4xl">
            <Phone className="h-7 w-7 text-gold" />
            {contact.phone}
          </a>
          <p className="mt-7 flex gap-3 leading-7 text-white/72">
            <MapPinned className="mt-1 h-5 w-5 shrink-0 text-gold" />
            1765 Southview Drive, Wylie, Texas 75098
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <a href="tel:9724427544" className="focus-ring inline-flex items-center justify-center gap-2 bg-gold px-4 py-3 font-semibold text-forest transition hover:bg-white">
              Call Now
            </a>
            <a href={`mailto:${contact.email}`} className="focus-ring inline-flex items-center justify-center gap-2 border border-white/20 px-4 py-3 font-semibold text-white transition hover:border-gold hover:text-gold">
              Email
            </a>
            <Link href="/book" className="focus-ring inline-flex items-center justify-center gap-2 border border-white/20 px-4 py-3 font-semibold text-white transition hover:border-gold hover:text-gold">
              Book Lesson
            </Link>
          </div>
          <div className="mt-8 min-h-56 border border-white/15 bg-white/8 p-5">
            <p className="text-sm uppercase tracking-[0.18em] text-white/54">Google Map</p>
            <p className="mt-16 text-white/72">Map embed ready for production.</p>
          </div>
        </div>
        <form className="grid gap-5 bg-cream p-7 md:grid-cols-2">
          {["Name", "Email", "Phone", "Interest"].map((label) => (
            <label key={label}>
              <span className="mb-2 block text-sm font-semibold text-forest">{label}</span>
              <input className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 outline-none" placeholder={label} />
            </label>
          ))}
          <label className="md:col-span-2">
            <span className="mb-2 block text-sm font-semibold text-forest">Message</span>
            <textarea rows={5} className="focus-ring w-full border border-forest/12 bg-white px-4 py-3 outline-none" placeholder="Tell us about your rider, horse, or program interest." />
          </label>
          <button className="focus-ring inline-flex items-center justify-center gap-3 bg-forest px-7 py-4 font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-gold hover:text-forest md:col-span-2">
            Send General Inquiry <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="grid gap-5 md:grid-cols-3">
      {page.feature.items.map((item) => (
        <div key={item} className="border border-forest/10 bg-white p-6">
          <ShieldCheck className="h-7 w-7 text-gold" />
          <p className="mt-6 font-display text-2xl text-forest">{item}</p>
        </div>
      ))}
    </div>
  );
}

export default async function DetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pageSlug = slug.join("/");
  const page = findPage(pageSlug);

  if (!page) {
    notFound();
  }

  const navPages = flattenMenu().filter((item, index, arr) => item.href !== `/${pageSlug}` && arr.findIndex((entry) => entry.href === item.href) === index).slice(0, 10);
  const siblingPages = relatedPages(page);

  return (
    <main className="bg-white">
      <FullSiteHeader />

      <section className="relative min-h-[78vh] overflow-hidden bg-forest pt-28 text-white">
        <Image src={page.image} alt={page.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,53,36,.92),rgba(18,53,36,.66)_52%,rgba(18,53,36,.18)),linear-gradient(0deg,rgba(18,53,36,.82),rgba(18,53,36,0)_52%)]" />
        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-5 pb-14 lg:px-8">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-gold">{page.eyebrow}</p>
          <h1 className="max-w-5xl font-display text-5xl leading-[0.95] md:text-7xl lg:text-8xl">{page.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">{page.description}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href={page.cta.href} className="focus-ring inline-flex items-center justify-center gap-3 bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-forest transition hover:bg-white">
              {page.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={`tel:${contact.phone}`} className="focus-ring inline-flex items-center justify-center gap-3 border border-white/35 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-gold hover:text-gold">
              <Phone className="h-4 w-4" />
              {contact.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-cream py-12">
        <div className="mx-auto grid max-w-7xl divide-y divide-forest/10 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          {page.proof.map((item) => (
            <div key={`${item.value}-${item.label}`} className="py-6 md:px-8">
              <p className="font-display text-5xl text-forest">{item.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[.72fr_1.28fr] lg:px-8">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-forest/10 bg-cream p-6">
              <p className="font-semibold uppercase tracking-[0.2em] text-gold">Explore NTEC</p>
              <p className="mt-4 leading-7 text-ink/64">{layoutIntro[page.layout]}</p>
              <div className="mt-7 grid gap-2">
                {navPages.map((item) => (
                  <Link key={item.href} href={item.href} className="focus-ring flex items-center justify-between border-b border-forest/8 py-3 text-sm font-semibold text-forest transition hover:text-gold">
                    {item.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          <div className="grid gap-16">
            <article className="grid gap-8 border-b border-forest/10 pb-14 md:grid-cols-[.6fr_1.4fr]">
              <div>
                <Sparkles className="h-9 w-9 text-gold" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Page Purpose</p>
              </div>
              <p className="font-display text-3xl leading-tight text-forest md:text-5xl">{page.intro}</p>
            </article>

            {page.sections.map((section, index) => (
              <article key={section.title} className={`grid gap-8 border-b border-forest/10 pb-14 ${index % 2 === 0 ? "md:grid-cols-[.88fr_1.12fr]" : "md:grid-cols-[1.12fr_.88fr]"}`}>
                <div className={index % 2 === 0 ? "" : "md:order-2"}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">{section.eyebrow}</p>
                  <h2 className="mt-3 font-display text-4xl leading-tight text-forest md:text-5xl">{section.title}</h2>
                </div>
                <div>
                  <p className="text-lg leading-8 text-ink/72">{section.body}</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {section.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 bg-cream p-4 text-forest">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        <span className="font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            <article className="grid gap-8 bg-forest p-7 text-white md:p-10 lg:grid-cols-[.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Signature Detail</p>
                <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">{page.feature.title}</h2>
                <p className="mt-5 leading-8 text-white/70">{page.feature.body}</p>
              </div>
              <div className="grid content-start gap-3">
                {page.feature.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 border border-white/12 bg-white/7 p-4">
                    <Star className="h-4 w-4 fill-gold text-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <div id={page.slug === "boarding" ? "boarding-inquiry" : undefined}>
              <SpecializedPanel page={page} />
            </div>

            {page.layout === "proof" ? (
              <div className="grid gap-5 md:grid-cols-3">
                {testimonials.map((item) => (
                  <article key={item.name} className="bg-cream p-6">
                    <Quote className="h-7 w-7 text-gold" />
                    <p className="mt-5 leading-7 text-ink/72">{item.quote}</p>
                    <p className="mt-6 font-semibold text-forest">{item.name}</p>
                    <p className="text-sm text-ink/50">{item.type}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-forest">Related Paths</p>
              <h2 className="font-display text-4xl leading-tight text-forest md:text-6xl">Continue Through NTEC</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink/68">
              Each page has a distinct purpose, but the visitor journey should feel connected: learn the story, compare services, then book the right next step.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {siblingPages.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="focus-ring group bg-white p-6 shadow-estate transition hover:-translate-y-1">
                <Compass className="h-7 w-7 text-gold" />
                <p className="mt-8 font-display text-3xl text-forest">{item.title}</p>
                <p className="mt-4 line-clamp-3 leading-7 text-ink/65">{item.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-forest group-hover:text-gold">
                  View Page <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-forest py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Next Step</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">{page.cta.title}</h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/68">{page.cta.body}</p>
          </div>
          <Link href={page.cta.href} className="focus-ring inline-flex items-center justify-center gap-3 bg-gold px-7 py-4 font-semibold uppercase tracking-[0.12em] text-forest shadow-gold transition hover:bg-white">
            <FileText className="h-4 w-4" />
            {page.cta.label}
          </Link>
        </div>
      </section>

      <Link href="/book" className="focus-ring fixed bottom-5 right-5 z-40 hidden items-center gap-3 bg-gold px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-forest shadow-gold transition hover:bg-white md:inline-flex">
        Book a Lesson
        <ArrowRight className="h-4 w-4" />
      </Link>

      <FullSiteFooter />
    </main>
  );
}
