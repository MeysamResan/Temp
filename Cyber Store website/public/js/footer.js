const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    </div>
    <p class="footer-title">About company</p>
    <p class="info">Welcome to CyberStore, your number one source for all things electronics. We're dedicated to giving you the very best of electronics, with a focus on three characteristics, ie: dependability, customer service, and uniqueness.
    Founded in 2021 by Meysam Resan, CyberStore has come a long way from its beginnings in a Krasnodar. When Meysam Resan first started out, his passion for money drove him to do intense research and gave him the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world and are thrilled to be a part of the unfair trade wing of the electronics industry.
    We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
    <br><br> Sincerely, <br> Meysam Resan</p>
    <br>
    <p class="info">Support emails - help@cyberstore.com, customersupport@cyberstore.com</p>
    <p class="info">Telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">Terms & services</a>
            <a href="#" class="social-link">Privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Facebook</a>
            <a href="#" class="social-link">Twitter</a>
        </div>
    </div>
    `;
}

createFooter();