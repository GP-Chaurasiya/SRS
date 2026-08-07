import React from "react";
import { Check } from "lucide-react";

interface StepProgressProps {
  currentStep: number;
}

export const StepProgress: React.FC<StepProgressProps> = ({ currentStep }) => {
  const steps = [
    { num: 1, label: "Select Sport" },
    { num: 2, label: "Team Details" },
    { num: 3, label: "Roster & Subs" },
    { num: 4, label: "Confirmation" },
  ];

  const fillPercent = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 mb-8 shadow-xl">
      <div className="relative flex justify-between items-center max-w-2xl mx-auto px-4">
        {/* Background Bar */}
        <div className="absolute top-1/2 left-8 right-8 h-1 bg-white/20 -translate-y-1/2 z-0" />
        
        {/* Fill Bar */}
        <div
          className="absolute top-1/2 left-8 h-1 bg-gradient-to-r from-amber-400 to-amber-500 -translate-y-1/2 z-0 transition-all duration-500 ease-out"
          style={{ width: `calc(${fillPercent}% - ${fillPercent * 0.3}px)` }}
        />

        {steps.map((step) => {
          const isCompleted = currentStep > step.num;
          const isActive = currentStep === step.num;

          return (
            <div key={step.num} className="relative z-10 flex flex-col items-center gap-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                  isCompleted
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105"
                    : isActive
                    ? "bg-gradient-to-br from-amber-400 to-amber-500 text-slate-900 ring-4 ring-amber-400/30 shadow-lg shadow-amber-500/40 scale-110"
                    : "bg-slate-800/80 text-slate-400 border border-white/10"
                }`}
              >
                {isCompleted ? <Check className="w-5 h-5 stroke-[3]" /> : step.num}
              </div>
              <span
                className={`text-xs font-semibold tracking-wide transition-colors ${
                  isActive ? "text-amber-300 font-bold" : isCompleted ? "text-emerald-300" : "text-slate-300/70"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
