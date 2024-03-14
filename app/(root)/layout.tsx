import type { PropsWithChildren } from "react";

import { Sidebar } from "@/components/shared/sidebar";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="root">
      <Sidebar />
      {/* MobileNav */}

      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default RootLayout;
