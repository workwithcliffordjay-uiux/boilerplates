import { useEffect } from "react";
import Header from "@/components/_layout/partials/Header";
import Menu from "@/components/_layout/partials/Menu";
import Footer from "@/components/_layout/partials/Footer";
import { useGlobalStore } from "@/lib/store/globalStore";

const INTERACTION_EVENTS = [
  "scroll",
  "pointerdown",
  "keydown",
  "touchstart",
  "mousemove",
];

export default function DefaultLayout({
  title,
  description,
  image,
  type,
  noindex,
  path,
  children,
}) {
  const showLazy = useGlobalStore((state) => state.showLazy);
  const setShowLazy = useGlobalStore((state) => state.setShowLazy);

  useEffect(() => {
    if (!showLazy) return;

    const reveal = () => setShowLazy(false);
    INTERACTION_EVENTS.forEach((event) =>
      window.addEventListener(event, reveal, { passive: true }),
    );

    return () =>
      INTERACTION_EVENTS.forEach((event) =>
        window.removeEventListener(event, reveal),
      );
  }, [showLazy, setShowLazy]);

  return (
    <>
      <Header
        title={title}
        description={description}
        image={image}
        type={type}
        noindex={noindex}
        path={path}
      />

      <Menu />
      <h1 className="sr-only">{`${title || "Home"} Page`}</h1>

      <main className=" text-black grow container mx-auto">{children}</main>

      {!showLazy && <Footer />}
    </>
  );
}
