
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";


type ServiceCardType = {
    service: {
        img: StaticImport;
        mainText: string;
        subText: string;
    }
}

function ServiceCard({ service }: ServiceCardType) {
    return (
        <div className="bg-[#FAF9F9] border border-[#D9D9D9] rounded-[15px] shadow-[4px_4px_20px_rgba(0,0,0,0.06)] lg:h-[450px] w-full md:w-[47%] lg:w-[32%] max-w-[401px]">

            <div className="max-h-[60%] h-fit rounded-t-[inherit]">
                <Image src={service.img} alt="innovation"  />
            </div>
            <div className="p-4 lg:p-6">
                <h3 className="text-lg lg:text-2xl font-semibold leading-[120%] ">
                    {service.mainText}
                </h3>

                <p className="text-sm lg:text-[16px] text-[#666666] mt-2">
                    {service.subText}
                </p>
            </div>
        </div>
    )
}

export default ServiceCard;