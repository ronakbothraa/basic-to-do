import { IoCheckmarkDoneCircle, IoAddCircle } from "react-icons/io5";
import { Button } from "./ui/button";

const Todo = () => {
  return (
    <div className="bg-fuchsia-200 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      <div className="flex items-center mt-7">
        <IoCheckmarkDoneCircle
          className="h-10 w-15 m-0 p-0"
          size="small"
          color="black"
        />
        <h1 className="text-stone-950 text-3xl font-bold">Tasks</h1>
      </div>

      <div className="my-4 flex">
        <input
          className="bg-fuchsia-100 text-slate-950 rounded-full h-14 pl-6 pr-32 outline-none placeholder:text-slate-600 focus:placeholder:text-slate-300 "
          type="text"
          placeholder="Add your task"
        />
        <Button
          className="bg-pink-500 hover:bg-pink-700 cursor-pointer mx-1.5 my-1 rounded-full h-12 w-12"
          variant="destructive"
        >
          <IoAddCircle size="small" />
        </Button>
      </div>
    </div>
  );
};

export default Todo;
