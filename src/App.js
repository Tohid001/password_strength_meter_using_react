
import React, { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
// import "./App.css";
import { dataSet } from "./data.js";
import { GlobalReset } from "./Global.styled.js";
import {
  ArrowBox, AvatarContainer, IconContainer, IntroContainer, SliderContainer, TestimonialContainer
} from "./trialStyled.js";


function App() {
  const [active, setActive] = useState({ lActive: false, rActive: false });
  const [current, setCurrent] = useState(0);

  const length = dataSet.length;

  useEffect(() => {
    if (active.lActive) {
      setCurrent(current === 0 ? length - 1 : current - 1);
    }
    if (active.rActive) {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }
  }, [active]);

  const prev = () => {
    setActive({ lActive: true, rActive: false });
  };
  const next = () => {
    setActive({ rActive: true, lActive: false });
  };
  console.log(current);
  console.log(length);

  return (
    <>
      <GlobalReset />
      <TestimonialContainer>
        {dataSet.map((item, index) => {
          return (
            <SliderContainer
              key={`${item}_${index}`}
              isCurrent={index === current ? true : false}
            >
              {index === current && (
                <>
                  <h3>{item.description}</h3>

                  <AvatarContainer>
                    <div>
                      <img
                        src={
                          dataSet[`${current === 0 ? length - 1 : current - 1}`]
                            .src
                        }
                      ></img>
                    </div>
                    <div>
                      <img src={item.src}></img>
                    </div>
                    <div>
                      <img
                        src={
                          dataSet[`${current === length - 1 ? 0 : current + 1}`]
                            .src
                        }
                      ></img>
                    </div>
                  </AvatarContainer>
                  <IntroContainer>
                    <h4>{item.title}</h4>
                    <p>{item.subTitle}</p>
                  </IntroContainer>
                </>
              )}
            </SliderContainer>
          );
        })}

        <IconContainer>
          <ArrowBox isActive={active.lActive}>
            <BsArrowLeft color={active.lActive && "white"} onClick={prev} />
          </ArrowBox>
          <ArrowBox isActive={active.rActive}>
            <BsArrowRight color={active.rActive && "white"} onClick={next} />
          </ArrowBox>
        </IconContainer>
      </TestimonialContainer>
    </>
  );
}

export default App;