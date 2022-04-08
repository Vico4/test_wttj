
function JobDetails({description, profile, process, salary}) {

    
    return(
        <>
        <div dangerouslySetInnerHTML={{__html: description}}></div>
        <div dangerouslySetInnerHTML={{__html: profile}}></div>
        <div dangerouslySetInnerHTML={{__html: process}}></div>
        <div>{salary.min && salary.min}</div>
        </>
    )
}

export default JobDetails