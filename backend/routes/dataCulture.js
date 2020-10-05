const express = require("express");
const router = express.Router();
const dataCulture = require("../data/T_CULTURE_DATA_TABLE.json");
const area = require("../data/culture_area.json");
const category = require("../data/culture_category.json");

router.get("/", (req, res) => {
  res.send(dataCulture);
});

router.get("/program", (req, res) => {
  const dataSort = dataCulture.sort((a, b) => {
    return a.popular > b.popular ? -1 : a.popular < b.popular ? 1 : 0;
  });

  let program = new Array();

  for (let i = 0; i < 9; i++) {
    program[i] = dataSort[i];
  }

  res.send(program);
});

//whatsOn 랜덤으로 두개 뽑아서 화면에 표시하기

router.get("/whatsOn", (req, res) => {
  let whatsOnData = new Array();

  for (let i = 0; ; i++) {
    let random = Math.floor(Math.random() * dataCulture.length) + 1;
    whatsOnData.push(dataCulture[random]);

    if (whatsOnData[0].cultcode == parseInt.toString(random)) {
      random = Math.floor(Math.random() * dataCulture.length) + 1;
      whatsOnData.push(dataCulture[random]);
    }

    if (whatsOnData.length == 2) {
      break;
    }
  }

  // whatsOnData.push(dataCulture[1113]);
  // whatsOnData.push(dataCulture[243]);

  res.send(whatsOnData);
});

//드롭다운 데이터 불러오기
router.get("/area", (req, res) => {
  res.send(area);
});

router.get("/category", (req, res) => {
  res.send(category);
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

  const nameSort = dataCulture.sort((a, b) => {
    let titleA = a.title.toLowerCase(),
      titleB = b.title.toLowerCase();

    if (titleA < titleB) {
      return -1;
    } else if (titleA > titleB) {
      return 1;
    } else {
      // 이름이 같을 경우
      return 0;
    }
  });

  if (searchVal !== "all") {
    const searchResult = nameSort.filter((culture) => {
      return culture.codename.toUpperCase().indexOf(searchVal) !== -1 || culture.codename.toLowerCase().indexOf(searchVal) !== -1;
    });
    res.send(searchResult);
  } else {
    res.send(nameSort);
  }
});

module.exports = router;
