import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {data} from "../../data/experience"
export default function TimelineDemo() {
  
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
