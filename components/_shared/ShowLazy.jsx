import { Children } from "react";
import { useGlobalStore } from "@/lib/store/globalStore";
import AnimateIn from "../partials/AnimateIn";

export default function ShowLazy({ children }) {
  const showLazy = useGlobalStore((state) => state.showLazy);

  const childArray = Children.toArray(children);

  const wrappedChildren = childArray.map((child, index) => (
    <AnimateIn key={child.key ?? index}>{child}</AnimateIn>
  ));

  return showLazy ? wrappedChildren[0] : wrappedChildren;
}
