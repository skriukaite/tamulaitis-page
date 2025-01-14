import { css } from 'styled-components';
import { remarkImageStyles } from './remarkImage.styles';

// eslint-disable-next-line import/prefer-default-export
export const remarkImageGalleryStyles = css`
  .image-gallery {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.66rem;
    padding-bottom: 0.83rem;

    .image-gallery-item {
      width: 100%;
      height: auto;

      img {
        width: 100%;
        display: block;
        @media (max-width: 499px) {
          width: calc(100% + 2 * ${(props) => props.theme.pagePaddingHorizontal});
        }
      }

      ${remarkImageStyles}
    }

    @media (max-width: 560px) {
      grid-template-columns: 1fr;
    }
  }
`;
