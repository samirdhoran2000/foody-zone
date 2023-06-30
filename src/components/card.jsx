import styled from 'styled-components'


const Card = (data) => {
  return (
    <CardContainer className="hover:cursor-pointer m-2">
      <div className="w-52">
        <img src="../public/vite.svg" alt="image" width={100} />
      </div>
      <div className="flex-col place-items-center h-36 ">
        <h2 className="text-2xl font-semibold text-white capitalize">{data.data.title}</h2>
        <p className="mt-2 text-white">
          &nbsp;&nbsp;&nbsp; {data.data.description}
        </p>
        <div className="flex  justify-end ">
          <button className="text-xl px-1 rounded-md bg-red-500 mt-5">
            Rs. {data.data.amount}
          </button>
        </div>
      </div>
    </CardContainer>
  );
}
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.203);
  border-radius: 8px;
  min-width: 300px;
  max-width: 400px;
  gap: 30px;
  height: 200px;
  padding: 10px;
`;
export default Card