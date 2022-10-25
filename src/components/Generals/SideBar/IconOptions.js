import React from 'react'
import {SideBarIcon} from './styles';
import {
  BrowserRouter as Router,
  Routes , Route, Link, BrowserRouter
} from "react-router-dom";
import { UserPage } from '../../Pages/User';
import { HomePage } from '../../Pages/Home';
import { routes } from '../../Utils/routes';
import { useNavigate } from "react-router-dom";

const IconOptions = ({Text, Icon, Active, path}) => {

  const navigate = useNavigate();

  function redirect(path) {
    navigate(path)
  }
  
  return (
    <SideBarIcon onClick={() => redirect(path)} className="test" Active={Active}>
      <Icon />
      <h2 >{Text}</h2>
    </SideBarIcon>
  )
}

export {IconOptions}
