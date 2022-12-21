const path = require("path");
exports.getHomeView = (req, res) => {
  res.sendFile(path.join(__dirname, "../views/home.html"));
};

let celebrity = {
  "miley cyrus": {
    age: 30,
    birthName: "Destiny Hope Cyrus",
    birthDate: "23 November, 1992",
    birthLocation: "Franklin, Tennessee, U.S.",
    image: "https://media1.popsugar-assets.com/files/thumbor/0l0KsTKPWdL4uutTT8_IXix3nTc/556x152:2011x1607/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/02/14/817/n/1922398/6efaaf145e46e8ee069e94.87687578_/i/Miley-Cyrus.jpg"
  },
  "selena gomez": {
    age: 30,
    birthName: "Selena Marie Gomez",
    birthDate: "22 July, 1992",
    birthLocation: "Grand Prairie, Texas, U.S.",
    image: "https://economictimes.indiatimes.com/thumb/msid-57885986,width-1200,height-900,resizemode-4,imgsize-232573/women-are-worth-much-more-than-an-instagram-like-selena-gomez.jpg?from=mdr"
  },
  unknown: {
    age: "unknown",
    birthName: "unknown",
    birthDate: "unknown",
    birthLocation: "unknown",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
  },
};
exports.getCelebrityName = (req, res) => {
  const celebrityName = req.params.name.toLowerCase();
  if (celebrity[celebrityName]) {
    res.json(celebrity[celebrityName]);
  } else {
    res.json(celebrity["unknown"]);
  }
};
