import { CountdownStatus } from "@/hooks/UseCountdown";
import { useCountdownContext } from "@/components/context/CountdownContext";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

const statusStyles: Record<CountdownStatus, string> = {
    safe: "text-emerald-400 border-emerald-500/40",
    warm: "text-amber-400 border-amber-500/40",
    hot: "text-orange-400 border-orange-500/50",
    critical: "text-red-400 border-red-500/60 animate-pulse",
    expired: "text-muted-foreground border-muted/40",
};

export function CountdownTimer() {
    const { minutes, seconds, status, isExpired } = useCountdownContext();

    const palette = statusStyles[status];

    return (
        <div
            className={cn(
                "inline-flex items-center gap-2 md:gap-3 px-3 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl glass border-2 transition-colors duration-300",
                palette
            )}>
            <Clock className={cn("w-4 h-4 md:w-5 md:h-5", isExpired ? "text-muted-foreground" : undefined)} />
            <div className="flex items-center gap-1 md:gap-2">
                <div className="flex flex-col items-center">
                    <span className="text-lg md:text-2xl font-bold">{minutes}</span>
                </div>
                <span className="text-lg md:text-2xl font-bold">:</span>
                <div className="flex flex-col items-center">
                    <span className="text-lg md:text-2xl font-bold">{seconds}</span>
                </div>
            </div>
        </div>
    );
}
