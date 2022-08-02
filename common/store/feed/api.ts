import { PostCommentApiCallback } from "common/types";
import { atom } from "jotai";
import { commentAtom } from ".";

export const postCommentAtom = atom(
  null,
  async (
    get,
    set,
    { action, params, onSuccess, onFail }: PostCommentApiCallback
  ) => {
    try {
      const comment = get(commentAtom);
      const payload = { ...params, comment };
      await action(payload);
      onSuccess();
    } catch (err) {
      onFail(err);
    }
  }
);
