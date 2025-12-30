import { api } from "./basicUrl.js";

export const getProductList = async (page, pageSize, keyword) => {
  const res = await api.get("/products", {
    params: {
      page,
      pageSize,
      orderBy: "recent",
      ...(keyword?.trim() && { keyword }),
    },
  });
  return res.data;
};

export const getProduct = async (ProductId) => {
  const res = await api.get(`/products/${ProductId}`);
  return res.data;
};

export const createProduct = async (data) => {
  const res = await api.post("/products", data);
  return res.data;
};

export const patchProduct = async (ProductId, data) => {
  const res = await api.patch(`/products/${ProductId}`, data);
  return res.data;
};

export const deleteProduct = async (ProductId) => {
  const res = await api.delete(`/products/${ProductId}`);
  return res.data;
};
