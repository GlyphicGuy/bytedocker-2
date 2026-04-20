"use client";

import { useEffect, useState } from "react";

type NeoAlertProps = {
    type: "success" | "error" | "info";
    message: string;
    open: boolean;
    onClose: () => void;
    title?: string;
    className?: string;
};

const alertStyles = {
    success: {
        bg: "bg-[#d9ff7b]",
        icon: "✓",
        label: "Success",
    },
    error: {
        bg: "bg-[#ff8f8f]",
        icon: "!",
        label: "Error",
    },
    info: {
        bg: "bg-[#b7e4ff]",
        icon: "i",
        label: "Info",
    },
} as const;

export default function NeoAlert({ type, message, open, onClose, title, className }: NeoAlertProps) {
    const [shouldRender, setShouldRender] = useState(open);
    const [isVisible, setIsVisible] = useState(open);

    useEffect(() => {
        if (open) {
            setShouldRender(true);
            const frame = window.requestAnimationFrame(() => setIsVisible(true));
            return () => window.cancelAnimationFrame(frame);
        }

        setIsVisible(false);
        const timeoutId = window.setTimeout(() => setShouldRender(false), 240);
        return () => window.clearTimeout(timeoutId);
    }, [open]);

    if (!shouldRender) return null;

    const style = alertStyles[type];

    return (
        <div
            role="alert"
            aria-live="polite"
            className={`border-[4px] border-black shadow-[6px_6px_0_#000] px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 transition-all duration-300 ${style.bg
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"} ${className || ""}`}
        >
            <div className="flex items-start gap-3">
                <span className="text-2xl">{style.icon}</span>
                <div>
                    <p className="font-ibmplexmonomedium uppercase tracking-widest text-xs text-black">{title || style.label}</p>
                    <p className="font-dmsans text-base text-black">{message}</p>
                </div>
            </div>
            <button
                type="button"
                onClick={onClose}
                className="border-[3px] border-black bg-white px-4 py-2 font-ibmplexmonomedium uppercase tracking-widest text-xs shadow-[4px_4px_0_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#000] transition-all"
            >
                Dismiss
            </button>
        </div>
    );
}
