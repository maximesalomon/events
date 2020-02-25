import { useRouter } from 'next/router'

const Events = () => {
    const router = useRouter()
    const { eventName } = router.query
  
    return <p>Event: {eventName}</p>
  }
  
  export default Events