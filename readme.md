Santa  
import React, { useState } from "react";

const AvatarPicker = () => {
  const [selectedAvatar, setSelectedAvatar] = useState("");

  const handleAvatarSelection = (event) => {
    setSelectedAvatar(event.target.src);
  };

  const handleFileUpload = (event) => {
    setSelectedAvatar(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <h2>Choose your avatar:</h2>
      <div>
        <img
          src="/img/avatar1.png"
          onClick={handleAvatarSelection}
          alt="Avatar 1"
        />
        <img
          src="/img/avatar2.png"
          onClick={handleAvatarSelection}
          alt="Avatar 2"
        />
        <img
          src="/img/avatar3.png"
          onClick={handleAvatarSelection}
          alt="Avatar 3"
        />
        <img
          src="/img/avatar4.png"
          onClick={handleAvatarSelection}
          alt="Avatar 4"
        />
      </div>
      <div>
        <h3>Or upload your own:</h3>
        
      </div>
      <SelectedAvatar avatar={selectedAvatar} />
    </div>
  );
};

const SelectedAvatar = ({ avatar }) => {
  return (
    <div>
      {avatar && (
        <div>
          <h3>Selected Avatar:</h3>
          <img src={avatar} alt="Selected Avatar" />
        </div>
      )}
    </div>
  );
};

export default AvatarPicker;