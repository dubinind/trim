let project_folder="dist";
let source_folder="#source";

let path={
  build:{
    html: project_folder+"/",
    css: project_folder +"/css/",
    js: project_folder +"/js/",
    img: project_folder +"/img/",
    fonts: project_folder +"/fonts/",
  },
  source: {
    html: source_folder+"/",
    css: source_folder +"/scss/style.scss",
    js: source_folder +"/js/scripte.js",
    img: source_folder +"/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: source_folder +"/fonts/*.ttf",
  },
  watch: {
    html: source_folder+"/**/*.html",
    css: source_folder +"/scss/**/*.scss",
    js: source_folder +"/js/**.*.js",
    img: source_folder +"/img/**/*.{jpg,png,svg,gif,ico,webp}",
  },
  clean: "./" + project_folder + "/"
}

let { source, dest } = require('gulp'),
    gulp = require('gulp'), 
