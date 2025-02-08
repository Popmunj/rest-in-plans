const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white text-center p-4">
      <p className="text-sm">
        © {new Date().getFullYear()} Rest In Plans. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
