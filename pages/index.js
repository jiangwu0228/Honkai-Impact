import MeetUpList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Kiana·Kaslana",
    image:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20200814/2020081419354392790.png",
    address: "7/12/1998",
    bio: "这就是……我的承诺。",
  },
  {
    id: "m2",
    title: "Raiden·Mei",
    image:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20200611/2020061117364877748.png",
    address: "13/4/1997",
    bio: "雷光斩断过去，你我踏上歧路。我将坠入黑暗，换你回到光明。",
  },
  {
    id: "m3",
    title: "Bronya·Zaychik",
    image:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20210817/2021081719085641286.png",
    address: "18/8/2000",
    bio: "重装小兔，ride on.",
  },

  {
    id: "m4",
    title: "Murata·Himeko",
    image:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20200611/2020061117265038366.png",
    address: "13/4/1997",
    bio: "活下去，琪亚娜。这就是……最后一课了。",
  },
  {
    id: "m5",
    title: "Yae·Sakura",
    image:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20200814/2020081419365444877.png",
    address: "13/4/1997",
    bio: "人世皆攘攘，相对唯顷刻。",
  },
  {
    id: "m6",
    title: "Theresa·Apocalypse",
    image:
      "https://uploadstatic-sea.mihoyo.com/contentweb/20200703/2020070315564512870.png",
    address: "13/4/1997",
    bio: "向我朝拜吧，垃圾们！",
  },
];

function HomePage() {
  return <MeetUpList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
