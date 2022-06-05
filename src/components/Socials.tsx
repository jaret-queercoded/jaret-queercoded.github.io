import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitch, faTwitter, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Socials = () => {
    return(
        <div className="Socials">
            <ul>
                <li><a href="https://github.com/jaret-queercoded"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://twitch.tv/queer_coded"><FontAwesomeIcon icon={faTwitch} /></a></li>
                <li><a href="https://www.youtube.com/channel/UCkN5wBtmX-nGKa_FMQ-7r_w"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a></li>
                <li><a href="https://twitter.com/queer_coded_"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="https://www.linkedin.com/in/jaret-screws-22730212b/"><FontAwesomeIcon icon={faLinkedin}/></a></li>
            </ul>
        </div>
    )
}

export default Socials;