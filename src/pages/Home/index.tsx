import React, { useCallback, useState } from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "styled-components";

import finclassIcon from "../../../assets/icons/logo/Vector.png";

import Text from "../../components/Text";
import Banner from "./localComponent/Banner";
import Steps from "./localComponent/Steps";
import { data } from "./mock";

import { BannerContainer, Container, FinclassIcon } from "./styles";

const Home: React.FC = () => {
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const { colors } = useTheme();

  /**
   * States   *
   */
  const [sliderPage, setSliderPage] = useState(0);

  /**
   * Callback
   */
  const setSliderPageEvent = useCallback(
    (event: any) => {
      const { x } = event.nativeEvent.contentOffset;
      const indexOfNextScreen = Math.ceil(x / width);
      if (indexOfNextScreen !== sliderPage) {
        setSliderPage(indexOfNextScreen);
      }
    },
    [sliderPage]
  );

  return (
    <Container>
      <ScrollView>
        <BannerContainer>
          <FinclassIcon top={top} source={finclassIcon} />

          <ScrollView
            onScroll={(e) => setSliderPageEvent(e)}
            decelerationRate={"fast"}
            snapToInterval={width}
            snapToAlignment="center"
            bounces={false}
            horizontal
            alwaysBounceHorizontal={false}
            pagingEnabled
            scrollEventThrottle={8}
          >
            <Banner
              source={data[0].image}
              description={data[0].desc}
              presenter={data[0].title}
            />
            <Banner
              source={data[1].image}
              description={data[1].desc}
              presenter={data[1].title}
            />
            <Banner
              source={data[2].image}
              description={data[2].desc}
              presenter={data[2].title}
            />
          </ScrollView>
          <Steps index={sliderPage} />
        </BannerContainer>
      </ScrollView>
    </Container>
  );
};

export default Home;
