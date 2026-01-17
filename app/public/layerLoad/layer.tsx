'use client';

import { motion, AnimatePresence } from 'framer-motion';

type GridTransitionProps = {
  isActive: boolean;
};

const COLS = 10; // tăng để mượt hơn (10x10 = 100 ô)
const ROWS = 10;

export default function GridPageTransition({ isActive }: GridTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          className="fixed inset-0 z-[9999] grid gap-0 pointer-events-auto"
          style={{
            gridTemplateColumns: `repeat(${COLS}, 1fr)`,
            gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          }}
        >
          {Array.from({ length: COLS * ROWS }).map((_, i) => {
            const row = Math.floor(i / COLS);
            const col = i % COLS;

            /**
             * Delay lan từ:
             * bottom-left (row lớn, col nhỏ)
             * → top-right (row nhỏ, col lớn)
             */
            const delay =
              (ROWS - row) * 0.03 + col * 0.03;

            return (
              <motion.div
                key={i}
                className="bg-white w-full h-full"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1.05, // Overlap slightly to prevent gaps
                  transition: {
                    delay,
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1], // easeOutExpo
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  transition: {
                    delay,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
              />
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
