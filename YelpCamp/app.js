const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
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

//세팅
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//use
//포스트로 보낸 값을 파싱함
app.use(express.urlencoded({extended:true}))
//메소드 오버라이딩
app.use(methodOverride('_method'));


app.get("/", (req, res) => {
  res.render("home");
});

app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});

//추가 파이지
app.get("/campgrounds/new", (req, res) => {
    //const campground = Campground.findById(req.params.id);
    res.render("campgrounds/new");
  });

//db에 추가
app.post('/campgrounds', async(req, res)=>{
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
})

//id로 페이지 뷰
app.get("/campgrounds/:id", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/show", { campground });
});

//에딧페이지 가져오기
app.get("/campgrounds/:id/edit", async (req, res)=>{
    const campground = await Campground.findById(req.params.id);
    res.render("campgrounds/edit", { campground });
})

//db 업데이트
app.put('/campgrounds/:id', async(req, res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground})
    res.redirect(`/campgrounds/${campground._id}`);
})

//삭제
app.delete('/campgrounds/:id', async(req, res)=>{
    const{id} = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds')
})


// app.get("/makecampground", async(req, res)=>{
//     const camp = new Campground({title:"My Backyard", description:"cheap camping!"})
//     await camp.save(0);
//     res.send(camp);
//  })

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
