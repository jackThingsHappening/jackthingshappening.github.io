import { c as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderScript } from './astro/server_CzqnycT_.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$EmailSignup = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="ml-signup-form" action="https://assets.mailerlite.com/jsonp/930023/forms/120101421906396888/subscribe" method="post" class="flex flex-col sm:flex-row gap-2 mb-5"> <input type="text" name="fields[name]" placeholder="First name" autocomplete="given-name" class="border-2 border-logoDarkGreen rounded px-4 py-2 text-base w-full sm:w-auto focus:outline-none focus:border-black placeholder-logoDarkGreen"> <input type="email" name="fields[email]" placeholder="Email" autocomplete="email" required class="border-2 border-logoDarkGreen rounded px-4 py-2 text-base w-full sm:w-auto focus:outline-none focus:border-black placeholder-logoDarkGreen"> <input type="hidden" name="ml-submit" value="1"> <input type="hidden" name="anticsrf" value="true"> <button type="submit" class="bg-logoDarkGreen text-white rounded px-5 py-2 text-base font-semibold hover:opacity-80 transition-colors whitespace-nowrap">
Get Our Updates
</button> </form> <p id="ml-signup-msg" class="mt-2 text-xl hidden"></p> ${renderScript($$result, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/EmailSignup.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jack.burum/portfolio-of-small-bets/things_happening/src/components/EmailSignup.astro", void 0);

export { $$EmailSignup as $ };
