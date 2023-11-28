import React from "react";
import bg from "../assets/bg.webp";
import {
  Container,
  Box,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Login from "../components/Login";
import Signup from "../components/Signup";

const Home = () => {
  return (
    <>
      <div className="absolute z-0">
        <img src={bg} className="h-[100vh] w-[100vw]" />
      </div>

      <div className="relative z-10">
        <Container maxW="xl" centerContent>
          <Box
            d="flex"
            justifyContent="center"
            p={3}
            bg={"white"}
            w="100%"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px">
            <Text>
              <h1 className="text-2xl poppins text-center font-semibold">
                Sociout
              </h1>
            </Text>
          </Box>

          <Box bg="white" w="40%" p={4} borderRadius="lg" borderWidth="1px">
            <Tabs variant="soft-rounded" colorScheme="green">
              <TabList>
                <Tab width="50%">Login</Tab>
                <Tab width="50%">Sign Up</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                 <Login/>
                </TabPanel>
                <TabPanel>
                  <Signup/>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Home;
