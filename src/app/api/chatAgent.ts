const apiBaseUrl = process.env.NODE_ENV === "production"
  ? process.env.NEXT_PUBLIC_BACKEND_URL
  : "http://localhost:8000"; // Local fallback

export async function sendToAgent(message: string) {
  const res = await fetch(`${apiBaseUrl}/run-agent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  return data.output;
}
