import React from 'react';
import ContentLoader from "react-content-loader";

const LoadingBlock = () => {
  return (
    <ContentLoader
      className={'pizza-block'}
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 480"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="140" cy="130" r="130" />
      <rect x="0" y="274" rx="6" ry="6" width="280" height="24" />
      <rect x="0" y="314" rx="6" ry="6" width="281" height="84" />
      <rect x="0" y="414" rx="6" ry="6" width="81" height="27" />
      <rect x="127" y="407" rx="25" ry="25" width="151" height="44" />
    </ContentLoader>
  )
};

export default LoadingBlock;
