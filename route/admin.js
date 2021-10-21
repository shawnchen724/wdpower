const express = require('express');
const Develop = require('../models/power');
const admin = express.Router();
const Userz = require("../models/zuser")
const {
    User,
    User2,
    User3,
    User4,
    User5,
    User6,
    User7,
    User8,
    User9,
    User10,
    User11
} = require("../models/user");
const Idea = require("../models/idea");
const Case = require("../models/case");
const News = require("../models/news");
admin.get('/intro', async (req, res) => {
    var id = req.query.id;
    if (id) {
        const content = await Develop.findOne({
            "num": id
        });
        res.render('xhintro/detail.html', {
            content: content
        });
    } else {
        res.render('xhintro/intro.html');
    }
});
admin.get('/honor', (req, res) => {
    res.render('xhintro/honor.html');
});
admin.get('/policy', (req, res) => {
    res.render('xhintro/policy.html');
});
admin.get('/quality', (req, res) => {
    res.render('xhintro/quality.html');
});
admin.get('/culture', (req, res) => {
    res.render('xhintro/culture.html');
});
admin.get('/contact', (req, res) => {
    res.render('xhintro/contact.html');
});
admin.get('/talents', (req, res) => {
    res.render('xhintro/talents.html');
});
admin.get('/need', (req, res) => {
    res.render('xhintro/need.html');
})
//产品展示首页接口
admin.get("/product", (req, res) => {
    res.render("product.html")
});

admin.get("/product1", (req, res) => {
    res.render("product1.html")
});
admin.get("/product2", (req, res) => {
    res.render("product2.html")
});
admin.get("/product3", (req, res) => {
    res.render("product3.html")
});
//产品详情页面接口
admin.get("/detail", async (req, res, next) => {
    const data1 = await User.find();
    const data2 = await User2.find();
    // console.log(users2);
    res.render("../views/detail/detail.html", {
        listMsg1: data1,
        listMsg2: data2,
    })
})
admin.get("/detail2", async (req, res, next) => {
    const data3 = await User3.find();
    // console.log(users2);
    res.render("../views/detail/detail2.html", {
        listMsg3: data3,

    })
})
admin.get("/detail3", async (req, res, next) => {
    const data4 = await User4.find();
    // console.log(users2);
    res.render("../views/detail/detail3.html", {
        listMsg4: data4,
    })
})
admin.get("/detail4", async (req, res, next) => {
    const data5 = await User5.find();
    // console.log(users2);
    res.render("../views/detail/detail4.html", {
        listMsg5: data5,
    })
})
admin.get("/detail5", async (req, res, next) => {
    const data6 = await User6.find();
    // console.log(users2);
    res.render("../views/detail/detail5.html", {
        listMsg6: data6,
    })
})
admin.get("/detail6", async (req, res, next) => {
    const data7 = await User7.find();
    const data8 = await User8.find();
    // console.log(users2);
    res.render("../views/detail/detail6.html", {
        listMsg7: data7,
        listMsg8: data8,
    })
})
admin.get("/detail7", async (req, res, next) => {
    const data7 = await User7.find();
    const data8 = await User8.find();
    // console.log(users2);
    res.render("../views/detail/detail7.html", {
        listMsg7: data7,
        listMsg8: data8,
    })
})
admin.get("/detail8", async (req, res, next) => {
    const data9 = await User9.find();
    const data10 = await User10.find();
    const data11 = await User11.find();
    // console.log(users2);
    res.render("../views/detail/detail8.html", {
        listMsg9: data9,
        listMsg10: data10,
        listMsg11: data11,
    })
})
admin.get("/", async (req, res) => {
    var result = await Userz.find();
    res.render("index.html", {
        result
    });
});
admin.get('/idea', async (req, res) => {
    let page = req.query.page || 1;
    let pagesize = 8;
    let count = await Idea.countDocuments();
    let total = Math.ceil(count / pagesize);
    let start = (page - 1) * pagesize;

    var idea = await Idea.find().limit(pagesize).skip(start);
    res.render("idea.html", {
        idea,
        page,
        total
    });
})
admin.get('/case', async (req, res) => {
    let page = req.query.page || 1;
    let pagesize = 12;
    let count = await Case.countDocuments();
    let total = Math.ceil(count / pagesize);
    let start = (page - 1) * pagesize;

    var cases = await Case.find().limit(pagesize).skip(start);
    res.render("case.html", {
        cases,
        page,
        total
    })
})

admin.get('/news', async (req, res) => {
    let page = req.query.page || 1;
    let pagesize = 6;
    let count = await News.countDocuments();
    let total = Math.ceil(count / pagesize);
    let start = (page - 1) * pagesize;

    var news = await News.find().limit(pagesize).skip(start);
    res.render("news.html", {
        news,
        page,
        total
    })
})

admin.get('/video', (req, res) => {
    res.render("video.html")
})

admin.get('/settings/idea_item/:id', async (req, res) => {
    var id = req.params["id"];
    var result = await Idea.findById(id);
    res.render("settings/idea_item.html", {
        idea: result
    })
})

admin.get('/settings/case_item/:id', async (req, res) => {
    var id = req.params["id"];
    var result = await Case.findById(id);
    res.render("settings/case_item.html", {
        cases: result
    })
})

admin.get('/settings/news_item/:id', async (req, res) => {
    var id = req.params["id"];
    var result = await News.findById(id);
    res.render("settings/news_item.html", {
        news: result
    })
})
module.exports = admin;