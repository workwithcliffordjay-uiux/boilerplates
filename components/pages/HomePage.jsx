import ShowLazy from "../_shared/ShowLazy";
import HeroBanner from "../blocks/HeroBanner";

export default function HomePage(props) {
  return (
    <ShowLazy>
      <HeroBanner />
      <HeroBanner />
      <HeroBanner />
    </ShowLazy>
  );
}
