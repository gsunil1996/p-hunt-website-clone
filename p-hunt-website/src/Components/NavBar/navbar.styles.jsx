import styled from "styled-components";

export const NavBarDiv = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0 0 1px 1px rgb(33 41 63 / 10%);
  top: 0;
  width: 100%;
  position: fixed;
  height: 40px;
  padding: 20px;
  z-index: 10
`;
export const NavLeftDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  & .P_div {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-color: #da552f;
    border-radius: 50%;
    & > h1 {
      margin: 0px;
      color: white;
      line-height: 1.2;
    }
  }
  & > input {
    appearance: none;
    background: #f5f8ff;
    border-radius: 5px;
    border: 0;
    box-sizing: border-box;
    height: 40px;
    padding: 0 20px 0 40px;
    width: 220px;
  }
  & > input::-webkit-input-placeholder {
    color: gray;
  }
  & a {
    text-decoration: none;

    color: #4b587c;
    cursor: pointer;
    line-height: 2;
    margin-left: 15px;
  }
  & .product,
  .community,
  .tools,
  .jobs {
    :hover {
      & a {
        color: #da552f;
      }
      & .productDropDown {
        display: block;
      }
    }
  }
  & .about {
    :hover {
      & a {
        color: #da552f;
      }
      & .productDropDown {
        display: block;

        width: 200px;
        & > div {
          padding: 12px;
          height: 20px;
          & > h5 {
            font-size: 15px;
            font-weight: 500;
          }
        }
      }
    }
  }
`;
export const NavRightDiv = styled.div`
  display: flex;
  justify-content: right;
  width: 37%;
  .submit {
    :hover {
      & .productDropDown {
        display: block;
        width: 300px;
        right: 10%;
        & p {
          margin-top: -10px;
        }
      }
    }
  }
  .profile-pic {
    height: 45px;
    width: 45px;
    cursor: pointer;
    border-radius: 50%;
    margin-left: 30px;
    & > img {
      height: 45px;
      width: 45px;
      cursor: pointer;
      border-radius: 50%;
    }
    :hover {
      & .productDropDown {
        display: block;
        right: 1%;
        width: 200px;
        & > div {
          padding: 12px;
          height: 20px;
          & > h5 {
            font-size: 15px;
            font-weight: 500;
          }
        }
      }
    }
  }
  & > svg {
    margin-top: 15px;
    margin-left: 30px;
  }
  .submit {
    line-height: 2;

    color: #da552f;
  }
  & > a {
    text-decoration: none;
    color: #4b587c;
    margin-left: 20px;
    line-height: 2;
    :hover {
      color: #da552f;
    }
  }
  & > .signIn {
    background: none;
    color: #4b587c;
    margin-left: 20px;
    line-height: 2;
    :hover {
      color: #da552f;
    }
  }
  & > button {
    margin-left: 20px;
    background-color: #da552f;
    border: none;
    border-radius: 4px;
    color: white;
    cursor: pointer;
  }
`;

export const Modaldiv = styled.div`
  height: 60vh;
  width: 40vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  & > img {
    height: 100px;
    width: 110px;
    margin-top: 20px;
  }
  & > .text-content {
    margin-bottom: 20px;
    margin-top: 20px;
    & > h2,
    p {
      margin: 0px;
    }
    & > h2 {
      font-weight: 500;
    }
    & > p {
      font-size: 14px;
      width: 80%;
      margin: auto;
      color: #4b587c;
    }
  }
  & .google-signin-btn {
    display: flex;
    border: 1px solid #d9e1ec;
    padding: 15px 30px;
    background-color: white;
    :hover {
      background-color: #f3f3f3;
    }
    & > h3 {
      margin: 0px;
      /* line-height: 0.8; */
      margin-left: 20px;
      font-weight: 500;
    }
  }
  & .other-logins {
    margin-top: 20px;
    display: flex;
    & > button {
      height: 45px;
      width: 45px;
      background-color: white;
      border: 1px solid #d9e1ec;
      margin: 5px;
      :hover {
        background-color: #f3f3f3;
      }
    }
  }
  & > p {
    font-size: 12px;
    color: #4b587c;
  }
`;
