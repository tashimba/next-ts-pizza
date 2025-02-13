import React from "react";

interface Props {
  className?: string;
}
export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="min-h-screen ">qwe{children}</main>;
}
