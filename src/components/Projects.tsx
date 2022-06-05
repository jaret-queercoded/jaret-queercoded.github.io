const Projects = () => {
    return(
        // this still is not right but it is much better
        <div className="Projects" dir="rtl">
            <h1>Projects</h1>
            <ul>
                <li><a href="https://github.com/jaret-queercoded/quee">quee</a></li>
                <ul>
                    <li>quee is a 2D game engine that is written in C using SDL2 and utilizes Lua integration</li>
                    <li>Development is done mostly live on <a href="https://twitch.tv/queer_coded">Twitch</a></li>
                    <li>Stream archives can be found on <a href="https://www.youtube.com/channel/UCkN5wBtmX-nGKa_FMQ-7r_w">YouTube</a></li>
                </ul>
                <li><a href="https://github.com/jaret-queercoded/Grotesque">Grotesque</a></li>
                <ul>
                    <li>Grotesque is a PS1 era inspired horror game about body dysmorphia</li>
                    <li>Grotesque is built using <a href="https://godotengine.org">Godot</a></li>
                    <li>Grotesque is currently in early development but I hope for it to be my first game release</li>
                </ul>
                <li><a href="https://github.com/jaret-queercoded/doto">doto</a></li>
                <ul>
                    <li>doto is a ncurses based terminal application for tracking codebase todo priority</li>
                    <li>By simply tacking more o's onto the end of your todo it will raise the priority on your todo list</li>
                    <li>doto will recursively search your entire code base for all todos and display them in an user friendly list</li>
                </ul>
                <ul>

                </ul>
            </ul>
        </div>
    );
}

export default Projects;