import GlobalApi from "@/app/_utils/GlobalApi";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Sidebanners = () => {
  const [sideBannerList, setSideBannerList] = useState<string[]>([]);
  const getSidebanners = () => {
    GlobalApi.getSideBanner().then((resp: any) => {
      // console.log(resp.sideBanners);

      setSideBannerList(resp.sideBanners);
    });
  };

  useEffect(() => {
    getSidebanners();
  }, []);
  return (
    <div className="">
      <h1>Sidebanners listing</h1>
      {sideBannerList.map((item: any, index: number) => {
        return (
          <div key={index}>
            <Image
              src={item?.banner?.url}
              alt="Banner"
              width={500}
              height={300}
              priority
              className="rounded-xl cursor-pointer"
              onClick={() => window.open(item?.url)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebanners;
