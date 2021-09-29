import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://uploadstatic-sea.mihoyo.com/contentweb/20200814/2020081419354392790.png"
      title="Kiana·Kaslana"
      address="7/12/1998"
      bio="这就是……我的承诺。"
    />
  );
}
export async function getStaticPaths() {
    return {
      fallback: false,
      paths: [
        {
          params: {
            meetupId: 'm1',
          },
        },
        {
          params: {
            meetupId: 'm2',
          },
        },
      ],
    };
  }
  
  export async function getStaticProps(context) {
    // fetch data for a single meetup
  
    const meetupId = context.params.meetupId;
  
    console.log(meetupId);
  
    return {
      props: {
        meetupData: {
          id: meetupId,
          image:"https://uploadstatic-sea.mihoyo.com/contentweb/20200814/2020081419354392790.png",
          title:"Kiana·Kaslana",
          address:"7/12/1998",
          bio:"这就是……我的承诺。"
        },
      },
    };
  }
export default MeetupDetails;
