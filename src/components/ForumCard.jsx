import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import { Stack, Heading, Image, Text, Button } from "@chakra-ui/react";

export function ForumCard({ question, description }) {
  return (
    <div className="flex justify-center w-10/12 bg-white m-5 rounded-xl">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="unstyled"
        className="m-4"
      >
        <div className="flex mt-5">
        <Stack >
          <CardBody>
            <Heading size="md">{question}</Heading>

            <Text py="2">{description}</Text>
          </CardBody>
          <div className="flex justify-center mt-8">
            <CardFooter>
              <Button variant="solid" colorScheme="purple">
                Open Threads
              </Button>
            </CardFooter>
          </div>
        </Stack>
        </div>
        
      </Card>
    </div>
  );
}
