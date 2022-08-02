import { atom } from "jotai";
import { commentAtom } from ".";

export const setCommentAtom = atom(null, async (get, set, by: string) => {
  set(commentAtom, by);
});
