import Container from "@/components/Container";
import contactContent from "@/content/contact.json";

type ContactContent = {
  emails?: string[];
  email?: string;
};

const contact = contactContent as Partial<ContactContent>;

export default function SiteFooter() {
  const year = new Date().getFullYear();
  const emails = (contact.emails && contact.emails.length > 0
    ? contact.emails
    : contact.email
      ? [contact.email]
      : ["charles@consultcd.com", "diego@consultcd.com"]) as string[];

  return (
    <footer className="border-t border-slate-900 bg-[#1f2430] py-12 text-slate-200">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#2563eb] via-[#00b8d4] to-[#0f344d]" />
              <div>
                <div className="text-sm font-semibold text-white">C&amp;D Consulting</div>
                <div className="text-xs text-slate-400">CRE Data + Strategy Intelligence</div>
              </div>
            </div>
            <div className="text-xs text-slate-400">© {year} C&amp;D Consulting. All rights reserved.</div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">Contact</div>
            <div className="flex flex-wrap gap-2 text-sm text-slate-300">
              {emails.map((email, index) => (
                <span key={email}>
                  <a href={`mailto:${email}`} className="hover:text-white">
                    {email}
                  </a>
                  {index < emails.length - 1 ? " • " : ""}
                </span>
              ))}
            </div>
            <a
              href="https://outlook.office.com/book/Demo@consultcd.com/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-300 hover:text-white"
            >
              Book a demo
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6 text-sm">
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Resources
              </div>
              <div className="space-y-1 text-slate-300">
                <a href="/technical" className="block hover:text-white">
                  Technical
                </a>
                <a href="/diagram" className="block hover:text-white">
                  Diagram
                </a>
                <a href="/#decision-accelerator" className="block hover:text-white">
                  Decision Accelerator
                </a>
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                About
              </div>
              <div className="space-y-1 text-slate-300">
                <a href="/about-us" className="block hover:text-white">
                  Company
                </a>
                <a href="/#outcomes" className="block hover:text-white">
                  Outcomes
                </a>
                <a href="/#contact" className="block hover:text-white">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
