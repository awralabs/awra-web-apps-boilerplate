import { ReactNode } from "react";

interface RenderWhenProps {
    when: boolean,
    children: ReactNode
}

export default function RenderWhen({ when = false, children }: RenderWhenProps) {
    return when ? children : null;
  }
  