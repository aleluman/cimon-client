import { SpinnerBox, SpinnerContainer } from "./styles";

type SpinnerProps = {
  size: number;
  thickness: number;
};

export const Spinner = ({ size, thickness }: SpinnerProps) => {
  return (
    <SpinnerContainer>
      <SpinnerBox
        css={{
          width: size,
          height: size,
          border: `${thickness}px solid transparent`,
          borderTopColor: "$iconNormal",
        }}
      />
    </SpinnerContainer>
  );
};
