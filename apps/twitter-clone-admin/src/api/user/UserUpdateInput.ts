import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  bio?: string | null;
  comments?: CommentUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  joinDate?: Date | null;
  lastName?: string | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  location?: string | null;
  name?: string | null;
  password?: string;
  passwordHash?: string | null;
  profileImageUrl?: string | null;
  roles?: InputJsonValue;
  username?: string;
  website?: string | null;
};
