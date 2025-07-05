const apiBaseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function sendToAgent(message: string) {
  const res = await fetch(`${apiBaseUrl}/run-agent`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  return data.output;
}
