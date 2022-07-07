import React, { useEffect } from 'react';

export default function Linkedin() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };

  }, []);

  return (
    <div>
      <div
        className="badge-base LI-profile-badge"
        data-locale="pt_BR"
        data-size="medium"
        data-theme="dark"
        data-type="HORIZONTAL"
        data-vanity="lucasbitencourt"
        data-version="v1"
      >
       <a
          className="badge-base__link LI-simple-link"
          href="https://br.linkedin.com/in/lucasbitencourt?trk=profile-badge"
        >.</a>
      </div>
    </div>
  );
}