import { Button } from "@welcome-ui/button"
import JobInfos from "./JobInfos"

function JobDetails(props) {

    return(
        <>
        <JobInfos {...props}/>
        <div dangerouslySetInnerHTML={{__html: props.description}}></div>
        <div dangerouslySetInnerHTML={{__html: props.profile}}></div>
      {/*   <div dangerouslySetInnerHTML={{__html: props.}}></div>
        <div>{salary.min && salary.min}</div> */}
        <Button as="a" href={props.url} target="_blank"> Apply </Button>
        </>
    )
}

export default JobDetails