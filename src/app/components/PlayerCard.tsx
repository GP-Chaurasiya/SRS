import React from "react";
import { motion } from "motion/react";
import { PlayerSlot } from "../types";
import { Crown, User, CheckCircle2, AlertTriangle, Loader2, Sparkles } from "lucide-react";

interface PlayerCardProps {
  slot: PlayerSlot;
  onScholarChange: (index: number, scholarNo: string) => void;
  onFieldChange: (index: number, field: keyof PlayerSlot, value: string) => void;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  slot,
  onScholarChange,
  onFieldChange,
}) => {
  const isCaptain = slot.isCaptain;
  const isError = Boolean(slot.errorMsg);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: slot.index * 0.04 }}
      className={`rounded-2xl p-5 border transition-all duration-300 relative overflow-hidden ${
        isError
          ? "bg-red-50/90 border-red-400 shadow-lg shadow-red-500/10"
          : isCaptain
          ? "bg-gradient-to-r from-amber-500/10 via-white to-amber-500/5 border-amber-400/80 shadow-md shadow-amber-500/10"
          : slot.isSubstitute
          ? slot.isOptional
            ? "bg-slate-50/80 border-slate-200"
            : "bg-orange-50/50 border-orange-200"
          : "bg-white border-blue-100 shadow-sm hover:shadow-md"
      }`}
    >
      {/* Role Header & Status Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-extrabold uppercase tracking-wider ${
              isCaptain
                ? "bg-amber-400 text-slate-900 shadow-sm"
                : slot.isSubstitute
                ? slot.isOptional
                  ? "bg-slate-200 text-slate-700"
                  : "bg-orange-100 text-orange-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            {isCaptain ? (
              <Crown className="w-3.5 h-3.5 fill-current" />
            ) : (
              <User className="w-3.5 h-3.5" />
            )}
            {slot.role}
          </span>
          {isCaptain && (
            <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Team Leader
            </span>
          )}
        </div>

        {/* Fetch Status Badge */}
        <div className="flex items-center gap-1.5 text-xs font-semibold">
          {slot.fetchStatus === "loading" && (
            <span className="text-blue-600 flex items-center gap-1 animate-pulse">
              <Loader2 className="w-3.5 h-3.5 animate-spin" /> Fetching info...
            </span>
          )}
          {slot.fetchStatus === "success" && (
            <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Auto-Fetched
            </span>
          )}
          {slot.fetchStatus === "error" && (
            <span className="text-red-600 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" /> Auto-Generated
            </span>
          )}
          {slot.fetchStatus === "idle" && (
            <span className="text-slate-400 text-[11px]">
              {slot.isOptional ? "Optional Slot" : "Required"}
            </span>
          )}
        </div>
      </div>

      {/* Input Fields Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
        {/* Scholar Number (Primary trigger for auto-fetch) */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
            Scholar ID {!slot.isOptional && <span className="text-red-500">*</span>}
          </label>
          <input
            type="text"
            value={slot.scholarNo}
            onChange={(e) => onScholarChange(slot.index, e.target.value)}
            placeholder="e.g., 2424001"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-semibold transition-all focus:outline-none focus:ring-2 ${
              isError
                ? "border-red-300 bg-white focus:ring-red-400"
                : "border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-blue-500"
            }`}
          />
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={slot.fullName}
            onChange={(e) => onFieldChange(slot.index, "fullName", e.target.value)}
            placeholder="Auto-fetched name"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100/70 text-sm font-semibold text-slate-800"
            readOnly
          />
        </div>

        {/* Course */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
            Course
          </label>
          <input
            type="text"
            value={slot.course}
            onChange={(e) => onFieldChange(slot.index, "course", e.target.value)}
            placeholder="Auto-fetched course"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100/70 text-sm font-semibold text-slate-800"
            readOnly
          />
        </div>

        {/* Semester */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
            Semester
          </label>
          <input
            type="text"
            value={slot.semester}
            onChange={(e) => onFieldChange(slot.index, "semester", e.target.value)}
            placeholder="Auto-fetched semester"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100/70 text-sm font-semibold text-slate-800"
            readOnly
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            value={slot.phone}
            onChange={(e) => onFieldChange(slot.index, "phone", e.target.value)}
            placeholder="Phone number"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mandal */}
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
            Mandal
          </label>
          <input
            type="text"
            value={slot.mandal}
            onChange={(e) => onFieldChange(slot.index, "mandal", e.target.value)}
            placeholder="Auto-fetched mandal"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-100/70 text-sm font-semibold text-slate-800"
            readOnly
          />
        </div>
      </div>

      {/* Validation Error Box */}
      {isError && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-3.5 p-3 rounded-xl bg-red-100/90 border border-red-300 text-red-800 text-xs font-bold flex items-start gap-2 animate-shake"
        >
          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
          <span>{slot.errorMsg}</span>
        </motion.div>
      )}
    </motion.div>
  );
};
