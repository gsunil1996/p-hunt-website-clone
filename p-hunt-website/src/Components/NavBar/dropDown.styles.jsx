import styled from "styled-components";

export const DropDownDiv = styled.div`
  /* height: 400px;
background-color: tomato;
position: absolute;
/* z-index: 100; */
  /* width: 350px;
top: 17px; */
  /* opacity: 0; */
  /* pointer-events: none; */

  width: 350px;
  background-color: #fff;
  position: absolute;
  top: 60px;
  margin-left: 16px;
  box-shadow: 0px 0px 8px 1px rgb(33 41 60 / 10%);
  border-radius: 8px;
  overflow: hidden;
  display: none;
  & > div {
    display: flex;
    height: 40px;
    padding: 5px;
    & img {
      height: 30px;
      margin-top: 5px;
      margin-left: 10px;
    }
  }
  & h5,
  p {
    margin: 0px;
    text-align: left;
    margin-left: 20px;
    color: #4b587c;
  }
  & p {
    font-size: 0.8rem;
  }
`;
