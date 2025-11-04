"use client";
import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    // Track PageView event when the page is loaded
    fetch("http://localhost:8010/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: "PageView",
        event_time: Math.floor(Date.now() / 1000),
        user_data: {
          em: "hashed_user_email_here", // optional, you can hash user email later
        },
      }),
    });
  }, []);

  return null; // this component just runs the tracking, no UI
}
