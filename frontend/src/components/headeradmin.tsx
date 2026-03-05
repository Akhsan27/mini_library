import ImgUser from "../assets/profileheader.png"
function HeaderAdmin() {
    return(
        <div className="">
            <div className="flex justify-end items-center px-6 py-5 bg-gray-200">
                <div className=" text-blue-100">
                    <img src={ImgUser} alt="" className="min-w-5 max-w-10"/>
                </div>
            </div>
        </div>
    )
}
export default HeaderAdmin;