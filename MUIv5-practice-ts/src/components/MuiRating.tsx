import { Favorite, FavoriteRounded } from "@mui/icons-material";
import { Rating, Stack } from "@mui/material";
import React, { useState } from "react";

const MuiRating = () => {
  const [rating, setRating] = useState<number | null>(4);

  const handleRating = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setRating(newValue);
  };
  console.log({ rating });

  return (
    <Stack spacing={2}>
      <Rating
        value={rating}
        onChange={handleRating}
        precision={0.5}
        size="large"
        icon={<Favorite fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteRounded fontSize="inherit" />}
        // readOnly (when showing rating of a product)
        highlightSelectedOnly //when emojis
      />
    </Stack>
  );
};

export default MuiRating;
