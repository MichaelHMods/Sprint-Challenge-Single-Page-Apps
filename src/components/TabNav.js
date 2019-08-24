
import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import EpisodeList from './EpisodeList';
import CharactersList from './CharacterList';
import LocationList from './LocationsList';


const panes = [
  { menuItem: 'Home', render: () => <Tab.Pane><WelcomePage/></Tab.Pane> },
  { menuItem: 'Character', render: () => <Tab.Pane><CharactersList/></Tab.Pane> },
  { menuItem: 'Location', render: () => <Tab.Pane><LocationList/></Tab.Pane> },
  { menuItem: 'Episode', render: () => <Tab.Pane><EpisodeList/></Tab.Pane> },
]

const TabNav = () => <Tab panes={panes} />
// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default TabNav;