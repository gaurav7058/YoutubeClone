const express=require("express");
const app=express();
var router = express.Router();
const postsController=require("../controller/controller.login")
const postsControllerVideo_Upload=require("../controller/controller.video_upload")
const limiter=require("../middleware/Rate_limit")
const upload=require("../middleware/middleware.video_Get");





router.post("/login",limiter,postsController.login);
router.post("/SendIncorrectPasswordMail",limiter,postsController.SendIncorrectPasswordMail);
router.post("/insert_video",upload.single("video_url"),postsControllerVideo_Upload.insert_video);
router.post("/registration_form",postsControllerVideo_Upload.Register_form);
router.get("/GetAllData",postsControllerVideo_Upload.GetVideo);



module.exports=router;
