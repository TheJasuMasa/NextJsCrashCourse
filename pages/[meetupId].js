import MeetupDetail from "../components/meetups/MeetupDetail"

const MeetupDetails = () => {

    return (
        <MeetupDetail 
        image = {props.meetupData.image}
        description = {props.meetupData.description}
        title = {props.meetupData.title}
        address = {props.meetupData.address}
         />
    )
}

export default MeetupDetails

export async function getStaticProps(context){
    //fetch data from a single meetup

    const meetupId = context.params.meetupId;
    return {
        props:{
            meetupData: {
                id: meetupId,
                image: 'https://www.outthere.travel/wp-content/uploads/2016/09/Kyoto-Japan_Feat.jpg',
                address : 'Some Street 5, Some City',
                description: 'This is a first meetup',
                title : 'First Meetup'
            }
        },

        revalidate: 3600
    };
}