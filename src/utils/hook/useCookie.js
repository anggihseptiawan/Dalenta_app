const useCookie = () => {
	const userCookie = document.cookie;
	const findCookie = userCookie
		?.split(";")
		.find((cookie) => cookie.startsWith("DALENTA_USER"));

	let ourCookie;
	if (findCookie) {
		const strCookie = findCookie?.split("=")[1];
		ourCookie = JSON.parse(strCookie);
	}

	return ourCookie;
};

export default useCookie;
