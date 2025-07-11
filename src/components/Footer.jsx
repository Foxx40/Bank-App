import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section
      className={`${styles.flexCenter}${styles.paddingX} ${styles.paddingY} flex-col`}
    >
      <div
        className={`${styles.flexStart} md:flex-row flex-col mb-8 w-ful ${styles.paddingX}`}
      >
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img src={logo} className="w-[266px] h-18 object-contain" alt="" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full  flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4
                className={`text-[18px] font-poppins font-medium leading-[27px]  text-white `}
              >
                {footerlink.title}
              </h4>

              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-6 text-dim-white hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={` w-full flex  justify-between items-center ${styles.paddingX} md:flex-row flex-col pt-5 border-t-[1px] border-t-[#3f3f45]`}>
        <p
          className={`text-[18px] font-poppins font-medium leading-[27px]  text-white text-center`}
        >
          2021 HooBank. All Right Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6 ">
          {socialMedia.map((social, index)=>(
              <img src={social.icon} alt="" key={social.name} className={`"w-[21px] h-[21px] object-contain cursor-pointer" ${index !== socialMedia.length -1 ? 'mr-8': 'mr-0'}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
