import React from 'react';
import Text from '../../../common/src/components/Text';
import CopyrightWrapper from './copyright.style';

import { socialProfile } from '../../../common/src/data/Interior';

const Copyright = () => {
  return (
    <CopyrightWrapper className="copyright_section">
      <ul>
        {socialProfile.map((profile, index) => (
          <li key={`profile_key_${index}`}>
            <a href="#1">
              <i className={profile.icon} />
            </a>
          </li>
        ))}
      </ul>
      <Text content="Fresh Avocado 2020" />
    </CopyrightWrapper>
  );
};

export default Copyright;
