import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Stack, Image, Heading, Text, Button } from "@chakra-ui/react";

export function EventCard({ title, description, URL, date, imageURL }) {
  return (
    <div>
      <div className="w-10/12">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        className="m-4"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={imageURL}
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Heading size="md">{title}</Heading>

            <Text py="2">{description}</Text>
          </CardBody>

          <CardFooter>
            <Button variant="solid" colorScheme="purple">
              Register
            </Button>
            <Button variant="solid" colorScheme="purple" mx={"6px"}>{date}</Button>
          </CardFooter>
        </Stack>
      </Card>
    </div>
    </div>
  );
}
