// app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "./components";


export default function NotFound() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center bg-void">
                <span className="font-mono text-sm tracking-widest text-sun-2">
                    404
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-fg">
                    This page hasn&apos;t risen yet.
                </h1>

                <p className="text-fg-dim max-w-md">
                    The page you&apos;re looking for doesn&apos;t exist, or moved.
                </p>

                <div className="flex gap-4 mt-2">
                    <Button asChild  >
                        <Link href="/">Back home</Link>
                    </Button>
                </div>
            </main>
        </>
    );
}