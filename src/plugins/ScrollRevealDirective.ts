import scrollRevael from "scrollreveal";
import {config} from "@/config"

const sr = scrollRevael();



const ScrollRevealDirective = {
    mounted (el: any, binding: any) {
      const options: number[] = binding.value || [];
      console.log(options);
      sr.reveal(el.childNodes, config.srConfig(options[0], options[1]));
    },
    unmounted (el: any) {
      sr.clean(el.childNodes)
    }
  }
export default (app: any) => {
  app.directive('scroll-reveal', ScrollRevealDirective)
}
  