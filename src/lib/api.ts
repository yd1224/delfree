import { GetProductsResponse } from "./types";

export const API_URL = "https://36e7-188-147-77-169.ngrok-free.app/api/Delfree";

export const PRODUCTS_PER_PAGE = 15;

const sendRequest = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(url, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    });
    return res.json() as T;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getProducts = async (
  pageParam = 1
): Promise<GetProductsResponse> => {
  return sendRequest<GetProductsResponse>(
    `${API_URL}/getproducts?page=${pageParam}&count=${PRODUCTS_PER_PAGE}`
  );
};
