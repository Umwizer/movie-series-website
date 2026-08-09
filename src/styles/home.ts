import styled from "styled-components";

export const HomeContainer = styled.div<{ mode: "light" | "dark" }>`
  background-color: ${(props) => (props.mode === "light" ? "#ffffff" : "#080b10")};
  min-height: 100vh;
  width: 100%;
  color: ${(props) => (props.mode === "light" ? "#000000" : "#ffffff")};
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
`;

type variants = "success" | "info" | "danger" | "outline";

export const StyledButton = styled.button<{
  $variant: variants;
  width?: string | number;
}>`
  background: ${(props) =>
    props.$variant === "success"
      ? "green"
      : props.$variant === "danger"
        ? "red"
        : props.$variant === "outline"
          ? "transparent"
          : "blue"};
  border-radius: 5px;
  width: ${(props) =>
    typeof props.width === "string" ? Number(props.width) : props.width}px;
  padding: 10px;
  color: white;
  gap: 10px;
  border-color: ${(props) =>
    props.$variant === "outline" ? "white" : "transparent"};
  border-width: 2px;
`;
