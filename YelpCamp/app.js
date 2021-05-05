const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const Joi = require('joi');
const {campgroundSchema} = require("./schemas.js")
const catchAsync = require("./utils/catchAsync");
const ExpressError = require('./utils/ExpressError');
const methodOverride = require("method-override");
const Campground = require("./models/campground");
const { request } = require("http");

//몽구스 연결
mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//db연결 확인
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();

//익스프레스세팅
//ejsmate
app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//use
//포스트로 보낸 값을 파싱함
app.use(express.urlencoded({ extended: true }));
//메소드 오버라이딩
app.use(methodOverride("_method"));

//joi 유효성, 모든 라우트에 쓸 것이 아니므로 use 미사용함
const validateCampground = (req, res, next)=>{
  const {error} = campgroundSchema.validate(req.body)
  if(error){
    const msg = error.details.map(el => el.message).join(',')
    throw new ExpressError(msg, 400)
  } else {
    next()
  }
}



app.get("/", (req, res) => {
  res.render("home");
});

//인덱스
app.get(
  "/campgrounds",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render("campgrounds/index", { campgrounds });
  })
);

//추가 페이지
app.get("/campgrounds/new", (req, res) => {
  //const campground = Campground.findById(req.params.id);
  res.render("campgrounds/new");
});

//db에 추가
app.post(
  "/campgrounds",
  //위에서 정의한 joi
  validateCampground, catchAsync(async (req, res) => {
    //폼이 비어있을 경우 에러 던짐
   // if(!req.body.campground) throw new ExpressError('Invalid Campground Data', 400)
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

//id로 페이지 뷰
app.get(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render("campgrounds/show", { campground });
  })
);

//에딧페이지 가져오기
app.get(
  "/campgrounds/:id/edit",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render("campgrounds/edit", { campground });
  })
);

//db 업데이트
app.put(
  "/campgrounds/:id",
  validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    });
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

//삭제
app.delete(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect("/campgrounds");
  })
);

app.all('*', (req, res, next)=>{
  next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
  const {statusCode = 500} = err;
  if(!err.message) err.message = 'Oh No Something Went Wrong!'
  res.status(statusCode).render('error', {err});
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
