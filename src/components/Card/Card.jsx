import React from "react";

import { useDispatch } from "react-redux";

// Components

import Comment from "../Comment";
import SlideShow from "../SlideShow";
import Stars from "../Stars";

// Styles

import {
  Card,
  Divider,
  CardHeader,
  CardActions,
  Collapse,
  Button,
  CardContent,
  CardHeaderRightWrapper,
  CardHeaderWrapper,
  CardMedia,
  UpperWrapper,
  DateCreated,
  ExpandIcon,
  Price,
  LinearProgress,
  CircularProgress,
  CommentsErrorText,
  CommentsErrorWrapper,
  ImagesLoadingWrapper,
  ImagesErrorWrapper,
  ImagesErrorText,
  UserRatingText,
  Description
} from "./styles";

const HotelCard = ({
  id,
  name,
  country,
  city,
  price,
  stars,
  rating,
  description,
  date_created: dateCreated,
  images,
  fetchHotelImages,
  fetchHotelComments,
  comments
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
    if (!comments) {
      dispatch(fetchHotelComments(id));
    }
  };

  React.useEffect(() => {
    !images && dispatch(fetchHotelImages(id));
  }, [dispatch, fetchHotelImages, id, images]);

  const refetchImages = () => {
    dispatch(fetchHotelImages(id));
  };

  const refetchComments = () => {
    dispatch(fetchHotelComments(id));
  };

  const renderComments = () => {
    if (comments && comments.comments) {
      if (comments.loading) {
        return <LinearProgress />;
      } else if (comments.error) {
        return (
          <CommentsErrorWrapper>
            <CommentsErrorText>
              An error occurred during fetching
            </CommentsErrorText>
            <Button
              variant="contained"
              color="secondary"
              onClick={refetchComments}
            >
              Try Again
            </Button>
          </CommentsErrorWrapper>
        );
      } else if (comments.comments.result) {
        return comments.comments.result.map(id => (
          <Comment key={id} {...comments.comments.entities.comment[id]} />
        ));
      } else {
        return null;
      }
    }
    return null;
  };

  const renderImages = () => {
    if (images) {
      if (images.loading) {
        return (
          <ImagesLoadingWrapper>
            <CircularProgress size={80} />
          </ImagesLoadingWrapper>
        );
      } else if (images.error) {
        return (
          <ImagesErrorWrapper>
            <ImagesErrorText>An error occurred during fetching</ImagesErrorText>
            <Button
              variant="contained"
              color="secondary"
              onClick={refetchImages}
            >
              Try Again
            </Button>
          </ImagesErrorWrapper>
        );
      } else if (images.links) {
        return <SlideShow images={images} />;
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  return (
    <Card>
      <UpperWrapper>
        <CardMedia title={name}>{renderImages()} </CardMedia>

        <CardContent>
          <CardHeaderWrapper>
            <CardHeader title={name} subheader={`${country}, ${city}`} />
            <CardHeaderRightWrapper>
              <Stars value={stars} />
              <UserRatingText>
                {`User rating: ${Number.parseFloat(rating).toFixed(2)}`}
              </UserRatingText>
            </CardHeaderRightWrapper>
          </CardHeaderWrapper>
          <Price>{`$${price} per night`}</Price>
          <Description variant="body2" color="textSecondary" component="p">
            {description}
          </Description>
          <CardActions disableSpacing>
            <DateCreated>{dateCreated}</DateCreated>
            <Button
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              endIcon={<ExpandIcon expanded={expanded} />}
            >
              {expanded ? "Hide Comments" : "Show Comments"}
            </Button>
          </CardActions>
        </CardContent>
      </UpperWrapper>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent>{renderComments()}</CardContent>
      </Collapse>
    </Card>
  );
};

export default HotelCard;
