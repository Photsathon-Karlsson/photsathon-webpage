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
                    <h1><img src="img/bg-education.png" alt="bg-education"> My Education </h1>
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
                        <h1> My Work Experience </h1>
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
                    <h1> Languages & Communication </h1>
                        <ul>
                            <li> Thai / English / Swedish </li>
                            <li> Skilled in teaching English and Thai to children and immigrants. </li>
                            <li> Strong communication and adaptability in diverse environments. </li>
                        </ul>
                    <h1> Technology & Programming </h1>
                        <ul>
                            <li> Learning Frontend Development and Programming (2024). </li>
                            <li> Skilled in business computer applications. </li>
                        </ul>
                    <h1> Childcare & Education </h1>
                        <ul>
                            <li> 4+ years as a Preschool/Nursery Assistant in Sweden. </li>
                            <li> 7+ years of experience in childcare and teaching assistance in Thailand. </li>
                            <li> Trained in child development and engaging activities for young learners. </li>
                            <li> Experienced in teamwork with parents and educators. </li>
                        </ul>
                    <h1> Administration & Organization </h1>
                        <ul>
                            <li> Administrative experience in schools, including scheduling and record-keeping. </li>
                            <li> Strong organizational skills in fast-paced environments. </li>
                        </ul>
                    <h1> Customer Service & Hospitality </h1>
                        <ul>
                            <li> Experience as a cashier, waitress, and housekeeper. </li>
                            <li> Excellent interpersonal and customer service skills. </li>
                        </ul>
                    <h1> Other Skills </h1>
                        <ul>
                            <li> Animal care experience at Phuket Dogs Resort. </li>
                            <li> Tourism and sales experience, including as a guide and seller. </li>
                        </ul>
                </div>
            `;
            break;

        case 'family':
            contentDiv.innerHTML = `
                <h1>My Family</h1>
                <p>I have a loving and supportive family who motivates me daily.</p>
            `;
            break;

        case 'lifestyle':
            contentDiv.innerHTML = `
                <h1>My Lifestyle</h1>
                <p>I love learning and self-improvement, which keeps life exciting!</p>
            `;
            break;

        default:
            contentDiv.innerHTML = `
                <h1>Page Not Found</h1>
                <p>The content you're looking for doesn't exist.</p>
            `;
    }
}
