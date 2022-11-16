import React, {useState} from 'react';
import {SideBarIcon} from './styles';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const IconOptions = ({pathRoute, Text, Icon, path}) => {

  const navigate = useNavigate();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (Text == pathRoute) {
      setActive(true);
    };
  }, []);

  function redirect(path) {
    navigate(path)
  }
  
  return (
    <SideBarIcon onClick={() => redirect(path)} className="test" Active={active}>
      <Icon />
      <h2 >{Text}</h2>
    </SideBarIcon>
  )
}

export {IconOptions}
