import React from 'react';
import * as S from './Footer.styles';
import ContactButton from '../../ContactButton/ContactButton';
import profilePicture from './giedrius-tamulaitis-profile-picture.jpg';
import { BRAND_NAME } from '../../../constants';

const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.InfoContainer>
        <S.ProfilePictureContainer>
          <img src={profilePicture} alt={BRAND_NAME} />
        </S.ProfilePictureContainer>
        <S.ProfileTitle>{BRAND_NAME}</S.ProfileTitle>
        <S.ProfileDescription>As a musician, I have been honing my craft and making a name for myself in the industry. My unique blend of genres, including rock, pop, and electronic, creates a sound that is both fresh and familiar. I have a natural talent for writing catchy hooks and memorable melodies which has helped me to gain a dedicated fan base. I pride myself on my creative approach to music and my undeniable stage presence. I am determined to continue making waves in the industry and am excited for what the future holds.</S.ProfileDescription>
        <S.ContactButtonContainer>
          <ContactButton />
        </S.ContactButtonContainer>
      </S.InfoContainer>
    </S.FooterContainer>
  );
};

export default Footer;