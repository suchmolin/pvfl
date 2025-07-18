export default function Horas() {
    return (
        <div className="w-full flex justify-center py-7">
            <div className="flex flex-col md:flex-row gap-7 w-[300px] min-[375px]:w-[350px] md:w-[700px] xl:w-[900px] 2xl:w-[1100px] eastman-bold">
                <div className="w-full flex flex-col text-center rounded-lg overflow-hidden">
                    <p className="text-white bg-[#D60078] text-7xl xl:text-8xl 2xl:text-9xl py-4 lato-black">60</p>
                    <p className="text-[#001A70] bg-white text-4xl xl:text-5xl 2xl:text-6xl py-1">Horas</p>
                </div>
                <div className="w-full flex flex-col text-center rounded-lg overflow-hidden">
                    <p className="text-white bg-[#001A70] text-7xl xl:text-8xl 2xl:text-9xl py-4  lato-black">3 - 16</p>
                    <p className="text-[#001A70] bg-white text-4xl xl:text-5xl 2xl:text-6xl py-1">Años</p>
                </div>
            </div>
        </div>
    )
}