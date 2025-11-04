import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "default" | "lg" | "xl";
}

const CHECKOUT_URL = "https://pay.hotmart.com/S102760097M?off=l676dkn1&checkoutMode=10";

export const CTAButton = ({ children, onClick, className = "", size = "lg" }: CTAButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(CHECKOUT_URL, "_self");
    }
  };

  const sizeClasses = {
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-6 text-xl",
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-success hover:bg-success/90 text-success-foreground font-heading font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] glow-border h-auto whitespace-normal sm:whitespace-nowrap text-center break-words ${sizeClasses[size]} ${className}`}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
        <ArrowRight className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
      </span>
    </Button>
  );
};
