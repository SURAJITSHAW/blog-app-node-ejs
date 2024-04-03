const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
    try {
        const data = await Post.find();
        res.render("index", {data});
    } catch (error) {
        console.log(error);
    }
    
});

router.get("/about", (req, res) => {
    res.render("about");
});
router.get("/contact", (req, res) => {
    res.render("contact");
});

module.exports = router;

// function insertDummyData() {
//     Post.insertMany([
//         {
//             title: "title1",
//             content: "content1",
//         },
//         {
//             title: "title2",
//             content: "content2",
//         },
//         {
//             title: "title3",
//             content: "content3",
//         },
//         {
//             title: "title4",
//             content: "content4",
//         },
//         {
//             title: "title5",
//             content: "content5",
//         },
//         {
//             title: "title6",
//             content: "content6",
//         },
//         {
//             title: "title7",
//             content: "content7",
//         },
//         {
//             title: "title8",
//             content: "content8",
//         },
//         {
//             title: "title9",
//             content: "content9",
//         },
//         {
//             title: "title10",
//             content: "content10",
//         },
//     ]);
// }
// insertDummyData();