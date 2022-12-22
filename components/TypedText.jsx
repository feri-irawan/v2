import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText({
  children,
  texts = [],
  startDelay = 0,
  typeSpeed = 0,
  loop = false,
}) {
  const element = useRef();
  useEffect(() => {
    const typed = new Typed(element.current, {
      strings: texts || [children],
      startDelay,
      typeSpeed,
      loop,
    });

    return () => typed.destroy();
  }, []);
  return <span ref={element}></span>;
}
