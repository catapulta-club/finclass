import React from "react";
import Text from "../../components/Text";
import Banner from "./localComponent/Banner";
import { data } from "./mock";

import { Container } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Text>Home</Text>
      <Banner
        source={data[0].image}
        description={data[0].desc}
        presenter={data[0].title}
      />
    </Container>
  );
};

export default Home;
