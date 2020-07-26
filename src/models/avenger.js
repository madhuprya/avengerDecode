let keypadMap = new Map();

keypadMap.set("1", "@.?");
keypadMap.set("2", "ABC");
keypadMap.set("3", "DEF");
keypadMap.set("4", "GHI");
keypadMap.set("5", "JKL");
keypadMap.set("6", "MNO");
keypadMap.set("7", "PQRS");
keypadMap.set("8", "TUV");
keypadMap.set("9", "WXYZ");
keypadMap.set("0", "Zero");
keypadMap.set("*", "send");
keypadMap.set("#", "space");
let str = "";
let avenger = "";
let avengerList = [
  "SUPERMAN",
  "THOR",
  "ROBIN",
  "IRONMAN",
  "GHOSTRIDER",
  "CAPTAINAMERICA",
  "FLASH",
  "WOLVERINE",
  "BATMAN",
  "HULK",
  "BLADE",
  "PHANTOM",
  "SPIDERMAN",
  "BLACKWIDOW",
  "HELLBOY",
  "PUNISHER",
  "MAD",
];

function combination(keypadMap, index, phone, str, avengerList) {
  if (index === phone.length) {
    if (avengerList && avengerList.includes(str)) {
      avenger = str;
    }
  } else {
    let string = keypadMap.get(phone.charAt(index));
    for (let j = 0; j < string.length; j++) {
      str = str.concat(string.charAt(j));
      combination(keypadMap, index + 1, phone, str, avengerList);
      str = str.replace(str.charAt(str.length - 1), "");
    }
  }
}

const avengerCrud = {
  getAllAvenger: () => {
    return avengerList;
  },
  getAvenger: (numberString) => {
    avenger = null;
    combination(keypadMap, 0, numberString, str, avengerList);
    return {
      error: false,
      response: { avenger: avenger ? avenger : "Not Available" },
      status: 200,
      msg: avenger ? "data fetched successfully" : "Not Available",
    };
  },
};

module.exports = avengerCrud;
