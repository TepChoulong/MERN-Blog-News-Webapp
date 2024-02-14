import { useMediaQuery } from "react-responsive";

export default function Post() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 767, maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isMobile && (
        <>
          <div className="mt-4 mb-4">
            <div className="img-container mr-4 w-3/2">
              <img
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1000x667,f_auto,q_auto:best/rockcms/2024-02/240208-supreme-court-january-6-insurrection-vl-503p-9767b0.jpg"
                alt=""
              />
            </div>
            <div className="details">
              <h3 className="headline-title text-xl font-bold text-red-500 mt-2 mb-6">
                Supreme Court justices steer clear of insurrection question in
                Trump ballot case
              </h3>
              <div className="author-&-published-date flex justify-between mt-2">
                <p className="text-sm">Author: Tep Choulong</p>
                <p className="text-sm">Published: 10/10/2022</p>
              </div>
            </div>
          </div>
        </>
      )}
      {isTablet && (
        <>
          <div className="mt-4 mb-4 flex">
            <div className="img-container mr-4 w-3/2">
              <img
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1000x667,f_auto,q_auto:best/rockcms/2024-02/240208-supreme-court-january-6-insurrection-vl-503p-9767b0.jpg"
                alt=""
              />
            </div>
            <div className="details">
              <h3 className="headline-title text-base font-bold text-red-500 mt-2">
                Supreme Court justices steer clear of insurrection question in
                Trump ballot case
              </h3>
              <div className="author-&-published-date flex justify-between mb-1">
                <p className="text-xs">Author: Tep Choulong</p>
                <p className="text-xs">Published: 10/10/2022</p>
              </div>
            </div>
          </div>
        </>
      )}
      {isDesktop && (
        <>
          <div className="mt-4 mb-4 flex">
            <div className="img-container mr-4 w-3/2">
              <img
                src="https://media-cldnry.s-nbcnews.com/image/upload/t_focal-1000x667,f_auto,q_auto:best/rockcms/2024-02/240208-supreme-court-january-6-insurrection-vl-503p-9767b0.jpg"
                alt=""
              />
            </div>
            <div className="details">
              <h3 className="headline-title text-base font-bold text-red-500 mt-2">
                Supreme Court justices steer clear of insurrection question in
                Trump ballot case
              </h3>
              <div className="author-&-published-date flex justify-between mb-1">
                <p className="text-xs">Author: Tep Choulong</p>
                <p className="text-xs">Published: 10/10/2022</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
