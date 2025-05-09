"use server";

const MAX_LIMIT = 8;

export async function fetchAnime(page: number) {
  try {
    const response = await fetch(
      `https://shikimori.one/api/animes?page=${page}&limit=${MAX_LIMIT}&order=popularity`
    );
    if (!response.ok) throw new Error("API error" + response.status + response);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("fetchAnime failed:", error);
    return [];
  }
}
