import { ReactNode } from "react";

export default function ErrorMessage({children} : {children: ReactNode}) {
  return (
    <div className="text-red-600 text-sm">* {children}</div>
  )
}
