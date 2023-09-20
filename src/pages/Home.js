import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBagShopping,
  faMusic,
  faClapperboard,
  faGamepad,
  faMedal,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { getCategories } from "../api/video";

const Test = styled.div`
  background-color: black;
  color: white;
`;

const StyledMain = styled.main`
  padding-top: 56px;
  display: flex;
  &.aside-change {
    aside {
      width: 70px;

      a {
        flex-direction: column;

        p {
          font-size: 0.8rem;
          margin-top: 10px;
        }
      }
      .aside-category {
        display: none;
      }

      footer {
        display: none;
      }
    }
    .main-content {
      padding-left: 70px;
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

    aside a svg {
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

const StyleAside = styled.aside`
  display: none;
  position: fixed;
  background-color: #fff;
  z-index: 1;
  width: 70px;
  overflow-y: auto;
  height: 100%;
  a {
    display: block;
    text-align: center;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    &:hover {
      background-color: #ddd;
    }
    p {
      padding-top: 3px;
      font-size: 0.8rem;
    }
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 10px;
  }
  & ::-webkit-scrollbar-track {
    background-color: white;
  }
  .aside-top {
  }

  .aside-category {
  }
  .footer {
    display: none;
  }
`;

const MainContent = styled.div`
  padding-left: 70px;
  nav {
    position: fixed;
    background-color: white;
    width: 100%;
    height: 56px;
    z-index: 1;
    padding-left: 15px;

    a {
      background-color: #eee;
      padding: 5px 10px;
      border-radius: 5px;
      line-height: 56px;
      margin: 5px;
      &.active {
        background-color: #000;
        color: white;
      }
    }
  }

  section {
    padding-top: 56px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .video-content {
      display: block;
      width: 100%;
      max-width: 400px;
      margin-top: 20px;
      margin: 10px;

      video {
        border-radius: 15px;
        height: 220px;
        object-fit: cover;
      }

      .video-summary {
        display: flex;
        width: 100%;
        max-width: 400px;
        margin: 10px 0px;

        img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          margin-right: 10px;
        }

        .video-desc {
          width: 100%;

          h3 {
            line-height: 1.4;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;

            /*제목이 여러 줄 인 경우에 필요한 코드*/
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
          }

          p {
            font-size: 0.9rem;
            color: #333;
            line-height: 1.2;
          }
        }
      }
    }
  }
`;

const Home = () => {
  const [categories, setCategories] = useState([]);

  const categoryAPI = async () => {
    const result = await getCategories();
    setCategories(result.data);
  };

  useEffect(() => {
    categoryAPI();
    // fetch("http://localhost:8080/api/category").then((response) => {
    //   response.json().then((json) => {
    //     setCategories(json);
    //   });
    //});
  }, []);

  return (
    <StyledMain>
      {/* <h1>Home</h1> */}
      {/* <Test>test@@@</Test> */}

      <StyleAside>
        <div className="aside-top">
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
            </span>
            <p>홈</p>
          </a>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon>
            </span>
            <p>구독</p>
          </a>
        </div>

        <div className="aside-category">
          <h2>탐색</h2>
          {categories.map((data) => (
            <a href="#" key={data.categoryCode}>
              <span>
                {data.categoryCode === 1 ? (
                  <FontAwesomeIcon icon={faBagShopping}></FontAwesomeIcon>
                ) : data.categoryCode === 2 ? (
                  <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
                ) : data.categoryCode === 3 ? (
                  <FontAwesomeIcon icon={faClapperboard}></FontAwesomeIcon>
                ) : data.categoryCode === 4 ? (
                  <FontAwesomeIcon icon={faGamepad}></FontAwesomeIcon>
                ) : data.categoryCode === 5 ? (
                  <FontAwesomeIcon icon={faMedal}></FontAwesomeIcon>
                ) : data.categoryCode === 6 ? (
                  <FontAwesomeIcon icon={faLightbulb}></FontAwesomeIcon>
                ) : null}
              </span>
              <p>{data.categoryName}</p>
            </a>
          ))}

          {/* <a href="#">
            <span>
              <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
            </span>
            <p>음악</p>
          </a> */}
        </div>

        <footer>개인정보처리방침</footer>
      </StyleAside>
      <MainContent className="main-content">
        <nav>
          <a href="#" className="active">
            전체
          </a>
          {categories.map((data) => (
            <a href="#" key={data.categoryCode}>
              {data.categoryName}
            </a>
          ))}
          {/* <a href="#" className="active">
            전체
          </a>
          <a href="#">쇼핑</a>
          <a href="#">음악</a> */}
        </nav>

        <section>
          <a href="#" className="video-content">
            <video
              poster="./resources/thumbnail.jpg"
              width="100%"
              autoPlay
              loop
              controls
            >
              <source src="./resources/video.mp4" type="video/mp4" />
            </video>
            <div className="video-summary">
              <img src="./resources/thumbnail.jpg" alt="채널이미지" />
              <div className="video-desc">
                <h3>
                  "한국 사람들은 소풍가서 이렇게 먹어?! 캐나다에서 김밥 팔자는
                  엄마.." 김밥에 라면 처음 먹어본 캐나다 가족 반응! 라면 국물에
                  김밥 찍어먹더니.. 외국인 김밥먹방 [국제커플]
                </h3>
                <p>tvN</p>
                <p>
                  조회수 <span>9.1만</span>
                  회ㆍ
                  <span>1일</span> 전
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="video-content">
            <video
              poster="./resources/thumbnail.jpg"
              width="100%"
              autoPlay
              loop
              controls
            >
              <source src="./resources/video.mp4" type="video/mp4" />
            </video>
            <div className="video-summary">
              <img src="./resources/thumbnail.jpg" alt="채널이미지" />
              <div className="video-desc">
                <h3>부산촌놈 마지막화..!!</h3>
                <p>tvN</p>
                <p>
                  조회수 <span>9.1만</span>
                  회ㆍ
                  <span>1일</span> 전
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="video-content">
            <video
              poster="./resources/thumbnail.jpg"
              width="100%"
              autoPlay
              loop
              controls
            >
              <source src="./resources/video.mp4" type="video/mp4" />
            </video>
            <div className="video-summary">
              <img src="./resources/thumbnail.jpg" alt="채널이미지" />
              <div className="video-desc">
                <h3>부산촌놈 마지막화..!!</h3>
                <p>tvN</p>
                <p>
                  조회수 <span>9.1만</span>
                  회ㆍ
                  <span>1일</span> 전
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="video-content">
            <video
              poster="./resources/thumbnail.jpg"
              width="100%"
              autoPlay
              loop
              controls
            >
              <source src="./resources/video.mp4" type="video/mp4" />
            </video>
            <div className="video-summary">
              <img src="./resources/thumbnail.jpg" alt="채널이미지" />
              <div className="video-desc">
                <h3>부산촌놈 마지막화..!!</h3>
                <p>tvN</p>
                <p>
                  조회수 <span>9.1만</span>
                  회ㆍ
                  <span>1일</span> 전
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="video-content">
            <video
              poster="./resources/thumbnail.jpg"
              width="100%"
              autoPlay
              loop
              controls
            >
              <source src="./resources/video.mp4" type="video/mp4" />
            </video>
            <div className="video-summary">
              <img src="./resources/thumbnail.jpg" alt="채널이미지" />
              <div className="video-desc">
                <h3>부산촌놈 마지막화..!!</h3>
                <p>tvN</p>
                <p>
                  조회수 <span>9.1만</span>
                  회ㆍ
                  <span>1일</span> 전
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="video-content">
            <video
              poster="./resources/thumbnail.jpg"
              width="100%"
              autoPlay
              loop
              controls
            >
              <source src="./resources/video.mp4" type="video/mp4" />
            </video>
            <div className="video-summary">
              <img src="./resources/thumbnail.jpg" alt="채널이미지" />
              <div className="video-desc">
                <h3>부산촌놈 마지막화..!!</h3>
                <p>tvN</p>
                <p>
                  조회수 <span>9.1만</span>
                  회ㆍ
                  <span>1일</span> 전
                </p>
              </div>
            </div>
          </a>
        </section>
      </MainContent>
    </StyledMain>
  );
};

export default Home;
