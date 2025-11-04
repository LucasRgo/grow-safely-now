import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CountdownProvider } from "@/components/context/CountdownContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OperacoesMilionarias from "./pages/operacoes-milionarias";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <CountdownProvider>
                <Toaster />
                <Sonner />
                <HashRouter>
                    <Routes>
                        <Route path="/operacoes-milionarias" element={<OperacoesMilionarias />} />
                        <Route path="/" element={<Index />} />
                        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </HashRouter>
            </CountdownProvider>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
