import { IoTrashBin } from "react-icons/io5";
import { Button } from './ui/button'

const TodoItems = ({text}:{text:string}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 item-center cursor-pointer'>
        <p className='text-slate-700 ml-4  text-[17px]'>
          {text}
        </p>
      </div>
      <Button className="cursor-pointer" variant="destructive">
        <IoTrashBin size='small' />
      </Button>
      
    </div>
  )
}

export default TodoItems