'use server'

import { Auction, PagedResult } from "@/types";

const getData = async (query: string): Promise<PagedResult<Auction>> => {
    const res = await fetch(`http://localhost:6001/search${query}`)
    if(!res.ok) throw new Error('Failed to fetch data')
    return res.json();
}

export default getData