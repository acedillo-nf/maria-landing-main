import { VelocityScroll } from "@/presentation/components/magicui/scroll-based-velocity";


export function VelocitySection() {
  return (
    <VelocityScroll
      text="Alleviates the workload of all Teams"
      default_velocity={2}
      className="font-display text-center text-9xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}


