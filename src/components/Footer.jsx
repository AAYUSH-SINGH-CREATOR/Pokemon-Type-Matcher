import { ImShuffle } from "react-icons/im";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaArrowRotateRight } from "react-icons/fa6";

import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";








export default function Footer() {

    return (
        <div className="w-full flex justify-center mt-10 gap-10 items-center flex-col">
            <div className=" grid grid-cols-2 gap-5 lg:flex lg:w-7/12 justify-between p-4 rounded-lg shadow-xl shadow-gray-400">


                <div className="flex justify-center items-center gap-0.5">
                    <div className="w-12 h-12 bg-violet-500/30 rounded-full flex justify-center items-center">
                        <ImShuffle className="text-violet-600 text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold text-violet-600 text-sm">RandomPokemon</p>
                        <p className="text-sm text-gray-500  text-xs">A new pokemon <br /> every round</p>
                    </div>
                </div>




                <div className="flex justify-center items-center gap-0.5">
                    <div className="w-12 h-12 bg-green-400/25 rounded-full flex justify-center items-center">
                        <FaRegCircleCheck className="text-green-500 text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold text-green-600 text-sm">Guess Type</p>
                        <p className="text-sm text-gray-500 text-xs">Choose the correct <br />primary type</p>
                    </div>
                </div>






                <div className="flex justify-center items-center gap-0.5">
                    <div className="w-12 h-12 bg-orange-500/30 rounded-full flex justify-center items-center">
                        <FaStar className="text-orange-600 text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold text-orange-600 text-sm">Score Points</p>
                        <p className="text-sm text-gray-500 text-xs">Earn points for<br />correct answers</p>
                    </div>
                </div>





                <div className="flex justify-center items-center gap-0.5">
                    <div className="w-12 h-12 bg-blue-600/30 rounded-full flex justify-center items-center">
                        <FaArrowRotateRight className="text-blue-600 text-2xl" />
                    </div>
                    <div>
                        <p className="font-bold text-blue-600 text-sm">Keep playing</p>
                        <p className="text-sm text-gray-500 text-xs">Next round,<br /> new challenge!</p>
                    </div>
                </div>
            </div>


            <div className="w-full bg-blue-950 flex flex-col justify-center items-center">
                <div className="w-7/12 flex gap-3 lg:gap-20 text-white m-5 justify-center">
                    <p className="lg:text-3xl font-bold text-gray-400">Build with:</p>
                    < FaReact className="text-3xl hover:text-blue-300"/>
                    < RiTailwindCssFill className="text-3xl hover:text-blue-300"/>
                    < FaJs className="text-3xl hover:text-yellow-300"/>
                    < FaHtml5 className="text-3xl hover:text-orange-700"/>


                </div>
                <footer className="flex justify-center items-center flex-col">
                    <p className="text-2xl text-gray-400">Made with ❤️ by Aayush Singh Chauhan</p>
                    <div className="flex m-2 gap-10">
                    <a href="mailto:1211aayushh@gmail.com">< IoMdMail className="text-2xl text-white hover:text-blue-300"/></a>
                    <a href="https://github.com/AAYUSH-SINGH-CREATOR">< FaGithub className="text-2xl text-white hover:text-blue-300"/></a>
                    </div>
                </footer>

                <footer className="border-t mt-10 py-5 text-center text-sm text-gray-500">
    <p>&copy; 2026 Aayush Singh Chauhan. All rights reserved.</p>
</footer>
            </div>



        </div>
    )
}