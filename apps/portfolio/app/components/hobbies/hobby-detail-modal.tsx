"use client";

import { useEffect } from "react";
import { BlobImage } from "@/components/ui/blob-image";
import { Dialog as DialogRoot, DialogPortal, DialogClose } from "@riselikesun/ui";
import { Dialog as DialogPrimitive } from "radix-ui";
import { motion, AnimatePresence } from "motion/react";
import { X } from "@riselikesun/ui/icons";
import { useLenis } from "lenis/react";
import type { Hobby } from "../../data/hobbies";
import { Badge, Button } from "@riselikesun/ui";

interface HobbyDetailModalProps {
  hobby: Hobby | null;
  onClose: () => void;
}

export function HobbyDetailModal({ hobby, onClose }: HobbyDetailModalProps) {
  const lenis = useLenis();

  useEffect(() => {
    if (hobby) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
    return () => {
      lenis?.start();
    };
  }, [hobby, lenis]);

  return (
    <DialogRoot
      open={!!hobby}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      closeOnBackButton
    >
      <AnimatePresence>
        {hobby && (
          <DialogPortal forceMount>
            <DialogPrimitive.Overlay forceMount asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[200] bg-black/75 backdrop-blur-md"
              />
            </DialogPrimitive.Overlay>

            <DialogPrimitive.Content forceMount asChild>
              <motion.div
                layoutId={`hobby-card-${hobby.id}`}
                className="fixed z-[201] rounded-3xl overflow-hidden bg-[#0c0b09] border border-white/[0.08] shadow-2xl outline-none"
                style={{
                  inset: "clamp(16px, 4vw, 64px)",
                  borderRadius: 24,
                }}
              >
                <DialogClose asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Close"
                    className="absolute top-4 right-4 z-30"
                  >
                    <X size={15} />
                  </Button>
                </DialogClose>

                <div
                  className="relative h-full flex flex-col overflow-y-auto scrollbar-none"
                  data-lenis-prevent="true"
                >
                  <div className="flex flex-col lg:flex-row w-full flex-shrink-0 lg:min-h-[75vh]">
                    <motion.div
                      layoutId={`hobby-image-${hobby.id}`}
                      className="relative w-full lg:w-[55%] xl:w-[60%] h-[40vh] sm:h-[50vh] lg:h-auto flex-shrink-0"
                      style={{ borderRadius: 0 }}
                    >
                      <BlobImage
                        src={hobby.image}
                        alt={hobby.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                        quality={75}
                      />
                      <div
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-[#0c0b09] lg:via-[#0c0b09]/50 via-transparent to-transparent"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ delay: 0.18, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center"
                    >
                      <div className="w-full max-w-5xl mx-auto px-6 sm:px-12 pt-8 pb-4 lg:py-12 flex flex-col gap-6">
                        <div className="flex flex-wrap gap-2 pt-1">
                          {hobby.tags.map((tag) => (
                            <Badge key={tag} variant="highlighted" className="h-5">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <DialogPrimitive.Title asChild>
                          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-snug">
                            {hobby.title}
                          </h2>
                        </DialogPrimitive.Title>
                        <p className="text-base sm:text-lg text-muted-foreground leading-[1.85] whitespace-pre-wrap">
                          {hobby.details}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {hobby.gallery.length > 0 && (
                    <div className="w-full px-2 sm:px-6 pb-12 mt-4 lg:mt-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary mb-6 px-2">
                        Gallery
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-2 sm:gap-4">
                        {hobby.gallery.map((src, idx) => (
                          <motion.div
                            key={src}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black/40 col-span-1 aspect-square md:aspect-[4/3]"
                          >
                            <BlobImage
                              src={src}
                              alt={`${hobby.title} gallery image ${idx + 1}`}
                              fill
                              sizes="(max-width: 767px) 100vw, (max-width: 1535px) 50vw, 33vw"
                              className="object-cover"
                              loading={idx < 3 ? "eager" : "lazy"}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPortal>
        )}
      </AnimatePresence>
    </DialogRoot>
  );
}