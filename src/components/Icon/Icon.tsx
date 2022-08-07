import React from "react";
import { StyledIcon } from "./StyledIcon";
import { IconProps } from "./types";

const path = "/img/icons/";
const CardHeader: React.FC<IconProps> = ({ name, height, ...props }) => {
  return <StyledIcon height={height} {...props} src={path + name} />;
};

export default CardHeader;
