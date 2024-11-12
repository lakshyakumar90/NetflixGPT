import React, { useState } from 'react';

const LanguageButton = () => {
  const [language, setLanguage] = useState("English");

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="inline-block border text-base border-gray-300 rounded-full px-2 py-0">
      <select
        id="language-select"
        value={language}
        onChange={handleChange}
        className="appearance-none bg-transparent text-slate-200 px-3 py-1 pr-8 rounded-full focus:outline-none"
        style={{
          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2Jz4gPHBvbHlsaW5lIGZpbGw9JyM3MDcwNzAnIHBvaW50cz0nMCAyIDggMTAgMTYgMicvPiA8L3N2Zz4=')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 9px top 12px",
          backgroundSize: "12px",
        }}
      >
        <option className='text-black' value="English">English</option>
        <option className='text-black' value="Hindi">Hindi</option>
      </select>
    </div>
  );
};

export default LanguageButton;
