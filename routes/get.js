var express = require('express');
var router = express.Router();

const carouselPages = [
  {id: "1", imgPath: "imgPath1", companyId: "musinsa"},
  {id: "2", imgPath: "imgPath2", companyId: "musinsa"},
  {id: "3", imgPath: "imgPath3", companyId: "musinsa"},
  {id: "4", imgPath: "imgPath4", companyId: "levis"},
];

const specialThemes = [
  {id: "111", themeName: "Boutique", label: "럭셔리", content: "무신사 부티크"},
  {id: "112", themeName: "Beauty", label: "뷰티", content: "무신사 뷰티"},
  {id: "113", themeName: "Player", label: "스포츠", content: "무신사 스포츠"},
  {id: "114", themeName: "Outlet", label: "아울렛", content: "무신사 아울렛"},
  {id: "115", themeName: "Kids", label: "키즈", content: "무신사 키즈"},
  {id: "116", themeName: "Golf", label: "골프", content: "무신사 골프"},
  {id: "117", themeName: "earth", label: "어스", content: "무신사 어스"},
  {id: "118", themeName: "Spring Outer", label: "봄 아우터", content: "무신사 봄 아우터"},
  {id: "119", themeName: "Weekend Sale", label: "주말 특가", content: "무신사 주말 특가"},
  {id: "120", themeName: "23 S/S PT", label: "봄 신상", content: "무신사 봄 신상"},
];

router.get('/', function(req, res, next) {
    res.json(carouselPages);
});

router.get('/carouselPage?:companyId', function(req, res, next) {
  const requestedCarouselPages = carouselPages.filter(page => page.companyId == req.query.companyId);
  res.send(requestedCarouselPages);
});

router.get('/specialTheme', function(req, res, next) {
  res.json(specialThemes);
});

module.exports = router;
