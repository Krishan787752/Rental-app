import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Logo + Social */}
          <div>
            <h1 className="text-2xl font-bold text-teal-600">FURLENCO</h1>
            <div className="flex space-x-4 mt-4">
              <FaFacebook className="text-blue-600 text-xl cursor-pointer" />
              <FaInstagram className="text-pink-500 text-xl cursor-pointer" />
              <FaTwitter className="text-sky-500 text-xl cursor-pointer" />
              <FaLinkedin className="text-blue-700 text-xl cursor-pointer" />
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Buy Furniture</li>
              <li className="hover:underline cursor-pointer">Rent Furniture</li>
              <li className="hover:underline cursor-pointer">For Investors</li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">About Us</li>
              <li className="hover:underline cursor-pointer">Privacy Policy</li>
              <li className="hover:underline cursor-pointer">Terms and Conditions</li>
              <li className="hover:underline cursor-pointer">Find Store</li>
            </ul>
          </div>

          {/* Help Button */}
          <div className="text-right">
            <p className="font-medium mb-2">NEED HELP?</p>
            <button className="bg-teal-500 text-white px-6 py-2 rounded-full shadow hover:bg-teal-600 transition">
              HELP CENTER
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Cities */}
        <div className="text-xs text-gray-600">
          <p className="font-semibold mb-2">CITIES WE DELIVER TO</p>
          <p>
            Bengaluru, Mumbai, Pune, Delhi, Gurugram, Noida, Hyderabad, Chennai, Ghaziabad, 
            Faridabad, Jaipur, Mysuru, Chandigarh, Vijayawada, Nashik, Sonipat, Patiala, 
            Meerut, Panipat, Ambala, Karnal, Hosur, Kolkata, Ahmedabad, Coimbatore, 
            Gandhinagar, Lucknow, Indore
          </p>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div>
            <p className="font-semibold">Rent & Buy Furniture Online | Furlenco</p>
            <p className="mt-1">WHY FURLENCO</p>
            <p className="text-teal-600 cursor-pointer hover:underline">See more &gt;</p>
          </div>

          {/* App Store Buttons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
