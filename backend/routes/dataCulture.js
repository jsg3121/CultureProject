const express = require("express");
const router = express.Router();
const dataCulture = require("../data/T_CULTURE_DATA_TABLE.json");
const navCategory = require("../data/nav_category.json");

router.get("/", (req, res) => {
  res.send(dataCulture);
});

router.get("/category", (req, res) => {
  res.send(navCategory);
});

router.get("/slide", (req, res) => {
  let slideCard = dataCulture.sort((a, b) => {
    return a.cultcode - b.cultcode;
  });

  const listArr = new Array();

  for (let i = 0; i < 5; i++) {
    listArr[i] = slideCard[i];
  }

  res.send(listArr);
});

// router 경로 지정시 패턴( ' : ' 나 ' ? ' 같은 문자)이 있는 경로는 뒤에 두고 패턴이 없는 경로를 앞에 두어야 와일드 카드역할을 안하기 때문에 사용 가능

router.get("/:cultcode", (req, res) => {
  const cultcode = parseInt(req.params.cultcode, 10); // 뒤에 10은 10진수 의미 (2부터 36까지 가능하고 적지 않으면 10진수가 기본형)
  const culture = dataCulture.filter((culture) => {
    return culture.cultcode === cultcode;
  });
  res.send(culture);
});

router.get("/:search", (req, res) => {
  const searchVal = req.params.data;
  const culture = dataCulture.filter((culture) => {
    return culture.codename === searchVal;
  });
  res.send(culture);
});

module.exports = router;
