import styled from "styled-components";
import { searchArray, navigationArray, foodArray } from "./components/data";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState("all");
  
  useEffect(() => {
    const fetchFoodData = () => {
      setLoading(true);
      try {
        const response = foodArray;
        setData(response);
        setLoading(false);
      } catch (error) {
        setError('custom error ', error.message);
      }
    }
    fetchFoodData()
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    console.log(searchValue);

    if (searchValue == "") {
      setFilteredData(null);
    }

    const filter = data?.filter((food) => food.title.toLowerCase().includes(searchValue.toLowerCase()))
    setFilteredData(filter)
  }


  //............................................................................................
  const searchList = searchArray.map((value) => {
    return (
      <li
        key={value.id}
        className="px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-red-700 active:bg-zinc-900 text-white"
      >
        {value.name}
      </li>
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
//......................................
  if (error) {
    return <div>{ error }</div>
  }
  if (loading) {
    return <div> loading ....</div>
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
