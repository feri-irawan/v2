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
      <SimpleGrid columns={2} gap="1rem" mb=".5rem">
        <Box>
          <chakra.label htmlFor="inputName" ml=".2rem">
            Name
            <RedStar />
          </chakra.label>
          <Box
            p={{ base: ".1rem", sm: ".1rem .1rem .15rem .15rem" }}
            bgGradient="linear(135deg, #2CFF34 0%, #2C5AFF 100%)"
            rounded={8}
          >
            <Box bgColor="#1E1E1E" rounded="inherit">
              <Input
                {...register("name")}
                id="inputName"
                type="text"
                bg="#2CFF340D"
                border="none"
                borderColor="#2CFF34"
                rounded="inherit"
              />
            </Box>
          </Box>
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </Box>

        <Box>
          <chakra.label htmlFor="inputEmail" ml=".2rem">
            Email
            <RedStar />
          </chakra.label>
          <Box
            p={{ base: ".1rem", sm: ".1rem .1rem .15rem .15rem" }}
            bgGradient="linear(135deg, #2CFF34 0%, #2C5AFF 100%)"
            rounded={8}
          >
            <Box bgColor="#1E1E1E" rounded="inherit">
              <Input
                {...register("email")}
                id="inputEmail"
                type="email"
                bg="#2CFF340D"
                border="none"
                borderColor="#2CFF34"
                rounded="inherit"
              />
            </Box>
          </Box>
          <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        </Box>
      </SimpleGrid>

      <Box>
        <chakra.label htmlFor="inputMessage" ml=".2rem">
          Message
          <RedStar />
        </chakra.label>
        <Box
          p={{ base: ".1rem", sm: ".1rem .1rem .15rem .15rem" }}
          bgGradient="linear(135deg, #2CFF34 0%, #2C5AFF 100%)"
          rounded={8}
        >
          <Box bgColor="#1E1E1E" rounded="inherit">
            <Textarea
              {...register("message")}
              id="inputMessage"
              bg="#2CFF340D"
              rows={7}
              border="none"
              borderColor="#2CFF34"
              rounded="inherit"
              resize="none"
            />
          </Box>
        </Box>
        <ErrorMessage>{errors?.message?.message}</ErrorMessage>
      </Box>

      <Flex justify="flex-end" mt="1rem">
        <Button
          type="submit"
          ml="auto"
          bgGradient="linear(135deg, #2CFF34 0%, #2C5AFF 100%)"
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
