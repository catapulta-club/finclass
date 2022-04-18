import React from "react";
import Text from "../../components/Text";

import {
  BannerImageBackground,
  ButtonContainer,
  ButtonHeaderContained,
  ButtonHeaderOutlined,
  ButtonIcon,
  Gradient,
  TextContainer,
} from "./styles";
import { Props } from "./types";

const Banner = ({ description, presents, source }: Props) => {
  const {} = useTheme();
  const { width } = useWindowDimensions();

  return (
    <BannerImageBackground resizeMode="cover" width={width} source={source}>
      <TextContainer>
        <Text>{presenter}</Text>
        <Text>{description}</Text>
      </TextContainer>
    </BannerImageBackground>
  );
};

export default Banner;
