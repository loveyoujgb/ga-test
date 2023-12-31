import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(`${process.env.REACT_APP_GA_TRACKING_ID}`);
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  // ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Custom Title" });
};
