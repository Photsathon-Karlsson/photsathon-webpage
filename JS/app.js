// รอให้ DOM โหลดก่อนทำงาน
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('nav a'); // เลือก <a> ทั้งหมดใน <nav>

    // เพิ่ม Event Listener ให้แต่ละลิงก์
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // ป้องกันการเปลี่ยนหน้า
            const page = link.dataset.page; // อ่านค่าของ data-page
            changeContent(page); // เรียกฟังก์ชัน changeContent พร้อมกับค่าของหน้า
        });
    });
});

// ฟังก์ชันเปลี่ยนเนื้อหา
function changeContent(page) {
    const contentDiv = document.getElementById('content'); // อ้างถึง div แสดงเนื้อหา

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
                    <img src="img/profile.jpg" alt="profile">
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

        case 'educations':
            contentDiv.innerHTML = `
                <h1>My Education</h1>
                <ul>
                    <li>Studied SFI in Sweden</li>
                    <li>Explored Frontend Development</li>
                </ul>
            `;
            break;

        case 'work':
            contentDiv.innerHTML = `
                <h1>Work Experiences</h1>
                <p>I worked as a preschool assistant, learning to work with children.</p>
            `;
            break;

        case 'skills':
            contentDiv.innerHTML = `
                <h1>My Skills</h1>
                <ul>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Web design and coding</li>
                </ul>
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
