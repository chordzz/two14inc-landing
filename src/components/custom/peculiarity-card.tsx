import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";


type PeculiarityType = {
    peculiarity: {
        img: StaticImport;
        mainText: string;
        subText: string;
    }
}

function PeculiarityCard({ peculiarity }: PeculiarityType) {
    return (
        <div className="bg-[#FAF9F9] border border-[#D9D9D9] rounded-[15px] h-fit max-h-[559px] w-full md:w-[48%] max-w-[625px] relative">
        
            <Image src={peculiarity.img} alt="innovation"  />
            <div className="p-3 lg:p-6 absolute w-[90%] bg-[#155787CC] text-white rounded-[16px] bottom-5 lg:bottom-10 left-[5%]">
                <h3 className="text-2xl md:text-xl lg:text-4xl font-extrabold lg:leading-[100%] ">
                    {peculiarity.mainText}
                </h3>

                <p className="text-sm md:text-xs lg:text-xl mt-2 lg:mt-4">
                    {peculiarity.subText}
                </p>
            </div>
        </div>
    )
}

export default PeculiarityCard;