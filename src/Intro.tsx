import { useEffect } from "react";
import { mountIntro } from "./intro-animation";
import "./intro-animation.css";

const INTRO_KEY = "aspraz-intro-seen-v2";

export default function Intro() {
  useEffect(() => {
    if (sessionStorage.getItem(INTRO_KEY)) return;

    const overlay = document.createElement("div");
    overlay.id = "aspraz-intro";
    document.body.appendChild(overlay);
    const cleanup = mountIntro(overlay, () => sessionStorage.setItem(INTRO_KEY, "1"));

    return () => {
      cleanup();
      overlay.remove();
    };
  }, []);

  return null;
}

