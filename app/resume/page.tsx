// app/resume/page.tsx
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Suraj Sharma | Resume",
    description: "Staff Web Developer — experience, skills, and downloadable resume.",
};

const PDF_PATH = "/suraj_sharma_resume.pdf";

export default function ResumePage() {
    return (
        <>
            <main className="flex flex-col h-screen">
                <div className="flex items-center justify-between px-6 py-4 border-b border-line-light">
                    <Link href="/" className="text-base font-bold text-fg">
                        Rise Like Sun
                    </Link>
                    <span >
                        Suraj Sharma | Staff Web Developer
                    </span>

                    <Button asChild size="sm">
                        <a href={PDF_PATH} download="Suraj_Sharma_Resume.pdf">
                            ⤓ Download PDF
                        </a>
                    </Button>
                </div>

                <iframe
                    src={PDF_PATH}
                    title="Suraj Sharma Resume"
                    className="flex-1 w-full border-0"
                />
            </main>
        </>
    );
}
