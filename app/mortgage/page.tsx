import type { Metadata } from "next";
import Image from "next/image";

import {
    ArrowLeft,
    ChartPie,
    ClipboardCheck,
    House,
    Landmark,
    type LucideIcon,
    Mail,
    MessageCircle,
    Phone,
    RefreshCw,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import heroArchitecture from "./_assets/mortgage-counseling_asset-01_hero-architecture_v1.png";
import servicesConsultation from "./_assets/mortgage-counseling_asset-02_services-consultation_v1.png";
import processConsultation from "./_assets/mortgage-counseling_asset-03_process-consultation_v1.png";
import companyPositionArchitecture from "./_assets/mortgage-counseling_asset-04_company-position-architecture_v1.png";
import teamYael from "./_assets/mortgage-counseling_asset-05_team-yael-raz_v1.png";
import teamItai from "./_assets/mortgage-counseling_asset-06_team-itai-shalev_v1.png";
import teamMichal from "./_assets/mortgage-counseling_asset-07_team-michal-barak_v1.png";
import teamOmer from "./_assets/mortgage-counseling_asset-08_team-omer-levi_v1.png";
import { BrandMark } from "./_components/BrandMark";
import { ContactForm } from "./_components/ContactForm";
import { MobileNavigation } from "./_components/MobileNavigation";
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

const contactIcons: Record<ContactIconName, LucideIcon> = {
    phone: Phone,
    message: MessageCircle,
    email: Mail,
};

const supportingTeamImages = [teamItai, teamMichal, teamOmer] as const;

const sectionWrap = "px-5 pt-20 sm:px-8 lg:px-12 lg:pt-28";
const sectionShell = "mx-auto w-full max-w-[91rem]";
const sectionTitle = "font-display text-3xl font-[780] tracking-[-0.065em] lg:text-4xl";
const sectionCopy = "max-w-2xl text-lg text-muted-foreground";

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
                "group relative min-w-0 overflow-hidden rounded-3xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-campaign-mortgage-accent/35 hover:shadow-foreground/5 hover:shadow-xl motion-reduce:transform-none",
                service.featured
                    ? "mortgage-service-featured flex bg-primary text-primary-foreground md:col-span-2"
                    : "flex min-h-64 flex-col p-7",
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
                        "grid size-14 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground",
                        service.featured && "bg-primary-foreground/10 text-primary-foreground",
                    )}
                >
                    <Icon aria-hidden className="size-7" strokeWidth={1.8} />
                </div>
                <h3 className="mt-7 font-display font-semibold text-xl tracking-tight">
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
        >
            <header className="absolute inset-x-6 top-6 z-50 mx-auto flex h-[5rem] max-w-screen-2xl items-center justify-between rounded-full bg-background px-4 shadow-foreground/10 shadow-xl sm:inset-x-8 sm:px-6 lg:top-11 lg:px-10">
                <a
                    className="flex items-center gap-3 rounded-sm font-[750] font-display text-xl tracking-tight focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                    href="#top"
                    aria-label={`${company}, דף הבית`}
                >
                    <BrandMark />
                    <span>{company}</span>
                </a>

                <nav
                    className="hidden items-center gap-8 font-medium text-sm md:flex lg:gap-14"
                    aria-label="ניווט ראשי"
                >
                    {mortgageContent.navigation.map((item) => (
                        <a
                            className="relative rounded-sm py-3 transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:bg-campaign-mortgage-accent after:transition-transform hover:text-campaign-mortgage-accent hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40 focus-visible:after:scale-x-100"
                            key={item.href}
                            href={item.href}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <MobileNavigation items={mortgageContent.navigation} />
            </header>

            <main>
                <div className="px-3 pt-3 md:px-4 md:pt-4">
                    <section
                        className="relative mx-auto flex h-svh max-h-[46rem] min-h-[40rem] w-full max-w-[109rem] items-end overflow-hidden rounded-4xl bg-primary px-7 pt-28 pb-8 text-primary-foreground md:max-h-[51rem] md:items-center md:rounded-[3rem] md:px-16 md:pb-8 xl:max-h-[60rem] xl:rounded-[4.25rem] xl:px-24"
                        id="top"
                        aria-labelledby="mortgage-hero-title"
                    >
                        <div className="mortgage-hero-media absolute inset-y-0 end-0 w-full opacity-35 md:w-2/3 md:opacity-100 xl:w-[70%]">
                            <Image
                                src={heroArchitecture}
                                alt="בית מודרני מואר בשעת ערב"
                                fill
                                priority
                                sizes="(max-width: 48rem) 100vw, 70vw"
                                className="object-cover brightness-75 saturate-100"
                            />
                        </div>

                        <div className="relative z-10 w-full md:max-w-lg xl:max-w-xl">
                            <h1
                                className="font-[750] font-display text-4xl tracking-[-0.075em] md:text-5xl xl:text-6xl"
                                id="mortgage-hero-title"
                            >
                                {hero.headline.map((line, index) => (
                                    <span
                                        className={cn(
                                            "block",
                                            index === hero.headline.length - 1 &&
                                                "text-campaign-mortgage-accent",
                                        )}
                                        key={line}
                                    >
                                        {line}
                                    </span>
                                ))}
                            </h1>
                            <p className="mt-6 max-w-md text-lg text-primary-foreground/80 md:mt-8">
                                {hero.support}
                            </p>
                            <a
                                className={cn(
                                    buttonVariants({ size: "lg" }),
                                    "group mt-7 h-16 w-full max-w-sm gap-8 rounded-full bg-campaign-mortgage-accent px-7 text-base text-white transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-campaign-mortgage-accent/85 hover:shadow-lg motion-reduce:transform-none",
                                )}
                                href="#contact"
                            >
                                <span>{hero.cta}</span>
                                <ArrowLeft
                                    aria-hidden
                                    className="size-6 transition-transform group-hover:-translate-x-1 motion-reduce:transform-none"
                                />
                            </a>
                        </div>
                    </section>
                </div>

                <div className={sectionWrap}>
                    <section
                        className={cn(
                            sectionShell,
                            "grid items-center gap-8 md:grid-cols-[11rem_minmax(0,1fr)] lg:gap-14",
                        )}
                        id="about"
                        aria-label={introduction.label}
                    >
                        <p className="flex min-h-28 w-36 flex-col items-center justify-center gap-2 rounded-3xl bg-accent p-5 text-center font-bold text-accent-foreground text-lg md:w-auto">
                            {introduction.label}
                            <span aria-hidden className="h-px w-8 bg-campaign-mortgage-accent/70" />
                        </p>
                        <p className="text-muted-foreground text-xl leading-relaxed tracking-tight sm:text-2xl lg:text-3xl">
                            <strong className="font-bold text-foreground">
                                {introduction.opening}
                            </strong>{" "}
                            {introduction.continuation}
                        </p>
                    </section>
                </div>

                <div className={sectionWrap}>
                    <section
                        className={sectionShell}
                        id="services"
                        aria-labelledby="services-title"
                    >
                        <div className="grid items-end gap-6 xl:grid-cols-2 xl:gap-24">
                            <h2 className={sectionTitle} id="services-title">
                                <AccentLastWord text={services.heading} />
                            </h2>
                            <p className={sectionCopy}>{services.introduction}</p>
                        </div>

                        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {services.items.map((service) => (
                                <ServiceCard key={service.title} service={service} />
                            ))}
                        </div>
                    </section>
                </div>

                <div className={sectionWrap}>
                    <section className={sectionShell} id="process" aria-labelledby="process-title">
                        <div className="grid items-start gap-6 xl:grid-cols-2 xl:gap-24">
                            <div>
                                <p className="mb-4 font-bold text-campaign-mortgage-accent text-sm">
                                    {process.label}
                                </p>
                                <h2 className={sectionTitle} id="process-title">
                                    {process.heading}
                                </h2>
                            </div>
                            <p className={sectionCopy}>{process.introduction}</p>
                        </div>

                        <div className="mt-12 grid items-center gap-10 xl:grid-cols-5 xl:gap-20">
                            <ol className="m-0 list-none p-0 xl:col-span-2">
                                {process.steps.map((step, index) => (
                                    <li
                                        className="flex min-h-28 items-center gap-5 border-border border-b last:border-b-0"
                                        key={step}
                                    >
                                        <span className="w-14 shrink-0 font-display font-semibold text-campaign-mortgage-accent text-lg">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className="m-0 font-display font-semibold text-xl tracking-tight">
                                            {step}
                                        </h3>
                                    </li>
                                ))}
                            </ol>
                            <div className="relative min-h-80 overflow-hidden rounded-4xl bg-muted xl:col-span-3 xl:min-h-112">
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

                <div className="px-3 pt-20 lg:pt-28">
                    <section
                        className="relative mx-auto grid max-w-[109rem] gap-10 overflow-hidden rounded-4xl bg-primary p-7 text-primary-foreground sm:p-12 xl:min-h-[38rem] xl:grid-cols-2 xl:gap-24 xl:rounded-[3.5rem] xl:p-24"
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
                        <div className="relative z-30">
                            <p className="mb-4 font-bold text-campaign-mortgage-accent text-sm">
                                {position.label}
                            </p>
                            <h2
                                className="max-w-xl font-[780] font-display text-3xl leading-[1.12] tracking-tight xl:text-[4.25rem]"
                                id="position-title"
                            >
                                {position.heading}
                            </h2>
                            <p className="mt-7 max-w-2xl text-lg text-primary-foreground/75">
                                {position.support}
                            </p>
                        </div>
                        <ol className="relative z-30 m-0 list-none p-0">
                            {position.principles.map((principle, index) => (
                                <li
                                    className="flex min-h-28 items-center gap-5 border-primary-foreground/25 border-b last:border-b-0"
                                    key={principle}
                                >
                                    <span className="w-14 shrink-0 font-display font-semibold text-campaign-mortgage-accent text-lg">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3 className="font-display font-semibold text-xl tracking-tight">
                                        {principle}
                                    </h3>
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>

                <div className={sectionWrap}>
                    <section className={sectionShell} id="team" aria-labelledby="team-title">
                        <div className="mx-auto max-w-3xl text-center">
                            <h2 className={sectionTitle} id="team-title">
                                {team.heading}
                            </h2>
                            <p className="mt-5 text-lg text-muted-foreground">
                                {team.introduction}
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-[minmax(16rem,1.1fr)_minmax(14rem,.66fr)_minmax(0,1.55fr)]">
                            <div className="relative min-h-96 overflow-hidden rounded-3xl bg-muted xl:min-h-128">
                                <Image
                                    src={teamYael}
                                    alt={`דיוקן של ${team.featured.name}`}
                                    fill
                                    sizes="(max-width: 48rem) 100vw, (max-width: 80rem) 50vw, 30vw"
                                    className="object-cover object-top"
                                />
                            </div>
                            <article className="flex flex-col justify-center p-5 text-center xl:p-2">
                                <h3 className="font-display font-semibold text-2xl">
                                    {team.featured.name}
                                </h3>
                                <p className="mt-2 font-semibold text-base text-campaign-mortgage-accent">
                                    {team.featured.role}
                                </p>
                                <span
                                    className="mx-auto my-7 h-px w-12 bg-campaign-mortgage-accent"
                                    aria-hidden
                                />
                                <p className="text-muted-foreground text-sm">{team.featured.bio}</p>
                            </article>
                            <div className="grid gap-4 md:col-span-2 md:grid-cols-3 xl:col-span-1">
                                {team.people.map((person, index) => (
                                    <article
                                        className="group overflow-hidden rounded-3xl border border-border bg-card transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-campaign-mortgage-accent/35 hover:shadow-foreground/5 hover:shadow-xl motion-reduce:transform-none"
                                        key={person.name}
                                    >
                                        <div className="relative min-h-80 bg-muted xl:min-h-72">
                                            <Image
                                                src={supportingTeamImages[index]}
                                                alt={`דיוקן של ${person.name}`}
                                                fill
                                                sizes="(max-width: 48rem) 100vw, (max-width: 80rem) 30vw, 14vw"
                                                className="object-cover object-top"
                                            />
                                        </div>
                                        <div className="min-h-48 p-5">
                                            <h3 className="font-display font-semibold text-lg">
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
                            "grid items-center gap-12 xl:grid-cols-[.9fr_1fr] xl:gap-24",
                        )}
                        id="contact"
                        aria-labelledby="contact-title"
                    >
                        <div>
                            <p className="mb-4 flex items-center gap-4 font-bold text-campaign-mortgage-accent text-sm">
                                {contact.label}
                                <span aria-hidden className="h-px w-10 bg-current" />
                            </p>
                            <h2 className={sectionTitle} id="contact-title">
                                {contact.heading}
                            </h2>
                            <p className="mt-7 max-w-2xl text-lg text-muted-foreground">
                                {contact.support}
                            </p>

                            <div className="mt-9">
                                {contact.methods.map((method) => {
                                    const Icon = contactIcons[method.icon];

                                    return (
                                        <div
                                            className="flex min-h-24 items-center gap-5 border-border border-b border-dashed last:border-b-0"
                                            key={method.label}
                                        >
                                            <span className="grid size-16 shrink-0 place-items-center rounded-full bg-accent text-campaign-mortgage-accent">
                                                <Icon
                                                    aria-hidden
                                                    className="size-7"
                                                    strokeWidth={1.8}
                                                />
                                            </span>
                                            <strong
                                                className="font-semibold text-lg"
                                                dir={
                                                    method.label === "WhatsApp" ? "ltr" : undefined
                                                }
                                            >
                                                {method.label}
                                            </strong>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <ContactForm form={contact.form} />
                    </section>
                </div>
            </main>

            <footer className="mt-20 flex min-h-[37.5rem] flex-col bg-muted px-5 py-16 sm:px-8 lg:mt-28 lg:px-12 lg:pt-24">
                <div
                    className={cn(
                        sectionShell,
                        "grid gap-10 md:grid-cols-2 xl:grid-cols-[1.35fr_.78fr_1fr_1fr] xl:gap-20",
                    )}
                >
                    <div>
                        <a
                            className="flex items-center gap-3 rounded-sm font-[750] font-display text-2xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/40"
                            href="#top"
                            aria-label={`${company}, דף הבית`}
                        >
                            <BrandMark compact />
                            <span>{company}</span>
                        </a>
                        <p className="mt-5 max-w-sm text-base text-muted-foreground">
                            {footer.line}
                        </p>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-4 font-bold text-campaign-mortgage-accent text-lg">
                            {footer.navigation.title}
                            <span aria-hidden className="h-px w-8 bg-current" />
                        </h2>
                        <ul className="mt-6 space-y-3 text-base">
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
                        <h2 className="flex items-center gap-4 font-bold text-campaign-mortgage-accent text-lg">
                            {footer.services.title}
                            <span aria-hidden className="h-px w-8 bg-current" />
                        </h2>
                        <ul className="mt-6 space-y-3 text-base text-muted-foreground">
                            {footer.services.links.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="flex items-center gap-4 font-bold text-campaign-mortgage-accent text-lg">
                            {footer.contact.title}
                            <span aria-hidden className="h-px w-8 bg-current" />
                        </h2>
                        <ul className="mt-6 space-y-4 text-base text-muted-foreground">
                            {footer.contact.links.map((item) => {
                                const Icon = contactIcons[item.icon];

                                return (
                                    <li className="flex items-center gap-3" key={item.label}>
                                        <Icon
                                            aria-hidden
                                            className="size-5 text-campaign-mortgage-accent"
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
                        "mt-auto flex flex-col gap-6 border-border border-t pt-8 text-muted-foreground text-sm sm:flex-row sm:items-center sm:justify-between",
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
