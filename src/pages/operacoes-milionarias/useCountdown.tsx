import { useState, useEffect, createContext, useContext, ReactNode, useCallback } from "react";

// 7-minute countdown for this page
const COUNTDOWN_DURATION_MS = 7 * 60 * 1000;
const STORAGE_KEY = "operacoes_countdown_end_time";

interface CountdownContextType {
    totalSeconds: number;
    isExpired: boolean;
    resetCountdown: () => void;
}

const CountdownContext = createContext<CountdownContextType | null>(null);

export function useLocalCountdown() {
    const getEndTime = useCallback(() => {
        if (typeof window === "undefined") return Date.now() + COUNTDOWN_DURATION_MS;

        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const endTime = parseInt(stored, 10);
            if (endTime > Date.now()) return endTime;
        }

        const newEndTime = Date.now() + COUNTDOWN_DURATION_MS;
        window.localStorage.setItem(STORAGE_KEY, newEndTime.toString());
        return newEndTime;
    }, []);

    const [endTime, setEndTime] = useState(getEndTime);
    const [currentTime, setCurrentTime] = useState(Date.now);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(Date.now());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const timeLeft = Math.max(0, endTime - currentTime);
    const totalSeconds = Math.floor(timeLeft / 1000);
    const isExpired = timeLeft === 0;

    const resetCountdown = useCallback(() => {
        const newEndTime = Date.now() + COUNTDOWN_DURATION_MS;
        setEndTime(newEndTime);
        if (typeof window !== "undefined") {
            window.localStorage.setItem(STORAGE_KEY, newEndTime.toString());
        }
    }, []);

    return { totalSeconds, isExpired, resetCountdown };
}

export function CountdownProvider({ children }: { children: ReactNode }) {
    const countdown = useLocalCountdown();
    return <CountdownContext.Provider value={countdown}>{children}</CountdownContext.Provider>;
}

export function useCountdownContext() {
    const context = useContext(CountdownContext);
    if (!context) {
        throw new Error("useCountdownContext must be used within CountdownProvider");
    }
    return context;
}
