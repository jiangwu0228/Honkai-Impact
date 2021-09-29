import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title} Detail</title>
        <meta name="description" content={props.meetupData.bio} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        birthday={props.meetupData.birthday}
        bio={props.meetupData.bio}
      />
    </Fragment>
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://jiangwu0228:UKUj4Pgi5wTwktw@cluster0.yl0xg.mongodb.net/HonkaiImpact3?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("HonkaiImpact3");

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  const client = await MongoClient.connect(
    "mongodb+srv://jiangwu0228:UKUj4Pgi5wTwktw@cluster0.yl0xg.mongodb.net/HonkaiImpact3?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("HonkaiImpact3");

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.data.title,
        birthday: selectedMeetup.data.birthday,
        image: selectedMeetup.data.image,
        bio: selectedMeetup.data.bio,
      },
    },
  };
}
export default MeetupDetails;
