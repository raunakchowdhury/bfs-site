"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function App() {
	var buttonStyles = {
		position: "fixed",
		bottom: "2rem",
		right: "2rem",
		zIndex: 99
	};
	return React.createElement("div", null, React.createElement(About, null), React.createElement(Sponsors, null), React.createElement(Venue, null), React.createElement(Schedule, null), React.createElement(FAQs, null), React.createElement(Menu, null), React.createElement(Button, {
		style: buttonStyles,
		onClick: function onClick() {
			return window.open("https://hackathonbfs.typeform.com/to/fD5rzJ");
		}
	}, "Apply Now!"), React.createElement("br", null));
}

function Menu(props) {
	var tabs = [{
		anchor: "#about",
		title: "About"
	}, {
		anchor: "#sponsors",
		title: "Sponsors"
	}, {
		anchor: "#venue",
		title: "Venue"
	}, {
		anchor: "#schedule",
		title: "Schedule"
	}, {
		anchor: "#faqs",
		title: "FAQs"
	}];

	var _React$useState = React.useState(window.innerWidth > 850),
		_React$useState2 = _slicedToArray(_React$useState, 2),
		open = _React$useState2[0],
		setOpen = _React$useState2[1];

	var _React$useState3 = React.useState(""),
		_React$useState4 = _slicedToArray(_React$useState3, 2),
		currentTab = _React$useState4[0],
		setCurrentTab = _React$useState4[1];

	var scrollHandler = function scrollHandler(ev) {
		var prominentTab = "";
		tabs.forEach(function (tab) {
			var anchor = window.document.querySelector(tab.anchor);

			if (anchor) {
				var distanceTop = anchor.offsetTop - window.scrollY;
				if (distanceTop < 50) prominentTab = tab.anchor;
			}
		});
		if (prominentTab) setCurrentTab(prominentTab);
	};

	React.useEffect(function () {
		scrollHandler();
		window.addEventListener("scroll", scrollHandler);
		return function () {
			return window.removeEventListener("scroll", scrollHandler);
		};
	}, []);
	return React.createElement("div", {
		style: {
			zIndex: 99
		}
	}, React.createElement("div", {
		style: {
			height: "4rem",
			position: "fixed",
			right: open ? "9rem" : 0,
			top: "calc(50vh - 2rem)",
			backgroundColor: "var(--mdc-theme-primary)",
			color: "white",
			paddingTop: "1.2rem",
			borderRadius: "1rem 0 0 1rem",
			opacity: open ? 1 : 0.7,
			transition: "right 0.5s",
			cursor: "pointer"
		},
		onClick: function onClick() {
			return setOpen(!open);
		}
	}, React.createElement("i", {
		className: "material-icons",
		style: {
			height: "100%"
		}
	}, "keyboard_arrow_", open ? "right" : "left")), React.createElement("div", {
		style: {
			height: "15rem",
			width: "9rem",
			top: "calc(50vh - 7.5rem)",
			backgroundColor: "white",
			position: "fixed",
			right: open ? 0 : "-9rem",
			padding: "2rem",
			borderRadius: "1rem 0 0 1rem",
			border: "1px solid grey",
			borderRight: 0,
			transition: "right 0.5s"
		}
	}, tabs.map(function (tab) {
		return React.createElement(MenuItem, {
			tab: tab.anchor,
			active: currentTab === tab.anchor
		}, tab.title);
	})));
}

function MenuItem(_ref) {
	var tab = _ref.tab,
		active = _ref.active,
		children = _ref.children;
	return React.createElement("p", null, React.createElement("a", {
		href: tab,
		style: {
			color: active ? "var(--mdc-theme-primary)" : "grey"
		}
	}, React.createElement("b", null, children)));
}

function Button(_ref2) {
	var children = _ref2.children,
		style = _ref2.style,
		onClick = _ref2.onClick;
	var ref = React.createRef();
	React.useEffect(function () {
		if (window.mdc) window.mdc.ripple.MDCRipple.attachTo(ref.current);
	}, []);
	return React.createElement("button", {
		className: "mdc-button mdc-button--raised",
		style: style,
		ref: ref,
		onClick: onClick
	}, React.createElement("span", {
		className: "mdc-button__ripple"
	}), children);
}

function Container(_ref3) {
	var children = _ref3.children;
	return React.createElement("div", {
		className: ["content-container"]
	}, children);
}

function Title(_ref4) {
	var children = _ref4.children,
		center = _ref4.center;
	var styles = {
		fontFamily: "'Red Hat Display', sans-serif",
		color: "#4cbb85",
		fontSize: "2.5rem",
		fontWeight: 700,
		marginTop: "2rem",
		marginBottom: "1.5rem"
	};
	if (center) styles.textAlign = "center";
	return React.createElement("h2", {
		style: styles
	}, children);
}

function About() {
	return React.createElement(Container, null, React.createElement(Title, {
		center: true
	}, React.createElement("a", {
		className: "anchor",
		id: "about"
	}, "About")), React.createElement("p", null, "Blockchains4Hacks is one of the first introductory blockchain-focused hackathons open to high school and college students. For 24 hours, students will learn about ways to integrate blockchain into their applications, hacking away at challenges, and building applications that integrate those services. We plan to host workshops leading up to the hackathon, allowing participants to immerse themselves in blockchain before building their projects."), React.createElement("p", null, "In our continued commitment and support for diversity, we plan to offer travel reimbursements for students who are not located in NYC. We also plan to set funds aside specifically for hackers whose backgrounds are commonly underrepresented in the tech industry, in addition to low income students."), React.createElement("p", null, "Our hope is that students will walk away with a deeper knowledge of blockchain as well as firsthand experience on how to use the technology. We also hope that the projects created at this hackathon will blossom and continue even after B4H 2020 is over."));
}

function Grid(_ref5) {
	var children = _ref5.children;
	return React.createElement("div", {
		className: "mdc-layout-grid"
	}, React.createElement("div", {
		className: "mdc-layout-grid__inner"
	}, children));
}

function GridCell(_ref6) {
	var span = _ref6.span,
		spanTablet = _ref6.spanTablet,
		children = _ref6.children,
		style = _ref6.style,
		className = _ref6.className;
	var classes = ["mdc-layout-grid__cell--span-" + (span || 4)];
	if (className) classes.push.apply(classes, _toConsumableArray(className));
	if (spanTablet) classes.push("mdc-layout-grid__cell--span-".concat(spanTablet, "-tablet"));
	return React.createElement("div", {
		className: classes.join(" "),
		style: style
	}, children);
}

function SponsorCell(_ref7) {
	var alt = _ref7.alt,
		src = _ref7.src,
		span = _ref7.span,
		spanTablet = _ref7.spanTablet,
		url = _ref7.url,
		width = _ref7.width;
	var imageStyles = {
		maxWidth: "100%",
		width: width,
		height: "100%",
		objectFit: "contain",
		display: "block",
		marginLeft: "auto",
		marginRight: "auto"
	};
	var cellStyles = {
		height: "10rem"
	};
	if (!span) span = 3;
	if (!spanTablet) spanTablet = 4;
	return React.createElement(GridCell, {
		span: span,
		spanTablet: spanTablet,
		style: cellStyles
	}, React.createElement("img", {
		style: imageStyles,
		alt: alt,
		src: src,
		onClick: function onClick() {
			return window.open(url);
		}
	}));
}

function Sponsors() {
	return React.createElement(Container, null, React.createElement(Title, {
		center: true
	}, React.createElement("a", {
		className: "anchor",
		id: "sponsors"
	}, "Sponsors")), React.createElement(Grid, {
		style: ""
	}, React.createElement(SponsorCell, {
		alt: "Microsoft Logo",
		src: "/microsoft-branding.png",
		span: 6,
		spanTablet: 8,
		url: "https://www.microsoft.com",
		width: "24rem"
	}), React.createElement(SponsorCell, {
		alt: "Cryptonomic Logo",
		src: "/supporters/cryptonomic.png",
		span: 6,
		spanTablet: 8,
		url: "https://cryptonomic.tech/",
		width: "24rem"
	})), React.createElement(Grid, null, React.createElement(SponsorCell, {
		alt: "Ey Logo",
		src: "/supporters/ey.png",
		url: "https://www.ey.com/"
	}), React.createElement(SponsorCell, {
		alt: "Amazon Logo",
		src: "/supporters/amazon.png",
		url: "https://amazon.com",
		width: "11rem"
	}), React.createElement(SponsorCell, {
		alt: "Ethereum Logo",
		src: "/ethereum-branding.png",
		url: "https://ethereum.org",
		width: "9rem"
	}), React.createElement(SponsorCell, {
		alt: "Citi Logo",
		src: "/supporters/citi.png",
		url: "https://www.citigroup.com/citi/",
		width: "7rem"
	}), React.createElement(SponsorCell, {
		alt: "Gemini Logo",
		src: "/supporters/gemini.png",
		url: "https://gemini.com/",
		width: "9rem"
	}), React.createElement(SponsorCell, {
		alt: "Cisco Logo",
		src: "/supporters/cisco.png",
		url: "https://cisco.com/",
		width: "10rem"
	}), React.createElement(SponsorCell, {
		alt: "Trail of Bits Logo",
		src: "/supporters/trail-of-bits.png",
		url: "https://www.trailofbits.com/",
		width: "9rem"
	}), React.createElement(SponsorCell, {
		alt: "Kadena Logo",
		src: "/supporters/kadena.png",
		url: "https://www.kadena.io/",
		width: "9rem"
	})), React.createElement(Grid, null, React.createElement(GridCell, {
		span: 4,
		className: ["desktop-only"]
	}), React.createElement(SponsorCell, {
		alt: "Hack Club Bank Logo",
		src: "/hack-club-branding.png",
		url: "https://hackclub.com/bank/",
		width: "11rem",
		span: 4
	})), React.createElement(Title, {
		center: true
	}, "Travel Sponsors"), React.createElement(Grid, null, React.createElement(GridCell, {
		span: 2,
		className: ["desktop-only"]
	}), React.createElement(SponsorCell, {
		alt: "Ben Logo",
		url: "https://blockchainedu.org/",
		src: "/supporters/ben_square_logo.png",
		width: "9rem"
	}), React.createElement(SponsorCell, {
		alt: "Execute Big Logo",
		url: "https://executebig.org/",
		src: "/supporters/executebig.svg",
		width: "13rem"
	})), React.createElement("p", {
		className: "text-center"
	}, React.createElement("b", null, "If you are interested in sponsoring/partnering with us for the hackathon, please email us at ", React.createElement("a", {
		href: "mailto: hackathon@blockchainsforschools.org!"
	}, "hackathon@blockchainsforschools.org"))));
}

function Venue() {
	var venueImageStyles = {
		maxWidth: "100%",
		height: "100%",
		display: "block",
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: "1.5rem"
	};
	return React.createElement(Container, null, React.createElement(Title, {
		center: true
	}, React.createElement("a", {
		className: "anchor",
		id: "venue"
	}, "Venue")), React.createElement("p", null, React.createElement("b", null, "Our venue is located at Microsoft Times Square (11 Times Square, New York, NY 10036).")), React.createElement("p", null, "Located in the heart of NYC and right across from the Port Authority Bus Terminal and the Times Square MTA station, Microsoft Times Square offers a modern and well-equipped hacking space that is easily accessible from all corners of NYC. The commitment of Microsoft Reactor, the overlying organization, to hacker and developer culture as well as diversity and inclusivity cemented this as our choice as a venue to host the hackathon."), React.createElement(Grid, null, React.createElement(GridCell, {
		span: 6,
		spanTablet: 8,
		style: {
			height: "24rem"
		}
	}, React.createElement("img", {
		src: "/venue.jpg",
		style: venueImageStyles,
		alt: "Venue Picture"
	})), React.createElement(GridCell, {
		span: 6,
		spanTablet: 8,
		style: {
			height: "24rem"
		}
	}, React.createElement(VenueMap, null))));
}

function VenueMap() {
	return React.createElement("div", {
		id: "map-container",
		className: "z-depth-1-half map-container"
	}, React.createElement("iframe", {
		src: "https://maps.google.com/maps?q=microsoft%20times%20square&t=&z=13&ie=UTF8&iwloc=&output=embed",
		frameBorder: "0",
		allowFullScreen: true
	}));
}

function Schedule() {
	return React.createElement(Container, null, React.createElement(Title, {
		center: true
	}, React.createElement("a", {
		className: "anchor",
		id: "schedule"
	}, "Schedule")), React.createElement("p", {
		className: "text-center"
	}, "TBD! We will release the schedule closer to the hackathon date."));
}

function QuestionBox(_ref8) {
	var question = _ref8.question,
		answer = _ref8.answer;

	var _React$useState5 = React.useState(false),
		_React$useState6 = _slicedToArray(_React$useState5, 2),
		open = _React$useState6[0],
		setOpen = _React$useState6[1];

	var questionStyles = {
		border: "solid 1px grey",
		position: "relative",
		padding: "1rem",
		cursor: "pointer"
	};
	var iconStyles = {
		position: "absolute",
		right: "1rem"
	};
	var answerStyles = {
		transition: "height ease-in 1s",
		height: open ? "fit-content" : "0px",
		overflow: "hidden",
		border: "solid 1px grey",
		padding: open ? "1rem" : "unset"
	};
	return React.createElement("div", null, React.createElement("div", {
		style: questionStyles,
		onClick: function onClick() {
			return setOpen(!open);
		}
	}, React.createElement("a", null, React.createElement("b", null, question)), React.createElement("i", {
		style: iconStyles,
		className: "material-icons"
	}, "arrow_drop_", open ? "up" : "down")), React.createElement("p", {
		style: answerStyles
	}, answer));
}

function FAQs() {
	return React.createElement(Container, null, React.createElement(Title, {
		center: true
	}, React.createElement("a", {
		className: "anchor",
		id: "faqs"
	}, "FAQs")), React.createElement(QuestionBox, {
		question: "What is a hackathon?",
		answer: React.createElement("span", null, "A hackathon is a gathering where you can come together with other engineers, programmers, and cool people to turn your ideas into a real project in 24 hours. You take care of hacking, programming, creativity, and having a good time. We provide the venue, mentors, fun activities, speakers, workshops, food, friends, and almost everything you\u2019ll ever need. ")
	}), React.createElement(QuestionBox, {
		question: "Who can participate in B4H?",
		answer: React.createElement("span", null, "Anyone enrolled as a student can attend! (That includes both high school and college students!) Students with an interest in blockchain technology are highly encouraged to apply! Whether you\u2019re a beginner or experienced, this is the hackathon for you!", React.createElement("br", null), React.createElement("br", null), "If you\u2019re a beginner, don\u2019t worry! We have you covered (see below).")
	}), React.createElement(QuestionBox, {
		question: "What if I don\u2019t understand blockchain technology or know how to develop applications using it?",
		answer: React.createElement("span", null, "Don\u2019t worry! We will be having extended ", React.createElement("b", null, "3-hour workshops"), " at the start of the hackathon presented by our sponsors for students who don\u2019t understand blockchain. These workshops will walk through the technology, what it\u2019s used for, and how to develop with it! Additionally, professional blockchain software engineers will be onsite to assist with any questions you might have! All of our mentors will be professionals with experience in their field to ensure the best-quality advice and assistance.")
	}), React.createElement(QuestionBox, {
		question: "What are the hackathon challenges like?",
		answer: React.createElement("span", null, "There will be two categories of challenge \u2014 the General Challenges and the Sponsor Challenges. The General Challenges will be broken up into a High School and College circuit (high school teams participate in the High School circuit, and college teams participate in the College circuit); the Challenges for these include the Best Hack, Second Best Hack, etc. Note that to qualify for this Challenge, a team submission must use and elaborate on the blockchain component of their application. Up to $2,000 can be won from these Challenges!", React.createElement("br", null), React.createElement("br", null), "The Sponsor Challenges are challenges put forward by sponsors; usually these including using a sponsor\u2019s platform (e.g. Ethereum/Solidity) to solve problems in an industry vertical (verticals include fintech, healthcare, environmentalism, etc.). Up to $1,000 can be won from these Challenges! You can submit to as many challenges as you like.")
	}), React.createElement(QuestionBox, {
		question: "What if I don\u2019t have a team?",
		answer: React.createElement("span", null, "Don\u2019t worry! We\u2019ll host teambuilding sessions before the extended workshops start.", React.createElement("br", null), React.createElement("br", null), React.createElement("b", null, "Please note a college team is defined as a team with at least one (1) college student on it, and teams whose members are all high school students constitute as a high school team."))
	}), React.createElement(QuestionBox, {
		question: "What is the application deadline?",
		answer: React.createElement("span", null, "We actually have three application rounds: Early, Regular, and Late! Each one comes with its own perks (for example, all Early applicants are ", React.createElement("b", null, "guaranteed"), " to be reimbursed up to $50). The deadlines are below:", React.createElement("br", null), React.createElement("br", null), "Early: 3/29/20", React.createElement("br", null), "Regular: 4/26/20", React.createElement("br", null), "Late: 5/10/20")
	}), React.createElement(QuestionBox, {
		question: "How much does B4H cost?",
		answer: React.createElement("span", null, "Absolutely nothing on your end!  We provide food, swag, workspace, and WiFi for your entire 24 hours. Not only will we cover you for the weekend, ", React.createElement("b", null, "we can even help some people cover travel."), " That\u2019s right! Here at B4H we want to make things as accessible as possible for those who need it. For more info, see the FAQ below!")
	}), React.createElement(QuestionBox, {
		question: "Will you be offering travel reimbursements?",
		answer: React.createElement("span", null, React.createElement("b", null, "If you apply through Early, you qualify for up to $50 in travel reimbursement if you are outside of NYC!"), React.createElement("br", null), React.createElement("br", null), "Here at B4H, one of our missions is to support minorities in tech with their goals. While we can\u2019t guarantee reimbursements for everyone if you are applying through our Regular or Late round, we will be offering some reimbursements.  Please indicate that you need travel reimbursement in your application and answer the questions!", React.createElement("br", null), React.createElement("br", null), React.createElement("b", null, "For our other application rounds, we will be considering factors such as family income and demographic underrepresentation, so low income students or underrepresented minorities are especially encouraged to apply.  We will try to accommodate everyone with at least partial reimbursement if they are outside of the NYC area, subject to a sliding scale. "), React.createElement("br", null), React.createElement("br", null), "For high school students, we\u2019re happy to announce we\u2019ve partnered with ", React.createElement("b", null, "Execute Big"), " to provide travel reimbursements! Once you fill out the form and we determine you\u2019re eligible, your information be passed on to them for consideration (if you apply through Regular or Late)! If you are accepted, congratulations! You\u2019ll be covered at least in part by Execute Big. If you aren\u2019t accepted, you will then be considered for reimbursement by our team.", React.createElement("br", null), React.createElement("br", null), "For college students, you will be considered for reimbursement by our team. Stay tuned \u2014 we\u2019re working out a partnership for college student reimbursements as well!")
	}), React.createElement(QuestionBox, {
		question: "What should I bring?",
		answer: React.createElement("span", null, "Bring a photo ID, your laptop and charger, a change of clothes, toiletries, a sleeping bag/blanket, your hacker setup, and yourself!")
	}), React.createElement(QuestionBox, {
		question: "What if I don't have any coding or hacking experience?",
		answer: React.createElement("span", null, "B4H is here to help! During the hackathon, we have multiple workshops at the start of the hackathon, and professional mentors to help you throughout your stay. No prior experience is necessary! Not only do we want you to be able to build something incredible, we\u2019re preparing individuals without blockchain experience via our workshop sequences before our hackathon!")
	}), React.createElement(QuestionBox, {
		question: "Have more questions?",
		answer: React.createElement("span", null, "Email our extremely helpful team at ", React.createElement("a", {
			href: "mailto:hackathon@blockchainsforschools.org"
		}, "hackathon@blockchainsforschools.org"))
	}));
}

ReactDOM.render(React.createElement(App, null), document.getElementById("content"));
