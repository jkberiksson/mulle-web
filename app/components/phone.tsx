import Image, { type StaticImageData } from "next/image";

/** An app screen in an iPhone-shaped frame. The screen is a 1320×2868 capture. */
export function Phone({
  screen,
  alt,
  className = "",
  preload = false,
}: {
  screen: StaticImageData;
  alt: string;
  className?: string;
  preload?: boolean;
}) {
  return (
    <div
      className={`rounded-[3.2rem] bg-[#0a0d0b] p-[0.6rem] shadow-[0_40px_80px_-20px_rgba(5,20,12,0.55),0_0_0_1px_rgba(255,255,255,0.08)_inset] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2.65rem] bg-black">
        <Image
          src={screen}
          alt={alt}
          sizes="(max-width: 640px) 70vw, 340px"
          preload={preload}
          className="block w-full h-auto"
        />
        {/* Dynamic Island — the captures come from the simulator without one */}
        <div aria-hidden className="absolute left-1/2 top-[1.6%] h-[3.6%] w-[31%] -translate-x-1/2 rounded-full bg-black" />
      </div>
    </div>
  );
}
