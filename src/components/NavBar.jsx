import { FaHome, FaBriefcase } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
import myImg from "../Storage/me1.png";
import { Link } from "react-scroll";

function NavBar() {
    const home = 'home';
    const about = 'about';
    const experience = 'experience';
    const certificate = 'certificate';
    const contact = 'contact'; // Note the lowercase 'c' in 'contact'

    const links = [
        {
            id: 1,
            link: home,
            icon: <FaHome size={25} />,
            name: 'Home'
        },
        {
            id: 2,
            link: about,
            icon: <FcAbout size={25} />,
            name: 'About'
        },
        {
            id: 3,
            link: experience,
            icon: <FaBriefcase size={25} />,
            name: 'Experience'
        },
        {
            id: 4,
            link: certificate,
            icon: <PiCertificateFill size={25} />,
            name: 'Certificates'
        },
        {
            id: 5,
            link: contact,
            icon: <IoMdContact size={25} />,
            name: 'Contact'
        }
    ];

    const downImg = [
        {
            href: '../Storage/me1.png',
            style: 'rounded-tr-md',
            download: true,
        }
    ];

    return (
        <div className='p-5 flex justify-between items-center w-full h-15 px-4 text-white fixed' style={{ background: 'linear-gradient(to right, #2196F3, #4CAF50)' }}>
            {/* Profile image on the left side */}
            {downImg.map((down) =>
                <a key={down.id} href={down.href} download={down.download} target="_blank" rel="noopener noreferrer" role="button" className="rounded-full" style={{ width: '60px', height: '60px', overflow: 'hidden' }}>
                    <img src={myImg} alt='profile_pic' className='w-full h-full object-cover' />
                </a>
            )}
            {/* Text content on the middle side */}
            <h1 className="text-secondary text-3xl ml-5">𝓐𝐫𝓤𝐏 ♔♖ ŜÃⓇ𝓀𝓪𝕣</h1>

            {/* Navigation links */}
            <ul className='hidden md:flex'>
                {links.map(({ id, link, icon, name }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-primary text-500 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500} className="flex items-center space-x-2">
                            {icon} <span>{name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavBar;
