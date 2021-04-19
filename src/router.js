import VueRouter from "vue-router";
import  turkbigor from "./components/turkbigor";
import  turkmidor from "./components/turkmidor";
import  turksmalor from "./components/turksmalor";
import Apples from "./components/apples.vue";
import Ukraine_golden from "./components/apples.vue";
import Ukraine_gala from "./components/apples.vue";
import Poland_golden from "./components/poland_apples.vue";
import Poland_kalvin from "./components/poland_apples.vue";
import Poland_Apples from "./components/poland_apples.vue";
import Spaine_oranges from "./components/spaine_oranges.vue";
import Spaine_middle from "./components/spaine_oranges.vue";
import Spaine_big from "./components/spaine_oranges.vue";
import Tunis_oranges from "./components/tunis_oranges.vue";
import Tunis_middle from "./components/tunis_oranges.vue";
import Tunis_small from "./components/tunis_oranges.vue";


export default new VueRouter({
  routes: [
    {
      path: "/turkbigor",
      component: turkbigor
    },
    {
      path: "/turkmidor",
      component: turkmidor
    },
    {
      path: "/turksmalor",
      component: turksmalor
    },
    { path: '/spaine_oranges/:id', component: Spaine_oranges,
      children: [
        { path: 'middle', component: Spaine_middle },
        { path: 'big', component: Spaine_big },
      ]
    },
    { path: '/tunis_oranges/:id', component: Tunis_oranges,
      children: [
        { path: 'middle', component: Tunis_middle },
        { path: 'small', component: Tunis_small },
      ]
    },
    { path: '/apples/:id', component: Apples,
      children: [
        { path: 'golden', component: Ukraine_golden },
        { path: 'gala', component: Ukraine_gala }
      ]
    },
       { path: '/poland_apples/:id', component: Poland_Apples,
      children: [
        { path: 'golden', component: Poland_golden },
        { path: 'kalvin', component: Poland_kalvin }
      ]
    },
  ]
});