import React from 'react';
import './Animal.css';
let yes = document.querySelectorAll('.yes');
let no = document.querySelectorAll('.no');

class Animals extends React.Component {

	isClicked() {
		// if (true) {
		// 	yes.classList.add('show-yes');
		// } else {
		// 	no.classList.add('show-no');
		// }
	}

addListYes() {
	document.querySelector(".yes").classList.add('show-yes')
}

addListNo() {
	document.querySelector(".no").classList.add('show-no')
}
// addList() {
// 	document.querySelector(".yes").classList.add('show-yes')



// 	}

	render() {
		let animals = this.props.animals.animals;
		let randomAnimal = animals[Math.floor(Math.random() * animals.length)];
		console.log('random animal', randomAnimal);
		let yes = document.querySelectorAll('.flex-animal.yes');
		let yeses = document.querySelector('.yes');

		let animalEx = document.getElementsByClassName('flex-animal yes')
		console.log('animalEx', animalEx, 'yes', yes, 'yeses', yeses)
		console.log(yes)

		if (!randomAnimal) return null;

		return (
			<div>
				<div>
					<div className="flex-instructions animal-hed">
					<p><span>Animal</span>
						<br />
						Is it bigger than a breadbox? </p>
{/* <strong>{String(randomAnimal.breadbox)}</strong> */}

					</div>
					<div className="animal-container">
						<div className="flex-animal yes">
							<h1>
								<ul>
									<span>yes</span>
									<li className="alive">Is it alive?</li>
									<li className="extinct">Is it extinct?</li>
									<li className="mammal">Is it a mammal?</li>
									<li className="amphibian">Is it an amphibian?</li>
									<li className="arms">Does it have arms?</li>
									<li className="legs">Does it have legs?</li>
									<li className="fly">Does it fly?</li>
									<li className="livesInWater">Does it live in water?</li>
									<li className="fur">Does it have fur?</li>
									<li className="famous">Is it famous?</li>
									<li className="male">Is it male?</li>
									<li className="actor">Is it an actor?</li>
									<li className="athelete">Is it an athelete?</li>
									<li className="musician">Is it a musician?</li>
									<li className="politician">Is it a politician?</li>
									<li className="singer">Is it a singer?</li>
									<li className="awardWinner">Is it an award winner?</li>
									<li className="ageAbove40">Is it more than 40 years old?</li>
								</ul>
							</h1>
						</div>
						<div className="flex-animal question">
						<span></span>
							<h1>
								{/* <hr /> */}
								<ul>
									<h3>{String(randomAnimal.breadbox)}</h3>
									<li className="alive" >Is it alive?</li>
									<li className="extinct" onClick={() => console.log("extinct clicked!")}>Is it extinct?</li>
									<li className="mammal" a href="#" onClick={randomAnimal.mammal === true ? this.addListYes : null} >Is it a mammal?</li>
									<li className="amphibian" onClick={() => console.log("amphibian clicked!", this.props)}>Is it an amphibian?</li>
									<li className="arms" onClick={() => console.log("arms clicked!", randomAnimal.arms)} >Does it have arms?</li>
									<li className="legs" onClick={() => this.isClicked(randomAnimal.legs)}>Does it have legs?</li>
									<li className="fly" >Does it fly?</li>
									<li className="livesInWater" >Does it live in water?</li>
									<li className="fur" >Does it have fur?</li>

									<li className="famous" a href="#" onClick={randomAnimal.famous === true ? this.addListYes : this.addListNo}>Is it famous?</li>
									<li className="male" onClick={() => randomAnimal.male}>Is it male?</li>
									<li className="actor" onClick={randomAnimal.actor === true ? this.addListYes : this.addListNo}>Is it an actor?</li>
									<li className="athelete" onClick={randomAnimal.athelete === true ? this.addList : null}>Is it an athelete?</li>
									<li className="musician" a href="#" onClick={randomAnimal.musician === true ? this.addListYes : this.addListNo}>Is it a musician?</li>
									<li className="politician">Is it a politician?</li>
									<li className="singer">Is it a singer?</li>
									<li className="awardWinner">Is it an award winner?</li>
									<li className="ageAbove40">Is it more than 40 years old?</li>
								</ul>
							</h1>
							{console.log(randomAnimal)}
						</div>
						<div className="flex-animal no">
							<h1>
								<ul>
						<span>no</span>
								<li className="alive">Is it alive?</li>
								<li className="extinct">Is it extinct?</li>
								<li className="mammal">Is it a mammal?</li>
								<li className="amphibian">Is it an amphibian?</li>
								<li className="arms">Does it have arms?</li>
								<li className="legs">Does it have legs?</li>
								<li className="fly">Does it fly?</li>
								<li className="livesInWater">Does it live in water?</li>
								<li className="fur">Does it have fur?</li>
								<li className="famous">Is it famous?</li>
								<li className="male">Is it male?</li>
								<li className="actor">Is it an actor?</li>
								<li className="athelete">Is it an athelete?</li>
								<li className="musician">Is it a musician?</li>
								<li className="politician">Is it a politician?</li>
								<li className="singer">Is it a singer?</li>
								<li className="awardWinner">Is it an award winner?</li>
									<li className="ageAbove40">Is it more than 40 years old?</li>
									</ul>
							</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Animals;
// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }
