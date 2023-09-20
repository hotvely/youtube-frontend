import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";

const StyledHeader = styled.header`
  position: fixed;
  background-color: white;
  width: 100%;
  /* 비디오 태그 올라가는것 보이지 않도록 z index값 1로 설정*/
  z-index: 1;
  display: flex;
  height: 56px;
  justify-content: space-between;

  * {
    display: flex;
    align-items: center;
  }

  .header-start {
    margin: 10px;
    svg {
      font-size: 20px;
      cursor: pointer;
      padding: 10px;
      color: #666;
    }

    a {
      height: 100%;
      img {
        padding: 20px 10px;
      }
    }
  }

  /*검색창 등등*/
  .header-center {
    flex: 1;
    justify-content: flex-end;

    input {
      display: none;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 20px;
    }
  }

  /*로그인*/
  .header-end {
    margin: 20px;

    button {
      background: none;
      border: 1px solid #ddd;
      border-radius: 50px;
      padding: 10px;
      font-size: 1rem;

      color: #065fd4;

      svg {
        margin-right: 5px;
      }
    }
  }

  @media screen and (min-width: 600px) {
    .header-center {
      justify-content: center;
    }

    .header-center input {
      display: block;
      padding: 10px 20px;
      border: 1px solid #ddd;
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      width: 100%;
      max-width: 400px;
    }
    .header-center button {
      border: 1px solid #ddd;
      border-left: none;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      background-color: #eee;
      padding: 7.5px 20px;
    }
  }

  @media screen and (min-width: 927px) {
    aside {
      display: block;
    }
    section {
      justify-content: flex-start;
    }
  }

  @media screen and (min-width: 1400px) {
    aside {
      width: 200px;
    }

    aside a {
      display: flex;
    }

    aside a i {
      width: 30px;
      margin-right: 20px;
    }

    aside a p {
      font-size: 1rem;
      padding: 0;
    }

    .main-content {
      padding-left: 200px;
    }

    .aside-category {
      display: block;
    }

    .aside-category h2 {
      margin: 22px 22px 0;
    }

    footer {
      display: block;
      margin: 22px;
    }
    .vedio-content {
      max-width: 390px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-start">
        {/* <i className="fa-solid fa-bars" id="aside-icon"></i> */}
        <FontAwesomeIcon icon={faBars} id="aside-icon" />
        <a href="#">
          <img src={logo} style={{ width: 100, height: 100 }} />
        </a>
      </div>

      <div className="header-center">
        <input type="search" name="search" id="search" placeholder="검색" />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
        </button>
      </div>

      <div className="header-end">
        {/* <!-- <div>DarkModeIcon</div> --> */}
        <button>
          <span>
            <FontAwesomeIcon icon={faUser} />
            {/* <i className="fa-regular fa-user fa-beat"></i> */}
          </span>
          <span>로그인</span>
        </button>
      </div>
    </StyledHeader>
  );
};
export default Header;
