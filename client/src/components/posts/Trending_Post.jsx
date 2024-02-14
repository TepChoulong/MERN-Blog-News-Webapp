import { useMediaQuery } from "react-responsive";

export default function Trending_Post() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div>
      <div className="img-container ">
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1000x667,f_auto,q_auto:best/rockcms/2024-02/240202-trump-nevada-beg-1659p-1ef3b5.jpg"
          alt=""
          className=""
        />
        <h3 className="headline-title text-lg font-bold text-blue-900 mt-3 mb-2">
          Trump wins the Nevada Republican caucuses, continuing his march to the
          nomination
        </h3>
      </div>
    </div>
  );
}
