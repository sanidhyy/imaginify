import type { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
  return <main className="auth">{children}</main>;
};

export default AuthLayout;
