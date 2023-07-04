const searchArray = [
  {
    name: "All",
    id: 1,
  },
  {
    name: "Break Fast",
    id: 2,
  },
  {
    name: "Lunch",
    id: 3,
  },
  {
    name: "Dinner",
    id: 4,
  },
  {
    name: "Veg",
    id: 5,
  },
];

const navigationArray = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Explore",
  },
  {
    id: 3,
    name: "About Us",
  },
  {
    id: 4,
    name: "Contact Us",
  },
];

const foodArray = [
  {
    id: 1,
    type: "Lunch",
    title: "burger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 22,
  },
  {
    id: 2,
    type: "Break Fast",
    title: "pizza",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 31,
  },
  {
    id: 3,
    type: "Lunch",
    title: "chicken roll",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 52,
  },
  {
    id: 4,
    type: "Dinner",
    title: "chicken roast",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 30,
  },
  {
    id: 5,
    type: "Break Fast",
    title: "pani puri",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 10,
  },
  {
    id: 6,
    title: "Kachori",
    type: "veg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 5,
  },
  {
    id: 7,
    title: "Panir",
    type: "veg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 87,
  },
  {
    id: 8,
    title: "Puran Poli",
    type: "veg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quia nisi rem asperiores cum?",
    amount: 100,
  },
];

const delay = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};



const getDelayedData = async () => {
  await delay(100);
  return foodArray;
};

export { searchArray, navigationArray, foodArray, getDelayedData };
