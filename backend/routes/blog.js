const express = require("express");
const {
  create,
  list,
  listAllBlogsCategoriesTags,
  read,
  remove,
  update,
} = require("../controllers/blog");
const { requireSignin, adminMiddleWare } = require("../controllers/auth");
const router = express.Router();

router.post("/blog", requireSignin, adminMiddleWare, create);
router.get("/blogs", list);
router.post("/blogs-categories-tags", listAllBlogsCategoriesTags);
router.get("/blog/:slug", read);
router.delete("/blog/:slug", requireSignin, adminMiddleWare, remove);
router.put("/blog/:slug", requireSignin, adminMiddleWare, update);

module.exports = router;
