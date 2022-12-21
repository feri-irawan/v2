import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  chakra,
  Flex,
  Input,
  SimpleGrid,
  Text,
  Textarea,
} from "@chakra-ui/react";

function RedStar() {
  return (
    <Text display="inline" color="red">
      *
    </Text>
  );
}

function ErrorMessage({ children }) {
  return (
    <Text fontSize=".9rem" p=".5rem .2rem" color="#FF0000">
      {children}
    </Text>
  );
}

export default function ContactForm() {
  const schema = yup
    .object({
      name: yup.string().required("Name is a required field"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is a required field"),
      message: yup.string().required("Message is a required field"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={2} gap="1rem" mb="1rem">
        <Box>
          <chakra.label htmlFor="inputName" ml=".2rem">
            Name
            <RedStar />
          </chakra.label>
          <Input
            {...register("name")}
            id="inputName"
            type="text"
            borderColor="#2CFF34"
            bg="#2CFF340D"
          />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </Box>

        <Box>
          <chakra.label htmlFor="inputEmail" ml=".2rem">
            Email
            <RedStar />
          </chakra.label>
          <Input
            {...register("email")}
            id="inputEmail"
            type="email"
            borderColor="#2CFF34"
            bg="#2CFF340D"
          />
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        </Box>
      </SimpleGrid>

      <Box>
        <chakra.label htmlFor="inputMessage" ml=".2rem">
          Message
          <RedStar />
        </chakra.label>
        <Textarea
          {...register("message")}
          id="inputMessage"
          borderColor="#2CFF34"
          bg="#2CFF340D"
          rows={7}
        />
        <ErrorMessage>{errors?.message?.message}</ErrorMessage>
      </Box>

      <Flex justify="flex-end" mt="1rem">
        <Button
          type="submit"
          ml="auto"
          bgGradient="linear(103deg, #2CFF34 0%, #2C5AFF 100%)"
          color="#000000"
          rounded="lg"
          px="1.2rem"
        >
          Send
        </Button>
      </Flex>
    </chakra.form>
  );
}
