const apiBaseUrl = process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_BACKEND_URL : "http://localhost:8000"; // Fallback to local development URL;

console.log("API base URL:", apiBaseUrl)


export async function sendToAgent(message: string) {
  const res = await fetch(`${apiBaseUrl}/run-agent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  console.log(apiBaseUrl)
  const data = await res.json();
  return data.output;
}
