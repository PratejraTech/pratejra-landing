import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./utils";

/**
 * Button variant styles using class-variance-authority
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-300 transform-gpu disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:scale-105 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-[#6366f1] focus-visible:ring-indigo-500/50 shadow-lg hover:shadow-xl hover:shadow-primary/30",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 shadow-lg hover:shadow-xl hover:shadow-destructive/30",
        outline:
          "border-2 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800/50 hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 focus-visible:ring-violet-500/50 backdrop-blur-sm",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg",
        ghost:
          "hover:bg-slate-800/50 hover:text-accent-foreground dark:hover:bg-accent/50 focus-visible:ring-violet-500/50 backdrop-blur-sm",
        glow: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:shadow-glow transition-all duration-300",
        glass: "glass-card text-white hover:bg-white/20 border-white/20 shadow-2xl hover:shadow-glow-wisdom",
        neu: "neu-button text-white hover:shadow-neu-inset active:shadow-neu-inset",
        link: "text-primary underline-offset-4 hover:underline rounded-none",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3 rounded-2xl",
        sm: "h-8 rounded-2xl gap-1.5 px-3 has-[>svg]:px-2.5 text-xs",
        lg: "h-12 rounded-2xl px-6 has-[>svg]:px-4 text-base",
        icon: "size-9 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * Button component with variant support, 3D effects, and micro-interactions
 */
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    }
>(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const [ripple, setRipple] = React.useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    
    // Ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });
    setTimeout(() => setRipple(null), 600);
  };

  return (
    <Comp
      ref={ref}
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        "relative overflow-hidden perspective-container group",
        variant !== "link" && "hover:rotate-y-1 hover:translate-z-5"
      )}
      onClick={handleClick}
      {...props}
    >
      {ripple && (
        <span
          className="absolute rounded-full bg-white/30 animate-ping pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            transform: "translate(-50%, -50%)",
            animation: "ping 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      )}
      <span className="relative z-10">{props.children}</span>
      {variant === "glow" && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer-sweep transition-opacity duration-300" />
      )}
    </Comp>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };