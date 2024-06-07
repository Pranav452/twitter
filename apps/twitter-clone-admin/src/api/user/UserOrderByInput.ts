import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  bio?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  joinDate?: SortOrder;
  lastName?: SortOrder;
  location?: SortOrder;
  name?: SortOrder;
  password?: SortOrder;
  passwordHash?: SortOrder;
  profileImageUrl?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  website?: SortOrder;
};
