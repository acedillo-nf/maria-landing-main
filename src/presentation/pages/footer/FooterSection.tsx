import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#282a37] text-white py-28 px-4 md:pl-32 md:pr-24">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <img src="/logo.png" alt="Netfy" className="mb-4"  style={{ height: '4.7rem' }} />
                        <p className="text-center md:text-left text-sm">
                            We are a dynamic consultancy<br/>firm specializing in AI, Blockchain,<br/>and RPA (Robotic
                            Process<br/>
                            Automation), with a passion for<br/>innovation.
                        </p>
                    </div>
                    <div className="flex flex-col items-center md:items-start mb-8">
                        <h3 className="text-3xl font-extrabold mb-6">Menu</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:underline">Home</a></li>
                            <li><a href="#" className="hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:underline">Jobs</a></li>
                            <li><a href="#" className="hover:underline">Blog</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-3xl font-extrabold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:underline">Blockchain</a></li>
                            <li><a href="#" className="hover:underline">Artificial Intelligence</a></li>
                            <li><a href="#" className="hover:underline">Robotic Process Automation</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-3xl font-extrabold mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512" style={{width: "1.4rem"}} className="mr-5">
                                    <path fill="#74C0FC"
                                        d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                                </svg>marIA@netfy-ai.com
                            </li>
                            <li className="flex items-center mt-2">
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 512 512" style={{width: "1.4rem"}} className="mr-5">
                                    <path fill="#74C0FC"
                                        d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                                </svg>4773036854
                            </li>
                            <li className="flex items-start mt-2" >
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 384 512" style={{width: "1.4rem"}} className="mr-7">
                                    <path fill="#74C0FC"
                                          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                </svg> Piso 38, Paseo de la<br/>Reforma 296, Ciudad de<br/>México, México.
                            </li>
                            <li className="flex justify-center md:justify-start space-x-6 mt-32">
                                <a href="#" className="h-5 w-5">
                                    <svg fill="#74C0FC" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 448 512">
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                    </svg>
                                </a>
                                <a href="#" className="h-5 w-5">
                                    <svg fill="#74C0FC" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 448 512">
                                        <path
                                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                                    </svg>
                                </a>
                                <a href="#" className="h-5 w-5">
                                    <svg fill="#74C0FC" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 512 512">
                                        <path
                                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
