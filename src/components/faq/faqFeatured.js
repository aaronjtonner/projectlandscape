import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"
import { Container, FlexMobileOpp, Section } from "../layoutComponents"
import styled from "styled-components"
import { ButtonSecondaryLight } from "../buttons"

const Wrapper = styled.div`
  background: url("../../../images/hero.jpg"), rgba(0, 0, 0, 0.8);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: var(--txt-light);
`

const AccordionStyle = {
  background: "var(--clr-accent)",
  borderRadius: "var(--br)",
  border: "none",
}

export default function FaqFeatured(props) {
  return (
    <Wrapper>
      <Section>
        <Container>
          <FlexMobileOpp>
            <Accordion className="spacing">
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Section 3 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Section 4 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem style={AccordionStyle}>
                <h2>
                  <AccordionButton>
                    <Box
                      className="subheader"
                      as="span"
                      flex="1"
                      textAlign="left"
                    >
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <div className="spacing">
              <h2 className="title">title</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquam hic magnam id suscipit, ducimus esse quo laboriosam
                molestiae harum, natus odio voluptatum illo rem doloremque.
                Temporibus asperiores maxime neque facere, delectus quod
                suscipit, unde sed iste quasi perspiciatis corporis non ab velit
                nihil officiis. Itaque labore incidunt dignissimos excepturi
                vitae libero tempora alias quia fugit neque nisi veniam suscipit
                voluptatum dolorum ratione, dolores vero maiores placeat nostrum
                deleniti ipsum necessitatibus minima. Eligendi provident ad quo
                deserunt inventore esse placeat fuga tempora sequi. Magnam
                assumenda porro corrupti modi debitis voluptatum est
                voluptatibus repellat dolorum neque eligendi ipsam ratione,
                consectetur tempore soluta.
              </p>
              <ButtonSecondaryLight to="/contact">
                book a service
              </ButtonSecondaryLight>
            </div>
          </FlexMobileOpp>
        </Container>
      </Section>
    </Wrapper>
  )
}
