export default function BackgroundAccents() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute top-[12%] left-[6%] w-10 h-10 border-[2px] border-dashed border-[#ff8c00] opacity-10 rotate-45"></div>
            <div className="absolute top-[22%] right-[12%] w-3 h-3 bg-[#ff8c00] rounded-full opacity-15"></div>
            <div className="absolute top-[38%] left-[70%] w-14 h-14 border-[2px] border-[#ff8c00] opacity-10 rounded-full"></div>
            <div className="absolute top-[56%] left-[18%] w-12 h-12 border-[2px] border-dashed border-[#ff8c00] opacity-10 rotate-45"></div>
            <div className="absolute bottom-[28%] right-[22%] w-2 h-2 bg-[#ff8c00] rounded-full opacity-15"></div>
            <div className="absolute bottom-[10%] left-[8%] w-16 h-[2px] bg-[#ff8c00] opacity-10 rotate-6"></div>
        </div>
    );
}
