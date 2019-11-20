import React from "react";

import {
  Wrapper,
  NameWrapper,
  Avatar,
  FullName,
  CommentBody,
  Date,
  Divider
} from "./styles";

const Comment = ({ fullName, comment, date_created: dateCreated }) => {
  const genNameInitials = () => {
    return fullName
      .split(" ")
      .map(n => n[0])
      .join("");
  };
  return (
    <Wrapper>
      <NameWrapper>
        <Avatar>{genNameInitials()}</Avatar>

        <FullName>{fullName}</FullName>
      </NameWrapper>
      <CommentBody
        paragraph
        variant="body2"
        color="textSecondary"
        component="p"
      >
        {comment}
      </CommentBody>
      <Date variant="subtitle2" color="textSecondary" component="p" paragraph>
        {dateCreated}
      </Date>
      <Divider />
    </Wrapper>
  );
};

export default Comment;
