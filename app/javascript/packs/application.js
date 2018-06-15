import "bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss'
import 'slick-carousel/slick/slick-theme.scss'
AOS.init();

import { initUpdateNavbarOnScroll } from '../components/navbar';
import '../components/scroll';
initUpdateNavbarOnScroll();

import '../components/slick';
import '../components/projects';
