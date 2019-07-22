import React from 'react';
import './App.css';
import PostList from './Components/PostList';
import BrandsList from './Components/BrandsList';
import NavBar from '../src/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import BrandDetails from './Components/BrandDetails';
import ChocolateDetails from '../src/Components/ChocolateDetails';
import Login from '../src/Authentication/Login';
import Register from './Authentication/Register';
import Header from '../src/Header/Header';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import SearchChocolate from './Components/SearchChocolate';
import HomeBeforeLogin from './Home/HomeBeforeLogin';
function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/chocolates" exact component={PostList} />
				<Route path="/brands" exact component={BrandsList} />
				<Route path="/login" exact component={Login} />
				<Route path="/Register" exact component={Register} />
				<Route path="/Home" exact component={Home} />
				<Route path="/" exact component={Login} />
				<Route path="/homeLogin" exact component={HomeBeforeLogin} />
				<Route path="/SearchChocolates" exact component={SearchChocolate} />
				<Route
					path="/brands/:id"
					exact
					render={(props) => {
						return <BrandDetails {...props} />;
					}}
				/>
				<Route
					path="/chocolates/:id"
					exact
					render={(props) => {
						return <ChocolateDetails {...props} />;
					}}
				/>
			</Switch>

			<Footer />
		</div>
	);
}

export default App;
