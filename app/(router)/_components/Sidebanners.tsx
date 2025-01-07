import GlobalApi from "../../_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

// Define the type for a single side banner
interface ISideBanner {
  banner: {
    url: string;
  };
  url: string;
}

const Sidebanners = () => {
  const [sideBannerList, setSideBannerList] = useState<ISideBanner[]>([]);

  const getSidebanners = () => {
    GlobalApi.getSideBanner()
      .then((resp) => {
        const data = resp as { sideBanners: ISideBanner[] }; // Type assertion
        setSideBannerList(data.sideBanners);
      })
      .catch((error) => {
        console.error("Failed to fetch side banners:", error);
      });
  };

  useEffect(() => {
    getSidebanners();
  }, []);

  return (
    <div>
      <h1>Sidebanners listing</h1>
      {sideBannerList.map((item, index) => {
        return (
          <div key={index}>
            <Image
              src={item.banner.url}
              alt="Banner"
              width={500}
              height={300}
              priority
              className="rounded-xl cursor-pointer"
              onClick={() => window.open(item.url)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebanners;
