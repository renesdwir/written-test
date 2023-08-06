//===========QUESTION 1
function findSecondLargest(arr) {
  if (arr) {
    return null;
  }
  let largestNumber = Number.NEGATIVE_INFINITY;
  let secondLargestNumber = Number.NEGATIVE_INFINITY;

  arr.forEach((num) => {
    if (num > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = num;
    } else if (num !== largestNumber && num > secondLargestNumber) {
      secondLargestNumber = num;
    }
  });
  return secondLargestNumber;
}

//==========QUESTION 2

let data = [
  "evan|50000|D",
  "jefry|70000|C",
  "rizky|30000|D",
  "hanson|10000|B",
  "candra|30000|A",
  "goklas|20000|A",
  "hendra|20000|B",
  "surya|30000|A",
];
function sortDataFunc(data) {
  const sortedData = data.sort((a, b) => {
    const [name_A, points_A, grade_A] = a.split("|");
    const [name_B, points_B, grade_B] = b.split("|");

    if (grade_A !== grade_B) {
      return grade_A.localeCompare(grade_B);
    } else {
      return parseInt(points_B) - parseInt(points_A);
    }
  });
  return sortedData.map((result) => result.split("|")[0]);
}

// const sortedNames = sortDataFunc(data);
// console.log(sortedNames);

//=========QUESTION 3

function checkPalindrome(txt) {
  if (txt.length <= 1) {
    return "palindrom";
  }
  if (txt[0] !== txt[txt.length - 1]) {
    return "not palindrom";
  }
  return checkPalindrome(txt.slice(1, -1));
}
let result = checkPalindrome("racecar");
// console.log(result);
