"use client";

import { Globe, Paperclip, Send } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";
import { useDebouncedCallback } from "use-debounce";

const MIN_HEIGHT = 48;
const MAX_HEIGHT = 164;

export default function AIInput_04() {
    const [value, setValue] = useState("");
    const { textareaRef, adjustHeight } = useAutoResizeTextarea({
        minHeight: MIN_HEIGHT,
        maxHeight: MAX_HEIGHT,
    });
    const [showSearch, setShowSearch] = useState(true);

    const handleSubmit = () => {
        setValue("");
        adjustHeight(true);
    };

    const debouncedAdjustHeight = useDebouncedCallback(
        () => adjustHeight(),
        100
    );

    return (
        <div className="w-full py-4">
            <div className="relative max-w-xl w-full mx-auto">
                <div className="relative flex flex-col">
                    <div
                        className="overflow-y-auto overscroll-none"
                        style={{ maxHeight: `${MAX_HEIGHT}px` }}
                    >
                        <Textarea
                            id="ai-input-04"
                            value={value}
                            placeholder="Search the web..."
                            className="w-full rounded-xl rounded-b-none px-4 py-3 bg-black/5 dark:bg-white/5 border-none dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70 resize-none focus-visible:ring-0 leading-[1.2] touch-manipulation"
                            ref={textareaRef}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSubmit();
                                }
                            }}
                            onChange={(e) => {
                                setValue(e.target.value);
                                debouncedAdjustHeight();
                            }}
                            inputMode="text"
                            enterKeyHint="send"
                        />
                    </div>

                    <div className="h-12 bg-black/5 dark:bg-white/5 rounded-b-xl touch-manipulation">
                        <div className="absolute left-3 bottom-3 flex items-center gap-2">
                            <label className="cursor-pointer rounded-lg p-2 bg-black/5 dark:bg-white/5">
                                <input type="file" className="hidden" />
                                <Paperclip className="w-4 h-4 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white transition-colors" />
                            </label>
                            <button
                                type="button"
                                onClick={() => {
                                    setShowSearch(!showSearch);
                                }}
                                className={cn(
                                    "rounded-full transition-all flex items-center gap-2 px-1.5 py-1 border h-8",
                                    showSearch
                                        ? "bg-sky-500/15 border-sky-400 text-sky-500"
                                        : "bg-black/5 dark:bg-white/5 border-transparent text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                                )}
                            >
                                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                                    <motion.div
                                        animate={{
                                            rotate: showSearch ? 180 : 0,
                                            scale: showSearch ? 1.1 : 1,
                                        }}
                                        whileHover={{
                                            rotate: showSearch ? 180 : 15,
                                            scale: 1.1,
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 10,
                                            },
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 25,
                                        }}
                                    >
                                        <Globe
                                            className={cn(
                                                "w-4 h-4",
                                                showSearch
                                                    ? "text-sky-500"
                                                    : "text-inherit"
                                            )}
                                        />
                                    </motion.div>
                                </div>
                                <AnimatePresence>
                                    {showSearch && (
                                        <motion.span
                                            initial={{ width: 0, opacity: 0 }}
                                            animate={{
                                                width: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ width: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="text-sm overflow-hidden whitespace-nowrap text-sky-500 flex-shrink-0"
                                        >
                                            Search
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                        <div className="absolute right-3 bottom-3">
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className={cn(
                                    "rounded-lg p-2 transition-colors",
                                    value
                                        ? "bg-sky-500/15 text-sky-500"
                                        : "bg-black/5 dark:bg-white/5 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white"
                                )}
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
