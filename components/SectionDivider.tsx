"use client";

interface SectionDividerProps {
    bgTop?: string;
    fillBottom?: string;
}

export default function SectionDivider({ bgTop = "bg-white", fillBottom = "fill-slate-50" }: SectionDividerProps) {
    return (
        <div className={`w-full overflow-hidden leading-0 ${bgTop}`}>
            <svg
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
                className="w-full h-8 md:h-12 block"
            >
                <polygon
                    points="0,6.4 10,1.6 30,7.2 50,0.8 70,6.4 90,2.4 100,5.6 100,8 0,8"
                    className={`${fillBottom} stroke-slate-200`}
                    strokeWidth="0.1"
                />
            </svg>
        </div>
    );
}
