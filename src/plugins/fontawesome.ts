import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';

import {
  faSearch,
  faTimesCircle,
  faBars,
  faStar,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  // Solid
  faSearch,
  faTimesCircle,
  faBars,
  faStar,
  faPlus,
  faUser,

  // Brands
  faTwitter,
  faFacebookSquare,
  faInstagram,

  // Regular
  farStar,
);
