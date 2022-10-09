export default function Nav() {
  return (
    <>
      <div className="w-full h-[90px] bg-black">
        <div className="max-w-1240px] mx-auto px-4 flex justify-between items-center h-full">
          <div>
            <h1 className="text-[#00d8ff]">PHEAROM DUONG</h1>
          </div>
          <div>
                <ul className="flex text-white items-center">
                    <li>Projects</li>
                    <li>Resume</li>
                    <button className="ml-4">Contact</button>
                </ul>
          </div>
        </div>
      </div>
    </>
  );
}
