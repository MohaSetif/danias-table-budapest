import { useState } from "react";
import { Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/i18n/LanguageContext";

/** Reservation form. Currently front-end only — shows a confirmation message. */
export function Reserve() {
  const [sent, setSent] = useState(false);
  const { t } = useLanguage();

  return (
    <section id="reserve" className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
      <Reveal className="text-center">
        <p className="eyebrow">{t.reserve.eyebrow}</p>
        <h2 className="mt-4 font-serif text-3xl text-primary sm:text-4xl md:text-5xl">
          {t.reserve.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base font-light text-muted-foreground">
          {t.reserve.subtext}{" "}
          <a href="tel:+36303196031" className="text-primary underline underline-offset-4 hover:text-accent">
            {t.reserve.callLink}
          </a>
          .
        </p>
      </Reveal>

      {/* <Reveal delay={140}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mt-12 grid gap-5 rounded-sm border border-border bg-card p-8 sm:grid-cols-2 md:p-10"
        >
          <Field
            label={t.reserve.fields.name}
            name="name"
            type="text"
            placeholder={t.reserve.fields.namePlaceholder}
            required
          />
          <Field
            label={t.reserve.fields.contact}
            name="contact"
            type="text"
            placeholder={t.reserve.fields.contactPlaceholder}
            required
          />
          <Field
            label={t.reserve.fields.date}
            name="date"
            type="date"
            required
          />
          <Field
            label={t.reserve.fields.time}
            name="time"
            type="time"
            required
          />
          <div className="sm:col-span-2">
            <label className="block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
              {t.reserve.fields.partySize}
            </label>
            <select
              name="party"
              defaultValue="2"
              className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? t.reserve.fields.guest : t.reserve.fields.guests}
                </option>
              ))}
              <option value="9+">{t.reserve.fields.nineOrMore}</option>
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
              {t.reserve.fields.notes}
            </label>
            <textarea
              name="notes"
              rows={3}
              placeholder={t.reserve.fields.notesPlaceholder}
              className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="flex flex-col items-center gap-4 sm:col-span-2 sm:flex-row">
            <button
              type="submit"
              className="w-full rounded-sm bg-primary px-9 py-4 text-xs uppercase tracking-[0.24em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground sm:w-auto"
            >
              {t.reserve.submit}
            </button>
            <a
              href="tel:+36303196031"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-primary px-9 py-4 text-xs uppercase tracking-[0.24em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:w-auto"
            >
              <Phone className="h-4 w-4" /> {t.reserve.callUs}
            </a>
          </div>

          {sent && (
            <p className="sm:col-span-2 rounded-sm bg-primary/10 px-5 py-4 text-sm text-primary">
              {t.reserve.confirmation}
            </p>
          )}
        </form>
      </Reveal> */}
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder ?? ""}
        required={required ?? false}
        className="mt-2 w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent"
      />
    </div>
  );
}
