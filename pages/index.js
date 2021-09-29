import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
// import { useEffect, useState } from "react";

function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(() => {
  //     //send a http request and fatch data
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);
  return (
    <Fragment>
      <Head>
        <title>Honkai Impact</title>
        <meta name="description" content="kind of wiki of Honkai Impact" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   fatch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  //fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://jiangwu0228:UKUj4Pgi5wTwktw@cluster0.yl0xg.mongodb.net/HonkaiImpact3?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("HonkaiImpact3");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.data.title,
        birthday: meetup.data.birthday,
        image: meetup.data.image,
        bio: meetup.data.bio,
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
