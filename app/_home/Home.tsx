import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { PosterBands } from "./PosterBands";

export function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Hero />
            <main>
                <PosterBands />
            </main>
            <Footer />
        </div>
    );
}
