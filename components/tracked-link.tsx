"use client";

import * as React from "react";
import { track } from "@vercel/analytics";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  eventProperties?: Record<string, string>;
}

export const TrackedLink = React.forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  ({ eventName, eventProperties, onClick, ...props }, ref) => {
    return (
      <a
        ref={ref}
        onClick={(event) => {
          track(eventName, eventProperties);
          onClick?.(event);
        }}
        {...props}
      />
    );
  },
);

TrackedLink.displayName = "TrackedLink";
