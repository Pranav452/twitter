import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { JsonValue } from "type-fest";

export type User = {
  bio: string | null;
  comments?: Array<Comment>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  joinDate: Date | null;
  lastName: string | null;
  likes?: Array<Like>;
  location: string | null;
  name: string | null;
  passwordHash: string | null;
  profileImageUrl: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  website: string | null;
};
