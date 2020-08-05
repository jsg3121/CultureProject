const express = require('express');
const router = express.Router();
const dataCulture = require('../data/T_CULTURE_DATA_TABLE.json');

router.get('/',(req, res) => {
    res.send(dataCulture)
})

router.get('/:cultcode', (req, res) => {
    const cultcode = parseInt(req.params.cultcode, 10) // 뒤에 10은 10진수 의미 (2부터 36까지 가능하고 적지 않으면 10진수가 기본형)
    const culture = dataCulture.filter( (culture) => {
        return culture.cultcode === cultcode;
    });
    res.send(culture);
});

module.exports = router;