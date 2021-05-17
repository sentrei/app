/* eslint-disable @typescript-eslint/no-floating-promises */

// eslint-disable-next-line import/prefer-default-export
export async function postNewsletter(email: string): Promise<void> {
  await fetch("/api/subscribe", {
    body: JSON.stringify({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
}
