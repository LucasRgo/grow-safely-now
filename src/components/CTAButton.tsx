import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "default" | "lg" | "xl";
}

export const CTAButton = ({ children, onClick, className = "", size = "lg" }: CTAButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
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
      className={`bg-success hover:bg-success/90 text-success-foreground font-heading font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${sizeClasses[size]} ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
};
