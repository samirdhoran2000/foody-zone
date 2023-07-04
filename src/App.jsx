import styled, { keyframes } from "styled-components";
import {
  searchArray,
  navigationArray,
  getDelayedData,
} from "./components/data";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const [filteredData, setFilteredData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("All");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(true);
      try {
        const commingData = await getDelayedData();
        console.log(commingData);
        setData(commingData);
        setFilteredData(commingData);
        setLoading(false);
      } catch (error) {
        setError("custom error ", error.message);
      }
    };
    fetchFoodData();
    
    
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue == "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) =>
      food.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filteredFood = (type) => {
    console.log("type is ", type);
    if (type == "All") {

      console.log('filter data is ', data);
      setFilteredData(data);
      setSelectedBtn("All");
      return;
    }

    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
    console.log(type);
  };

  //............................................................................................
  const searchList = searchArray.map((value) => {
    return (
      <button
        key={value.id}
        className="px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-red-700 active:bg-zinc-900 text-white"
        onClick={() => {
          filteredFood(value.name);
        }}
      >
        {value.name}
      </button>
    );
  });
  const navigationList = navigationArray.map((value) => {
    return (
      <li
        key={value.id}
        className="px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-zinc-700 active:bg-zinc-900 text-white"
      >
        {value.name}
      </li>
    );
  });

  const cardList = filteredData?.map((value) => {
    return <Card key={value.id} data={value}></Card>;
  });
  //..................................................................................................
  if (error) {
    return <div>{error}</div>;
  }
  if (loading) {
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }
  return (
    <>
      <MainContainer>
        <TopContainer className=" flex justify-between px-12 bg-red-600 h-20 items-center font-mono  box-border">
          <div>
            <h1 className="text-4xl ">
              {" "}
              F<span className="text-white">oo</span>dy Z
              <span className="text-white">o</span>ne
            </h1>
          </div>
          <div>
            <ul className=" flex justify-between gap-4 items-center p-6 ">
              {navigationList}
            </ul>
          </div>
          <div>
            <input
              className="bg-transparent border-2 border-solid border-black h-8 w-60 rounded-xl px-3"
              type="text"
              placeholder="  Type to Search"
              onChange={searchFood}
            />
          </div>
        </TopContainer>
        <CategoryContainer className="flex justify-center my-2 ">
          <ul className=" flex justify-between gap-4 bg-zinc-700  h-12 items-center p-6 rounded-lg">
            {searchList}
          </ul>
        </CategoryContainer>
        <CardContainer className="flex justify-center flex-wrap">
          {cardList}
        </CardContainer>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div``;

const TopContainer = styled.div``;

const CategoryContainer = styled.div``;

const CardContainer = styled.div``;

const spinnerSize = 100;
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  display: inline-block;
  width: ${spinnerSize}px;
  height: ${spinnerSize}px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  align-items: center;
  animation: ${spinAnimation} 1s linear infinite;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
