import type { Metadata } from "next";

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

import { BrandMark } from "./_components/BrandMark";
import { ContactForm } from "./_components/ContactForm";
import { mortgageContent, type ServiceIconName } from "./content";
import "./mortgage.css";

export const metadata: Metadata = {
    title: "עיקר משכנתאות | לא בערך",
    description: "קונספט בדיוני לעמוד בית של חברת ייעוץ משכנתאות.",
};

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
    house: House,
    clipboard: ClipboardCheck,
    chart: ChartPie,
    bank: Landmark,
    refresh: RefreshCw,
};

const footerNavigation = [
    { label: "דף הבית", href: "#top" },
    { label: "אודות", href: "#about" },
    { label: "שירותים", href: "#services" },
    { label: "מאמרים", href: null },
    { label: "יצירת קשר", href: "#contact" },
] as const;

const footerContactIcons = [Phone, MessageCircle, Mail] as const;

function ServiceCard({ service }: { service: (typeof mortgageContent.services.items)[number] }) {
    const Icon = serviceIcons[service.icon];

    return (
        <article
            className={
                service.featured
                    ? "mortgage-service-card mortgage-service-card--featured"
                    : "mortgage-service-card"
            }
        >
            <div className="mortgage-service-card__icon">
                <Icon aria-hidden="true" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
            <span className="mortgage-service-card__link">
                {mortgageContent.services.link}
                <ArrowLeft aria-hidden="true" />
            </span>
        </article>
    );
}

export default function MortgageRoute() {
    const { company, hero, introduction, services, process, position, team, contact, footer } =
        mortgageContent;

    return (
        <main className="mortgage-page" data-campaign="mortgage">
            <section className="mortgage-hero" id="top" aria-labelledby="mortgage-hero-title">
                <div className="mortgage-hero__media" aria-hidden="true" />

                <header className="mortgage-header">
                    <a className="mortgage-brand" href="#top" aria-label={`${company}, דף הבית`}>
                        <BrandMark />
                        <span>{company}</span>
                    </a>

                    <nav aria-label="ניווט ראשי">
                        {mortgageContent.navigation.map((item) => (
                            <a key={item.href} href={item.href}>
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </header>

                <div className="mortgage-hero__content">
                    <h1 id="mortgage-hero-title">
                        {hero.headline.map((line, index) => (
                            <span
                                className={
                                    index === hero.headline.length - 1 ? "is-accent" : undefined
                                }
                                key={line}
                            >
                                {line}
                            </span>
                        ))}
                    </h1>
                    <p>{hero.support}</p>
                    <a className="mortgage-primary-action" href="#contact">
                        <span>{hero.cta}</span>
                        <ArrowLeft aria-hidden="true" />
                    </a>
                </div>
            </section>

            <div className="mortgage-section-gap mortgage-section-gap--intro">
                <section
                    className="mortgage-introduction"
                    id="about"
                    aria-label={introduction.label}
                >
                    <p className="mortgage-introduction__label">{introduction.label}</p>
                    <p className="mortgage-introduction__copy">
                        <strong>{introduction.opening}</strong> {introduction.continuation}
                    </p>
                </section>
            </div>

            <div className="mortgage-section-gap">
                <section
                    className="mortgage-services"
                    id="services"
                    aria-labelledby="services-title"
                >
                    <div className="mortgage-section-heading mortgage-section-heading--split">
                        <h2 id="services-title">
                            איך אנחנו יכולים <span>לעזור</span>
                        </h2>
                        <p>{services.introduction}</p>
                    </div>

                    <div className="mortgage-services__grid">
                        {services.items.map((service) => (
                            <ServiceCard key={service.title} service={service} />
                        ))}
                    </div>
                </section>
            </div>

            <div className="mortgage-section-gap">
                <section className="mortgage-process" id="process" aria-labelledby="process-title">
                    <div className="mortgage-process__heading">
                        <div>
                            <p className="mortgage-eyebrow">{process.label}</p>
                            <h2 id="process-title">{process.heading}</h2>
                        </div>
                        <p>{process.introduction}</p>
                    </div>

                    <div className="mortgage-process__body">
                        <ol className="mortgage-process__steps">
                            {process.steps.map((step, index) => (
                                <li key={step}>
                                    <span className="mortgage-process__number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <h3>{step}</h3>
                                </li>
                            ))}
                        </ol>
                        <div
                            className="mortgage-image-placeholder mortgage-process__image"
                            aria-hidden="true"
                        />
                    </div>
                </section>
            </div>

            <div className="mortgage-section-gap mortgage-section-gap--position">
                <section className="mortgage-position" aria-labelledby="position-title">
                    <House className="mortgage-position__line-art" aria-hidden="true" />
                    <div className="mortgage-position__copy">
                        <p className="mortgage-eyebrow">{position.label}</p>
                        <h2 id="position-title">{position.heading}</h2>
                        <p>{position.support}</p>
                    </div>
                    <ol className="mortgage-position__principles">
                        {position.principles.map((principle, index) => (
                            <li key={principle}>
                                <span className="mortgage-position__number">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <h3>{principle}</h3>
                            </li>
                        ))}
                    </ol>
                </section>
            </div>

            <div className="mortgage-section-gap">
                <section className="mortgage-team" id="team" aria-labelledby="team-title">
                    <div className="mortgage-team__heading">
                        <h2 id="team-title">{team.heading}</h2>
                        <p>{team.introduction}</p>
                    </div>

                    <div className="mortgage-team__composition">
                        <div
                            className="mortgage-image-placeholder mortgage-team__featured-image"
                            aria-hidden="true"
                        />
                        <article className="mortgage-team__featured-copy">
                            <h3>{team.featured.name}</h3>
                            <p className="mortgage-team__role">{team.featured.role}</p>
                            <span className="mortgage-team__divider" aria-hidden="true" />
                            <p>{team.featured.bio}</p>
                        </article>
                        <div className="mortgage-team__people">
                            {team.people.map((person, index) => (
                                <article className="mortgage-team-card" key={person.name}>
                                    <div
                                        className={`mortgage-image-placeholder mortgage-team-card__image mortgage-team-card__image--${index + 1}`}
                                        aria-hidden="true"
                                    />
                                    <div>
                                        <h3>{person.name}</h3>
                                        <p className="mortgage-team__role">{person.role}</p>
                                        <p>{person.bio}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <div className="mortgage-section-gap">
                <section className="mortgage-contact" id="contact" aria-labelledby="contact-title">
                    <div className="mortgage-contact__copy">
                        <p className="mortgage-eyebrow">{contact.label}</p>
                        <h2 id="contact-title">{contact.heading}</h2>
                        <p>{contact.support}</p>

                        <div className="mortgage-contact__methods">
                            {contact.methods.map((method, index) => {
                                const Icon = index === 0 ? Phone : MessageCircle;

                                return (
                                    <div key={method}>
                                        <span>
                                            <Icon aria-hidden="true" />
                                        </span>
                                        <strong dir={method === "WhatsApp" ? "ltr" : undefined}>
                                            {method}
                                        </strong>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <ContactForm />
                </section>
            </div>

            <div className="mortgage-section-gap mortgage-section-gap--footer">
                <footer className="mortgage-footer">
                    <div className="mortgage-footer__main">
                        <div className="mortgage-footer__brand">
                            <a href="#top" aria-label={`${company}, דף הבית`}>
                                <BrandMark compact />
                                <span>{company}</span>
                            </a>
                            <p>{footer.line}</p>
                            <p className="mortgage-footer__disclosure">{footer.disclosure}</p>
                        </div>

                        <div className="mortgage-footer__column">
                            <h2>{footer.navigation.title}</h2>
                            <ul>
                                {footerNavigation.map((item) => (
                                    <li key={item.label}>
                                        {item.href ? (
                                            <a href={item.href}>{item.label}</a>
                                        ) : (
                                            <span>{item.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mortgage-footer__column">
                            <h2>{footer.services.title}</h2>
                            <ul>
                                {footer.services.links.map((item) => (
                                    <li key={item}>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mortgage-footer__column mortgage-footer__contact">
                            <h2>{footer.contact.title}</h2>
                            <ul>
                                {footer.contact.links.map((item, index) => {
                                    const Icon = footerContactIcons[index];

                                    return (
                                        <li key={item}>
                                            <Icon aria-hidden="true" />
                                            <span dir="ltr">{item}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="mortgage-footer__legal">
                        <p>{footer.copyright}</p>
                        <ul>
                            {footer.legal.map((item) => (
                                <li key={item}>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </main>
    );
}
