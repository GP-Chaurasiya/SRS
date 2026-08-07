import React from "react";
import { SportConfig, PlayerSlot } from "../types";
import { Trophy, Shield, Users, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

interface RegistrationSummaryProps {
  sport: SportConfig;
  teamName: string;
  slots: PlayerSlot[];
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

export const RegistrationSummary: React.FC<RegistrationSummaryProps> = ({
  sport,
  teamName,
  slots,
  onSubmit,
  isSubmitting,
}) => {
  const isTeamOrDoubles = sport.type === "team" || sport.type === "doubles";
  
  // Count main players filled
  const mainFilled = slots
    .slice(0, sport.mainPlayers)
    .filter((s) => s.scholarNo.trim().length > 0).length;

  const isMainComplete = mainFilled >= sport.mainPlayers;
  const subCount = sport.substitutes;

  // Check mandatory substitute if team sport
  let isSubComplete = true;
  if (sport.type === "team" && sport.minSubstitutes > 0) {
    const mandatorySubSlot = slots[sport.mainPlayers];
    isSubComplete = Boolean(mandatorySubSlot && mandatorySubSlot.scholarNo.trim().length > 0);
  }

  const isValidToSubmit = isMainComplete && (isTeamOrDoubles ? teamName.trim().length > 0 : true) && isSubComplete;

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white shadow-2xl sticky top-24">
      {/* Title Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-amber-400" />
          <h3 className="text-xl font-extrabold font-outfit text-white">Live Roster Summary</h3>
        </div>
        <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
      </div>

      {/* Details Stack */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center py-1.5 border-b border-white/5">
          <span className="text-slate-300 font-medium">Selected Sport</span>
          <span className="font-bold text-amber-300 text-base">{sport.name}</span>
        </div>

        <div className="flex justify-between items-center py-1.5 border-b border-white/5">
          <span className="text-slate-300 font-medium">Category / Format</span>
          <span className="font-bold uppercase tracking-wider text-xs px-2.5 py-1 rounded-md bg-white/10 text-white border border-white/10">
            {sport.type} ({sport.category})
          </span>
        </div>

        {isTeamOrDoubles && (
          <div className="flex justify-between items-center py-1.5 border-b border-white/5">
            <span className="text-slate-300 font-medium">Team Name</span>
            <span className="font-bold text-white truncate max-w-[160px]">
              {teamName.trim() || <span className="text-slate-400 italic">Enter Team Name</span>}
            </span>
          </div>
        )}

        <div className="flex justify-between items-center py-1.5 border-b border-white/5">
          <span className="text-slate-300 font-medium">Main Roster Slots</span>
          <span className="font-bold text-white">{sport.mainPlayers} Player(s)</span>
        </div>

        <div className="flex justify-between items-center py-1.5 border-b border-white/5">
          <span className="text-slate-300 font-medium">Substitutes</span>
          <span className="font-bold text-white">
            {subCount > 0 ? `${subCount} Slots (Sub 1 Req)` : "None"}
          </span>
        </div>

        <div className="flex justify-between items-center py-2 bg-white/5 px-3 rounded-xl border border-white/10">
          <span className="text-slate-200 font-semibold">Roster Filled</span>
          <span
            className={`font-black text-sm px-2.5 py-0.5 rounded-full ${
              isMainComplete && isSubComplete
                ? "bg-emerald-500/20 text-emerald-300 border border-emerald-400/40"
                : "bg-amber-500/20 text-amber-300 border border-amber-400/40"
            }`}
          >
            {mainFilled} / {sport.mainPlayers} Main
          </span>
        </div>
      </div>

      {/* Action Submit Button */}
      <button
        onClick={onSubmit}
        disabled={!isValidToSubmit || isSubmitting}
        className={`w-full mt-6 py-4 px-6 rounded-2xl font-black text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-xl ${
          isValidToSubmit && !isSubmitting
            ? "bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-slate-950 hover:shadow-amber-500/30 hover:scale-[1.02] active:scale-100"
            : "bg-slate-700/60 text-slate-400 cursor-not-allowed border border-white/10"
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">Processing Registration...</span>
        ) : (
          <>
            <span>{isTeamOrDoubles ? "Create Team" : "Register Now"}</span>
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>
    </div>
  );
};
