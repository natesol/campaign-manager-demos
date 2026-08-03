import type { ComponentType, SVGProps } from "react";

import type { Metadata } from "next";
import Image from "next/image";

import { IconBrandFacebook, IconBrandWhatsapp } from "@tabler/icons-react";
import {
    ArrowLeft,
    ChartPie,
    ClipboardCheck,
    House,
    Landmark,
    type LucideIcon,
    Mail,
    Phone,
    RefreshCw,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import heroArchitecture from "./_assets/mortgage-counseling_asset-01_hero-architecture_v2.png";
import servicesConsultation from "./_assets/mortgage-counseling_asset-02_services-consultation_v1.png";
import processConsultation from "./_assets/mortgage-counseling_asset-03_process-consultation_v1.png";
import companyPositionArchitecture from "./_assets/mortgage-counseling_asset-04_company-position-architecture_v1.png";
import teamYael from "./_assets/mortgage-counseling_asset-05_team-yael-raz_v1.png";
import teamItai from "./_assets/mortgage-counseling_asset-06_team-itai-shalev_v1.png";
import teamMichal from "./_assets/mortgage-counseling_asset-07_team-michal-barak_v1.png";
import teamOmer from "./_assets/mortgage-counseling_asset-08_team-omer-levi_v1.png";
import { BrandMark } from "./_components/BrandMark";
import { ContactForm } from "./_components/ContactForm";
import { SiteHeader } from "./_components/SiteHeader";
import { type ContactIconName, mortgageContent, type ServiceIconName } from "./content";
import "./mortgage.css";

export const metadata: Metadata = {
    title: "עיקר משכנתאות | לא בערך",
    description: mortgageContent.footer.line,
};

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
    house: House,
    clipboard: ClipboardCheck,
    chart: ChartPie,
    bank: Landmark,
    refresh: RefreshCw,
};

/* Two icon sets, because lucide dropped its brand marks: the generic glyphs stay
   lucide, the brands come from tabler. Typed by what both render into. */
const contactIcons: Record<ContactIconName, ComponentType<SVGProps<SVGSVGElement>>> = {
    phone: Phone,
    whatsapp: IconBrandWhatsapp,
    email: Mail,
    facebook: IconBrandFacebook,
};

const supportingTeamImages = [teamItai, teamMichal, teamOmer] as const;

const sectionWrap = "pt-20 lg:pt-28";
const sectionShell = "mortgage-container";
const sectionEyebrow = "font-semibold text-campaign-mortgage-accent text-base";
const sectionTitle = "font-display text-2xl font-bold tracking-tight lg:text-3xl";
const sectionCopy = "max-w-2xl text-base text-muted-foreground";

function AccentLastWord({ text }: { text: string }) {
    const breakAt = text.lastIndexOf(" ");

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
                "group relative min-w-0 overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-campaign-mortgage-accent/35 hover:shadow-foreground/5 hover:shadow-lg motion-reduce:transform-none",
                service.featured
                    ? "mortgage-service-featured flex bg-primary text-primary-foreground hover:border-campaign-mortgage-accent-on-dark/35 md:col-span-2"
                    : "flex min-h-56 flex-col p-6",
            )}
        >
            {service.featured ? (
                <div
                    className="mortgage-service-media relative min-h-56 overflow-hidden"
                    aria-hidden
                >
                    <Image
                        src={servicesConsultation}
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
                <div className="px-1 pt-3 md:px-3">
                    <section
                        className="mortgage-panel relative flex items-center overflow-hidden rounded-3xl bg-primary pt-40 pb-16 text-primary-foreground md:rounded-4xl md:py-48 lg:rounded-[3.5rem]"
                        id="hero"
                        aria-labelledby="mortgage-hero-title"
                    >
                        <div className="mortgage-hero-media absolute inset-0">
                            <div className="mortgage-hero-pull absolute inset-x-0">
                                <Image
                                    src={heroArchitecture}
                                    alt="בית מודרני מואר בשעת ערב"
                                    fill
                                    priority
                                    sizes="100vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="mortgage-container-bleed relative z-10">
                            <div className="w-full md:max-w-lg lg:max-w-xl">
                                <h1
                                    className="font-bold font-display text-3xl tracking-tight md:text-4xl lg:text-5xl"
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
                                <p className="mt-5 max-w-80 text-base text-primary-foreground/80 md:mt-7">
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
                            "flex flex-col items-center gap-5 md:flex-row md:gap-8",
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
                        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-24">
                            <div>
                                <p className={sectionEyebrow}>{services.label}</p>
                                <h2 className={sectionTitle} id="services-title">
                                    <AccentLastWord text={services.heading} />
                                </h2>
                            </div>
                            <p className={sectionCopy}>{services.introduction}</p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {services.items.map((service) => (
                                <ServiceCard key={service.title} service={service} />
                            ))}
                        </div>
                    </section>
                </div>

                <div className={sectionWrap}>
                    <section className={sectionShell} id="process" aria-labelledby="process-title">
                        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-24">
                            <div>
                                <p className={sectionEyebrow}>{process.label}</p>
                                <h2 className={sectionTitle} id="process-title">
                                    {process.heading}
                                </h2>
                            </div>
                            <p className={sectionCopy}>{process.introduction}</p>
                        </div>

                        <div className="mt-12 grid items-center gap-10 lg:grid-cols-5 lg:gap-20">
                            <ol className="m-0 list-none p-0 lg:col-span-2">
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
                            <div className="relative min-h-72 overflow-hidden rounded-3xl bg-muted lg:col-span-3 lg:min-h-96">
                                <Image
                                    src={processConsultation}
                                    alt="יועץ משכנתאות בפגישה עם זוג"
                                    fill
                                    sizes="(max-width: 80rem) 100vw, 58vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="px-1 pt-20 md:px-3 lg:pt-28">
                    <section
                        className="mortgage-panel relative flex items-center overflow-hidden rounded-3xl bg-primary py-10 text-primary-foreground lg:min-h-[34rem] lg:rounded-[3rem] lg:py-20"
                        aria-labelledby="position-title"
                    >
                        <Image
                            src={companyPositionArchitecture}
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
                        <div className="mortgage-container-bleed relative z-30 grid gap-10 lg:grid-cols-2 lg:gap-24">
                            <div>
                                <p className="font-semibold text-base text-campaign-mortgage-accent-on-dark">
                                    {position.label}
                                </p>
                                <h2
                                    className="max-w-xl font-bold font-display text-2xl leading-tight tracking-tight lg:text-5xl"
                                    id="position-title"
                                >
                                    {position.heading}
                                </h2>
                                <p className="mt-5 max-w-2xl text-base text-primary-foreground/75">
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
                        <div className="max-w-2xl text-start">
                            <p className={sectionEyebrow}>{team.label}</p>
                            <h2 className={sectionTitle} id="team-title">
                                {team.heading}
                            </h2>
                            <p className="mt-4 text-base text-muted-foreground">
                                {team.introduction}
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-[minmax(31.5rem,1.76fr)_minmax(0,1.55fr)]">
                            {/* One card over the two tracks the portrait and the text used to
                                hold separately: 1.1fr and .66fr of the old three, so the
                                proportions and the group beside it stay put. */}
                            <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-campaign-mortgage-accent/35 hover:shadow-foreground/5 hover:shadow-lg motion-reduce:transform-none md:col-span-2 md:flex-row lg:col-span-1">
                                <div className="relative min-h-80 bg-muted md:w-[62.5%] md:shrink-0 lg:min-h-112">
                                    <Image
                                        src={teamYael}
                                        alt={`דיוקן של ${team.featured.name}`}
                                        fill
                                        sizes="(max-width: 48rem) 100vw, (max-width: 80rem) 50vw, 30vw"
                                        className="object-cover object-top"
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
                            <div className="grid gap-4 md:col-span-2 md:grid-cols-3 lg:col-span-1">
                                {team.people.map((person, index) => (
                                    <article
                                        className="group overflow-hidden rounded-2xl border border-border bg-card transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-campaign-mortgage-accent/35 hover:shadow-foreground/5 hover:shadow-lg motion-reduce:transform-none"
                                        key={person.name}
                                    >
                                        <div className="relative min-h-72 bg-muted lg:min-h-64">
                                            <Image
                                                src={supportingTeamImages[index]}
                                                alt={`דיוקן של ${person.name}`}
                                                fill
                                                sizes="(max-width: 48rem) 100vw, (max-width: 80rem) 30vw, 14vw"
                                                className="object-cover object-top"
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
                            "grid items-start gap-12 lg:grid-cols-[.9fr_1fr] lg:gap-24",
                        )}
                        id="contact"
                        aria-labelledby="contact-title"
                    >
                        <div>
                            <p className={sectionEyebrow}>{contact.label}</p>
                            <h2 className={sectionTitle} id="contact-title">
                                {contact.heading}
                            </h2>
                            <p className="mt-5 max-w-2xl text-base text-muted-foreground">
                                {contact.support}
                            </p>

                            <div className="mt-8">
                                {contact.methods.map((method) => {
                                    const Icon = contactIcons[method.icon];
                                    const isExternal = method.href.startsWith("http");

                                    return (
                                        <a
                                            className="group flex min-h-20 items-center gap-5 rounded-sm border-border border-b border-dashed transition-colors last:border-b-0 hover:text-campaign-mortgage-accent focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                                            href={method.href}
                                            key={method.label}
                                            target={isExternal ? "_blank" : undefined}
                                            rel={isExternal ? "noreferrer" : undefined}
                                        >
                                            <span className="grid size-14 shrink-0 place-items-center rounded-full bg-accent text-campaign-mortgage-accent transition-colors group-hover:bg-campaign-mortgage-accent group-hover:text-white">
                                                <Icon
                                                    aria-hidden
                                                    className="size-6"
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

            <footer className="mt-16 flex min-h-[32rem] flex-col bg-muted py-14 lg:mt-24 lg:pt-20">
                <div
                    className={cn(
                        sectionShell,
                        "grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_.78fr_1fr_1fr] lg:gap-20",
                    )}
                >
                    <div>
                        <a
                            className="flex items-center gap-3 rounded-sm font-bold font-display text-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                            href="#top"
                            aria-label={`${company}, דף הבית`}
                        >
                            <BrandMark compact />
                            <span>{company}</span>
                        </a>
                        <p className="mt-4 max-w-sm text-muted-foreground text-sm">{footer.line}</p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-4 font-semibold text-base text-campaign-mortgage-accent">
                            {footer.navigation.title}
                            <span aria-hidden className="h-px w-8 bg-current" />
                        </h2>
                        <ul className="mt-5 space-y-3 text-sm">
                            {footer.navigation.links.map((item) => (
                                <li key={item.label}>
                                    {item.href ? (
                                        <a className="hover:text-primary" href={item.href}>
                                            {item.label}
                                        </a>
                                    ) : (
                                        <span className="text-muted-foreground">{item.label}</span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-4 font-semibold text-base text-campaign-mortgage-accent">
                            {footer.services.title}
                            <span aria-hidden className="h-px w-8 bg-current" />
                        </h2>
                        <ul className="mt-5 space-y-3 text-muted-foreground text-sm">
                            {footer.services.links.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-4 font-semibold text-base text-campaign-mortgage-accent">
                            {footer.contact.title}
                            <span aria-hidden className="h-px w-8 bg-current" />
                        </h2>
                        <ul className="mt-5 space-y-4 text-muted-foreground text-sm">
                            {footer.contact.links.map((item) => {
                                const Icon = contactIcons[item.icon];

                                return (
                                    <li className="flex items-center gap-3" key={item.label}>
                                        <Icon
                                            aria-hidden
                                            className="size-4 text-campaign-mortgage-accent"
                                            strokeWidth={1.8}
                                        />
                                        <span dir="ltr">{item.label}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>

                <div
                    className={cn(
                        sectionShell,
                        "mt-auto flex flex-col gap-6 border-border border-t pt-8 text-muted-foreground text-sm md:flex-row md:items-center md:justify-between",
                    )}
                >
                    <p>{footer.copyright}</p>
                    <ul className="flex flex-wrap">
                        {footer.legal.map((item) => (
                            <li
                                className="border-border border-s px-4 first:border-0 first:ps-0"
                                key={item}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
        </div>
    );
}
