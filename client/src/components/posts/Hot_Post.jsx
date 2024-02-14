import { useMediaQuery } from "react-responsive";

export default function Hot_Post() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div>
      <div className="img-container">
        <img
          src="https://www.aljazeera.com/wp-content/uploads/2024/02/2024-02-09T055831Z_854787572_RC2SY5AF1LCI_RTRMADP_3_RUSSIA-PUTIN-CARLSON-1707459861.jpg?resize=770%2C513&quality=80"
          alt=""
        />
      </div>
      <h3 className="headline-title text-xl font-bold text-red-500 mt-3 mb-2">
        What did Vladimir Putin say to Tucker Carlson? Five key takeaways
      </h3>
      <div className="author-&-published-date flex justify-between mb-1">
        <p>Author: Tep Choulong</p>
        <p>Published: 10/10/2022</p>
      </div>
    </div>
  );
}
