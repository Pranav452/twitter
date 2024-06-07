import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  PasswordInput,
} from "react-admin";

import { CommentTitle } from "../comment/CommentTitle";
import { LikeTitle } from "../like/LikeTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bio" multiline source="bio" />
        <ReferenceArrayInput
          source="comments"
          reference="Comment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CommentTitle} />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <DateTimeInput label="joinDate" source="joinDate" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="likes"
          reference="Like"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LikeTitle} />
        </ReferenceArrayInput>
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="passwordHash" source="passwordHash" />
        <TextInput label="profileImageUrl" source="profileImageUrl" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Username" source="username" />
        <TextInput label="website" source="website" />
      </SimpleForm>
    </Edit>
  );
};
