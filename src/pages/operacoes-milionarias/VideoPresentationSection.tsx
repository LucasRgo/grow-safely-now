import { useEffect, useRef } from "react";

export function VideoPresentationSection() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    useEffect(() => {
        // Adiciona o script do player
        const script = document.createElement("script");
        script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
        script.async = true;
        script.type = "text/javascript";
        
        // Verifica se já existe para não duplicar
        if (!document.querySelector(`script[src="${script.src}"]`)) {
            document.head.appendChild(script);
        }

        // Configura o SRC do iframe com os parâmetros de URL
        if (iframeRef.current) {
            const queryParams = window.location.search || "?";
            const locationHref = encodeURIComponent(window.location.href);
            const src = `https://scripts.converteai.net/e4afbe22-7a6e-4dd8-9576-24f2a422d026/players/693b102b33df7d64811417b4/v4/embed.html${queryParams}&vl=${locationHref}`;
            iframeRef.current.src = src;
        }
    }, []);

    return (
        <section className="w-full bg-black py-8 md:py-16">
            <div className="container max-w-5xl mx-auto px-4">
                <div 
                    id="ifr_693b102b33df7d64811417b4_wrapper" 
                    style={{ margin: "0 auto", width: "100%" }}
                >
                    <div 
                        style={{ position: "relative", padding: "56.25% 0 0 0" }} 
                        id="ifr_693b102b33df7d64811417b4_aspect"
                    >
                        <iframe
                            ref={iframeRef}
                            frameBorder="0"
                            allowFullScreen
                            id="ifr_693b102b33df7d64811417b4"
                            style={{ 
                                position: "absolute", 
                                top: 0, 
                                left: 0, 
                                width: "100%", 
                                height: "100%",
                                borderRadius: "12px",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
                            }}
                            referrerPolicy="origin"
                            src="about:blank"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
