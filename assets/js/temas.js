$(document).ready(function(){function o(){$("#collapseHipotecario").collapse("show")}function e(){$("#collapseCivil").collapse("show")}function c(){$("#collapseMercantil").collapse("show")}function a(){$("#collapseFamiliar").collapse("show")}function n(){$("#collapsePenal").collapse("show")}$("a.nav-link[data-toggle=collapse]").on("click",function(l){$(".collapse").collapse("hide")}),$("#navHipotecario").on("click",function(l){$(".collapse").collapse("hide"),setTimeout(o,400)}),$("#navCivil").on("click",function(l){l.preventDefault(),$(".collapse").collapse("hide"),setTimeout(e,400)}),$("#navMercantil").on("click",function(l){l.preventDefault(),$(".collapse").collapse("hide"),setTimeout(c,400)}),$("#navFamiliar").on("click",function(l){l.preventDefault(),$(".collapse").collapse("hide"),setTimeout(a,400)}),$("#navPenal").on("click",function(l){l.preventDefault(),$(".collapse").collapse("hide"),setTimeout(n,400)}),$(window.location.hash).collapse("show")});