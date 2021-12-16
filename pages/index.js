import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://www.outthere.travel/wp-content/uploads/2016/09/Kyoto-Japan_Feat.jpg',
        address: 'Some address 5, 12345 Kyoto',
        description: 'This is a meetup in Kyoto to experience all of the beauty that Kyoto has to offer!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://via.placeholder.com/500',
        address: 'Some address 5, 12345 Kyoto',
        description: 'This is a meetup in Tokyo to experience all of the beauty that Kyoto has to offer!'
    },

]


const Index = (props) => {

    return (
        
        <MeetupList meetups={props.meetups}/>
    )
}

export async function getStaticProps(){
    //fetch data from an API
    return {
        props:{
            meetups: DUMMY_MEETUPS
        },

        revalidate: 3600
    };
}

export default Index