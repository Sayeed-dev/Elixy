import { readFile } from "fs/promises";
import path from "path";

export async function getFriends() {
  const filePath = path.join(process.cwd(), "public", "friends.json");
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

