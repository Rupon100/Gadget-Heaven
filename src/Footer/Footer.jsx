 

const Footer = () => {
    return (
        <div className="p-10 mt-10 bg-gray-200">
            <footer className="max-w-[90%] mx-auto flex flex-col justify-center items-center gap-4">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">Gadget Heaven</h1>
                    <p className="text-xl text-gray-600">Leading a way to cutting-edge technology and innovation.</p>
                </div>
                <div className="divider"></div>
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 md:justify-between">
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Services</h3>
                        <ul className="text-center">
                            <li><a href="#">Product Support</a></li>
                            <li><a href="#">Order Tracking</a></li>
                            <li><a href="#">Shipping & Delivery</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Company</h3>
                        <ul className="text-center">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="text-center">
                        <h3 className="text-xl font-semibold">Legel</h3>
                        <ul className="text-center">
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;