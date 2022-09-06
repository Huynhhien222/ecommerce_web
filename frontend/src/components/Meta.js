// import React from 'react';
// import { Helmet } from 'react-helmet';

// const Meta = ({ title, description, keywords }) => {
//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name='description' content={description} />
//       <meta name='keyword' content={keywords} />
//     </Helmet>
//   );
// };

// Meta.defaultProps = {
//   title: 'Welcome To Shopp',
//   description: 'We sell the best products for cheap',
//   keywords: 'electronics, buy electronics, cheap electroincs',
// };

// export default Meta;

import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description}></meta>
      <meta name='keyword' content={keywords}></meta>
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Shop me va be',
  description:'Chung toi ban ta va sua re nhat Viet Nam',
  keywords:'ta, sua'

};
export default Meta;