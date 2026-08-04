import styled from "styled-components";

export const HomeContainer = styled.div<{ mode: "light" | "dark" }>`
  background-color: ${(props) => (props.mode === "light" ? "white" : "black")};
  height: 100vh;
  width: 100%;
  color: ${(props) => (props.mode === "light" ? "black" : "#fff")};
`;

type variants = "success" | "info" | "danger" | "outline";

export const StyledButton = styled.button<{
  varaints: variants;
  width?: string | number;
}>`
  background: ${(props) =>
    props.varaints === "success"
      ? "green"
      : props.varaints == "danger"
        ? "red"
        : props.varaints == "outline"
          ? "transparent"
          : "blue"};
  border-radius: 5px;
  width: ${(props) =>
    typeof props.width === "string" ? Number(props.width) : props.width}px;
  padding: 10px;
  color: white;
  gap: 10px;
  border-color: ${(props) =>
    props.varaints === "outline" ? "white" : "transparent"};
  border-width: 2px;
`;
