import React from "react";

export interface IScrollRef {
  draggingStarted: boolean;
  prevPageX: number | null;
  prevScrollLeft: number | null;
}

export interface IUseDrag {
  hoverScale: number;
}

export const useDrag = () => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const scrollRef = React.useRef<IScrollRef>({
    draggingStarted: false,
    prevScrollLeft: null,
    prevPageX: null,
  });

  const startDragging = (e: React.MouseEvent) => {
    scrollRef.current.draggingStarted = true;
    if (scrollRef.current && carouselRef.current) {
      scrollRef.current.prevScrollLeft = carouselRef.current.scrollLeft;
      scrollRef.current.prevPageX = e.pageX;
    }
  };

  const releaseDragging = () => {
    scrollRef.current.draggingStarted = false;
  };
  const handleOnMouseMove = (e: React.MouseEvent) => {
    if (carouselRef.current && scrollRef.current.draggingStarted) {
      // console.log("handle mouse");
      e.preventDefault();
      // our delta difference
      const positionDifference =
        scrollRef.current.prevPageX && e.pageX - scrollRef.current.prevPageX;
      if (positionDifference && scrollRef.current.prevScrollLeft !== null) {
        // update the position left with the updated one
        carouselRef.current.scrollLeft =
          scrollRef.current.prevScrollLeft - positionDifference;
      }
    }
  };

  return { handleOnMouseMove, releaseDragging, startDragging, carouselRef };
};
