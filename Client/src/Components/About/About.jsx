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
                <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1669379307/foto_para_cv_-_Marcos_Pla_xfesvw.jpg" alt="profile" />
                    <h2>Marcos Pla Señorans</h2>
                    <h3>Full Stack Developer</h3>
                    <p></p>
                    <div className='logos'>
                        <a href="https://www.linkedin.com/in/marcos-pla"><LinkedInIcon /></a>
                        <a href="https://github.com/marcospla02"><GitHubIcon /></a>
                    </div>
                </div>
                <div className='containerInfo'>
                <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1669587490/wmi9mnljgccauhy5aejc.jpg" alt="profile" />
                    <h2>Guido Levy</h2>
                    <h3>Full Stack Developer</h3>
                    <div className='logos'>
                        <a href="https://www.linkedin.com/in/guido-levy-147640246"><LinkedInIcon /></a>
                        <a href="https://github.com/Guidolevy23"><GitHubIcon /></a>
                    </div>
                </div>
                <div className='containerInfo'>
                    <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1669301390/tibxu0mox4vrlnefs1sy.jpg" alt="profile" />
                    <h2>Francisco Javier Caballe</h2>
                    <h3>Full Stack Developer</h3>
                    <div className='logos'>
                        <a href="https://www.linkedin.com/in/francisco-caballe/"><LinkedInIcon /></a>
                        <a href="https://github.com/francaballe"><GitHubIcon /></a>
                    </div>
                </div>
                <div className='containerInfo'>
                <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1669735611/Juanse_-_Juan_Segundo_Mart%C3%ADnez._vawx3f.jpg" alt="profile" />
                    <h2>Juan Segundo Martinez</h2>
                    <h3>Full Stack Developer</h3>
                    <div className='logos'>
                        <a href="https://www.linkedin.com/in/juansegundomartinez/"><LinkedInIcon /></a>
                        <a href="https://github.com/JuanSegundo7"><GitHubIcon /></a>
                    </div>
                </div>
                <div className='containerInfo'>
                    <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1669735244/perfil_-_Francisco_Porta_z2049j.jpg" alt="profile" />
                    <h2>Francisco Porta</h2>
                    <h3>Full Stack Developer</h3>
                    <div className='logos'>
                        <a href="https://www.linkedin.com/in/franciscoporta/"><LinkedInIcon /></a>
                        <a href="https://github.com/franciscoporta"><GitHubIcon /></a>
                    </div>
                </div>
                <div className='containerInfo'>
                    <img src="https://res.cloudinary.com/drscelx6f/image/upload/v1669318784/1566314615583_suzaep.jpg" alt="profile" />
                    <h2>Emanuel Correa</h2>
                    <h3>Full Stack Developer</h3>
                    <div className='logos'>
                        <a href="https://www.linkedin.com/in/emanuel-s-correa-5b4b40139"><LinkedInIcon /></a>
                        <a href="https://github.com/EmanuelCorreaAR"><GitHubIcon /></a>
                    </div>
                </div>
            </section>
        </div>
    )
}
