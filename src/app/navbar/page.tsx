export default function Navbar(){
    return(
        <div className='bg-green-500 h-12'>
            <div className="text-yellow-300 flex justify-between items-center">
            <h1 className="text-2xl m-2 ml-4 cursor-pointer">Navbar</h1>
            <ul className="flex gap-4 mr-4 cursor-pointer">
                <a className="hover:text-white" href="">Home</a>
                <a className="hover:text-white" href="">About</a>
                <a className="hover:text-white" href="">Contact</a>
                <a className="hover:text-white" href="">Courses</a>
            </ul>
            </div>
        </div>
    )
}