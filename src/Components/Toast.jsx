import { Box, useToast, Wrap, WrapItem, Button } from "@chakra-ui/react";
import React from "react";

function Toast() {
  const toast = useToast();
  const statuses = ["success"];
  return (
    <Box>
      <Wrap>
        {statuses.map((status, i) => (
          <WrapItem key={i}>
            <Button
              onClick={() =>
                toast({
                  title: `${status} toast`,
                  status: status,
                  isClosable: true,
                })
              }
            >
              Show {status} toast
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default Toast;
