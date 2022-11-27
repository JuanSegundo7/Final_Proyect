import React from 'react'
import "./About.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from "../Header/img/coffee.png";

export default function About() {
    return (
        <div id='About'>
            <div className='header'>        
                <div className="title">ABOUT US</div>
                <a href='/'>
                    <img className='logo' src={logo} alt="logo" />
                </a>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <section className='cards'>
                <div className='containerInfo'>
                {/* <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1669379307/foto_para_cv_-_Marcos_Pla_xfesvw.jpg" alt="photo" /> */}
                    <h2>Marcos Pla Señorans</h2>
                    <h3>Web Developer</h3>
                    <p></p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/marcos-pla"><LinkedInIcon /></a></li>
                        <li><a href="https://github.com/marcospla02"><GitHubIcon /></a></li>
                    </ul>
                </div>
                <div className='containerInfo'>
                    <h2>Emanuel Correa</h2>
                    <h3>Web Developer</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/emanuel-s-correa-5b4b40139"><LinkedInIcon /></a></li>
                        <li><a href="https://github.com/EmanuelCorreaAR"><GitHubIcon /></a></li>
                    </ul>
                </div>
                <div className='containerInfo'>
                    <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1669318784/1566314615583_suzaep.jpg" alt="photo" />
                    <h2>Emanuel Correa</h2>
                    <h3>Web Developer</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/emanuel-s-correa-5b4b40139"><LinkedInIcon /></a></li>
                        <li><a href="https://github.com/EmanuelCorreaAR"><GitHubIcon /></a></li>
                    </ul>
                </div>
                <div className='containerInfo'>
                    <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1669301390/tibxu0mox4vrlnefs1sy.jpg" alt="photo" />
                    <h2>Francisco Javier Caballe</h2>
                    <h3>Web Developer</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/emanuel-s-correa-5b4b40139"><LinkedInIcon /></a></li>
                        <li><a href="https://github.com/EmanuelCorreaAR"><GitHubIcon /></a></li>
                    </ul>
                </div>
                <div className='containerInfo'>
                    <h2>Emanuel Correa</h2>
                    <h3>Web Developer</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/francisco-caballe"><LinkedInIcon /></a></li>
                        <li><a href="https://github.com/EmanuelCorreaAR"><GitHubIcon /></a></li>
                    </ul>
                </div>
                <div className='containerInfo'>
                    <h2>Emanuel Correa</h2>
                    <h3>Web Developer</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/francisco-caballe"><LinkedInIcon /></a></li>
                        <li><a href="https://github.com/EmanuelCorreaAR"><GitHubIcon /></a></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
