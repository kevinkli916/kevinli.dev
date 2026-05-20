"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ExpandableTagListProps {
  tags: string[];
  initialLimit?: number;
}

export function ExpandableTagList({
  tags,
  initialLimit = 12,
}: ExpandableTagListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasHiddenTags = tags.length > initialLimit;
  const visibleTags = isExpanded || !hasHiddenTags ? tags : tags.slice(0, initialLimit);
  const hiddenCount = tags.length - visibleTags.length;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {visibleTags.map((tag) => (
        <Badge
          key={tag}
          variant="secondary"
          className="border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 hover:bg-slate-50"
        >
          {tag}
        </Badge>
      ))}
      {hasHiddenTags && (
        <Button
          type="button"
          variant="outline"
          size="sm"
          aria-expanded={isExpanded}
          onClick={() => setIsExpanded((expanded) => !expanded)}
          className="h-7 rounded-full border-slate-200 bg-white px-2.5 text-[11px] font-medium text-slate-600 shadow-none transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
        >
          {isExpanded ? (
            <>
              Show less
              <ChevronUp className="ml-1 h-3 w-3" aria-hidden="true" />
            </>
          ) : (
            <>
              +{hiddenCount} more
              <ChevronDown className="ml-1 h-3 w-3" aria-hidden="true" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}
