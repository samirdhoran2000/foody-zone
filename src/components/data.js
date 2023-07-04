const navigationArray = [
  {
    id: 1,
    name: "home",
  },
  {
    id: 2,
    name: "explore",
  },
  {
    id: 3,
    name: "about us",
  },
  {
    id: 4,
    name: "contact us",
  },
];
const searchArray = [
  {
    name: "all",
    id: 1,
  },
  {
    name: "break fast",
    id: 2,
  },
  {
    name: "lunch",
    id: 3,
  },
  {
    name: "dinner",
    id: 4,
  },
  {
    name: "veg",
    id: 5,
  },
];


const foodArray = [
  {
    id: 1,
    title: "burger",
    type: searchArray[2]["name"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 22,
  },
  {
    id: 2,
    type: searchArray[1]["name"],
    title: "pizza",
    description:
      "ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 31,
  },
  {
    id: 3,
    title: "chicken roll",
    type: searchArray[2]["name"],
    description:
      "dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 52,
  },
  {
    id: 4,
    type: searchArray[3]["name"],
    title: "chicken roast",
    description:
      " sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 30,
  },
  {
    id: 5,
    type: searchArray[1]["name"],
    title: "pani puri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 10,
  },
  {
    id: 6,
    title: "Kachori",
    type: searchArray[4]['name'],
    description:
      "ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 5,
  },
  {
    id: 7,
    title: "Panir",
    type: searchArray[4]['name'],
    description:
      "dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 87,
  },
  {
    id: 8,
    title: "Puran Poli",
    type: searchArray[4]['name'],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 100,
  },
];

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};



const getDelayedData = async () => {
  await delay(1000);
  return foodArray;
};

export { searchArray, navigationArray, foodArray, getDelayedData };
