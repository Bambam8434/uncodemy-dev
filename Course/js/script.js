
var schema = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "",
  image: "https://uncodemy.com/wp-content/uploads/2021/07/Uncodemy-logo-07.png",
  description: "",
  brand: { "@type": "Brand", name: "Uncodemy" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "33,699",
    reviewCount: "33,699",
  },
};
function updateSchemaFields() {
  var { cityName: e, courseName: t } = extractCityAndCourseFromTitle(
      document.getElementsByTagName("title")[0].innerText,
    ),
    e =
      ((schema.name = t + " in " + e),
      (schema.description = `Uncodemy IT training institute offers the ${t} Course in ${e}, with a 100% Placement Record and practical training for Students and professionals. The course covers the complete curriculum from scratch to advance, providing job-oriented career opportunities. Enroll now and earn your Global Certificate in ${t} from Uncodemy.`),
      document.createElement("script")),
    t =
      ((e.type = "application/ld+json"),
      (e.textContent = JSON.stringify(schema, null, 2)),
      document.head || document.getElementsByTagName("head")[0]),
    o = t.querySelector('meta[name="saswp-custom-schema-markup-output"]');
  o ? t.insertBefore(e, o.nextSibling) : t.appendChild(e);
}
function extractCityAndCourseFromTitle(e) {
  var t;
  for (t of [" in ", " at ", " - "]) {
    var o,
      n = e.lastIndexOf(t);
    if (-1 !== n)
      return (
        (o = e.substring(0, n).trim()),
        { cityName: e.substring(n + t.length).trim(), courseName: o }
      );
  }
  return { cityName: "Unknown", courseName: "Unknown" };
}
updateSchemaFields();
for (
  var courseNames = document.getElementsByClassName("course-name"), i = 0;
  i < courseNames.length;
  i++
)
  addEventListenerToCourse(i);
function addEventListenerToCourse(o) {
  courseNames[o].addEventListener("click", function () {
    var e = document.getElementById("active"),
      t = document.getElementById("check"),
      e =
        (e && (e.removeAttribute("id"), t.removeAttribute("id")),
        document.getElementsByClassName("course-card-thumb")[o]),
      t = document.getElementsByClassName("course-name")[o];
    e.setAttribute("id", "active"),
      (e.parentElement.scrollTop = e.offsetTop),
      t.setAttribute("id", "check");
  });
}
const certificateRight = () => {
    var e = document.getElementsByClassName("certicate-image").length,
      t = document.querySelector(".certificate-right-box"),
      o = window.getComputedStyle(t),
      n = parseFloat(o.getPropertyValue("width")),
      o = o.getPropertyValue("left"),
      e = (e - 1) * n,
      o = Math.abs(parseFloat(o));
    t.style.left = e - 1 <= o ? "0px" : -o - n + "px";
  },
  certificateLeft = () => {
    var e = document.getElementsByClassName("certicate-image").length,
      t = document.querySelector(".certificate-right-box"),
      o = window.getComputedStyle(t),
      n = parseFloat(o.getPropertyValue("width")),
      o = o.getPropertyValue("left"),
      e = (e - 1) * n,
      o = Math.abs(parseFloat(o));
    t.style.left = o <= 1 ? -e + "px" : -o + n + "px";
  },
  movealumniright = () => {
    var e = document.getElementsByClassName("alumni-image-thumb").length,
      t = document.querySelector(".alumni-image-detail-section"),
      o = window.getComputedStyle(t).getPropertyValue("left"),
      n = t.clientWidth,
      e = (e - 1) * n,
      o = Math.abs(parseInt(o));
    t.style.left = e <= o ? "0px" : -o - n + "px";
  },
  movealumnileft = () => {
    var e = document.getElementsByClassName("alumni-image-thumb").length,
      t = document.querySelector(".alumni-image-detail-section"),
      o = window.getComputedStyle(t).getPropertyValue("left"),
      n = t.clientWidth,
      e = (e - 1) * n,
      o = Math.abs(parseInt(o));
    t.style.left = o <= 0 ? -e + "px" : -o + n + "px";
  },
  selector = "review-text",
  maxLength = 50;
let alumniInterval = null;
function expandText(e) {
  var t = document.getElementById("review-text-" + e),
    o = document.getElementsByClassName("show-hide")[e],
    e = document.getElementsByClassName("review-card")[e];
  "show more..." === o.innerText
    ? (o.innerText = "show less")
    : (o.innerText = "show more...");
  o = window.getComputedStyle(t).getPropertyValue("height");
  (t.style.height = "67px" === o ? t.scrollHeight + "px" : "67px"),
    e.classList.contains("expanded")
      ? ((e.style.height = "200px"), e.classList.remove("expanded"))
      : ((e.style.height = "auto"), e.classList.add("expanded"));
}
(window.onload = function () {

  var e = document.createElement("meta");
  (e.httpEquiv = "X-UA-Compatible"),
    (e.content = "IE=edge"),
    (e.innerText = "hello this is meta"),
    document.getElementsByTagName("head")[0].appendChild(e),
    document
      .querySelectorAll(".learner-number .digit")
      .forEach(function (e, t) {
     
          (e.style.animation = "fallingEffect 1s ease-in-out"),
          (e.style.animationFillMode = "forwards"),
          (e.style.animationDelay = 0.1 * (t + 1) + "s");
      });
  var t = new IntersectionObserver(
      function (e, o) {
       
          e.forEach(function (e, t) {
            e.isIntersecting &&
              (setTimeout(
                function () {
                  e.target.classList.add("falling-effect");
                },
                200 * (t + 1),
              ),
              o.unobserve(e.target));
          });
      },
      { threshold: 0.5 },
    ),
    e = document.querySelectorAll(".awards-thumb"),
    o = document.querySelectorAll(".scaler-reciper-card"),
    n = document.querySelectorAll(".review-card");
  e.forEach(function (e) {
    t.observe(e);
  }),
    o.forEach(function (e) {
      t.observe(e);
    }),
    n.forEach(function (e) {
      t.observe(e);
    }),
    (alumniInterval = setInterval(() => {
      var e = document.getElementsByClassName("alumni-image-thumb").length,
        t = document.querySelector(".alumni-image-detail-section"),
        o = window.getComputedStyle(t).getPropertyValue("left"),
        n = t.clientWidth,
        e = (e - 1) * n,
        o = Math.abs(parseInt(o)),
        t =
          ((t.style.left = e <= o ? "0px" : -o - n + "px"),
          document.getElementsByClassName("certicate-image").length),
        e = document.querySelector(".certificate-right-box"),
        o = window.getComputedStyle(e),
        n = parseFloat(o.getPropertyValue("width")),
        o = o.getPropertyValue("left"),
        t = (t - 1) * n,
        o = Math.abs(parseFloat(o));
      e.style.left = t - 1 <= o ? "0px" : -o - n + "px";
    }, 5e3));
}),
  document.addEventListener("DOMContentLoaded", function () {

    const t = document.getElementById("footer-section");
   
      document.body.clientHeight,
      window.innerHeight;

      fetch("/footer.html")
        .then((e) => e.text())
        .then((e) => {
          t.innerHTML = e;
        })
        .catch((e) => {
          console.error(e);
        });
    const o = document.getElementById("main-nav");

      document.body.clientHeight,
      window.innerHeight;

      fetch("/navbar.html")
        .then((e) => e.text())
        .then((e) => {
          o.innerHTML = e;
          let t = document.getElementsByClassName("course-name-dropdown");
       
          for (let e = 0; e < t.length; e++)
        
              !(function (o) {
                t[o].addEventListener("click", function () {
      
                  var e = document.getElementById("active-dropdown-course"),
                    t = document.getElementById("active-course");
                  e && (e.removeAttribute("id"), t.removeAttribute("id")),
                    document
                      .getElementsByClassName("course-name-dropdown")
                      [o].setAttribute("id", "active-dropdown-course"),
                    document
                      .getElementsByClassName("course-image-text")
                      [o].setAttribute("id", "active-course");
                });
              })(e);
        })
        .catch((e) => {
          console.error(e);
        });
  });
let popUpFormValue = {
  name: "",
  mobile: "",
  email: "",
  course: "",
  date: "",
  fromTime: "",
  toTime: "",
};
function setPopUpFormValue(e, t) {
  var o, n, a;

    ("fromTime" !== e && "toTime" !== e) ||
      (12 < (a = (o = t.split(":"))[0])
        ? ((n = "PM"), (a -= 12) < 10 && (a = "0" + a))
        : a < 12
          ? ((n = "AM"), 0 == a && (a = 12))
          : (n = "PM"),
      (t = a + ` : ${o[1]} ` + n)),
    (popUpFormValue[e] = t)
  
}
function showDropDown(e) {
  var t = document.getElementsByClassName("dropdown")[0],
    o = document.getElementsByClassName("dropdown")[1],
    n = window.getComputedStyle(t).getPropertyValue("display"),
    a = window.getComputedStyle(o).getPropertyValue("display");

    0 === e
      ? "none" === n
        ? (window.innerWidth <= 780
            ? (t.style.display = "flex")
            : (t.style.display = "block"),
          (document.getElementById("course-text").style.color = "#ff5421"),
          (o.style.display = "none"))
        : ((t.style.display = "none"),
          (document.getElementById("course-text").style.color = "black"))
      : 1 === e &&
        ("none" === a
          ? (window.innerWidth <= 780
              ? (o.style.display = "flex")
              : (o.style.display = "block"),
            (document.getElementById("course-text").style.color = "#ff5421"),
            (t.style.display = "none"))
          : ((o.style.display = "none"),
            (document.getElementById("course-text").style.color = "black")));
}
function showNavigation() {
  var e = document.querySelector(".navigation-container");
  "none" === window.getComputedStyle(e).display
    ? ((e.style.display = "block"), (document.body.style.overflow = "hidden"))
    : ((e.style.display = "none"), (document.body.style.overflow = "auto"));
}
function showVideo(e) {
  var t = document.querySelector("iframe"),
    t =
      (console.log("url =", e, t),
      (t.src = "" + e),
      document.getElementById("videoContainer"));
  (document.getElementById("videoContainer").style.display = "block"),
    (t.style.animation = "fallingEffect .5s ease-in-out"),
    (t.style.animationFillMode = "forwards"),
    (document.body.style.overflow = "hidden"),
    (document.getElementById("overlay").style.display = "block");
}
function hideVideo() {
  (document.getElementById("videoContainer").style.display = "none"),
    (document.body.style.overflow = "auto"),
    (document.getElementById("overlay").style.display = "none"),
    (document.querySelector("iframe").src = "");
}
let formValue = {
  name: "",
  email: "",
  mobile: "",
  location: "",
  course: "",
  mode: "",
};
function setFormValue(e, t) {
  formValue[e] = t;
}
function numberOnly() {
  var e = document.getElementById("mobile-input");
  (e.value = e.value.replace(/[^0-9]/gi, "")),
    e.value.length < 10
      ? e.setCustomValidity("Phone number must have at least 10 digits.")
      : e.setCustomValidity("");
}
let downloadStatus = !1,
  pdfUrl,
  allPdf = {
    DataAnalyticsBtn: "/pdf/Data-Science.pdf",
    DataScienceBtn: "/pdf/DSA_Book.pdf",
    FullStackBtn: "/pdf/DSA_Book.pdf",
    SoftwareTestingBtn: "/pdf/DSA_Book.pdf",
    DigitalMarketingBtn: "/pdf/DSA_Book.pdf",
    PythonBtn: "/pdf/DSA_Book.pdf",
    ArtficialIntelligenceBtn: "/pdf/DSA_Book.pdf",
    AwsBtn: "/pdf/DSA_Book.pdf",
    JavaBtn: "/pdf/DSA_Book.pdf",
    BusinessAnalyticsBtn: "/pdf/DSA_Book.pdf",
    MachineLearningBtn: "/pdf/DSA_Book.pdf",
    AutomationTestingBtn: "/pdf/DSA_Book.pdf",
    DevOpsBtn: "/pdf/DSA_Book.pdf",
    ManualTestingBtn: "/pdf/DSA_Book.pdf",
    DataAnalyticsPythonBtn: "/pdf/DSA_Book.pdf",
    ReactBtn: "/pdf/DSA_Book.pdf",
    FullStackNodeBtn: "/pdf/DSA_Book.pdf",
    MeanBtn: "/pdf/DSA_Book.pdf",
    MernBtn: "/pdf/DSA_Book.pdf",
    AngularBtn: "/pdf/DSA_Book.pdf",
    AIPythonBtn: "/pdf/DSA_Book.pdf",
    MachineLearningPythonBtn: "/pdf/DSA_Book.pdf",
    JavaReactBtn: "/pdf/DSA_Book.pdf",
    WebDesignBtn: "/pdf/DSA_Book.pdf",
    ISTQBBtn: "/pdf/DSA_Book.pdf",
    UIBtn: "/pdf/DSA_Book.pdf",
  };
function setDownload(e) {
  (downloadStatus = !0),
    (pdfUrl = allPdf[e])
}
async function submitForm(e) {
  e.preventDefault();
  e = new FormData();
  e.append("name", formValue.name),
    e.append("email", formValue.email),
    e.append("mobile", formValue.mobile),
    e.append("location", formValue.location);
  try {
    var t = await axios.post("http://localhost/formSubmitUncodemyIn.php", e);

      1 === t.data
        ? ((document.getElementById("form-parent").style.display = "none"),
          (document.body.style.overflow = "auto"),
          (document.getElementById("overlay").style.display = "none"),
          document.getElementById("form").reset(),
          !0 === downloadStatus
            ? (window.open(pdfUrl, "_blank"),
             
              (downloadStatus = !1))
            : Swal.fire({
                icon: "success",
                title: "Congratulation!",
                html: 'You are one step closer to have a <span style="color:#ff5124">Career Session</span> with our Experts. Our Team will connect you soon with Detail Information',
                showConfirmButton: !1,
                timer: 8e3,
              }))
        : alert("sorry some error is occured");
  } catch (e) {
  
      alert("sorry server issue occured please try again", e.message);
  }
}
async function submitPopUpForm(e) {
  e.preventDefault();
  e = new FormData();
  e.append("name", popUpFormValue.name),
    e.append("email", popUpFormValue.email),
    e.append("mobile", popUpFormValue.mobile),
    e.append("course", popUpFormValue.course),
    e.append("date", popUpFormValue.date),
    e.append("fromTime", popUpFormValue.fromTime),
    e.append("toTime", popUpFormValue.toTime);
  try {
    var t = await axios.post("http://localhost/DemoDetailForm.php", e);
    
      1 === t.data
        ? ((document.querySelector(".pop-up-form-container").style.display =
            "none"),
          (document.body.style.overflow = "auto"),
          (document.getElementById("overlay").style.display = "none"),
          Swal.fire({
            icon: "success",
            title: "Congratulation!",
            html: 'You Queries have been booked for the <span style="color:#ff5124">Demo Session</span> with our Experts. Our Team will connect you soon with Detail Information',
            showConfirmButton: !1,
            timer: 8e3,
          }))
        : alert("sorry some error is occured");
  } catch (e) {
  
      alert("sorry server issue occured please try again");
  }
}
window.onscroll = () => {
  var e = document.documentElement.scrollTop,
    t = document.querySelector(".nav-container"),
    o = document.querySelector(".page-navigation"),
    n = document.querySelector(".nav-top-head");
  e >= document.querySelector(".course-banner").scrollHeight
    ? ((o.style.display = "block"),
      (n.style.display = "none"),
      (t.style.display = "none"))
    : ((o.style.display = "none"),
      900 < window.innerWidth
        ? ((n.style.display = "flex"), (t.style.display = "flex"))
        : ((t.style.display = "flex"),
          (n.style.display = "inline-block"),
          (n.style.justifyContent = "flex-end")));
};
let pageNavigation = document.getElementsByClassName("page-navigation-btn");
const nav = document.querySelector(".nav-section");
let navScollAt = document.getElementsByClassName("navScollAt");
for (let e = 0; e < pageNavigation.length; e++) addNavigationEffect(e);
function addNavigationEffect(t) {
  pageNavigation[t].addEventListener("click", function () {
    console.log("page navigation"), navScollAt[t].scrollIntoView();
    var e = document.getElementById("active-page-navigation");
    e && e.removeAttribute("id"),
      pageNavigation[t].setAttribute("id", "active-page-navigation");
  });
}
function handleIntersection(e, t) {
  e.forEach((e) => {
    var t = e.target;
    e.isIntersecting
      ? t.hasAttribute("data-played")
        ? t.play()
        : (t.play(), t.setAttribute("data-played", "true"))
      : t.pause();
  });
}
$(document).ready(function () {
  $(".read").click(function () {
    $(this).prev(".more").toggle(),
      $(this).siblings(".dots").toggle(),
      "Read more" === $(this).text()
        ? $(this).text("Read less")
        : $(this).text("Read more");
  });
});
const options = { root: null, rootMargin: "0px", threshold: 0.5, once: !0 },
  observer = new IntersectionObserver(handleIntersection, options),
  video = document.querySelector(".why");
function toggleHiddenContent() {
  var e = document.getElementById("dots"),
    t = document.getElementById("more"),
    o = document.getElementById("readMoreBtn");
  "none" === e.style.display
    ? ((e.style.display = "inline"),
      (t.style.display = "none"),
      (o.innerHTML = "Read More"))
    : ((e.style.display = "none"),
      (t.style.display = "inline"),
      (o.innerHTML = "Read Less"));
}
observer.observe(video),
  window.addEventListener("beforeunload", function () {
    video.paused || video.pause();
  });
