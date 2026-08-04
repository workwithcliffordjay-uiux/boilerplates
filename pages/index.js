import DefaultLayout from "@/components/_layout/DefaultLayout";
import HomePage from "@/components/pages/HomePage";

export default function Home() {
  return (
    <DefaultLayout {...HomePage.meta}>
      <HomePage />
    </DefaultLayout>
  );
}
