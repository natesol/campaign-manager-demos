import type { Metadata } from "next";
import Image from "next/image";

import {
    ArrowLeft,
    ChartPie,
    ClipboardCheck,
    House,
    Landmark,
    type LucideIcon,
    RefreshCw,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { ContactForm } from "./_components/ContactForm";
import { contactIcons } from "./_components/contact-icons";
import { SiteFooter } from "./_components/SiteFooter";
import { SiteHeader } from "./_components/SiteHeader";
import { mortgageContent, type ServiceIconName } from "./content";
import "./mortgage.css";

/* The card image is the opengraph-image.jpg file convention beside this file;
   Next wires it up with its alt from opengraph-image.alt.txt. Twitter reads the
   same image through the card type. */
export const metadata: Metadata = {
    title: `${mortgageContent.company} | ${mortgageContent.tagline}`,
    description: mortgageContent.footer.line,
    openGraph: {
        title: `${mortgageContent.company} | ${mortgageContent.tagline}`,
        description: mortgageContent.footer.line,
        type: "website",
        locale: "he_IL",
    },
    twitter: {
        card: "summary_large_image",
    },
};

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
    house: House,
    clipboard: ClipboardCheck,
    chart: ChartPie,
    bank: Landmark,
    refresh: RefreshCw,
};

const sectionWrap = "pt-28 below-lg:pt-20";
const sectionShell = "mortgage-container";
const sectionEyebrow = "font-semibold text-campaign-mortgage-accent text-base";
const sectionTitle = "font-display text-2xl font-bold tracking-tight lg:text-3xl";
const sectionCopy = "max-w-2xl text-base text-muted-foreground above-md:below-lg:max-w-xl";
/* One card surface for the page: services and team share it, and only what a
   card adds on top lives at its call site. */
const cardShell =
    "group overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-campaign-mortgage-accent/35 hover:shadow-foreground/5 hover:shadow-lg motion-reduce:transform-none";

function AccentLastWord({ text }: { text: string }) {
    const breakAt = text.lastIndexOf(" ");

    if (breakAt === -1) {
        return <span className="text-campaign-mortgage-accent">{text}</span>;
    }

    return (
        <>
            {text.slice(0, breakAt)}{" "}
            <span className="text-campaign-mortgage-accent">{text.slice(breakAt + 1)}</span>
        </>
    );
}

function ArchitecturalLineArt() {
    return (
        <svg
            className="pointer-events-none absolute top-1/2 left-1/2 z-20 w-1/3 translate-x-1/2 -translate-y-1/2 text-primary-foreground opacity-15"
            viewBox="0 0 560 340"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.1"
            aria-hidden="true"
        >
            <path d="M24 196 230 34l206 162v120H24V196Z" />
            <path d="m126 214 166-130 244 192v40H126V214Z" />
        </svg>
    );
}

function ServiceCard({ service }: { service: (typeof mortgageContent.services.items)[number] }) {
    const Icon = serviceIcons[service.icon];

    return (
        <article
            className={cn(
                cardShell,
                "relative min-w-0",
                service.featured
                    ? "mortgage-service-featured below-sm:col-auto col-span-2 flex bg-primary text-primary-foreground hover:border-campaign-mortgage-accent-on-dark/35"
                    : "flex min-h-56 flex-col p-6",
            )}
        >
            {service.featured ? (
                <div
                    className="mortgage-service-media relative min-h-56 overflow-hidden"
                    aria-hidden
                >
                    <Image
                        src={mortgageContent.services.featuredImage}
                        alt=""
                        fill
                        sizes="(max-width: 80rem) 100vw, 58vw"
                        className="object-cover saturate-75"
                    />
                </div>
            ) : null}

            <div
                className={cn(
                    "relative z-10 flex flex-1 flex-col",
                    service.featured && "mortgage-service-content p-7",
                )}
            >
                <div
                    className={cn(
                        "grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground",
                        service.featured && "bg-primary-foreground/10 text-primary-foreground",
                    )}
                >
                    <Icon aria-hidden className="size-6" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg tracking-tight">
                    {service.title}
                </h3>
                <p
                    className={cn(
                        "mt-3 max-w-md text-muted-foreground text-sm",
                        service.featured && "text-primary-foreground/75",
                    )}
                >
                    {service.body}
                </p>
                <span
                    className={cn(
                        "mt-auto flex items-center gap-3 pt-6 font-semibold text-campaign-mortgage-accent text-xs",
                        service.featured && "text-primary-foreground/75",
                    )}
                    aria-disabled="true"
                >
                    <span aria-hidden className="h-px w-7 bg-current" />
                    <span>{mortgageContent.services.detailLabel}</span>
                    <span
                        className={cn(
                            "rounded-full bg-muted px-2 py-0.5 text-subtle-foreground text-xs",
                            service.featured &&
                                "bg-primary-foreground/10 text-primary-foreground/65",
                        )}
                    >
                        {mortgageContent.services.detailStatus}
                    </span>
                </span>
            </div>
        </article>
    );
}

export default function MortgageRoute() {
    const { company, hero, introduction, services, process, position, team, contact, footer } =
        mortgageContent;

    return (
        <div
            className="relative flex flex-1 flex-col overflow-x-clip bg-background text-foreground"
            data-campaign="mortgage"
            id="top"
        >
            <SiteHeader company={company} items={mortgageContent.navigation} />

            <main>
                <div className="below-md:px-1 px-3 pt-3">
                    <section
                        className="mortgage-panel relative flex items-center overflow-hidden below-lg:rounded-[2.8rem] below-md:rounded-3xl rounded-[3.5rem] bg-primary py-48 below-md:pt-40 below-md:pb-16 text-primary-foreground"
                        id="hero"
                        aria-labelledby="mortgage-hero-title"
                    >
                        <div className="mortgage-hero-media absolute inset-0">
                            <div className="mortgage-hero-pull absolute inset-x-0">
                                <Image
                                    src={hero.image}
                                    alt={hero.imageAlt}
                                    fill
                                    priority
                                    sizes="100vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="mortgage-container-bleed relative z-10">
                            <div className="w-full below-lg:max-w-lg below-md:max-w-none max-w-xl">
                                <h1
                                    className="font-bold font-display below-lg:text-4xl below-md:text-3xl text-5xl tracking-tight"
                                    id="mortgage-hero-title"
                                >
                                    {hero.headline.map((line, index) => (
                                        <span
                                            className={cn(
                                                "block",
                                                index === hero.headline.length - 1 &&
                                                    "text-campaign-mortgage-accent-on-dark",
                                            )}
                                            key={line}
                                        >
                                            {line}
                                        </span>
                                    ))}
                                </h1>
                                <p className="below-md:mt-5 mt-7 max-w-80 text-base text-primary-foreground/80">
                                    {hero.support}
                                </p>
                                <a
                                    className={cn(
                                        buttonVariants({ size: "lg" }),
                                        "mortgage-cta group mt-6 w-auto bg-campaign-mortgage-accent-on-dark text-base text-white transition-[background-color,box-shadow] hover:bg-campaign-mortgage-accent-on-dark/85 hover:shadow-lg",
                                    )}
                                    href="#contact"
                                >
                                    <span>{hero.cta}</span>
                                    <ArrowLeft
                                        aria-hidden
                                        className="size-5 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none"
                                    />
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

                <div className={sectionWrap}>
                    <section
                        className={cn(
                            sectionShell,
                            "flex below-md:flex-col items-center below-md:gap-5 gap-8",
                        )}
                        id="about"
                        aria-label={introduction.label}
                    >
                        <p className="flex shrink-0 flex-col items-center justify-center gap-2 rounded-2xl bg-accent p-4 text-center font-semibold text-accent-foreground text-base">
                            {introduction.label}
                            <span aria-hidden className="h-px w-8 bg-campaign-mortgage-accent/70" />
                        </p>
                        <p className="text-justify text-lg text-muted-foreground leading-relaxed tracking-tight md:text-xl">
                            <strong className="font-bold text-foreground">
                                {introduction.opening}
                            </strong>{" "}
                            {introduction.continuation} {introduction.closing}
                        </p>
                    </section>
                </div>

                <div className={sectionWrap}>
                    <section
                        className={sectionShell}
                        id="services"
                        aria-labelledby="services-title"
                    >
                        <div className="grid below-lg:grid-cols-none grid-cols-2 items-end below-lg:gap-6 gap-24">
                            <div>
                                <p className={sectionEyebrow}>{services.label}</p>
                                <h2 className={sectionTitle} id="services-title">
                                    <AccentLastWord text={services.heading} />
                                </h2>
                            </div>
                            <p className={sectionCopy}>{services.introduction}</p>
                        </div>

                        <div className="mt-10 grid below-lg:grid-cols-2 below-sm:grid-cols-none grid-cols-3 gap-5">
                            {services.items.map((service) => (
                                <ServiceCard key={service.title} service={service} />
                            ))}
                        </div>
                    </section>
                </div>

                <div className={sectionWrap}>
                    <section className={sectionShell} id="process" aria-labelledby="process-title">
                        <div className="grid below-lg:grid-cols-none grid-cols-2 items-start below-lg:gap-6 gap-24">
                            <div>
                                <p className={sectionEyebrow}>{process.label}</p>
                                <h2 className={sectionTitle} id="process-title">
                                    {process.heading}
                                </h2>
                            </div>
                            <p className={sectionCopy}>{process.introduction}</p>
                        </div>

                        <div className="mt-12 grid below-lg:grid-cols-none grid-cols-5 items-center below-lg:gap-10 gap-20">
                            <ol className="below-lg:col-auto col-span-2 m-0 list-none p-0">
                                {process.steps.map((step, index) => (
                                    <li
                                        className="flex items-baseline gap-5 border-border border-b py-6 last:border-b-0"
                                        key={step.title}
                                    >
                                        <span className="w-12 shrink-0 font-display font-semibold text-base text-campaign-mortgage-accent">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <h3 className="m-0 font-display font-semibold text-lg tracking-tight">
                                                {step.title}
                                            </h3>
                                            <p className="mt-2 text-muted-foreground text-sm">
                                                {step.body}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                            <div className="relative below-lg:col-auto col-span-3 below-lg:min-h-72 min-h-96 overflow-hidden rounded-3xl bg-muted">
                                <Image
                                    src={process.image}
                                    alt={process.imageAlt}
                                    fill
                                    sizes="(max-width: 80rem) 100vw, 58vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="below-md:px-1 px-3 below-lg:pt-20 pt-28">
                    <section
                        className="mortgage-panel relative flex below-lg:min-h-0 min-h-[34rem] items-center overflow-hidden below-lg:rounded-3xl rounded-[3rem] bg-primary below-lg:py-10 py-20 text-primary-foreground"
                        aria-labelledby="position-title"
                    >
                        <Image
                            src={position.image}
                            alt=""
                            fill
                            sizes="100vw"
                            className="object-cover saturate-75"
                        />
                        <span
                            className="mortgage-position-overlay absolute inset-0 z-10"
                            aria-hidden
                        />
                        <ArchitecturalLineArt />
                        <div className="mortgage-container-bleed relative z-30 grid below-lg:grid-cols-none grid-cols-2 below-lg:gap-10 gap-24">
                            <div>
                                <p className="font-semibold text-base text-campaign-mortgage-accent-on-dark">
                                    {position.label}
                                </p>
                                <h2
                                    className="max-w-xl font-bold font-display below-lg:text-2xl text-5xl leading-tight tracking-tight"
                                    id="position-title"
                                >
                                    {position.heading}
                                </h2>
                                <p className="mt-5 above-md:below-lg:max-w-xl max-w-2xl text-base text-primary-foreground/75">
                                    {position.support}
                                </p>
                            </div>
                            <ol className="m-0 list-none p-0">
                                {position.principles.map((principle, index) => (
                                    <li
                                        className="flex items-baseline gap-5 border-primary-foreground/25 border-b py-6 last:border-b-0"
                                        key={principle.title}
                                    >
                                        <span className="w-12 shrink-0 font-display font-semibold text-base text-campaign-mortgage-accent-on-dark">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <div>
                                            <h3 className="font-display font-semibold text-lg tracking-tight">
                                                {principle.title}
                                            </h3>
                                            <p className="mt-2 text-primary-foreground/70 text-sm">
                                                {principle.body}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>
                </div>

                <div className={sectionWrap}>
                    <section className={sectionShell} id="team" aria-labelledby="team-title">
                        <div className="above-md:below-lg:max-w-xl max-w-2xl text-start">
                            <p className={sectionEyebrow}>{team.label}</p>
                            <h2 className={sectionTitle} id="team-title">
                                {team.heading}
                            </h2>
                            <p className="mt-4 text-base text-muted-foreground">
                                {team.introduction}
                            </p>
                        </div>

                        <div className="mt-12 grid below-lg:grid-cols-2 below-md:grid-cols-none grid-cols-[minmax(31.5rem,1.76fr)_minmax(0,1.55fr)] gap-6">
                            {/* One card over the two tracks the portrait and the text used to
                                hold separately: 1.1fr and .66fr of the old three, so the
                                proportions and the group beside it stay put. */}
                            <article
                                className={cn(
                                    cardShell,
                                    "below-lg:col-span-2 below-md:col-auto flex below-md:flex-col",
                                )}
                            >
                                <div className="relative below-md:min-h-72 min-h-80 below-lg:w-[62.5%] below-md:w-auto w-2/5 below-md:shrink shrink-0 bg-muted">
                                    <Image
                                        src={team.featured.image}
                                        alt={`דיוקן של ${team.featured.name}`}
                                        fill
                                        sizes="(max-width: 48rem) 100vw, (max-width: 80rem) 50vw, 30vw"
                                        className="object-cover above-sm:below-md:object-[50%_36%] object-[50%_34%]"
                                    />
                                </div>
                                <div className="flex flex-col justify-center p-5 text-start">
                                    <h3 className="font-display font-semibold text-xl">
                                        {team.featured.name}
                                    </h3>
                                    <p className="mt-2 font-semibold text-campaign-mortgage-accent text-sm">
                                        {team.featured.role}
                                    </p>
                                    <span
                                        className="my-6 h-px w-12 bg-campaign-mortgage-accent"
                                        aria-hidden
                                    />
                                    <p className="text-muted-foreground text-sm">
                                        {team.featured.bio}
                                    </p>
                                </div>
                            </article>
                            <div className="below-lg:col-span-2 below-md:col-auto grid below-lg:grid-cols-3 below-md:grid-cols-2 below-sm:grid-cols-none grid-cols-2 gap-4">
                                {team.people.map((person) => (
                                    <article className={cardShell} key={person.name}>
                                        <div className="relative below-lg:min-h-40 below-md:min-h-42 below-sm:min-h-52 min-h-36 overflow-hidden bg-muted">
                                            <Image
                                                src={person.image}
                                                alt={`דיוקן של ${person.name}`}
                                                fill
                                                sizes="(max-width: 48rem) 100vw, (max-width: 80rem) 30vw, 14vw"
                                                className="below-lg:scale-105 below-md:scale-none scale-110 object-cover below-sm:object-[50%_38%] object-[50%_25%]"
                                            />
                                        </div>
                                        <div className="min-h-40 p-5">
                                            <h3 className="font-display font-semibold text-base">
                                                {person.name}
                                            </h3>
                                            <p className="mt-2 font-semibold text-campaign-mortgage-accent text-sm">
                                                {person.role}
                                            </p>
                                            <p className="mt-4 text-muted-foreground text-xs">
                                                {person.bio}
                                            </p>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <div className={sectionWrap}>
                    <section
                        className={cn(
                            sectionShell,
                            "grid below-lg:grid-cols-none grid-cols-[.9fr_1fr] items-start below-lg:gap-12 gap-24",
                        )}
                        id="contact"
                        aria-labelledby="contact-title"
                    >
                        <div>
                            <p className={sectionEyebrow}>{contact.label}</p>
                            <h2 className={sectionTitle} id="contact-title">
                                {contact.heading}
                            </h2>
                            <p className="mt-5 above-md:below-lg:max-w-xl max-w-2xl text-base text-muted-foreground">
                                {contact.support}
                            </p>

                            <div className="mt-8 below-sm:block below-lg:flex below-lg:flex-wrap below-lg:items-center">
                                {contact.methods.map((method) => {
                                    const Icon = contactIcons[method.icon];
                                    const isExternal = method.href.startsWith("http");

                                    return (
                                        <a
                                            className="group flex min-h-20 items-center gap-5 rounded-sm border-border below-lg:border-e below-sm:border-e-0 below-sm:border-b border-b below-lg:border-b-0 border-dashed below-lg:px-8 below-md:px-5 below-sm:px-0 transition-colors below-lg:first:ps-0 below-lg:last:border-e-0 below-sm:last:border-b-0 last:border-b-0 below-lg:last:pe-0 hover:text-campaign-mortgage-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                                            href={method.href}
                                            key={method.label}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noreferrer" : undefined}
                                        >
                                            <span className="grid above-sm:below-md:size-11 size-14 shrink-0 place-items-center rounded-full bg-accent text-campaign-mortgage-accent transition-colors group-hover:bg-campaign-mortgage-accent group-hover:text-white">
                                                <Icon
                                                    aria-hidden
                                                    className="above-sm:below-md:size-5 size-6"
                                                    strokeWidth={1.8}
                                                />
                                            </span>
                                            <strong
                                                className="font-semibold text-base"
                                                dir={method.ltr ? "ltr" : undefined}
                                            >
                                                {method.label}
                                            </strong>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <ContactForm form={contact.form} />
                    </section>
                </div>
            </main>

            <SiteFooter company={company} footer={footer} />
        </div>
    );
}
