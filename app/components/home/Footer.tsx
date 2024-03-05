import Image from "next/image";
import footerImg from "@app/assets/logos/footer-logo.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="text-white p-5 pt-10">
      <div className="container m-auto grid grid-cols-4 md:grid-cols-5 [&>div_li]:text-sm [&>div_li]:mb-4 items-center  justify-center">
        <div className="md:col-span-2 col-span-4">
          <Image src={footerImg} alt="footer img" className="w-36" />
          <p className="text-sm leading-7 mt-5 w-11/12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            blanditiis delectus sunt perspiciatis recusandae placeat dolore quam
            minus ipsam quasi consequuntur amet, cumque, neque adipisci fuga
            laudantium unde alias facere?
          </p>
          <div className="flex list-none [&_li]:mr-10 mt-6 text-white [&>li_svg]:text-3xl">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaTelegram />
            </li>
          </div>
        </div>
        <div className="flex flex-1 col-span-4 md:col-span-3  justify-between  [&>div>h4]:text-xl [&>div>h4]:mb-9">
          <div>
            <h4>Discover</h4>
            <ul className="list-none">
              <li>Buy & Sell</li>
              <li>Merchant</li>
              <li>Giving back</li>
              <li>Help & Support</li>
            </ul>
          </div>
          <div>
            <h4>About</h4>
            <ul className="list-none">
              <li>Team MSH</li>
              <li>Team MSH</li>
              <li>Blog</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul className="list-none">
              <li>Security</li>
              <li>Global</li>
              <li>Charts</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-blue-500 ">copy right magdy and bassel</h1>
      </div>
    </footer>
  );
}
