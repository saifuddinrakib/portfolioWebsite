import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    if (!res.ok) {
      throw new Error(`Failed to fetch pageInfo. Status: ${res.status}`);
    }

    const data = await res.json();

    if (!data || !data.pageInfo) {
      throw new Error("Invalid data received from the API");
    }

    const pageInfo: PageInfo = data.pageInfo;

    // Optionally, you can log pageInfo for debugging purposes.
    // console.log('Fetched pageInfo:', pageInfo);

    return pageInfo;
  } catch (error) {
    // Handle errors gracefully, e.g., log the error or display a user-friendly message.
    console.error("Error fetching pageInfo:", error);
    throw error; // Rethrow the error to handle it further up the call stack.
  }
};
