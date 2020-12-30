const express = require("express");
const {
  create,
  list,
  listAllBlogsCategoriesTags,
  read,
  remove,
  update,
  photo,
  listRelated,
  listSearch,
} = require("../controllers/blog");
const {
  requireSignin,
  adminMiddleWare,
  authMiddleWare,
} = require("../controllers/auth");
const router = express.Router();

// For admin user
router.post("/blog", requireSignin, adminMiddleWare, create);
router.get("/blogs", list);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.get("/blog/:slug", read);
router.delete("/blog/:slug", requireSignin, adminMiddleWare, remove);
router.put("/blog/:slug", requireSignin, adminMiddleWare, update);
router.get("/blog/photo/:slug", photo);
router.post("/blogs/related", listRelated);
router.get("/blogs/search", listSearch);

// For normal user
router.post("/user/blog", requireSignin, authMiddleWare, create);
router.delete("/user/blog/:slug", requireSignin, authMiddleWare, remove);
router.put("/user/blog/:slug", requireSignin, authMiddleWare, update);

module.exports = router;
