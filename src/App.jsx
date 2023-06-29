import styled from "styled-components";

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
  }
];

const navigationArray = [
  {
    id: 1,
    name:'Home'
  },
  {
    id: 2,
    name:'Explore'
  },
  {
    id: 3,
    name:'About Us'
  },
  {
    id: 4,
    name:'Contact Us'
  },
]
function App() {

  const searchList = searchArray.map((value) => {
   return <li key={value.id} className="px-4 py-2 rounded-lg hover:bg-zinc-700 active:bg-zinc-900 text-white">{value.name}</li>;
  });
  const navigationList = navigationArray.map((value) => {
   return (
     <li
       key={value.id}
       className="px-4 py-2 rounded-lg hover:bg-zinc-700 active:bg-zinc-900 text-white"
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
        <CategoryContainer className="flex justify-center mt-2 ">
          <ul className=" flex justify-between gap-4 bg-red-700 h-12 items-center p-6 rounded-lg">
            {searchList}
          </ul>
        </CategoryContainer>
        <CardContainer>
          <h3>
            Lunch
          </h3>
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
flex-direction:column;
align-items:center;
background-color:rgba(255, 255, 255, 0.281);

min-width:300px;
max-width:400px;

padding:10px;

`;