import RectangleLamp from "./Rectangle"
import RectangleGroup from "./RectangleGroup"

const ContentPreview = () => {
    

    const buttonArrow = <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="41" height="41" rx="20.5" fill="#2AC6A1"/>
    <g clipPath="url(#clip0_2046_9007)">
    <path d="M28.4987 13.8333V21.8333H27.1653V14.776L13.47 28.4713L12.5273 27.5287L26.2227 13.8333H19.1653V12.5H27.1653C27.9007 12.5 28.4987 13.098 28.4987 13.8333Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_2046_9007">
    <rect width="16" height="16" fill="white" transform="translate(12.5 12.5)"/>
    </clipPath>
    </defs>
    </svg>
    const flower = <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.5621 4.1414C11.581 6.06891 11.0923 7.63635 10.4707 7.64244C9.84909 7.64849 9.32989 6.09087 9.31107 4.16341C9.29222 2.2359 9.78089 0.668422 10.4025 0.662374C11.0241 0.656284 11.5433 2.2139 11.5621 4.1414Z" fill="#2AC9A3"/>
    <path d="M7.95846 4.57919C9.01648 6.19048 9.4529 7.77329 8.93328 8.1145C8.41361 8.45571 7.13467 7.42612 6.07669 5.81483C5.01867 4.20355 4.58225 2.62078 5.10187 2.27953C5.62154 1.93832 6.90044 2.96791 7.95846 4.57919Z" fill="#2AC9A3"/>
    <path d="M5.15799 6.89092C6.91922 7.6743 8.14213 8.76983 7.88946 9.33784C7.63683 9.90585 6.00429 9.73121 4.24306 8.94778C2.48185 8.1644 1.25892 7.06887 1.51157 6.50086C1.76422 5.93286 3.39678 6.10749 5.15799 6.89092Z" fill="#2AC9A3"/>
    <path d="M7.6769 10.9307C7.77148 11.5451 6.30371 12.2809 4.39859 12.5741C2.49342 12.8674 0.872329 12.607 0.777762 11.9926C0.683195 11.3782 2.15096 10.6424 4.05611 10.3492C5.96124 10.0559 7.58236 10.3163 7.6769 10.9307Z" fill="#2AC9A3"/>
    <path d="M8.36066 12.3944C8.77234 12.8602 7.9352 14.2726 6.49086 15.5491C5.04652 16.8256 3.54192 17.4828 3.13025 17.017C2.71857 16.5512 3.55571 15.1388 5.00007 13.8623C6.44441 12.5858 7.94902 11.9286 8.36066 12.3944Z" fill="#2AC9A3"/>
    <path d="M9.72324 13.2498C10.3214 13.4191 10.3808 15.0599 9.856 16.9146C9.33117 18.7694 8.42078 20.1357 7.82262 19.9665C7.22445 19.7972 7.16502 18.1564 7.68985 16.3017C8.21469 14.4469 9.12508 13.0805 9.72324 13.2498Z" fill="#2AC9A3"/>
    <path d="M13.4228 16.244C13.9841 18.088 13.957 19.7297 13.3623 19.9107C12.7676 20.0917 11.8304 18.7436 11.2691 16.8995C10.7078 15.0555 10.7349 13.4139 11.3296 13.2328C11.9243 13.0518 12.8615 14.3999 13.4228 16.244Z" fill="#2AC9A3"/>
    <path d="M16.0655 13.7523C17.5345 15.0003 18.3991 16.3961 17.9966 16.8698C17.5941 17.3436 16.077 16.7159 14.608 15.4679C13.1389 14.2199 12.2744 12.8241 12.6768 12.3504C13.0793 11.8766 14.5965 12.5042 16.0655 13.7523Z" fill="#2AC9A3"/>
    <path d="M16.94 10.2262C18.8506 10.4818 20.3326 11.1885 20.2501 11.8047C20.1677 12.4209 18.5521 12.7131 16.6415 12.4576C14.731 12.202 13.249 11.4953 13.3314 10.8791C13.4139 10.2629 15.0295 9.97062 16.94 10.2262Z" fill="#2AC9A3"/>
    <path d="M19.4039 6.3248C19.6677 6.88768 18.4666 8.00711 16.7212 8.8251C14.9758 9.64309 13.347 9.84986 13.0832 9.28697C12.8194 8.72405 14.0205 7.60462 15.7659 6.78663C17.5113 5.96868 19.1401 5.76187 19.4039 6.3248Z" fill="#2AC9A3"/>
    <path d="M15.7332 2.17146C16.2595 2.50234 15.8544 4.09347 14.8284 5.72529C13.8023 7.35712 12.5439 8.4117 12.0177 8.08082C11.4914 7.74995 11.8965 6.15882 12.9226 4.52699C13.9486 2.89517 15.207 1.84055 15.7332 2.17146Z" fill="#2AC9A3"/>
    </svg>
    

    
  return (
    <div className='w-screen overflow-hidden px-[116px] py-[42px] flex iphone13mini:py-0 iphone13mini:pl-[12px]
    mini-laptop:py-[20px] mini-laptop:px-[50px]
    tablet:py-[0] tablet:flex-col tablet:justify-center tablet:items-center  tablet:gap-[20px]
    iphone13mini:flex-col iphone13mini:gap-[315px]'>
        
        <div className="flex w-[896px] flex-col gap-[44px] 
        tablet:w-full tablet:justify-center tablet:items-center tablet:gap-[30px]">
            <h1 className='text-[74px] font leading-[88.8px] iphone13mini:text-[32px] 
            mini-laptop:text-[36px] mini-laptop:leading-[50px]
            tablet:text-[32px]
            iphone13mini:w-[320px] iphone13mini:leading-[38px] iphone13mini:pl-[7px]
            '>
            ДЕЛИТЕСЬ ВСЕГДА И <br className="iphone13mini:hidden mini-laptop:hidden"/>
            ВЕЗДЕ ЭЛЕКТРОННЫМИ <br className="tablet:hidden"/> 
            ВИЗИТКАМИ<span className="hidden iphone13mini:inline text-transparent">.</span> JIT<span>
                <div className="absolute top-[345px] left-[716px] mini-laptop:hidden iphone13mini:hidden">
                    <div className="w-24 flex relative">
                        <div className="flex justify-center items-center z-10 w-12 h-12 bg-white rounded-full">
                            {flower}
                        </div>
                        <div className="absolute right-4 w-12 h-12 bg-white rounded-full opacity-50"/>
                    </div>
                </div>
                </span>
            </h1>
            <div className="">
                <button
                className="h-[57px] w-[282px] px-2 pl-[13px] ml-1 flex items-center justify-between text-[18px] leading-[25.2px]  text-[#2AC6A1] border-[1px] border-[#2AC6A1] shadow-[0_4px_31.6px_0_rgba(42,198,161,1)]
                iphone13mini:absolute iphone13mini:left-[10px] iphone13mini:top-[400px] iphone13mini:w-[344px] iphone13mini:justify-between"
                >
                <span className="iphone13mini:hidden mt-[1px] ml-[1px]">
                Протестировать и заказать    
                </span>
                <span className="iphone13mini:inline iphone13mini:mt-[2px] iphone13mini:ml-[4px] hidden">
                    Заказать NFC-визитки
                </span>
                {buttonArrow}
                </button>    
            </div>
        </div>
        <div className="iphone13mini:absolute iphone13mini:top-[662px] iphone13mini:right-[16px]">
        <RectangleLamp/>
        </div>
        <RectangleGroup/>
        <div className="absolute right-[149px] top-[456px]
        mini-laptop:right-[200px]
        tablet:left-[40px] tablet:top-[520px]
        mobileL:top-[570px] 
        iphone13mini:left-[16px] iphone13mini:top-[296px]">
            <p className=" w-[458px] text-[18px] leading-[25.2px]
            mobileL:w-[340px] 
            iphone13mini:text-[14px] iphone13mini:leading-[20px] iphone13mini:mt-[1px]">
            Получите мгновенный доступ к деловым контактам через QR и NFC, а также интегрируйте CRM-системы для более тщательного контроля над своими контактами. 
            </p>
        </div>
    </div>
  )
}

export default ContentPreview