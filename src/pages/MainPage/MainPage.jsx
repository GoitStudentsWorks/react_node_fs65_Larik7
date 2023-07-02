import React from 'react';

import { AuthSection } from 'components/MainPage/AuthSection/AuthSection';
import { Description } from 'components/MainPage/Description/Description';
// import { ReviewsSlider } from 'components/MainPage/ReviewSlider/ReviewCard';

export const MainPage = () => {
  return (
    <>
      <AuthSection />
      <Description />
      {/* <ReviewsSlider /> */}
    </>
  );
};
