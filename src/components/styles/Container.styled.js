import styled from "styled-components";
export const Container = styled.div`
  display: ${({ display }) => display};
  position: ${({ position }) => position};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width || "auto"};
  min-height: ${({ minHeight }) => minHeight};
  min-width: ${({minWidth})=> minWidth};
  height: ${({ height }) => height || "auto"};
  text-align: ${({ textAlign }) => textAlign};
  border-radius: ${({ radius }) => radius};
  font-size: ${({fontSize})=> fontSize}
`;
