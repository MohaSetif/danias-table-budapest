/**
 * ImagePlaceholder
 * ----------------------------------------------------------------------------
 * TO SWAP IN YOUR OWN PHOTO:
 *   1. Drop your photo in `src/assets/` (e.g. src/assets/hero-interior.jpg)
 *   2. At the top of the section file, add: import heroImg from "@/assets/hero-interior.jpg"
 *   3. Pass it here:  <ImagePlaceholder label="..." src={heroImg} alt="..." />
 * The placeholder art disappears automatically once `src` is provided.
 */
type ImagePlaceholderProps = {
  /** Human-readable label shown while no photo is set, e.g. "Dish photo — Marha Gulyás" */
  label: string;
  /** Optional imported image. When set, the real photo renders instead. */
  src?: string;
  /** Alt text for accessibility / SEO */
  alt?: string;
  className?: string;
};

export function ImagePlaceholder({ label, src, alt, className = "" }: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-muted px-6 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
