const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white w-full">
      <div className="container mx-auto px-6 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Anjadhey Foundation</p>
        <p className="mt-2 text-lg font-semibold">
          &quot;Together, We Protect Humanity&quot;
        </p>
      </div>
    </footer>
  );
};

export default Footer;
