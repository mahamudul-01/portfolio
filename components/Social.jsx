import Link from "next/link";
import {FaGithub,FaLinkedin,FaYoutube,FaTwitter} from "react-icons/fa"

const socials=[
    {icon:<FaGithub></FaGithub>,path:""},
    {icon:<FaLinkedin></FaLinkedin>,path:""},
    {icon:<FaYoutube></FaYoutube>,path:""},
    {icon:<FaTwitter></FaTwitter>,path:""},
    
]


const Social = ({containerStyles,iconStyles}) => {

    
    return (
        <div className={containerStyles}>
            {socials.map((item,index)=>{
                return <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            })}
        </div>
    );
};

export default Social;