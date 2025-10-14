import { cn } from "@/lib/cn";
import { Container } from "./Container";

export function Section({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>{children}</Container>
    </section>
  );
}