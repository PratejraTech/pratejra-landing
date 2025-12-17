import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full rounded-2xl border-2 px-4 py-3 text-base transition-all duration-300 ease-out outline-none disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none md:text-sm transform-gpu",
        "glass-card border-white/10 bg-white/5 backdrop-blur-sm",
        "focus-visible:border-community-400 focus-visible:ring-community-400/50 focus-visible:ring-[3px] focus-visible:shadow-glow-community focus-visible:bg-white/10 focus-visible:scale-[1.01]",
        "hover:border-white/20 hover:bg-white/8 hover:shadow-lg hover:shadow-white/5",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
