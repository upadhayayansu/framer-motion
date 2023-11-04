"use client";
import styled from "styled-components";
import Header from "./components/header/Header";
import SectionLayout from "./components/sectionLayout";
export default function Home() {
  return (
    <>
      <Header />
      <MainStyled>
        <sectionLayout></sectionLayout>
      </MainStyled>
    </>
  );
}

const MainStyled = styled.main`
  min-height: 100vh;
  width: 100%;
`;
