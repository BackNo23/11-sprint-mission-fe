import { api } from "./basicUrl.js";

export const getArticleList = (page, pageSize, keyword) => {
  return api
    .get("/articles", {
      params: {
        page,
        pageSize,
        orderBy: "recent",
        ...(keyword?.trim() && { keyword }),
      },
    })
    .then((res) => res.data);
};

export const getArticle = async (articleId) => {
  const res = await api.get(`/articles/${articleId}`);
  return res.data;
};

export const createArticle = async (data) => {
  const res = await api.post("/articles", data);
  return res.data;
};

export const patchArticle = async (userId, data) => {
  const res = await api.patch(`/articles/${userId}`, data);
  return res.data;
};

export const deleteArticle = async (userId) => {
  const res = await api.delete(`/articles/${userId}`);
  return res.data;
};
