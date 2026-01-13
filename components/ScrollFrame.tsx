'use client';

import { useRef } from "react";
import OverlayScrollbar from "./OverlayScrollbar";

type Props = {
  children: React.ReactNode;
};

export default function ScrollFrame({ children }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div
        ref={scrollRef}
        className="custom-scroll-container h-[100dvh] overflow-y-auto overflow-x-hidden"
      >
        {children}
      </div>
      <OverlayScrollbar scrollRef={scrollRef} />
    </>
  );
}
