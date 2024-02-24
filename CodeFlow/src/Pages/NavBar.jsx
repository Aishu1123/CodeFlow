import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Spacer,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
// import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { authLinLout } from "../redux/authSlice";
// import axios from "axios";
import { HamburgerIcon } from "@chakra-ui/icons";
import image from "../assets/logo2.png";
// import React from "react";

const Navbar = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const auth = useSelector((state) => state.auth.auth);
  const auth = false;

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Flex
          p={{ base: ".8rem 1.3rem", md: ".6rem 3rem" }}
          boxShadow="base"
          bg={"#19212C"}
          display={"flex"}
          alignItems={"center"}
          direction={{ base: "row", md: "row" }}
        >
          <Box>
            <Link to={"/"}>
              <Image
                src={image}
                alt="Simple Notes Logo"
                width={{ base: "4.3rem", md: "4.5rem" }}
              />
            </Link>
          </Box>
          <Spacer />
          <Box>
            <IconButton
              icon={<HamburgerIcon color="white" fontSize={"1.6rem"} />}
              aria-label="Open navigation"
              onClick={onOpen}
              display={{ base: "flex", md: "none" }}
              bgColor="#854CE6"
            />

            <Flex
              gap={4}
              display={{ base: "none", md: "flex" }}
              justifyContent="space-around"
            >
              <Link to="/">
                <Button
                  fontSize={"1.3rem"}
                  color={"white"}
                  bg={"transparent"}
                  _hover={{ bg: "transparent", color: "#90ee90" }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  fontSize={"1.3rem"}
                  color={"white"}
                  bg={"transparent"}
                  _hover={{ bg: "transparent", color: "#90ee90" }}
                >
                  About
                </Button>
              </Link>
              <Link to="/html">
                <Button
                  fontSize={"1.3rem"}
                  color={"white"}
                  bg={"transparent"}
                  _hover={{ bg: "transparent", color: "#90ee90" }}
                >
                  HTML Compiler
                </Button>
              </Link>
              <Link to="/contest">
                <Button
                  fontSize={"1.3rem"}
                  color={"white"}
                  bg={"transparent"}
                  _hover={{ bg: "transparent", color: "#90ee90" }}
                >
                  Contest
                </Button>
              </Link>

              {auth ? (
                <>
                  <Link to="/dashboard">
                    <Button
                      fontSize={"1.3rem"}
                      color={"white"}
                      bg={"transparent"}
                      _hover={{ bg: "transparent", color: "#90ee90" }}
                    >
                      User
                    </Button>
                  </Link>

                  <Button
                    fontSize={"1.3rem"}
                    color={"black"}
                    bg={"white"}
                    _hover={{ bg: "", color: "black" }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      fontSize={"1.3rem"}
                      color={"white"}
                      bg={"transparent"}
                      _hover={{ bg: "transparent", color: "#90ee90" }}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button
                      fontSize={"1.3rem"}
                      color={"white"}
                      bg={"transparent"}
                      _hover={{ bg: "transparent", color: "#90ee90" }}
                    >
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
            </Flex>
          </Box>
        </Flex>

        <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Link
                className="hover:bg-primeGreen-600 block py-2"
                color="#2f4e44"
                to="/"
                onClick={onClose}
              >
                Home
              </Link>
              <Link
                className="hover:bg-primeGreen-600 block py-2"
                color="#2f4e44"
                to="/about"
                onClick={onClose}
              >
                About
              </Link>
              <Link
                className="hover:bg-primeGreen-600 block py-2"
                color="#2f4e44"
                to="/html"
                onClick={onClose}
              >
                HTML Compiler
              </Link>
              <Link
                className="hover:bg-primeGreen-600 block py-2"
                color="#2f4e44"
                to="/judger"
                onClick={onClose}
              >
                Judger
              </Link>

              {auth ? (
                <>
                  <Link
                    to="/dashboard"
                    className="hover:bg-primeGreen-600 block py-2"
                    color="#2f4e44"
                    onClick={onClose}
                  >
                    User
                  </Link>

                  <Text
                    className="hover:bg-primeGreen-600 block py-2"
                    color="#2f4e44"
                    onClick={onClose}
                  >
                    Logout
                  </Text>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="hover:bg-primeGreen-600 block py-2"
                    color="#2f4e44"
                    onClick={onClose}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="hover:bg-primeGreen-600 block py-2"
                    color="#2f4e44"
                    onClick={onClose}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
