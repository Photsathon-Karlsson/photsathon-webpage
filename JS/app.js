// wait for DOM load.
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav a'); // Choose <a> all in <nav>

    // Add Event Listener for each link.
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Protecting changing pages. 
            const page = link.dataset.page; // Read data-page.
            changeContent(page); // Call function "changeContent".
        });
    });
});

// Function to control video.
document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.querySelector(".welcome-video video");  // Choose video.
    // Play video when click the button. 
    document.getElementById("playVideo").addEventListener("click", () => {
        videoElement.play();
    });
    // Stop video when click the button.
    document.getElementById("stopVideo").addEventListener("click", () => {
        videoElement.pause();
    });
});

// Function for slider gallery
function updateSlider() {
    let index = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    const slider = document.querySelector('.slider');

    document.querySelector('.next').addEventListener('click', () => {
        index = (index + 1) % totalSlides;
        updateSlidePosition();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    function updateSlidePosition() {
        if (slider) {
            slider.style.transform = `translateX(-${index * 100}%)`;
        }
    }
}

// Function for changing pages.
function changeContent(page) {
    const contentDiv = document.getElementById('content'); // div for showing the content.

    switch (page) {

        case 'home':
            contentDiv.innerHTML = `
                <div class="welcome-text">
                    <h2> Hi there, </h2> 
                    <h1 class="myName"> I'm Photsathon ! </h1>
                    <h3> I'm a student specializing in Frontend Development, </h3> 
                    <h4> with a background in working as a preschool assistant. </h4>
                </div>
                <div class="welcome-img">
                    <img src="img/profile.png" alt="profile">
                </div>
            `;
            break;

        case 'about-me':
            contentDiv.innerHTML = `
                <div class="aboutMe-img">
                    <img src="img/about-me.png" alt="about-me-img">
                </div>
                <div class="aboutMe-text">
                    <p>
                    I was born in Thailand and moved to Sweden in 2018 to start a new chapter in my life. 
                    Since moving here, I've been on an exciting learning journey. 
                    I started by studying SFI (Svenska för invandrare) to improve my Swedish, 
                    then studied and worked as a preschool assistant, which gave me the opportunity to work with children. 
                    Now, I'm diving into Frontend Development and exploring the world of coding and web design. 
                    It's been an amazing experience, and I absolutely love learning new things—it keeps life interesting and full of possibilities!
                    </p>
                </div>
            `;
            break;

        case 'education':
            contentDiv.innerHTML = `
                <div class="education">
                    <h1><img src="img/bg-education.png" alt="bg-education"><br>[ E d u c a t i o n ] </h1>
                    <ul>
                        <li> 2024 - FrontEnd Developer : NBI Handelsakademin Göteborg </li>
                        <li> 2024 - Svenska som andraspråk 2 (Swedish as a Second Language 2) : Hermods Göteborg </li>
                        <li> 2024 - Programmering 1 : Handelsakademin Göteborg </li>
                        <li> 2024 - Programmering 1 : Hermods Göteborg </li>
                        <li> 2022 - Förskoleassistent / Barnskötarutbildning (Preschool / Nursery Assistant): Komvux i Alafors, Ale kommun </li>
                        <li> 2021 - Svenska som andraspråk 1 (Swedish as a Second Language 1) : Hermods Göteborg </li>
                        <li> 2021 - Arbetsliv for Pedagoger (Work Life for Educators) : Hermods Göteborg </li>
                        <li> 2019 - Talang Barnomsorg / Barnskötare (Talent Nursery / Nursery Assistant) : Hermods Göteborg </li>
                        <li> 2018 - Svenska för invandrare (SFI) (Swedish for Immigrants (SFI)) : Hermods Göteborg </li>
                        <li> 2006 - Bachelor of Arts (BA) English Language and Literature : Naresuan University Thailand </li>
                        <li> 2000 - Business computer - High Vocational Certificate Program : Northeastern Technological College Thailand </li>
                    </ul>
                </div>
            `;
            break;

        case 'work':
            contentDiv.innerHTML = `
                <div class="work">
                    <div class="work-header">
                        <h1> [ W o r k <br> O v e r v i e w ] </h1>
                        <img src="img/bg-work.png" alt="work-img">
                    </div>
                    <div class="work-details">
                        <ul>
                            <li> 2021-2023 : Barnskötare / Förskoleassistent (Preschool / Nursery Assistant) - Ale Kommun </li>
                            <li> 2019-2021 : Barnskötare / Förskoleassistent (Preschool / Nursery Assistant) - Göteborg Stad </li>
                            <li> 2019-2020 : Housekeeper - Radisson Blu Hotel - Göteborg Stad </li>
                            <li> 2019-2019 : Praktik som barnskötare (Internship as a nursery assistant) - Skånegatan förskola, Göteborg Stad </li>
                            <li> 2010-2017 : Volunteering as a teaching assistant - Thailand </li>
                            <li> 2015-2015 : Administrator - Headstart international school, Phuket, Thailand </li>
                            <li> 2013-2015 : Thai Teacher for immigrants - The Genius Language school, Phuket, Thailand </li>
                            <li> 2014-2015 : Dog Care Assistant - Phuket Dogs Resort, Phuket, Thailand </li>
                            <li> 2013-2013 : Cashier & Waitress - Kata Cuit restaurang, Phuket, Thailand</li>
                            <li> 2011-2012 : Teacher Assistant (English Program) - Anuban Khonkaen School, Khonkaen, Thailand </li>
                            <li> 2010-2011 : Teacher Assistant - Paiboon Wittaya School, Khonkaen, Thailand </li>
                            <li> 2010-2010 : Teacher Smart English for kids, Khonkaen, Thailand </li>
                            <li> 2009-2009 : Tour guide (Internship) - Kanchanaburi, Thailand </li>
                            <li> 2006-2009 : Seller - Payao, Thailand </li>
                            <li> 2004-2005 : Cashier & Waitress - Kiwi Café, Khonkaen, Thailand </li>
                        </ul>
                    </div>                   
                </div>
            `;
            break;

        case 'skills':
            contentDiv.innerHTML = `
                <div class="skills">
                    <h1> [ S K I L L S ] </h1>
                    <h2> Languages & Communication </h2>
                        <ul>
                            <li> Thai / English / Swedish </li>
                            <li> Skilled in teaching English and Thai to children and immigrants. </li>
                            <li> Strong communication and adaptability in diverse environments. </li>
                        </ul>
                    <h2> Technology & Programming </h2>
                        <ul>
                            <li> Learning Frontend Development and Programming (2024). </li>
                            <li> Skilled in business computer applications. </li>
                        </ul>
                    <h2> Childcare & Education </h2>
                        <ul>
                            <li> 4+ years as a Preschool/Nursery Assistant in Sweden. </li>
                            <li> 7+ years of experience in childcare and teaching assistance in Thailand. </li>
                            <li> Trained in child development and engaging activities for young learners. </li>
                            <li> Experienced in teamwork with parents and educators. </li>
                        </ul>
                    <h2> Administration & Organization </h2>
                        <ul>
                            <li> Administrative experience in schools, including scheduling and record-keeping. </li>
                            <li> Strong organizational skills in fast-paced environments. </li>
                        </ul>
                    <h2> Customer Service & Hospitality </h2>
                        <ul>
                            <li> Experience as a cashier, waitress, and housekeeper. </li>
                            <li> Excellent interpersonal and customer service skills. </li>
                        </ul>
                    <h2> Other Skills </h2>
                        <ul>
                            <li> Animal care experience at Phuket Dogs Resort. </li>
                            <li> Tourism and sales experience, including as a guide and seller. </li>
                        </ul>
                </div>
            `;
            break;

        case 'projects':
            contentDiv.innerHTML = `
                <div class="projects">
                    <h1 class="projects-topic"> [ P R O J E C T S ] </h1>
                    <p class="projects-text"> Here are my projects! Some of them were created for school assignments, <br>while others are personal projects that I built out of curiosity and passion (more in GitHUb) </p>
                    <div class="gallery-container">
                        <h2> HTML & CSS <br>[ Individual Project ] </h2>
                            <div class="gallery-item">
                                <img src="img/Project-BetterWeb.jpg" alt="Project-BetterWeb">
                                <a href="https://photsathon-karlsson.github.io/Better-web/" target="_blank">View more</a>
                            </div>
                        <h2> HTML & CSS <br>[ Group Project ] </h2>
                            <div class="gallery-item">
                                <img src="img/Project-Produktbolag.jpg" alt="Project-Produktbolag">
                                <a href="https://felix-skorvald.github.io/majestic-rabbits/index.html" target="_blank">View more</a>
                            </div>
                        <h2> JavaScript <br>[ Individual Project ] </h2>
                            <div class="gallery-item">
                                <img src="img/Project-Foodtruck.jpg" alt="Project-Foodtruck">
                                <a href="https://photsathon-karlsson.github.io/Foodtruck/" target="_blank">View more</a>
                            </div>
                        <h2> JavaScript <br>[ Group Project ] </h2>
                            <div class="gallery-item">
                                <img src="img/Project-HangmanGame.jpg" alt="Project-HangmanGame">
                                <a href="https://ritahelwangi.github.io/Hangman/" target="_blank">View more</a>
                            </div>
                        <h2> UX / UI Design <br>[ Individual Project ] </h2>
                            <div class="gallery-item">
                                <img src="img/Project-CyberPetz.jpg" alt="Project-CyberPetz">
                                <a href="https://www.figma.com/design/ADblgz5lvdBt5axYL9cHav/Inl%C3%A4mningsuppgift-UX---Cyber-Petz?node-id=1-168&t=ZgFmepC6Syv2cGjR-1" target="_blank">View more</a>
                            </div>
                        <h2> UX / UI Design <br>[ Group Project ] </h2>
                            <div class="gallery-item">
                                <img src="img/Project-TravelApp.jpg" alt="Project-TravelApp">
                                <a href="https://www.figma.com/design/clSaNfammunaLAerbL0prP/Ninja-Kittens?node-id=0-1&p=f&t=JKiw9moyfawhIG4w-0" target="_blank">View more</a>
                            </div>
                        <h2> Project with Agile Methods <br>[ Group Project ] </h2>
                            <div class="gallery-item">
                                <img src="img/Project-MeetingApp.jpg" alt="Project-MeetingAp">
                                <a href="https://www.figma.com/design/8KuBzddwnWVALAMK3YWuAl/Fire-Nerds-agila-metoder?node-id=0-1&p=f&t=RLIELFh4UTW46yHX-0" target="_blank">View more</a>
                            </div>
                    </div>
                </div>
            `;
            break;

        case 'lifestyle':
            contentDiv.innerHTML = `
            <div class="lifestyle">
                <div class="lifestyle-textbox">
                    <h1 class="lifestyle-text">How I Spend My Free Time</h1>
                    <ul>       
                        <li> Taking photos </li> 
                        <li> Drawing </li> 
                        <li> Crafting </li> 
                        <li> Crocheting </li> 
                    </ul>
                </div>
                <div class="slider-container">
                    <div class="slider">
                        <div class="slide"><img src="img/lifestyle-1.jpg" alt="Image 1"></div>
                        <div class="slide"><img src="img/lifestyle-2.png" alt="Image 2"></div>
                        <div class="slide"><img src="img/lifestyle-3.png" alt="Image 3"></div>
                        <div class="slide"><img src="img/lifestyle-4.jpg" alt="Image 4"></div>
                        <div class="slide"><img src="img/lifestyle-5.jpg" alt="Image 5"></div>
                        <div class="slide"><img src="img/lifestyle-6.jpg" alt="Image 6"></div>
                        <div class="slide"><img src="img/lifestyle-7.jpg" alt="Image 7"></div>
                        <div class="slide"><img src="img/lifestyle-8.jpg" alt="Image 8"></div>
                        <div class="slide"><img src="img/lifestyle-9.jpg" alt="Image 9"></div>
                    </div>
                    <button class="prev">&#10094;</button>
                    <button class="next">&#10095;</button>
                </div>
            </div>
            `;
            setTimeout(updateSlider, 100); // ให้เวลาโหลด DOM ก่อน
            break;

        default:
            contentDiv.innerHTML = `
                <h1>Page Not Found</h1>
                <p>The content you're looking for doesn't exist.</p>
            `;
    }
}
