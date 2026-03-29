"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

type FormState = "idle" | "loading" | "success" | "error";

export default function FinalCTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMessage("");

    const { error } = await supabase.from("waitlist").insert([
      { name: name.trim(), email: email.trim(), message: message.trim() || null },
    ]);

    if (error) {
      setFormState("error");
      setErrorMessage(
        error.message.includes("duplicate")
          ? "This email is already on the waitlist!"
          : "Something went wrong. Please try again."
      );
    } else {
      setFormState("success");
    }
  };

  return (
    <section
      id="download"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: "var(--ratch-warm-white)" }}
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute blob animate-blob w-[500px] h-[500px] -top-32 -left-32 opacity-20"
          style={{
            background: "linear-gradient(135deg, #FFB347 0%, #FF6B6B 100%)",
            animationDuration: "15s",
          }}
        />
        <div
          className="absolute blob animate-blob-reverse w-[400px] h-[400px] -bottom-20 -right-20 opacity-15"
          style={{
            background: "linear-gradient(135deg, #FFD700 0%, #FF8FA3 100%)",
            animationDuration: "18s",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[40px] p-8 md:p-12 lg:p-16 overflow-hidden border border-[var(--ratch-black)]/10"
          style={{
            background: "linear-gradient(135deg, #FFFFFF 0%, #FDF8F3 50%, #FFF9F0 100%)",
            boxShadow: "0 4px 60px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)",
          }}
        >
          {/* Decorative gradient overlays */}
          <div
            className="absolute top-0 right-0 w-2/3 h-full opacity-40 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 90% 10%, rgba(255, 179, 71, 0.25) 0%, transparent 45%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 10% 90%, rgba(255, 107, 107, 0.2) 0%, transparent 45%)",
            }}
          />

          {/* Subtle pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
                style={{
                  background: "rgba(255, 179, 71, 0.12)",
                  color: "var(--ratch-amber)",
                  border: "1px solid rgba(255, 179, 71, 0.25)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--ratch-amber)] animate-pulse" />
                Now accepting early access
              </motion.div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--ratch-black)] leading-tight">
                Join the{" "}
                <span className="text-gradient">waitlist</span>
              </h2>
              <p className="mt-4 text-lg text-[var(--ratch-gray)] max-w-lg mx-auto">
                Be among the first to experience Ratch. We&apos;ll reach out when your spot is ready.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-12 px-8 rounded-2xl"
                  style={{
                    background: "rgba(255, 179, 71, 0.08)",
                    border: "1px solid rgba(255, 179, 71, 0.2)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "rgba(255, 179, 71, 0.15)" }}
                  >
                    <svg
                      className="w-8 h-8"
                      style={{ color: "var(--ratch-amber)" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--ratch-black)] mb-2">
                    You&apos;re on the list!
                  </h3>
                  <p className="text-[var(--ratch-gray)]">
                    Thanks for signing up, <span className="font-semibold text-[var(--ratch-black)]">{name}</span>. We&apos;ll be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="waitlist-name"
                        className="text-sm font-medium text-[var(--ratch-black)]"
                      >
                        Name <span className="text-[var(--ratch-coral)]">*</span>
                      </label>
                      <input
                        id="waitlist-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        disabled={formState === "loading"}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-3 rounded-xl text-[var(--ratch-black)] placeholder-[var(--ratch-gray)]/60 text-sm outline-none transition-all disabled:opacity-60"
                        style={{
                          background: "rgba(255,255,255,0.8)",
                          border: "1.5px solid rgba(26,26,26,0.1)",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(255,179,71,0.7)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(255,179,71,0.15)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(26,26,26,0.1)";
                          e.target.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                        }}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="waitlist-email"
                        className="text-sm font-medium text-[var(--ratch-black)]"
                      >
                        Email <span className="text-[var(--ratch-coral)]">*</span>
                      </label>
                      <input
                        id="waitlist-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={formState === "loading"}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl text-[var(--ratch-black)] placeholder-[var(--ratch-gray)]/60 text-sm outline-none transition-all disabled:opacity-60"
                        style={{
                          background: "rgba(255,255,255,0.8)",
                          border: "1.5px solid rgba(26,26,26,0.1)",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(255,179,71,0.7)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(255,179,71,0.15)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = "rgba(26,26,26,0.1)";
                          e.target.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                        }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="waitlist-message"
                      className="text-sm font-medium text-[var(--ratch-black)]"
                    >
                      Message{" "}
                      <span className="text-[var(--ratch-gray)] font-normal text-xs">(optional)</span>
                    </label>
                    <textarea
                      id="waitlist-message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={formState === "loading"}
                      placeholder="Any thoughts, questions, or feedback for the team…"
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl text-[var(--ratch-black)] placeholder-[var(--ratch-gray)]/60 text-sm outline-none transition-all resize-none disabled:opacity-60"
                      style={{
                        background: "rgba(255,255,255,0.8)",
                        border: "1.5px solid rgba(26,26,26,0.1)",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(255,179,71,0.7)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(255,179,71,0.15)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(26,26,26,0.1)";
                        e.target.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
                      }}
                    />
                  </div>

                  {/* Error banner */}
                  <AnimatePresence>
                    {formState === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm"
                        style={{
                          background: "rgba(255, 107, 107, 0.08)",
                          border: "1px solid rgba(255, 107, 107, 0.25)",
                          color: "#CC3333",
                        }}
                      >
                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                        </svg>
                        {errorMessage}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit */}
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      disabled={formState === "loading"}
                      whileHover={{ scale: formState === "loading" ? 1 : 1.02, y: formState === "loading" ? 0 : -2 }}
                      whileTap={{ scale: formState === "loading" ? 1 : 0.98 }}
                      className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all disabled:cursor-not-allowed"
                      style={{
                        background: "var(--ratch-black)",
                        boxShadow: formState === "loading"
                          ? "none"
                          : "0 10px 40px rgba(0, 0, 0, 0.18)",
                      }}
                    >
                      {formState === "loading" ? (
                        <>
                          <svg
                            className="w-4 h-4 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Submitting…
                        </>
                      ) : (
                        <>
                          Join the Waitlist
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </div>

                  <p className="text-center text-xs text-[var(--ratch-gray)]/70 pt-1">
                    No spam, ever. Unsubscribe at any time.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
