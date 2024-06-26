/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { Type } from "class-transformer";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

@InputType()
class TweetCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutTweetsInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutTweetsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => LikeCreateNestedManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => LikeCreateNestedManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => LikeCreateNestedManyWithoutTweetsInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutTweetsInput;
}

export { TweetCreateInput as TweetCreateInput };
