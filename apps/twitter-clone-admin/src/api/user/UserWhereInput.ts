import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  comments?: CommentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  joinDate?: DateTimeNullableFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  passwordHash?: StringNullableFilter;
  profileImageUrl?: StringNullableFilter;
  username?: StringFilter;
  website?: StringNullableFilter;
};
