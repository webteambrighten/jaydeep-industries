import * as React from "react";
import { cn } from "@/lib/utils";

interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  direction?: "vertical" | "horizontal";
}

const Timeline = React.forwardRef<HTMLOListElement, TimelineProps>(
  ({ className, direction = "vertical", ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        "relative",
        // The main vertical line for the timeline
        direction === "vertical" &&
          "border-l border-gray-200 dark:border-gray-700",
        // Horizontal layout (not used in this specific request, but kept for completeness)
        direction === "horizontal" &&
          "flex justify-center items-start space-x-8",
        className
      )}
      {...props}
    />
  )
);
Timeline.displayName = "Timeline";

interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
  index: number; // To alternate colors
  year: string;
}

const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ className, index, year, children, ...props }, ref) => {
    // Alternate colors for the dot and the year/title text
    const dotColor = index % 2 === 0 ? "bg-primary-black" : "bg-primary-red";
    const textColor =
      index % 2 === 0 ? "text-primary-black" : "text-primary-red";

    return (
      <li
        ref={ref}
        className={cn(
          "relative pb-10", // Add bottom padding for spacing between items
          className
        )}
        {...props}
      >
        {/* The dot, positioned absolutely relative to the <li>.
            -left-[14px] centers a 28px dot (h-7 w-7) on the 1px border-l of the parent <ol>.
            z-10 ensures it's above the line.
        */}
        <span
          className={cn(
            "absolute -left-[14px] top-0 flex h-7 w-7 items-center justify-center rounded-full ring-8 ring-white dark:ring-gray-900 z-10",
            dotColor
          )}
        >
          {/* You can add an icon or number inside the dot if desired */}
        </span>

        {/* Content area, pushed right to clear the dot and line.
            ml-8 provides enough space for the dot (28px) plus some padding.
        */}
        <div className="ml-8">
          <h3
            className={cn(
              "flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white",
              textColor // Apply text color to the year/title
            )}
          >
            {year}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            {children}
          </p>
        </div>
      </li>
    );
  }
);
TimelineItem.displayName = "TimelineItem";

export { Timeline, TimelineItem };
