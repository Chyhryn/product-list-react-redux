import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 2px 3px 1px rgba(102, 102, 102, 1);
  background-color: #fff;
  border-radius: 5px;

  transition: transform 0.3s ease-in-out;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    transform: scale(1.02);
  }
`;

export const ImgThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 233px;
  height: 233px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const Img = styled.img`
  display: block;
  width: 233px;
  height: 233px;
  max-width: 100%;

  object-fit: contain;
`;

export const Link = styled.a`
  margin-bottom: 10px;

  transition: color 0.3s ease-in-out;
  &:hover,
  &:focus {
    color: orange;
  }
`;

export const Paragraph = styled.p`
  width: 100%;
  text-align: left;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Span = styled.span`
  font-weight: 700;
`;
