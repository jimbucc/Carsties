"use client";

import React, { useEffect, useState } from "react";
import AuctionCard from "./AuctionCard";
import { PagedResult, Auction } from "@/types";
import AppPagination from "@/app/components/AppPagination";
import { getData } from "@/app/actions/auctionActions";
import Filters from "./Filters";
import { shallow } from "zustand/shallow";
import qs from "query-string";
import { useParamsStore } from "@/hooks/useParamStore";
import EmptyFilter from "@/app/components/EmptyFilter";

const Listings = () => {
  const [data, setData] = useState<PagedResult<Auction>>();
  const params = useParamsStore(
    (state) => ({
      pageNumber: state.pageNumber,
      pageSize: state.pageSize,
      searchTerm: state.searchTerm,
      orderBy: state.orderBy,
      filterBy: state.filterBy,
    }),
    shallow
  );

  const setParams = useParamsStore((state) => state.setParams);
  const url = qs.stringifyUrl({ url: "", query: params });

  const setPageNumber = (pageNumber: number) => setParams({ pageNumber });

  useEffect(() => {
    getData(url).then((data) => {
      setData(data);
    });
  }, [url]);

  if (!data) return <h3>Loading...</h3>;

  return (
    <>
      <Filters />
      {data.totalCount === 0 ? (
        <EmptyFilter showReset />
      ) : (
        <>
          <div className="grid grid-cols-4 gap-6">
            {data.results.map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <AppPagination
              pageChanged={setPageNumber}
              currentPage={params.pageNumber}
              pageCount={data.pageCount}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Listings;