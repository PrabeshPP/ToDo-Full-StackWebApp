const express=require("express");
const router=express.Router();

router.use("/todos").get();

module.exports=router;