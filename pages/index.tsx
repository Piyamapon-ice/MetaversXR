import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export default function Home() {
  const [isShow, setIsShow] = useState<Boolean>(false);
  const [dataService, setDataService] = useState([]);
  const [dataPortfolio, setDataPortfolio] = useState([]);
  const [dataIconHome, setDataIconHome] = useState([]);
  const navbarRef = useRef<any>(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_SERVICE_DATA}`)
      .then((response) => {
        // handle success
        console.log("response : ", response.data.service);
        setDataService(response.data.service);
        setDataPortfolio(response.data.portfolio);
        setDataIconHome(response.data.iconHome);
      })
      .catch((error) => {
        // handle errors
        console.log(error);
      });

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        navbarRef.current.classList.add("scrolled");
      } else {
        navbarRef.current.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // config slides
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    arrows: false,
    autoplay: true,
    // focusOnSelect: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 6,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        }
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
        }
      }
    ]
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="relative w-full tracking-[.03em]">
        <nav
          ref={navbarRef}
          className={
            isShow
              ? "bg-[#06060A] px-2 sm:px-4 py-2.5 inset-x-0 fixed bg-scroll z-50"
              : "px-2 sm:px-4 py-2.5 inset-x-0 fixed bg-scroll"
          }
        >
          <div className="flex">
            <div className="container flex flex-wrap lg:items-center justify-between lg:justify-center mx-auto">
              <Link href="/" className="flex items-center">
                <Image
                  width={150}
                  height={50}
                  sizes=""
                  src="/images/MetaversXR/MetaverseXR_logo.svg"
                  alt="image"
                  className="ml-2"
                />
              </Link>

              <button
                onClick={() => setIsShow(!isShow)}
                data-collapse-toggle="navbar-default"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-[#9A9A9A] hover:text-white lg:hidden focus:outline-none focus:ring-2"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <svg
                  className="w-6 h-6 text-white"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div
                className={
                  isShow
                    ? "bg-[#06060A]  w-full lg:block lg:w-auto"
                    : "hidden w-full lg:block lg:w-auto"
                }
                id="navbar-default"
              >
                <ul className="nav-z-index flex flex-col p-1 pl-2 mt-4 lg:flex-row border-t-2 lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:ml-20 lg:items-center">
                  <li>
                    <a
                      href="#home-section"
                      className="block py-2 pl-0 pr-4 text-[#9A9A9A] rounded lg:bg-transparent hover:text-white lg:p-0 dark:text-white"
                      aria-current="page"
                      onClick={() => setIsShow(!isShow)}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#service-section"
                      className="block py-2 pl-0 pr-4 text-[#9A9A9A] lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0"
                      onClick={() => setIsShow(!isShow)}
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#portfolio-section"
                      className="block py-2 pl-0 pr-4 text-[#9A9A9A] lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0"
                      onClick={() => setIsShow(!isShow)}
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about-section"
                      className="block py-2 pl-0 pr-4 text-[#9A9A9A] lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0"
                      onClick={() => setIsShow(!isShow)}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact-section"
                      className="block py-2 pl-0 pr-4 text-[#9A9A9A] lg:hover:bg-transparent lg:border-0 hover:text-white lg:p-0"
                      onClick={() => setIsShow(!isShow)}
                    >
                      Contact
                    </a>
                  </li>
                  <li className="pl-0 lg:pl-10 hidden lg:block">
                    <Image
                      width={60}
                      height={20}
                      src="/images/Contact/tw_icn.svg"
                      alt="image"
                      className="m-3 mt-0 ml-0 lg:m-0"
                    />
                  </li>
                  <li className="hidden lg:block">
                    <Image
                      width={60}
                      height={10}
                      src="/images/Contact/fb_icon.svg"
                      alt="image"
                      className="m-3 mt-0 ml-0 lg:m-0"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <section
          id="home-section"
          className="padding-main bg-home mx-auto pt-28 pb-96 md:pt-28 md:pb-48 bg-cover bg-center overflow-hidden"
        >
          <div className="relative">
            <Image
              width={490}
              height={50}
              sizes=""
              src="/images/Home/graphic.png"
              alt="image"
              className="invisible md:visible absolute right-2/3 top-28"
            />

            <Image
              width={390}
              height={50}
              sizes=""
              src="/images/Home/man.png"
              alt="image"
              className="invisible md:visible absolute inset-x-16 md:top-[5rem] md:inset-y-0 md:left-[28rem] lg:left-2/3"
            />

            {/* mobile */}
            <Image
              width={350}
              height={50}
              sizes=""
              src="/images/Home/graphic_mobile.png"
              alt="image"
              className="md:invisible absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <Image
            width={250}
            height={50}
            sizes=""
            src="/images/Home/HeaderMetaVerse.png"
            alt="image"
            className="mx-auto lg:w-[450px]"
          />

          <p className="text-[#FFFFFF] text-sm mt-5 md:text-base text-center md:mt-5">
            Subcription Models of All MetaverseXR technologies
          </p>

          <p className="text-[#BC56ED] text-sm mt-10 md:text-base text-center md:mt-28 font-bold">
            From idea to the world of virtual reality
          </p>
        </section>

        <section
          id="icon"
          className="padding-main">
          <div className="relative">
            <div className="absolute -top-[6rem]  w-full">
              <div className="flex justify-center">
                <div className="grid gap-5 md:grid-cols-3 md:grid-rows-1 inset-0">
                  {dataIconHome.length > 0 && (
                    <>
                      {dataIconHome.map((item: any, index) => {
                        return (
                          <Image
                          key={index}
                            width={200}
                            height={50}
                            sizes=""
                            src={item.image}
                            alt="image"
                            className=""
                          />
                        )
                      })}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="service-section"
          className="padding-main bg-service bg-cover bg-center bg-no-repeat xl:px-[15rem] 2xl:px-[25rem]"
        >
          <div className="pt-[40rem] pb-24 md:pt-[15rem] md:pb-[8rem]">
            <Image
              width={120}
              height={50}
              sizes=""
              src="/images/Service/Services.png"
              alt="image"
              className="mx-auto lg:w-[220px]"
            />

            <p className="text-white text-center pt-[3rem] ml-10 mr-10 md:pl-40 md:pr-40">
              We Are The World Emerging VR Game Developer And Thailand
              Prospected Leading VR Studio. The Area We Will Cover Is
              VR Game Developer, Mobile Game & Apps, Augmented Reality Creator,
              VR For Ads And All Commercial VR Modeling
            </p>

            {/* show */}
            <div className="grid gap-14 md:grid-cols-4 md:grid-rows-3 pt-20 md:pt-[8rem] ml-10 mr-10">
              {dataService.length > 0 && (
                <>
                  {dataService.map((item: any, index) => {
                    return (
                      <div key={index}>
                        <Image
                          width={65}
                          height={50}
                          sizes=""
                          src={`${item.image}`}
                          alt="image"
                          className="mx-auto"
                        />

                        <h4 className="text-[#BC56ED] font-black text-2xl text-center mt-5 mb-5">
                          {item.heading}
                        </h4>

                        <p className="text-[#FFFFFF] font-light text-base text-center">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </section>

        <section
          id="portfolio-section"
          className="padding-main bg-portfolio bg-cover bg-center bg-no-repeat pb-[6rem] md:pb-[12rem] md:pt-[4rem] text-white xl:px-[15rem] 2xl:px-[25rem]"
        >
          <div className="p-10">
            <Image
              width={120}
              height={50}
              sizes=""
              src="/images/Portfolio/Group 935.png"
              alt="image"
              className="mx-auto lg:w-[220px]"
            />
          </div>

          <div className="px-3 md:px-0 mx-auto text-center">
            {/* <div className="overflow-hidden shadow-lg bg-service bg-cover bg-center bg-no-repeat" > */}
            <Slider {...settings} className="">
              {
                dataPortfolio.length > 0
                  ? dataPortfolio.map((item: any, index) => {
                    return (
                      <div className="px-5" key={index}>
                        <div className="bg-service bg-cover bg-center bg-no-repeat min-h-[320px] max-h-[320px] overflow-hidden">
                          <div className="relative overflow-hidden pb-48">
                            <Image
                              width={150}
                              height={50}
                              sizes=""
                              src={`${item.imageSub}`}
                              alt="image"
                              className="absolute inset-0 bottom-0 h-full w-full object-cover "
                            />
                          </div>
                          <p className="p-5">
                            {item.heading}
                          </p>
                        </div>
                      </div>
                    )
                  })
                  : ""
              }
              {/* {dataPortfolio.length > 0 && (
                <>
                  {dataPortfolio.map((item: any, index) => {
                    return (
                      <div className="overflow-hidden shadow-lg bg-service bg-cover bg-center bg-no-repeat" >
                        <div className="" key={index}>
                          <div className="w-[100%] h-[200px] overflow-hidden flex items-center">
                            <Image
                              width={150}
                              height={50}
                              sizes=""
                              src={`${item.imageSub}`}
                              alt="image"
                              className="w-full bg-cover bg-center bg-no-repeat"
                            />
                          </div>
                          <div className="px-6 py-4">
                            <h1 className="text-white font-bold text-xl mb-5 text-center">{item.heading}</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )} */}
            </Slider>
          </div>

        </section>

        <section
          id="xr"
          className="padding-main">
          <div className="relative">
            <Image
              width={350}
              height={50}
              sizes=""
              src="/images/About/circle_xr.svg"
              alt="image"
              className="invisible md:visible mx-auto absolute top-[0.1rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            />

            {/* mobile */}
            <Image
              width={250}
              height={50}
              sizes=""
              src="/images/About/circle_xr.svg"
              alt="image"
              className="md:invisible mx-auto absolute top-[0.2rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            />
          </div>
        </section>

        <section
          id="about-section"
          className="padding-main bg-about bg-cover bg-center bg-no-repeat bg-black overflow-hidden pb-28 xl:px-[15rem] 2xl:px-[25rem]"
        >
          <div className="relative">
            <Image
              width={280}
              height={50}
              sizes=""
              src="/images/About/circle_xr_2.svg"
              alt="image"
              className="invisible md:visible z-30 absolute top-[0.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />

            {/* mobile */}
            <Image
              width={250}
              height={50}
              sizes=""
              src="/images/About/circle_xr_2.svg"
              alt="image"
              className="md:invisible z-30 absolute -top-[0.5rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>

          <Image
            width={120}
            height={50}
            sizes=""
            src="/images/About/topic_about.svg"
            alt="image"
            className="mx-auto pt-[10rem] lg:w-[220px]"
          />

          <div className="ml-10 mr-10 text-white text-center">
            <p className="pt-10">
              Metaverse XR will provide VR game developers and related VR game accessories. Encourage VR mount games by emphasizing on service to maximize customer satisfaction. By starting to leave at the end of 2020, the former name of the company Imagination VR Co., Ltd.
              By following the rules of the company, only 7 people and changing the name of the meta scope of Mas X R Limited which in the case of more than 40 people
            </p>

            <p className="pt-7">
              Meta would like to ask you that SXR Co., Ltd. has already moved into its 2nd beta year with an average growth of over 200% over the rest.
              who are helping the groups who get the most from the administration
              Provide VR game development and affiliated companies, that is, services and services to partners` employees and advice.
            </p>

            <Image
              width={30}
              height={50}
              sizes=""
              src="/images/About/lighting_line.svg"
              alt="image"
              className="mx-auto pt-4"
            />

            <p className="pt-5">
              Metaverse XR company limited has grown from the word service and attention to customer satisfaction and advice by the company there are no fixed rules, there is only one rule we adhere to.
            </p>

            <h2 className="pt-5 text-bold">
              “Customers are satisfied, employees are happy and the company can survive.”
            </h2>
          </div>

          <Image
            width={150}
            height={50}
            sizes=""
            src="/images/MetaversXR/MetaverseXR_logo.svg"
            alt="image"
            className="mx-auto pt-9"
          />
        </section>

        <section
          id="contact-section"
          className="relative z-50 bg-contact bg-cover bg-center bg-no-repeat md:pt-[4rem] pb-[1rem] xl:px-[15rem] 2xl:px-[25rem]"
        >
          <div className="relative">
            <Image
              width={120}
              height={50}
              sizes=""
              src="/images/Contact/Contact.png"
              alt="image"
              className="mx-auto pt-9 pb-5 lg:w-[220px]"
            />

            {/* image ข้างซ้าย */}
            <Image
              width={200}
              height={50}
              sizes=""
              src="/images/About/3D 1.png"
              alt="image"
              className="absolute -top-[5rem] left-[-5rem] md:left-[-4rem] md:-top-[5rem] xl:-top-[7rem] xl:left-[-15rem] xl:w-[300px]"
            />

            {/* image ข้างขวา */}
            <Image
              width={300}
              height={50}
              sizes=""
              src="/images/Contact/3D 2.png"
              alt="image"
              className="absolute top-[50rem] md:top-[33rem] right-0 md:right-[0rem] z-[-1] xl:right-[-9rem]"
            />

            <form id="form-contact" className="bg-[#5A5A5A50] backdrop-blur-lg text-white p-5 m-10 md:ml-20 md:mr-20 rounded-sm ">
              <div className="grid gap-[2rem] md:gap-20 grid-cols-1 md:grid-cols-2">
                <div className="grid gap-5 grid-cols-1">
                  <div>
                    <p>Location :</p>
                    <p>
                      (Thailand (main office)) 44 Ekachai 63 Bangbon Bangkok 10150
                    </p>
                    <p className="pt-5">
                      (America) 1175 Folsom Street, San Francisco, CA 94103
                    </p>
                  </div>
                  <div>
                    <p>Telephone : </p>
                    <p>080-542-2246</p>
                  </div>
                  <div>
                    <p>Working Time : </p>
                    <p>10.00 am - 07.00 pm</p>
                  </div>
                  <div>
                    <p>Email :</p>
                    <p>info@imaginationvr.co</p>
                  </div>
                  <div>
                    <p>Social Media :</p>
                    <div className="grid gap-0 grid-cols-3 pt-5">
                      <Image
                        width={60}
                        height={50}
                        sizes=""
                        src="/images/Contact/tw_icn.svg"
                        alt="image"
                        className=""
                      />
                      <Image
                        width={60}
                        height={50}
                        sizes=""
                        src="/images/Contact/fb_icon.svg"
                        alt="image"
                        className=""
                      />
                      <Image
                        width={60}
                        height={50}
                        sizes=""
                        src="/images/Contact/linkin_icon.svg"
                        alt="image"
                        className=""
                      />
                    </div>
                  </div>
                </div>
                <div className="grid gap-5 grid-cols-1">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Add your subject"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Add your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Add your email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Add your message"
                      required
                    />
                  </div>
                  <div className="flex justify-end">
                    <button className="btn-gradient text-white font-bold py-1 px-[4rem]">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>

        <section
          id="partner-section"
          className="padding-main bg-partner bg-cover bg-center bg-no-repeat p-10 xl:px-[15rem] 2xl:px-[25rem]"
        >
          <Image
            width={120}
            height={50}
            sizes=""
            src="/images/Partner/Partner.png"
            alt="image"
            className="mx-auto pt-9 lg:w-[220px]"
          />

          <div className="grid gap-0 grid-cols-1 md:grid-cols-4">
            <Image
              width={200}
              height={50}
              sizes=""
              src="/images/Partner/metabot_logo.svg"
              alt="image"
              className="mx-auto pt-9"
            />
            <Image
              width={200}
              height={50}
              sizes=""
              src="/images/Partner/passion_logo.svg"
              alt="image"
              className="mx-auto pt-9"
            />
            <Image
              width={200}
              height={50}
              sizes=""
              src="/images/Partner/iaminnotect_logo.svg"
              alt="image"
              className="mx-auto pt-9"
            />
            <Image
              width={200}
              height={50}
              sizes=""
              src="/images/Partner/imagination_logo.svg"
              alt="image"
              className="mx-auto pt-9"
            />
          </div>
        </section>

        <section
          id="footer-section"
          className="padding-main bg-[#06060A] text-[#9A9A9A] p-5 md:p-10 xl:px-[15rem] 2xl:px-[25rem]">
          <div className="grid gap-5 md:gap-10 grid-cols-1 md:grid-cols-3 text-sm">
            <div>
              <Image
                width={200}
                height={50}
                sizes=""
                src="/images/MetaversXR/MetaverseXR_logo.svg"
                alt="image"
                className="pb-10"
              />

              <p className="">
                We Are The World Emerging VR Game Developer And Thailand
                Prospected Leading VR Studio. The Area We Will Cover Is
                VR Game Developer, Mobile Game & Apps, Augmented Reality Creator,
                VR For Ads And All Commercial VR Modeling
              </p>
            </div>
            {/* <div className="grid grid-cols-1 grid-rows-4 gap-1 md:ml-10 lg:ml-20"> */}
            <div className="flex flex-col gap-5 md:ml-10 lg:ml-[8rem]">
              <Link href="#home-section">
                <p className="hover:text-white">Home</p>
              </Link>
              <Link href="#service-section">
                <p className="hover:text-white">Services</p>
              </Link>
              <Link href="#portfolio-section">
                <p className="hover:text-white">Portfolio</p>
              </Link>
              <Link href="#about-section">
                <p className="hover:text-white">About</p>
              </Link>
            </div>

            <div className="flex flex-row items-start">
              <Image
                width={50}
                height={50}
                sizes=""
                src="/images/Contact/tw_icn.svg"
                alt="image"
                className="w-[20%]"
              />
              <Image
                width={50}
                height={50}
                sizes=""
                src="/images/Contact/fb_icon.svg"
                alt="image"
                className="w-[20%]"
              />
              <Image
                width={50}
                height={50}
                sizes=""
                src="/images/Contact/linkin_icon.svg"
                alt="image"
                className="w-[20%]"
              />
            </div>
          </div>
        </section>

        {/* <section id="toTop" className="padding-main">
          <div className="relative">
            <div className="absolute -top-[10rem] right-9 inline-block h-20 w-20 rounded-full ring-2 ring-white">
              <div className="flex items-center justify-center p-4">
                <Link href="#">
                  <Image
                    width={40}
                    height={40}
                    sizes=""
                    src="/images/ToTop/arrow_totop.svg"
                    alt="image"
                    className=""
                  />
                </a>
              </div>

            </div>

          </div>
        </section> */}

        <section id="copyright" className="padding-main bg-[#06060A] text-[#9A9A9A] border-t border-t-[#9A9A9A] p-5">
          <p className="text-center">Copyright © 2022 MetaverseXR All Right Reserved</p>
        </section>
      </div>
    </>
  );
}
