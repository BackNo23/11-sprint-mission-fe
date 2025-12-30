import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./ArticleService.js";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

// 공통 에러 출력 함수
const logError = (label, error) => {
  const status = error.response?.status;
  const message = error.response?.data?.message || error.message;

  console.log(`[${label}] 실패`, status, message);
};

// 1) 목록
try {
  const articleListApi = await getArticleList(1, 10);
  console.log(articleListApi.list, "articles 전체리스트");
} catch (error) {
  logError("목록 조회", error);
}

// 2) 단건 조회
try {
  const articleApi = await getArticle(5422);
  console.log(articleApi, "articles 조회");
} catch (error) {
  logError("단건 조회", error);
}

// 3) 생성
try {
  const createArticleApi = await createArticle({
    image: "https://example.com/...",
    content: "게시글 내용입니다.테스트 조한준",
    title: "게시글 제목입니다. 새성",
  });
  console.log(createArticleApi, "articles 추가");
} catch (error) {
  logError("생성", error);
}

// 4) 수정
try {
  const patchArticleApi = await patchArticle(5478, {
    image: "https://example.com/...",
    content: "수정된 게시글 입니다. 나이키 또또 수정",
    title: "팔라스수정수정",
  });
  console.log(patchArticleApi, "articles 수정");
} catch (error) {
  logError("수정", error);
}

// 5) 삭제
try {
  const deleteArticleApi = await deleteArticle(5470);
  console.log(deleteArticleApi, "articles 삭제");
} catch (error) {
  logError("삭제", error);
}

// 상품목록 조회
try {
  const getProductListApi = await getProductList(1, 10);
  console.log(getProductListApi.list, "getProductListApi 전체리스트");
} catch (error) {
  logError("상품 목록 조회", error);
}

// 2) 상품 단건 조회
try {
  const getProductApi = await getProduct(2903);
  console.log(getProductApi, "상품 단건 조회");
} catch (error) {
  logError("상품 단건 조회", error);
}

// 3) 생성
try {
  const createProductApi = await createProduct({
    images: ["https://example.com/..."],
    tags: ["의류", "신발"],
    price: 100000,
    description: "string",
    name: "나이키*팔라스",
  });
  console.log(createProductApi, "상품 추가");
} catch (error) {
  logError("상품 생성", error);
}

// 4) 상품 수정
try {
  const patchProductApi = await patchProduct(2903, {
    images: ["https://example.com/..."],
    tags: ["전자제품", "호호호"],
    price: 2000,
    description: "string",
    name: "상품 수정햇습니다.",
  });
  console.log(patchProductApi, "product 수정");
} catch (error) {
  logError("상품 수정", error);
}

// 5) 삭제
try {
  const deleteProductApi = await deleteProduct(2900);
  console.log(deleteProductApi, "deleteProduct 삭제");
} catch (error) {
  logError("상품삭제", error);
}
