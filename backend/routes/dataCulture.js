const express = require("express");
const router = express.Router();
const dataCulture = require("../data/T_CULTURE_DATA_TABLE.json");

router.get("/", (req, res) => {
  res.send(dataCulture);
});

router.get("/program", (req, res) => {
  const dataSort = dataCulture.sort((a, b) => {
    return a.popular > b.popular ? -1 : a.name < b.name ? 1 : 0;
  });

  let program = new Array();

  for (let i = 0; i < 9; i++) {
    program[i] = dataSort[i];
  }

  res.send(program);
});

router.get("/whatsOn", (req, res) => {
  let whatsOnData = new Array();

  // for (let i = 0; ; i++) {
  //   let random = Math.floor(Math.random() * dataCulture.length) + 1;
  //   whatsOnData.push(dataCulture[random]);

  //   if (whatsOnData[0].cultcode == parseInt.toString(random)) {
  //     random = Math.floor(Math.random() * dataCulture.length) + 1;
  //     whatsOnData.push(dataCulture[random]);
  //   }

  //   if (whatsOnData.length == 2) {
  //     break;
  //   }
  // }

  whatsOnData.push(dataCulture[1113]);
  whatsOnData.push(dataCulture[243]);

  res.send(whatsOnData);
});

// router 경로 지정시 패턴( ' : ' 나 ' ? ' 같은 문자)이 있는 경로는 뒤에 두고 패턴이 없는 경로를 앞에 두어야 와일드 카드역할을 안하기 때문에 사용 가능

router.get("/:cultcode", (req, res) => {
  // const cultcode = parseInt(req.params.cultcode, 10); // 뒤에 10은 10진수 의미 (2부터 36까지 가능하고 적지 않으면 10진수가 기본형)
  const cultcode = req.params.cultcode;
  const culture = dataCulture.filter((culture) => {
    return culture.cultcode === cultcode;
  });
  res.send(culture);
});

router.get("/search/:searchText", (req, res) => {
  const searchVal = req.params.searchText;

  const searchResult = dataCulture.filter((culture) => {
    // const end_date = new Date(culture.end_date);
    // return (culture.title.toUpperCase().indexOf(searchVal) !== -1 || culture.title.toLowerCase().indexOf(searchVal) !== -1) && today <= end_date;
    return culture.title.toUpperCase().indexOf(searchVal) !== -1 || culture.title.toLowerCase().indexOf(searchVal) !== -1;
  });
  res.send(searchResult);
});

router.get("/category/:categoryList", (req, res) => {
  const searchVal = req.params.categoryList;

  console.log(searchVal);
  if (searchVal !== "all") {
    const searchResult = dataCulture.filter((culture) => {
      return culture.codename.toUpperCase().indexOf(searchVal) !== -1 || culture.codename.toLowerCase().indexOf(searchVal) !== -1;
    });
    res.send(searchResult);
  } else {
    res.send(dataCulture);
  }
});

module.exports = router;
