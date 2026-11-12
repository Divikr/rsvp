export type Wish = {
  name: string;
  message: string;
};

/**
 * Sends a wish to the couple. For now this only simulates a send (600 ms delay),
 * so wishes are not stored anywhere yet. Swap the body for a real request
 * (API route, form service, database) when a backend is chosen.
 */
export async function submitWish(wish: Wish): Promise<void> {
  void wish;
  await new Promise((r) => setTimeout(r, 600));
}
