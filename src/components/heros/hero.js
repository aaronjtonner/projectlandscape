import React from "react"
import styled from "styled-components"
import { Container, Flex, Actions } from "../layoutComponents"
import { ButtonPrimary, ButtonSecondaryDark } from "../buttons"
import { StaticImage } from "gatsby-plugin-image"
import { FaCheckCircle } from "react-icons/fa"

const device = {
  md: "43em",
}

const HeroWrapper = styled.div`
  background: url("../../images/hero.jpg"), rgba(0, 0, 0, 0.7);
  background-blend-mode: overlay;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 85vh;
  height: 100%;

  display: flex;
  align-items: center;

  @media screen and (max-width: 26em) {
    min-height: 100vh;
    height: 100%;
  }
`

const Text = styled.div`
  color: var(--txt-light);
  max-width: 90ch;
  width: 100%;
`

const Img = styled.div`
  @media screen and (max-width: 48em) {
    display: none;
  }
`

const ListFlex = styled.div`
  display: flex;

  isplay: flex;
  @media screen and (max-width: 46em) {
    flex-direction: column;
  }

  & > * {
    width: 100%;
  }

  & > * + * {
    margin-left: 2em;

    @media screen and (max-width: 46em) {
      margin-left: 0;
      margin-top: var(--spacer);
    }
  }

  ul {
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    list-style-type: none;
  }
`

export default function HeroBasic() {
  return (
    <HeroWrapper>
      <Container>
        <Flex>
          <Text className="spacing">
            <div>
              <p className="subheader">your personal paradise starts here</p>
              <h2 className="title">outdoor living services done right</h2>
            </div>
            <ButtonPrimary to="/contact">get free estimate</ButtonPrimary>
          </Text>
        </Flex>
      </Container>
    </HeroWrapper>
  )
}
