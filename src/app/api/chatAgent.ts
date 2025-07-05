export async function sendToAgent(message: string) {
  const res = await fetch("https://assistant-production-b1d6.up.railway.app/run-agent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  return data.output;
}
