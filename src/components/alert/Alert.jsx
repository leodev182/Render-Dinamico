import { Alert as AlertB } from "react-bootstrap";

export const Alert = ({ variant, children }) => {
  // console.log(children);
  return <AlertB variant={variant}>{children}</AlertB>;
};
