import "../styles/pages/home.css";
import { useMediaQuery } from "react-responsive";

export default function Home() {
  const isMobile = useMediaQuery({ maxWidth: 700 });
  const isTablet = useMediaQuery({ minWidth: 700, maxWidth: 1030 });
  const isDesktop = useMediaQuery({ minWidth: 1030 });

  return (
    <main>
      {isMobile && <></>}
      {isTablet && <></>}
      {isDesktop && <></>}
    </main>
  );
}
