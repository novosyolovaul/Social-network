import React from "react";
import { connect } from "react-redux";
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from "./Components/common/Preloader/Preloader";
import ContentContainer from "./Components/Content/ContentContainer";
import Footer from "./Components/Footer/Footer";
import Friends from "./Components/Friends/Friends";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import MessageContainer from "./Components/Message/Message-container";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Sidebar from "./Components/Sidebar/Sidebar";
import UsersContainer from "./Components/Users/Users-container";
import { initiolizationThunk } from "./Redux/App-reducer";

class App extends React.Component {
  componentDidMount() {
    this.props.initiolizationThunk();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <HashRouter>
        <div className="wrapper">
          <HeaderContainer store={this.props.store} />
          <Sidebar />
          <div className="wrapper-page">
            <Routes>
              <Route path='/content/:userId' element={<ContentContainer
                store={this.props.store} />} />
              <Route path='/content' element={<ContentContainer />} />
              <Route path='/' element={<ContentContainer />} />
              <Route path='message/*' element={<MessageContainer
                store={this.props.store} />} />
              <Route path='/friends' element={<Friends />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<UsersContainer
                store={this.props.store} />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initiolizationThunk })(App);
