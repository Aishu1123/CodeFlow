import { Box, Heading, Text } from "@chakra-ui/layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../assets/Extra";

const SolvedQuestionProfile = (questionId) => {
  // console.log(questionId);
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    const getQuestion = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.log("no token found!");
        return;
      }
      try {
        const res = await axios.get(
          `${url}/questions/${questionId.questionId}`
        );
        setQuestion(res.data.question);
        console.log(res.data);
        // diff.push(res.data.question.difficulty);
      } catch (error) {
        console.log(error);
      }
    };
    getQuestion();
  }, []);
  // console.log(question.question.title);
  // console.log(diff);
  return (
    <>
      <Box border={"2px solid orange"} p={3} width={"100%"} mb={2}>
        <Box
          // border={"2px solid red"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Heading fontSize={{ base: "1.4rem", md: "1.8rem" }} mb={2}>
              {question.title}
            </Heading>
            <Text w={{ base: "85%", md: "100%" }}>{question.description}</Text>
          </Box>
          <Box>
            <Text fontSize={"1.5rem"} fontWeight={"bold"} color={"green"}>
              {question.points}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SolvedQuestionProfile;
