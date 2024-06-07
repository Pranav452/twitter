import { CommentCreateNestedManyWithoutUsersInput } from "./CommentCreateNestedManyWithoutUsersInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  bio?: string | null;
  comments?: CommentCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  joinDate?: Date | null;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  location?: string | null;
  name?: string | null;
  password: string;
  passwordHash?: string | null;
  profileImageUrl?: string | null;
  roles: InputJsonValue;
  username: string;
  website?: string | null;
};
