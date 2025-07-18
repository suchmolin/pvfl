export default function Etapas() {
    return (
        <div className="w-full flex justify-center py-7">
            <div className="flex flex-col md:flex-row w-[300px] min-[375px]:w-[350px] md:w-[700px] xl:w-[900px] 2xl:w-[1100px] eastman-bold text-center gap-7">
                <div className="w-full flex flex-col items-center">
                    <div className="w-full flex gap-1 items-center justify-center mb-2 eastman-bold">
                        <div className="w-[18px] h-[18px] square bg-[#FFA400] rounded-full mt-2"></div>
                        <p className="text-[#001A70] text-3xl"><span className="lemon-bold">1</span>era temporada</p>
                    </div>
                    <div className="w-full text-white flex gap-2 justify-center bg-[#FFA400] text-[80px] 2xl:text-8xl leading-22 py-5 rounded-lg mb-5">
                        <div>
                            <p className="lemon">21</p>
                            <p className="text-4xl">Jul</p>
                        </div>
                        -
                        <div>
                            <p className="lato-black">15</p>
                            <p className="text-4xl">Ago</p>
                        </div>

                    </div>
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="w-full flex gap-1 items-center justify-center mb-2 eastman-bold">
                        <div className="w-[18px] h-[18px] square bg-[#D60078] rounded-full mt-2"></div>
                        <p className="text-[#001A70] text-3xl"><span className="lemon-bold">2</span>da temporada</p>
                    </div>
                    <div className="w-full text-white flex gap-2 justify-center bg-[#D60078] text-[80px]  2xl:text-8xl leading-18 py-7 rounded-lg">
                        <div>
                            <p className="lato-black">18</p>
                            <p className="text-4xl">Ago</p>
                        </div>
                        -
                        <div>
                            <p className="lato-black">12</p>
                            <p className="text-4xl">Sep</p>
                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}