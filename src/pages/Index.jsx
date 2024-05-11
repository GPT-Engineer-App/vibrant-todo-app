import { useState } from "react";
import { Container, VStack, Input, Button, Text, Box, IconButton, useColorModeValue, Heading, List, ListItem, ListIcon, Flex } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const colorScheme = "teal";

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Heading>Todo App</Heading>
        <Flex>
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add a new task" size="md" mr={2} />
          <IconButton icon={<FaPlus />} onClick={handleAddTodo} colorScheme={colorScheme} aria-label="Add todo" />
        </Flex>
        <List spacing={3} w="full">
          {todos.map((todo, index) => (
            <ListItem key={index} p={2} bg={bgColor} borderRadius="md">
              <Flex justify="space-between" align="center">
                <Text>{todo}</Text>
                <IconButton icon={<FaTrash />} onClick={() => handleDeleteTodo(index)} colorScheme="red" aria-label="Delete todo" size="sm" />
              </Flex>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
