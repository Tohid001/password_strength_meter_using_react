import styled from "styled-components";

export const TestimonialContainer = styled.div`
  padding: 38px 18px;
  background: #f3f3f4;
  @media (min-width: 1440px) {
    padding: 150px 424px;
    position: relative;
  }
`;

export const SliderContainer = styled.div`
  & h3 {
    font-style: italic;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    color: #666155;
    margin-bottom: 8px;
    @media (min-width: 1440px) {
      margin-bottom: 38px;
      font-size: 26px;
      line-height: 36px;
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  gap: 16px;

  @media (min-width: 1440px) {
    margin-bottom: 16px;
    gap: 36px;
  }
  & div {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 50%;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    }
    &:nth-child(1) {
      width: 32px;
      aspect-ratio: 1;
      border-radius: 50%;

      @media (min-width: 1440px) {
        width: 58px;
      }
    }
    &:nth-child(2) {
      width: 48px;
      aspect-ratio: 1;
      border-radius: 50%;
      &:before {
        display: none;
      }
      @media (min-width: 1440px) {
        width: 86px;
      }
    }
    &:nth-child(3) {
      width: 32px;
      aspect-ratio: 1;
      border-radius: 50%;

      @media (min-width: 1440px) {
        width: 58px;
      }
    }
  }

  & img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const IntroContainer = styled.section`
  margin-bottom: 30px;
  @media (min-width: 1440px) {
    margin-bottom: 12px;
  }
  & h4 {
    font-weight: bold;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    color: #201700;
    @media (min-width: 1440px) {
      /* margin-bottom: 16px; */
      font-weight: 600;
      font-size: 26px;
      line-height: 36px;
    }
  }

  & p {
    font-weight: 600;
    font-size: 8px;
    line-height: 16px;
    text-align: center;
    color: #666155;
    opacity: 0.7;
    @media (min-width: 1440px) {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  @media (min-width: 1440px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: space-around;
  }
`;

export const ArrowBox = styled.div`
  display: grid;
  place-items: center;
  width: 24px;
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 10px;
  background: ${({ isActive }) => {
    return isActive ? "#FFB900" : "#FFFFFF";
  }};
  box-shadow: ${({ isActive }) => {
    return isActive ? "0px 10px 20px rgba(0, 0, 0, 0.1)" : "null";
  }};
  @media (min-width: 1440px) {
    width: 50px;
    font-size: 24px;
  }
`;