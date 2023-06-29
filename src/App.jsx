import styled from "styled-components";
import { searchArray,navigationArray  } from "./components/data";


function App() {

  const searchList = searchArray.map((value) => {
   return <li key={value.id} className="px-4 py-2 rounded-lg hover:cursor-pointer hover:bg-zinc-700 active:bg-zinc-900 text-white">{value.name}</li>;
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
  return (
    <>
      <MainContainer>
        <TopContainer className=" flex justify-between px-12 bg-red-600 h-16 items-center font-mono  box-border">
          <div>
            <h1 className="text-3xl ">Foody Zone</h1>
          </div>
          <div>
            <ul className=" flex justify-between gap-4 items-center p-6 ">
              {navigationList}
            </ul>
          </div>
          <div>
            <input
              className="bg-transparent border-2 border-solid border-black h-8 w-60 rounded-xl"
              type="text"
              placeholder="  Type to Search"
            />
          </div>
        </TopContainer>
        <CategoryContainer className="flex justify-center my-2 ">
          <ul className=" flex justify-between gap-4 bg-red-700 h-12 items-center p-6 rounded-lg">
            {searchList}
          </ul>
        </CategoryContainer>
        <CardContainer className="hover:cursor-pointer m-2">
          <div className="w-52">
            <img src="../public/vite.svg" alt="image" width={100} />
          </div>
          <div className="flex-col place-items-center h-36 ">
            <h2 className="text-2xl font-semibold">Burger Pizza</h2>
            <p className="mt-2 ">
              &nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quia nisi rem asperiores cum?
            </p>
            <div className="flex  justify-end ">
              <button className="text-md px-1 rounded-md bg-red-500">
                Rs. 22.00
              </button>
          </div>
            </div>
        </CardContainer>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.div``;

const TopContainer = styled.div``;

const CategoryContainer = styled.div``;

const CardContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
background-color:rgba(0, 0, 0, 0.281);
border-radius: 8px;
min-width:300px;
max-width:400px;
gap: 30px;
height: 200px;

padding:10px;

`;