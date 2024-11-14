import { styled } from "@/stitches.config";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const ImageWrapper = styled("div", {
  position: "absolute",
  border: "8px solid #FAFAFA",
  borderRadius: "8px",
  width: "fit-content",
  height: "fit-content",
  cursor: "grab",
  display: "flex",
  transition: "transform 0.2s, box-shadow 0.2s",
  background: "white",
  "&:active": {
    cursor: "grabbing",
    transform: "scale(1.02) translateY(-4px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  "&:hover": {
    transform: "scale(1.02) translateY(-8px)",
    boxShadow: `
      0 12px 24px rgba(0, 0, 0, 0.2),
      0 4px 8px rgba(0, 0, 0, 0.1)
    `,
  },
});

interface DraggableImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  initialX?: number;
  initialY?: number;
  rotation?: number;
}

export default function DraggableImage({
  src,
  width,
  height,
  alt,
  initialX = 100,
  initialY = 100,
  rotation = 0,
}: DraggableImageProps) {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPosition({ x: initialX, y: initialY });
  }, [initialX, initialY]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;

      setPosition((prevPos) => ({
        x: prevPos.x + deltaX,
        y: prevPos.y + deltaY,
      }));

      setDragStart({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  return (
    <ImageWrapper
      ref={imageRef}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `rotate(${rotation}deg)${
          isDragging ? "" : " scale(1.02) translateY(-8px)"
        }`,
      }}
      onMouseDown={handleMouseDown}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        draggable={false}
      />
    </ImageWrapper>
  );
}
