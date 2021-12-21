import MeetupDetail from "../../components/meetups/MeetupDetail"

const MeetupDetails = () => {

    return (
        <MeetupDetail 
        image = 'https://www.outthere.travel/wp-content/uploads/2016/09/Kyoto-Japan_Feat.jpg'
        description = 'This is a first meetup'
        title = 'First Meetup'
        address = 'Some Street 5, Some City'
         />
    )
}


export async function getStaticPaths(){
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId:'m1',
                },
            },
            {
                params: {
                    meetupId:'m2',
                },
            },
        ]
    }
}

export async function getStaticProps(context){
    //fetch data from a single meetup

    const meetupId = context.params.meetupId;

    console.log(context.params)

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


export default MeetupDetails
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
    
//     //fetch data from an API
    
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     };
// }