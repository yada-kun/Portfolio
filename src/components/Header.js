import Banner from "./Banner";


function Header() {
  return (
    <div className="bg-[url('https://demo.dwtutorial.com/qreato/wp-content/uploads/sites/10/2021/11/section-4.jpeg')] h-screen bg-cover bg-[top_center">
        <div className="flex justify-between lg:px-44 ">
            <h1 className="text-[25px] mt-2">Cloud</h1>

            <ul className="flex gap-5 py-5 text-[10px]">
                <li>Home</li>
                <li>Career</li>
                <li>About</li>
                <li>Portfolio</li>
            </ul>
        </div>

        <Banner />
    </div>
  )
}

export default Header;