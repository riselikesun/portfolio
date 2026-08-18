// app/error.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "./components";


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // log to error-tracking service here (Sentry, etc.) once wired up
        console.error(error);
    }, [error]);

    return (
        <>
            <Navbar />
            <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center bg-void">
                <span className="font-mono text-sm tracking-widest text-sun-2">
                    ERROR
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-fg">
                    Something broke on the way up.
                </h1>

                <p className="text-fg-dim max-w-md">
                    An unexpected error occurred. You can try again, or head back home.
                </p>

                <div className="flex gap-4 mt-2">
                    <Button onClick={() => reset()}>
                        Try again
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/">Back home</Link>
                    </Button>
                </div>
            </main>
        </>
    );
}