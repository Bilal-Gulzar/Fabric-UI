import { SearchIcon, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function SearchBarForMobile({
    isOpen=false,
    close
}:{isOpen?:Boolean,close:React.Dispatch<React.SetStateAction<Boolean>>}) {
    
    
  return (
    <div
      className={`min-h-screen w-[90vw] sm:w-96 z-50 fixed left-0 top-0 bg-white ${
        isOpen ? "" : "-translate-x-full"
      } transition-all duration-300 overflow-x-hidden px-6 pt-5`}
    >
      <div className="">
        <div className="flex items-center w-full justify-between">
          <div className="font-medium">Search</div>
          <div onClick={()=>close(false)}>
            <X />
          </div>
        </div>
      </div>
      <div className="relative mt-9">
        <Input placeholder="Search Products..." className='text-xs bg-gray-100 pr-10 border-0 ' />
        <div className="absolute right-2 top-3">
          <SearchIcon size={20} />
        </div>
      </div>
    </div>
  );
}
