/* eslint-disable import/extensions */
import initAccordion from "./modules/accordion.js";
import initTabMenu from "./modules/tabMenu.js";
import initSmoothScrolling from "./modules/smoothScrolling.js";
import initScrollAnimation from "./modules/scrollAnimation.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropown from "./modules/dropdown.js";
import initMenuMobile from "./modules/menuMobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initCreateAnimals from "./modules/animalsList.js";
import initBitcoin from "./modules/bitcoin.js";
import { SlideNav } from "./modules/slide.js";

initAccordion();
initTabMenu();
initSmoothScrolling();
initScrollAnimation();
initModal();
initTooltip();
initDropown();
initMenuMobile();
initFuncionamento();
initCreateAnimals();
initBitcoin();

const slide = new SlideNav(".slide", ".wrapper");
slide.init();
slide.addControl();
