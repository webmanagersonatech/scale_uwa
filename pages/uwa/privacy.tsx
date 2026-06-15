import { motion } from "framer-motion";
import Link from "next/link";
import CtaSection from "../../components/CtaComponent";

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
function Breadcrumb() {
    return (
        <nav aria-label="Breadcrumb" className="bg-[#f8f5f2] border-b border-[#e0d6ce] py-2.5">
            <div className="max-w-[1440px] mx-auto px-6">
                <ol className="flex items-center gap-1.5 list-none text-[13px] text-[#5a5652] flex-wrap">
                    <li className="flex items-center">
                        <Link href="/" className="text-[#AC1F2D] hover:underline no-underline">
                            Home
                        </Link>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li className="flex items-center">
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            UWA
                        </span>
                        <span className="text-[#bbb] mx-1" aria-hidden="true">›</span>
                    </li>
                    <li>
                        <span className="text-[#5a5652] font-medium" aria-current="page">
                            Privacy Statement
                        </span>
                    </li>
                </ol>
            </div>
        </nav>
    );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
    return (
        <section className="bg-gray-100 py-12 lg:py-16 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -right-[60px] -top-[60px] w-[360px] h-[360px] rounded-full bg-gray-200/50 pointer-events-none"></div>
            <div className="absolute left-[38%] -bottom-20 w-60 h-60 rounded-full bg-gray-300/30 pointer-events-none"></div>
            <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-gray-200/40 pointer-events-none"></div>

            <div className="max-w-[1440px] mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="lg:max-w-[55%]">
                        <div className="inline-flex items-center gap-2 bg-gray-200 border border-gray-300 text-gray-700 text-lg tracking-[1.2px] uppercase py-2.5 px-6 mb-4">
                            <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                            University of West Alabama
                        </div>
                        <h1 className="font-serif text-4xl lg:text-5xl text-gray-900 font-bold mb-4 leading-tight">
                            Privacy <span className="text-gray-700">Statement</span>
                        </h1>
                        <p className="text-gray-600 text-base lg:text-lg max-w-[580px] leading-relaxed">
                            Your privacy matters to us — learn how UWA collects, uses, and protects your information online.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function PrivacySection({
    id,
    title,
    children,
}: {
    id: string;
    title: string;
    children: React.ReactNode;
}) {
    return (
        <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="mb-10"
            aria-labelledby={id}
        >
            <h2
                id={id}
                className="font-serif text-xl text-[#AC1F2D] font-bold mb-3 pb-3 border-b-2 border-[#f5e8e0]"
            >
                {title}
            </h2>
            <div className="space-y-4 text-[#5a5652] leading-relaxed text-sm lg:text-base">
                {children}
            </div>
        </motion.section>
    );
}

// ─── Cookie Browser Links ─────────────────────────────────────────────────────
function CookieLinks() {
    const browsers = [
        {
            name: "Microsoft Edge",
            href: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09",
        },
        {
            name: "Chrome",
            href: "https://support.google.com/chrome/answer/95647?hl=en",
        },
        {
            name: "Safari",
            href: "https://support.apple.com/kb/PH17191?locale=en_GB",
        },
        {
            name: "Firefox",
            href: "https://support.mozilla.org/en-US/kb/block-websites-storing-cookies-site-data-firefox",
        },
    ];

    return (
        <ul className="mt-2 space-y-1 pl-4 list-disc marker:text-[#AC1F2D]">
            {browsers.map((b) => (
                <li key={b.name}>
                    <a
                        href={b.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#AC1F2D] hover:underline"
                    >
                        {b.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

// ─── Opt-Out Links ────────────────────────────────────────────────────────────
function OptOutLinks() {
    const platforms = [
        { name: "The NAI's opt-out platform", href: "https://optout.networkadvertising.org/" },
        { name: "The EDAA's opt-out platform", href: "https://www.youronlinechoices.eu/" },
        { name: "The DAA's opt-out platform", href: "https://optout.aboutads.info/" },
    ];

    return (
        <ul className="mt-2 space-y-1 pl-4 list-disc marker:text-[#AC1F2D]">
            {platforms.map((p) => (
                <li key={p.name}>
                    <a
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#AC1F2D] hover:underline"
                    >
                        {p.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

// ─── Contact Card ─────────────────────────────────────────────────────────────
function ContactCard() {
    return (
        <div className="mt-4 bg-[#f8f5f2] border border-[#e0d6ce] p-5 text-sm text-[#5a5652] leading-relaxed">
            <p className="font-semibold text-[#3a3330] mb-1">Director, Information Technology</p>
            <p>UWA Station 15</p>
            <p>Webb Hall, room 125</p>
            <p>Livingston, Alabama 35470</p>
            <a href="tel:2056523565" className="text-[#AC1F2D] hover:underline mt-1 inline-block">
                (205) 652-3565
            </a>
        </div>
    );
}

// ─── Last Updated Note ────────────────────────────────────────────────────────
function LastUpdated() {
    return (
        <p className="text-xs text-[#9a9490] mt-2">
            Last updated 4/19/2021
        </p>
    );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function PrivacyStatementPage() {
    return (
        <>
            <HeroSection />
            <Breadcrumb />

            <div className="py-9">
                <div className="max-w-[1440px] mx-auto px-6">
                    <div className="mx-auto">

                        <PrivacySection id="privacy-intro" title="Privacy Statement">
                            <p>
                                The University of West Alabama (hereinafter referred to as the "University," or "we")
                                respects the privacy of individuals who use its websites. We are committed to ensuring
                                the privacy and security of sensitive and confidential information provided to the
                                University online.
                            </p>
                            <p>
                                Please note that many units of the University operate and maintain their own websites
                                on the uwa.edu domain. These sites may provide additional notices about the information
                                they collect related to the web browsing experience, which may supplement this Privacy
                                Statement. By visiting uwa.edu the end user accepts and consents to the practices
                                described in this notice.
                            </p>
                        </PrivacySection>

                        <PrivacySection id="info-collection" title="What Information We Collect and How We Use It">
                            <p>
                                UWA webservers, like all webservers, collect information such as the IP address of the
                                visitor's computer, the operating system, browser software used, access times, and pages
                                visited. This data is used statistically and in aggregate to monitor webserver performance,
                                network security and to help manage the site and improve service.
                            </p>
                            <p>
                                In addition, UWA's site uses technologies of third-party vendors to help the university
                                recognize a visitor's device and understand how the visitor uses our site(s) so that we
                                can improve our services to reflect your interests and offer visitors advertisements about
                                the services that are likely to be of interest. Specifically, these partners collect
                                information about your activity on our site(s) to enable us to:
                            </p>
                            <ul className="pl-4 list-disc marker:text-[#AC1F2D] space-y-1">
                                <li>measure and analyze traffic and browsing activity on our site(s);</li>
                                <li>show advertisements for UWA services on third-party sites;</li>
                                <li>measure and analyze the performance of our advertising campaigns.</li>
                            </ul>
                            <p>
                                We may share data, such as hashed email derived from emails or other online identifiers
                                collected on our site(s) with our advertising partners. This allows our partners to
                                recognize and deliver ads across devices and browsers.
                            </p>
                            <p>
                                Some of our webpages may link to external websites not owned or controlled by the
                                University. The University is not responsible for the privacy practices or the content of
                                such websites.
                            </p>
                        </PrivacySection>

                        <PrivacySection id="cookies" title="Cookies">
                            <p>
                                A cookie is a small file placed onto a visitor's device that enables features and
                                functionality. The information contained in a cookie typically includes information
                                collected automatically by the webserver and/or information provided voluntarily by the
                                user.
                            </p>
                            <p>To disable or delete cookies for this site or all sites, a visitor can use the following guides:</p>
                            <CookieLinks />
                        </PrivacySection>

                        <PrivacySection id="opting-out" title="Opting Out">
                            <p>
                                Our partners may use non-cookie technologies that may not be impacted by browser
                                settings that block cookies. A browser may not be able to block such technologies. For
                                this reason, visitors can use the following third-party tools to decline the collection and
                                use of information for the purpose of serving interest-based advertising
                            </p>
                            <OptOutLinks />
                        </PrivacySection>

                        <PrivacySection id="other-data" title="Other Data Collection">
                            <p>
                                Visitors using online forms or applications on our web pages may choose to supply
                                information voluntarily. Information collected via such web forms will be securely
                                maintained and be used only for the purposes for which it was supplied. Pages
                                collecting such information should be transparent about the information they are
                                collecting as well as the purpose for the data collection.
                            </p>
                        </PrivacySection>

                        <PrivacySection id="info-protection" title="Information Protection">
                            <p>
                                The University implements reasonable physical, technical and administrative
                                safeguards designed to prevent unauthorized access to or use of the information we
                                collect online. While we strive to protect personal information, we cannot guarantee or
                                warrant the security of such electronic data. However, we will only use a visitor's
                                information for the educational, research, or other purpose in furtherance of the
                                University's mission for which it was provided.
                            </p>
                            <p>
                                Information will be retained or disposed of according to the University's records
                                management principles and polices.
                            </p>
                        </PrivacySection>

                        <PrivacySection id="gdpr" title="Individual Rights of the Data Subject under the General Data Protection Regulation (GDPR)">
                            <p>
                                In addition to the right to receive the information provided in this Privacy Notice, if a
                                visitor is an individual data subject covered by or under GDPR, they have the right to:
                            </p>
                            <ul className="pl-4 list-disc marker:text-[#AC1F2D] space-y-2">
                                <li>
                                    Request from the University of West Alabama access to and rectification or erasure
                                    of Personal Data or restriction of processing concerning the Data Subject, the right
                                    to object to processing and the right to portability of Personal Data;
                                </li>
                                <li>
                                    Where processing is based upon consent, to withdraw consent at any time, without
                                    affecting the University of West Alabama's right to process Personal Data based
                                    upon consent before its withdrawal;
                                </li>
                                <li>
                                    The right to file a complaint with a supervisory authority appointed by an European
                                    Union member state for the purpose of receiving complaints;
                                </li>
                                <li>
                                    Additional notice of the existence of automated decision-making, including profiling;
                                </li>
                                <li>
                                    If the Personal Data is going to be further processed for a purpose other than that
                                    for which it was collected, then notice of the purpose and basis or bases for the
                                    further processing;
                                </li>
                                <li>
                                    If Personal Data is collected for the University of West Alabama's legitimate interests
                                    or for a task carried out in the public interest, then the Data Subject has the right
                                    to object, on the grounds of his or her particular situation, to the processing of
                                    Personal Data concerning him or her (including profiling);
                                </li>
                                <li>
                                    Where Personal Data are processed for direct marketing purposes, the right to
                                    object at any time to processing Personal Data concerning him or her for such
                                    marketing; and
                                </li>
                                <li>
                                    Not to be subject to a decision based solely on automated processing, including
                                    profiling, which produces legal effects concerning him or her or similarly significantly
                                    affects him or her; provided, however, that this right does not apply if the decision is
                                    (a) necessary for entering into, or performance of, a contract between the Data
                                    Subject and the University of West Alabama; or (b) is based upon the Data Subject's
                                    consent.
                                </li>
                            </ul>
                            <p className="mt-2 text-xs text-[#9a9490] italic">
                                Note: Exercising these rights guarantees access to a process but does not guarantee any particular outcome.
                            </p>
                            <p className="mt-2">
                                Any Data Subject who wishes to exercise any of the above-mentioned rights may do so
                                by filing such request with the director of Information Technology:
                            </p>
                            <ContactCard />
                        </PrivacySection>

                        <PrivacySection id="california" title="California Residents section of NextRoll's Service Privacy Notice">
                            <p>
                                California Residents section of NextRoll's Service Privacy Notice
                            </p>
                        </PrivacySection>

                        <PrivacySection id="changes" title="Changes to this Policy">
                            <p>
                                This Privacy Policy may be amended from time to time. Any such changes will be
                                posted on this page. Continued usage of the site indicates acceptance of such changes.
                            </p>
                            <LastUpdated />
                        </PrivacySection>

                        <CtaSection />
                    </div>
                </div>
            </div>
        </>
    );
}