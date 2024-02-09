import "../styles/pages/home.css";
import { useMediaQuery } from "react-responsive";

import Trending_News_Part from "../components/Trending_News_Part";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main>
      {isMobile && (
        <>
          <Trending_News_Part />
        </>
      )}
      {isTablet && (
        <>
          <Trending_News_Part />
        </>
      )}
      {isDesktop && (
        <>
          <Trending_News_Part />
        </>
      )}
    </main>
  );
}
